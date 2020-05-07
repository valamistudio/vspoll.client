# Features
- Twitter authentication for voting ([docs1](https://developer.twitter.com/en/docs/basics/authentication/guides/log-in-with-twitter), [docs2](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/twitter-logins?view=aspnetcore-3.1))
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
  - Block users (and remove their votes if it's the case)
  - Unblock users (must vote again)
  - Delete options
  
# Hosting specs
- Probably AWS Lightsail for starter
- Docker alpine everything

# Front-end specs
- Minimalist design
- Localization support
