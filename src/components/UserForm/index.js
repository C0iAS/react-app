import React from "react";
import { useInputValue } from "../../hooks/useInputValue"
import { Error, Form, Button, Input, Title } from "./styles"

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input disabled={disabled} placeholder="Password" {...password} />
        <Button disabled={disabled} >{title}</Button>
        {error && <Error>{error}</Error>}
      </Form>      
    </React.Fragment>
  );
}
