import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => {

  const { registerMutation, loading, error } = useRegisterMutation()

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          registerMutation({ variables })
            .then(activateAuth)
        }

        const errorMsg = error && 'User already exist'
      
      return (
        <React.Fragment>
          <UserForm disabled={loading} error={errorMsg} title="Registrarse" onSubmit={onSubmit} />
          <UserForm title="Iniciar sesión" onSubmit={activateAuth} />
        </React.Fragment>)
      }}
    </Context.Consumer>
  )
}

