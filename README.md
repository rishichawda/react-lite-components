<h1 align="center">
  <a href=""><img src="https://github.com/rishichawda/react-lite-components/blob/master/assets/logo.png" alt="React Lite Components" width="290"></a>
  <br/>
  React Lite Components
  <br>
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-lite-components">
    <img src="https://img.shields.io/npm/v/react-lite-components.svg?style=flat-square"
         alt="npm-version">
  </a>
  <a href="https://www.npmjs.com/package/react-lite-components">
    <img src="https://img.shields.io/npm/dt/react-lite-components.svg?style=flat-square"
         alt="downloads">
  </a>
  <a href="https://www.npmjs.com/package/react-lite-components">
    <img src="https://img.shields.io/bundlephobia/minzip/react-lite-components.svg?style=flat-square"
         alt="bundle-size">
  </a>
  <a href="">
    <img src="https://img.shields.io/circleci/project/github/rishichawda/react-lite-components/master.svg?style=flat-square"
         alt="ci-build">
  </a>
  <a href="https://github.com/rishichawda/react-lite-components/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/rishichawda/react-lite-components.svg?style=flat-square"
         alt="license">
  </a><br/>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/rishichawda/react-lite-components.svg?token=157ae3a46a43f4ff56ddc116cf7532afc234c046c246abeca3a9fe9079087201&ts=1548087343639&style=flat-square"
         alt="license">
  </a>
  <a href="https://gitter.im/react-lite-components/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img src="https://badges.gitter.im/react-lite-components/community.svg?style=flat-square"
         alt="license">
  </a>
  </p>

_<p align='center'>A React UI library focused on minimum bundle size, simplicity, consistency and responsive design.</p>_

## Installation :

```
npm install react-lite-components styled-components --save
```

**Note :** This library is a work in progress. Although the **_components can be used_** - they may lack features that will be included in the near future.

But that also means there's a lot of space for contributions to this library! :tada:

If you are willing to contribute, please take a look at the [issues](https://github.com/rishichawda/react-lite-components/issues), find an issue or feature that you want to contribute to, fork the repo and raise a PR!

##

#### How to contribute?

First, you'll need to fork this repository, and then clone it to your local and run `npm install` inside the directory.

Next, clone the react and webpack boilerplate for development purpose from [here](https://github.com/rishichawda/minimal-react-boilerplate). After you have cloned the boilerplate, add the following lines to `webpack.common.js`:

```js
resolve: {
    alias: {
      'react': path.join(process.cwd(), 'node_modules/react'),
      'styled-components': path.join(process.cwd(), 'node_modules/styled-components'),
   }
}
```

After this, run the following commands in the boilerplate directory: 

```
$ npm install
$ npm install styled-components
$ npm link path/to/react-lite-components
$ npm run start
```

This will start the development server where you can check your component which you're developing.

Components from `react-lite-components` can be imported in two ways : 

```jsx
import { Button } from 'react-lite-components'

//or

import Button from 'react-lite-components/lib/button'
```

If you have any questions or need help setting up the development environment, please visit the `react-lite-components` [community on gitter](https://gitter.im/react-lite-components/community) and we will help you out.
