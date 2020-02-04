# mio-library-autenticacao

> React component for authentication

[![NPM](https://img.shields.io/npm/v/mio-library-autenticacao.svg)](https://www.npmjs.com/package/mio-library-autenticacao) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
// with npm
npm install --save mio-library-autenticacao

// with yarn
yarn add mio-library-autenticacao

```

## Usage

Before use you must config some .env params in your application

```env
REACT_APP_ID=app-id-example
REACT_APP_MIO_AUTH_API_URL=http://urlofauthentication.com:3000
REACT_APP_MIO_AUTH_TOKEN=persist:@mio-template:jwt-token
```

```jsx
import React, { Component } from "react";

import { Autenticacao } from "mio-library-autenticacao";

const Example = props => {
  return (
    <Autenticacao
      beforeSubmit={() => {
        // do something before submitting the login form
      }}
      afterSubmit={result => {
        /*
         * Do something after submitting the login form.
         * result is a json that can contain three attributes
         * {
         *    status: <boolean>
         *    message: <string> in case status is false message is undefined
         *    error: <string> in case status is true error is undefined
         * }
         */

        /*
         * Example, you can redirect page if login is succefully
         */
        if (result.status) {
          props.history.push("/home");
        }
      }}
    />
  );
};

export default Example;
```

## Api

#### &lt;Autenticacao />

The component accepts the following props:

| Name         | Type     | Description                                                             |
| ------------ | -------- | ----------------------------------------------------------------------- |
| beforeSubmit | function | A callback function that is triggered before submitting the login form. |
| afterSubmit  | function | A callback function that is triggered after submitting the login form.  |

#### Helpers

mio-library-autenticacao provides auxiliary methods

| Name            | Return  | Description                                     |
| --------------- | ------- | ----------------------------------------------- |
| isAuthenticated | boolean | return true if an user is logged in             |
| getToken        | string  | return the jwt token saved in local storage     |
| getData         | json    | return the decoded data that jwt token contains |
| logout          | void    | deletes jwt token from local storage            |

## License

MIT © [raphaelbsr](https://github.com/raphaelbsr)
