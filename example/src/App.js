import React, { Component } from "react";

import { Autenticacao } from "mio-library-autenticacao";

export default class App extends Component {
  doLogin(e) {
    console.log("Doing Login");
  }

  render() {
    return (
      <div>
        <Autenticacao
          onSubmit={(e, email, senha) => {
            e.preventDefault();
            console.log(email + " --- " + senha);
          }}
        />
      </div>
    );
  }
}
