import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, from, HttpLink } from "@apollo/client"
import { onError } from '@apollo/client/link/error'
import Context from './Context'
import { BrowserRouter } from 'react-router-dom'

const httpLink = new HttpLink({ uri: 'https://petgram-server-coias-c0ias.vercel.app/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })

  return forward(operation)
}) 

const onErrorMiddleware = onError(
  ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location = '/user'
    }
  }
)

const client = new ApolloClient({
  link: from([onErrorMiddleware, authMiddleware, httpLink]),
  cache: new InMemoryCache()
})

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
root.render(  
    <Context.Provider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App/>        
        </BrowserRouter>
      </ApolloProvider>
    </Context.Provider>  
)








