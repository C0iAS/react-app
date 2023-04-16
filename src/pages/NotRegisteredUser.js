import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <React.Fragment>
            <UserForm title='Registrarse' onSubmit={activateAuth}/>
            <UserForm title='Iniciar sesión' onSubmit={activateAuth}/>
          </React.Fragment>
        )
      }
    }
  </Context.Consumer>
  )
}
