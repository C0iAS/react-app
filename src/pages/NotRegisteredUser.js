import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {

  const { signup, loading: registerLoading, error: registerError } = useRegisterMutation()
  const { login, loading: loginLoading, error: loginError } = useLoginMutation()

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const registerSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          signup({ variables })
            .then(activateAuth)
        }

        const loginSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          login({ variables })
            .then(activateAuth)
        }

        const registerErrorMsg = registerError && 'User already exist'
        const loginErrorMsg = loginError && 'Incorret password or user does not exist'
      
      return (
        <React.Fragment>
          <UserForm disabled={registerLoading} error={registerErrorMsg} title="Registrarse" onSubmit={registerSubmit} />
          <UserForm disabled={loginLoading} error={loginErrorMsg} title="Iniciar sesión" onSubmit={loginSubmit} />
        </React.Fragment>)
      }}
    </Context.Consumer>
  )
}

