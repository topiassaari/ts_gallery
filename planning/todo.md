in no specific order, always put done items at bottom

- [ ] explore optional style ideas
- [ ] implement sorting in admin view
- [ ] implement tests to fill nicetohave-reqs
- [ ] maybe separate input component
- [ ] think more about the modal styling to reach an actual design
- [ ] keyboard support for admin panel
- [ ] keyboard support for modal
- [ ] make web 1.0 version
- [ ] fix linting
- [ ] improve e2e static tests for filtering

  13.2.2022

- [x] filter options bigger font (too small for mobile)
- [x] modals fill 100% of screen on mobile
- [x] create a 404 page (actually a redirect in case of wrong url)
- [x] remove option to query users in prod
- [x] heroku site to subdomain
- [x] write README
- [x] plan integration to site

  11.2.2022

- [x] add "if dev --> don't use static build of frontend"
- [x] if user goes directly to /admin the service tries to fetch
- [x] fix local dev env (frontend wrong port and baseUrl linking)

  10.2.2022

- [x] create proper environment for e2e
- [x] fix dockerfile (bcrypt problem)
- [x] fix error notifications for posting
- [x] refactor notifications under reducers for global access
- [x] refactor ci/cd under separate files
- [x] add working ci/cd testing

  9.2.2022

- [x] make heroku pipeline work
- [x] fix tests
- [x] plan deployment
- [x] dockerize the whole thing
- [x] deploy to heroku
- [x] bundle build (esbuild)
- [x] refactor the whole thing to function as one node app
- [x] try to make docker-compose work (and fail)
- [x] try to see if possible to deploy from dockerfile
- [x] research possibilities to deploy multiple node apps in same context

  8.2.2022

- [x] research what tools for deployment
- [x] improve focus indicator in thumbnailGrid
- [x] implement tests to fill should-reqs

  4.2.2022

- [x] implement tests to fill must-reqs
- [x] use aria-modal/aria-hidden where relevant
- [x] use figure/figcaption for semantic
- [x] add test for filtering the content
- [x] add prop-type validation (remove the eslint skippers)
- [x] plan e2e tests for admin
- [x] implement admin e2e
- [x] close button text alignment wrong
- [x] landscape mobile view --> lightbox button placement

  3.2.2022

- [x] think about modal styling again...its pretty ugly atm.
- [x] make bg not black but dark grey in dark theme
- [x] implement theme switcher
- [x] dark theme icons
- [x] fine tune styles for dark theme

  2.2.2022

- [x] research theme switcher
- [x] CSS color variables for a dark mode
- [x] admin view doesn't fit small screen
- [x] refactor css away from static px
- [x] research px/em/rem
- [x] refactor admin view to match gallery (remove adminPanel as it is a container mostly)

  30.1.2022

- [x] plan e2e tests for gallery
- [x] hover desc in gallery
- [x] plan unit tests for admin
- [x] plan unit tests for gallery

  26.1.2022

- [x] implement unit tests for admin panel
- [x] implement unit tests for modal
- [x] implement unit tests for imageForm
- [x] implement unit tests for loginForm
- [x] implement unit tests for thumbnailGrid
- [x] implement unit tests for imageTable

  25.1.2022

- [x] proper ARIA titles
- [x] WCAG AAA for lightbox text
- [x] try jest-axe in testing
- [x] fix issues from jest-axe
- [x] try axe DevTools and fix gallery issues
- [x] implement unit test for button
- [x] implement unit test for lightbox
- [x] implement unit test for filter

  24.1.2022

- [x] research how to make an accessible lightbox
- [x] tab, enter and space to move around in ThumbnailGrid
- [x] fix linter errors
- [x] add empty alt-tags for screenreaders
- [x] make test-test (initial one test that stuff works)
- [x] add jest
- [x] vite --> CRA
- [x] vite and jest? (too much manual babeling)

  22.1.2022

- [x] fix optimization issue in lightbox when used with keyboard (created event listener on every state change...)
- [x] fix lightbox exit from outside image (it was a problem with stacking context)
- [x] document requirements of the service
- [x] research how to do accessibility for this kind of thing

  20.1.2022

- [x] implement notification styles
- [x] design notifications
- [x] read about strict mode for react (yes, should be good for dev)
- [x] consider combinging "filtered" and "images" logic (nope)
- [x] try out using cron for automatic notification for logout (nope)

  19.1.2022

- [x] use auth for update and delete
- [x] implement notification logic
- [x] reconsider exipred token logic
- [x] create notification before throwing out user after expired token

  18.1.2022

- [x] make prop names in gallery a bit clearer
- [x] design modal for admin panel
- [x] add exit button to lightbox
- [x] clean up duplicate code @axios
- [x] look into using redis (not relevant atm)
- [x] consider if filtered should be handled in redux (nope but refactor Gallery)
- [x] separate AdminPanel and ImageTable
- [x] implement date added in backend
- [x] arrange gallery in order of year by default
- [x] fix lightbox when filtering is on
- [x] sort by date added in admin view
- [x] combine NewPostForm and EditPost

  17.1.2022

- [x] implement filtering
- [x] design filtering

  14.1.2022

- [x] implement a modal component
- [x] separate button as a component

  13.1.2022

- [x] learn what refresh tokens are and should they be used here
- [x] learn localStorage vs sessionStorage
- [x] add request limiting
- [x] https in prod
- [x] use sessionStorage instead of localStorage
- [x] decrease expiration time of token
- [x] add validators to mongoose
- [x] implement expired token validation
- [x] check that backend doesn't crash if validations fail
- [x] check that https has proper confs
- [x] research how to fix expired token problem aka how does frontend know token is expired
- [x] implement case: if expired token --> show login form

  12.1.2022

- [x] add controls to ImageTable
- [x] implement updating image in frontend
- [x] implement updating image in backend
- [x] implement deleting image in frontend
- [x] implement deleting image in backend
- [x] implement admin panel
- [x] figure out good spot for logout button
- [x] hide NewPostForm behind an "add" icon
- [x] design v2 admin panel style

  11.1.2022

- [x] add table in admin view of all images (for deleting them)
- [x] images to redux
- [x] login to redux
- [x] separate lighbox to own component
- [x] check if necessary to use redux
- [x] take SASS in use
- [x] clean up CSS and reformat

  10.1.2022

- [x] button disabled state when first or last in carousel
- [x] add keyboard support to lightbox
- [x] fix broken lightbox exit (next/prev triggers exit)
- [x] static position for lightbox buttons
- [x] fix lightbox flex problem

  5.1.2022

- [x] carousel in lightbox view (probs pretty big refactor)
- [x] implement preview of img in form
- [x] fix login refresh problem
- [x] implement logout

  4.1.2022

- [x] design gallery view
- [x] design lightbox view
- [x] design admin view
- [x] empty form on submit
- [x] implement input and button styles
- [x] update gallery view to show proper previews
- [x] implement header style

  3.1.2022

- [x] implement posting functionality in backend
- [x] implement posting functionality in frontend
- [x] implement login in frontend
- [x] implement login in backend
- [x] separate form from admin view
- [x] basic admin view
- [x] add more imgs manually
- [x] add router
- [x] max size for posts
- [x] hide posting form under login
