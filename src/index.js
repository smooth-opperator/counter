import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider}  from 'react-apollo'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' })

const middlewareLink = new ApolloLink((operation, forward) => {
  const tokenValue = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtcyIsInVzZXJfaWQiOjYzNTIwLCJjb3VudHJ5IjoidXMiLCJicmFuZCI6Im1zIiwidHMiOjE1Mjk0OTk0NjN9.LpU_c2i0mfErE6Wppwi5wd6ur-p4c3XVkrwfb5LOfxI'
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : ''
    }
  })
  return forward(operation)
})

const httpLinkAuth = middlewareLink.concat(httpLink)
const client = new ApolloClient({ link: httpLinkAuth, cache: new InMemoryCache() })

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'))
registerServiceWorker()
