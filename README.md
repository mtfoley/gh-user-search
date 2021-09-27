# GitHub User Search

## Deployed At
https://friendly-yalow-01d498.netlify.app/

## User Story
As a user,
- [x] I can search for users and see a paginated list of results
- [x] I can navigate through the next and previous pages of the paginated results
- [x] I see the total count of search results
- [x] I see notable information for each search result, such as the description, star/follower
count, profile pictures, etc.
- [x] I can select a search result and be taken to the applicable page on github.com API

## Extras
- [x] Mix in user account results from a fun source (you might get rick rolled!)

## Snags
- I had wanted to capture all required data in single search request (search result data is a little scant). Might have been possible to do via GraphQL, but I didn't want to setup a token to authenticate on the user's behalf. I just did a 2nd call with REST to get more data about the user, and I made a simple caching strategy to avoid multiple calls for the same user data
- I've used TailwindCSS before, but it's been a while honestly. Not optimized for mobile at all
- I had the search input and paging controls separate for a while and toward the end I decided to combine them into a single component - cost time in the end
- Several more, but I'd have to look through the commit history to jog my memory!

## Things I Referenced
- [GitHub Search Docs](https://docs.github.com/en/rest/reference/search)
- [Tailwind Docs](https://tailwindcss.com/docs/)
- [Gravatar Images](https://en.gravatar.com/site/implement/images/)

