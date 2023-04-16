import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import Context from './Context'

const client = new ApolloClient({
  uri:'https://petgram-server-coias-c0ias.vercel.app/graphql',
  cache: new InMemoryCache()
})

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Context.Provider>
)

