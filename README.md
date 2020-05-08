# Features
- Telegram authentication for voting ([docs](https://core.telegram.org/widgets/login))
  - You can create a poll without authenticating youself, but you won't be able to manage it later
  - You can see polls without authenticating youself, but you won't be able to vote
- Sorting options (name/most voted)
- Poll shareable via id (random hash)
- Customization on creation page
  - Single/multi-vote
  - Show/hide voters
  - Poll duration
  - Allow users to add new options
- Poll management (author only)
  - End poll prematurely
  - Delete poll
  - Delete options
  
# Hosting specs
- Probably AWS Lightsail for starter
- Docker alpine everything

# Front-end specs
- Minimalist design
- Localization support
