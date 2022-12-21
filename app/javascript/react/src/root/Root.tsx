import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Welcome from '../components/Welcome'
import * as ReactDOM from "react-dom/client"
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import { UserAuthContextProvider } from "../helpers/UserAuthContext";
import ProtectedRoute from "../helpers/ProtectedRoute";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Edit from '../components/Edit'

const client = new ApolloClient({
  uri: 'https://nikhil-gql-rails-react-demo.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const Root = () => {
  return (
    <Router>
        <div id="root">
          <UserAuthContextProvider>
            <Routes>
                <Route path = 'users/sign_up' element = {<Signup/>}/>
                <Route path = '/task_manager/index' element = {
                  <ProtectedRoute>
                    <Welcome/>
                  </ProtectedRoute>}/>
                <Route path = '/' element  = {<Signin/>}/>
                <Route path = "/tasks/:editId" element = {
                  <ProtectedRoute>
                    <Edit/>
                  </ProtectedRoute>
                }/>
            </Routes>
          </UserAuthContextProvider>
        </div>
        
    </Router>
  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
  <ApolloProvider client={client}>
    <Root/>
  </ApolloProvider>
)
export default Root