# Simple Example

This is a simple example of a progressive Data Drive Drop Down Selection, with ReactJS, Redux, Fetch, Twitter Bootstrap and Accessibility.

Written by Philip A Senger

[philip.a.senger@cngrgroup.com](mailto:philip.a.senger@cngrgroup.com) | mobile: 0404466846 | [CV/Resume](http://www.visualcv.com/philipsenger) | [blog](http://www.apachecommonstipsandtricks.blogspot.com/) | [LinkedIn](http://au.linkedin.com/in/philipsenger) | [twitter](http://twitter.com/PSengerDownUndr) | [keybase](https://keybase.io/psenger)

Website in action is located [here](http://simple-car-example.s3-website-ap-southeast-2.amazonaws.com/)

## Environment Variables

| Mandate  | Name      | Purpose | ex |
|:---------|:----------|:--------|:---|
| required | API_URL   | The base Url to the hosted api server. If not set, it assumes localhost | [prod](https://simple-example-cars.herokuapp.com/api/v1/)  |
| required | PUBLIC_URL| The Url to the public html server. Values will be embedded into the processed HTML. | [prod](http://simple-car-example.s3-website-ap-southeast-2.amazonaws.com/) |
| required | NODE_ENV  | When you deploy, you should set this to 'production'. This will turn off the Redux Logger. | `export NODE_ENV=production`  |


## Command Line

| Command       | Purpose   |
|:--------------|:----------|
| npm run start | Start the server in development mode, if the API_URL is not set then the local mocks are used. You can point to the production API via the API_URL environment variable. |
| npm run build | This produces production read code and drops it in the `build` directory. |
| npm run test  | Runs all the tests  |

## Technologies used 
_For the purpose of demonstrating the developer proficiency_

* ReactJS
* Redux
* Saga
* Fetch
* Promises
* Webpack
* Ejs
* Mocha
* WCAG 2.0 AA

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.


## Developer Notes

1. if you select a make and model, then view the model and decide to come back to change the mode.... the model drop down has lost all the models. I know why, but didnt have time to fix it.
2. Server Side Rendering is not done.
3. I wanted to make a loading mask for the images when they where loading, i didnt have time
4. I used imutable in a couple of places, but in reality I would either use it or not use it on a project. Frankly, I like it, but Im not sure it is needed
5. Not enough tests, and I didnt have time to build enzyme / jest tests
6. I wanted to add more CSS styles, and install the SCSS compiler, but I didnt have time.
7. I wish Amazon didnt change the aws cli, it didnt work for me, so all my gateway code is broken. I had to stand up a server in Heroku to make the server.
8. I REALLY wanted to make a PWA, with Service Workers, but I didnt have time.
9. I really like the dev server for Webpack 2 :)
