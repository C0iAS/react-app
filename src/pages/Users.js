import React, { useContext } from "react";
import { Context } from '../Context'
import { SubmitButton } from "../components/SubmitButton";

export const Users = () => {

  const { deactivateAuth } = useContext(Context)

  return <React.Fragment>
    <h1>Users</h1>
    <SubmitButton onClick={deactivateAuth}>Log out!</SubmitButton>
  </React.Fragment>
}
