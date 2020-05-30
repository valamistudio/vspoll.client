import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { pairwise, startWith } from 'rxjs/operators';
import { PollService } from 'src/app/services/poll.service';
import { ValidationService } from 'src/app/services/validation.service';

import * as toastr from 'toastr'

@Component({
  selector: 'app-create-poll',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  private emptyOptions = 0;

  constructor(
    formBuilder: FormBuilder,
    validationService: ValidationService,
    private pollService: PollService
  ) {
    this.form = formBuilder.group({
      description: ['', Validators.required],
      multiVote: [false, Validators.required],
      showVoters: [false, Validators.required],
      allowAdd: [false, Validators.required],
      endDate: [null, Validators.required],
      // O minimo é 3 pois sempre terá uma opção vazia
      options: formBuilder.array([], validationService.minLengthArray(3))
    });
  }

  ngOnInit() {
    this.addOption();
  }

  publish() {
    if (this.form.invalid) {
      return this.validate();
    }
    // Retira strings vazias da lista de opções
    const options = (this.controls.options.value as string[]).filter((value) => !!value);

    this.pollService.create({
      Description: this.controls.description.value,
      MultiVote: this.controls.multiVote.value,
      ShowVoters: this.controls.showVoters.value,
      AllowAdd: this.controls.allowAdd.value,
      EndDate: this.controls.endDate.value,
      Options: options
    });
  }

  private validate() {
    if (this.controls.description.invalid) {
      toastr.error('Informe o título da enquete.', 'Erro');
    }
    if (this.controls.endDate.invalid) {
      toastr.error('Informe a data de término da enquete.', 'Erro');
    }
    if (this.controls.invalid) {
      toastr.error('Informa ao menor 2 opções para a enquete.', 'Erro');
    }
  }

  get controls() {
    return this.form.controls;
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
