# mio-library-autenticacao

> Componente React para login

[![NPM](https://img.shields.io/npm/v/mio-library-autenticacao.svg)](https://www.npmjs.com/package/mio-library-autenticacao) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação

```bash
//npm
npm install --save mio-library-autenticacao

//yarn
yarn add mio-library-autenticacao

```

## Como utilizar

Você deve definir os seguintes parâmetros de configuração no arquivo .env

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

| Name         | Type     | Description                                                                      |
| ------------ | -------- | -------------------------------------------------------------------------------- |
| onSubmit     | function | Sobrescreva está função caso queira utilizar seu próprio método de autenticação. |
| beforeSubmit | function | Função callback que é disparada antes do envio de formulário de login.           |
| afterSubmit  | function | Função callback que é disparada antes do envio de formulário de login.           |

#### Helpers

mio-library-autenticacao provides auxiliary methods

| Name            | Return  | Description                                  |
| --------------- | ------- | -------------------------------------------- |
| isAuthenticated | boolean | retorna se o usuário está autenticado ou não |
| getToken        | string  | A token jwt salca no local storage           |
| getData         | json    | extrai os dados da token jwt                 |
| logout          | void    | faz o logout do usuário                      |

## License

MIT © [raphaelbsr](https://github.com/raphaelbsr)
