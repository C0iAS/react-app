import React from "react";
import { useInputValue } from "../../hooks/useInputValue"
import { Form, Button, Input, Title } from "./styles"

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Email" {...email} />
        <Input placeholder="Password" {...password} />
        <Button>{title}</Button>
      </Form>
    </React.Fragment>
  );
}
