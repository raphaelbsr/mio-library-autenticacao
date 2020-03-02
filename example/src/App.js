import React, { Component } from "react";

import { Autenticacao, isAuthenticated } from "mio-library-autenticacao";

export default class App extends Component {
  render() {
    const isAuth = isAuthenticated();
    console.log(isAuth ? "Autenticado" : "Nao Autenticado");
    return (
      <div>
        <Autenticacao />
      </div>
    );
  }
}

//1583162500
//1583168508151
