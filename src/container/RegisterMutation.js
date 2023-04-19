import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
	mutation signup ($input: UserCredentials!) {
		signup (input: $input)
	}
`

export const useRegisterMutation = () => {
  const [signupMutation, {loading, error}] = useMutation(REGISTER)

  return { signupMutation, loading, error }
}


