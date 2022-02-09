// If the user is logged in then the user can access to the homepage

import { Route, Redirect } from 'react-router-dom'

export default function PublicRoute({ children, ...props }) {
  return localStorage.getItem('authToken') ? <Redirect to='/'/>  :  <Route {...props}>{children}</Route>
}