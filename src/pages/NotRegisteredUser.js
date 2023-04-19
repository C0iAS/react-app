import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {

  const { activateAuth } = useContext(Context)

  const { signupMutation, loading: registerLoading, error: registerError } = useRegisterMutation()
  const { loginMutation, loading: loginLoading, error: loginError } = useLoginMutation()
      
  const registerSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    signupMutation({ variables }).then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
    })
  }

  const loginSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const registerErrorMsg = registerError && 'User already exist'
  const loginErrorMsg = loginError && 'Incorret password or user does not exist'
      
  return (
    <React.Fragment>
      <UserForm disabled={registerLoading} error={registerErrorMsg} title="Registrarse" onSubmit={registerSubmit} />
      <UserForm disabled={loginLoading} error={loginErrorMsg} title="Iniciar sesión" onSubmit={loginSubmit} />
    </React.Fragment>)
}
  



