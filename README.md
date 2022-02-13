# Gallery for the images I've made.

## Intro
<p>Its an app for showing images on the internet. The whole thing is made for personal use, and most likely will not be of much use for you...Still, here's some documentation on how to run the thing.</p>

## Features
<p>Its a very basic gallery that's divided into two sections: Gallery and Admin.</p> 

### Gallery
<p>All images have a bit of description and when it was made. I tried to focus on getting basic a11y-stuff right, so all of the basic features of the site should be usable with just keyboard etc. This part of the service, although not perfect, might be of use to someone.</p>

### Admin
<p>The admin-view on the other hand is completely for my personal ease of use. It displays the same list of images as in gallery, but there's tools for adding, updating and deleting images. There's no way in the frontend to create a new account, and currently you would have to do it through the backend API. In the frontend, a11y was more of a priority but unfortunately all of the essential stuff is missing currently, so be aware.</p>
<p>Also there's a dark-mode...because.</p>

## Usage

### Tools
<p>The frontend uses React with CRA, backend is at its core an Express-app. Both are under the same repository again because of reasons. Testing done with Jest and Cypress, Linting with ESLint, styles with SCSS and MongoDB as the database. There's also a Dockerfile and and CI/CD using Actions.</p>

### Installation
```javascript
npm install
```

### Required enviornment variables
<p>The first two are quite self evident, but SECRET is used to create a new user.</p>

```javascript
  MONGODB_URI=your thing here
  PORT=the port used by backend/prod
  SECRET=your secret here
```
### Build
<p>The build step first deals with the React-frontend, then bundles the backend using esbuild.</p>

```javascript
npm run build
```

### Dev environment
<p>Under the root you can start start a dev instance of both the frontend and the backend, be aware of the endpoint used by axios in frontend.</p>

```javascript
npm run dev:frontend
npm run dev:backend
```

### Linting

```javascript
npm run lint
```

### Testing
#### Unit
<p>To run unit tests for frontend components (backend still WIP)</p>

```javascript
npm run test
```

#### E2E
<p>To do e2e testing you have to first set up following env variables:</p>

```javascript
MONGODB_URI_TEST=your test env
CYPRESS_USERNAME=e2e mongodb test username
CYPRESS_PASSWORD=e2e mongodb test username
```
<p>Then start a test instance of the build that connects to the test DB (and uses a static build of the frontend)</p>

```javascript
npm run start:test
```

### Production
<p>Production build uses the static build of the frontend and the bundled version of the backend.</p>

```javascript
npm start
```

## Links
<p><a href="https://tsgallery.herokuapp.com/">Heroku deployment of this project</a></p>
<p><a href="https://github.com/topiassaari/ts_gallery/blob/main/work_hours.md">Work hours</a></p>
