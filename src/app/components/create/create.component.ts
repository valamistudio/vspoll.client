import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { pairwise, startWith, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  private emptyOptions = 0;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      options: formBuilder.array([])
    });
  }

  ngOnInit() {
    this.addOption();
  }

  get options(): FormArray {
    return this.form.get('options') as FormArray;
  }

  addOption() {
    const control = new FormControl('');
    control.valueChanges.pipe(
      startWith(''),
      pairwise()
    ).subscribe(([prev, next]) => {
      if (!next) {
        const lastIndex = this.options.length - 1;
        const lastValue = this.options.at(lastIndex).value;
        if (!lastValue) {
          this.options.removeAt(lastIndex);
        } else {
          this.emptyOptions++;
        }
      } else if (!prev) {
        this.emptyOptions--;

        if (this.emptyOptions === 0) {
          this.addOption();
        }
      }
    });
    this.options.push(control);
    this.emptyOptions++;
  }

  onOptionBlur(i: number) {
    const optionsCount = this.options.length;
    if (optionsCount > 1) {
      const option = this.options.at(i);
      if (!option.value) {
        if (i < optionsCount - 1) {
          this.options.removeAt(i);
        }
        if (this.emptyOptions === 0) {
          this.addOption();
        }
      }
    }
  }
}
