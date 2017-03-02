# React Redux Albums

## Installation
To install and run the application simply clone or download the project and in a terminal window run:

```bash
$ npm install
```
Followed by:

```bash
$ npm start
```
## Motivation, Libraries, & Tools

I wrote this application to demonstrate how to build a scalable React/Redux architecture using some of the most popular libraries and best practices.

Since the focus of this application is the frontend I chose to use the free public API at http://jsonplaceholder.typicode.com for the backend services. This is a basic CRUD application tracking users, albums (photo), and photos.

![User, Album, Photo](https://s3-us-west-2.amazonaws.com/oc-resources/images/user_album_photo.png "User, Album, Photo")

The application skeleton was generated using [Create React App](https://github.com/facebookincubator/create-react-app). Although this application is relatively simple I wanted to create a scalable architecture that I can use for more ambitious projects. Some of libraries I have added to the Create React Template are:

- [Redux](http://redux.js.org/) - Predictable mutation of application state
- [React Redux](https://github.com/reactjs/react-redux) - React bindings for Redux
- [React Router](https://github.com/ReactTraining/react-router) - Routing for React applications
- [Redux Form](https://github.com/erikras/redux-form/) - Manage form state in the Redux store
- [Material UI](https://github.com/callemall/material-ui) - React components implementing the Google [Material Design Specification](https://material.io/guidelines/material-design/introduction.html)
- [Redux Form Material UI](https://github.com/erikras/redux-form-material-ui) - A set of wrapper components to facilitate the use of Material UI with Redux Form
- [Redux Thunk](https://github.com/gaearon/redux-thunk) - Facilitate the use of functions as Redux actions for asynchronous or conditional dispatching of a traditional Redux action
- [Redux Dev Tools Extension](https://github.com/zalmoxisus/redux-devtools-extension) - Enables the use of the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) Chrome browser extension

Some of the tools I use:

- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) - The aforementioned extension for Chrome that gives you insight into Redux state and actions
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) - Another Chrome extension that allows you to navigate through the component tree checking for state, etc...
- [Visual Studio Code](https://code.visualstudio.com/) - A free text editor built using [Electron](https://electron.atom.io/) having a great support for debugging, GIT, and an awesome extension library

## Credits

In addition to the libraries and tools I mentioned above I give credit to several of the React learning resources available. Unfortunately I can't remember all of them but a few stick out.

- [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux) - A proposal for a simplified, module based file structur for Redux actions and reducers
- [Links for React Architecture and Best Practices](https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md)
- [How to add Redux to Create React App](http://www.penta-code.com/how-to-add-redux-to-create-react-app/)
- [How to add React Router to Create React App](http://www.penta-code.com/how-to-add-react-router-to-create-react-app/?src=related)
- [9 Things Every React.js Beginner Should Know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)