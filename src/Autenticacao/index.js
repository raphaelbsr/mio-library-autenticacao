import React, { useState } from "react";
import { Slide as TransitionComponent } from "@material-ui/core";
import Signin from "./Signin";
import ForgotPassword from "./ForgotPassword";

const Autenticacao = props => {
  const [isShowingLogin, setShowingLogin] = useState(true);

  const handleClickForgotPassword = () => {
    setShowingLogin(false);
  };

  const handleClickLogin = () => {
    setShowingLogin(true);
  };

  return (
    <div>
      {isShowingLogin && (
        <TransitionComponent in={isShowingLogin} timeout={500} direction="down">
          <div>
            <Signin
              onClickForgotPassword={handleClickForgotPassword}
              {...props}
            />
          </div>
        </TransitionComponent>
      )}

      {!isShowingLogin && (
        <TransitionComponent
          in={!isShowingLogin}
          timeout={500}
          direction="right"
        >
          <div>
            <ForgotPassword onClickLogin={handleClickLogin} />
          </div>
        </TransitionComponent>
      )}
    </div>
  );
};

export default Autenticacao;
