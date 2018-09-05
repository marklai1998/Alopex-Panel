// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../modules/_shared/components/Loading'

const LoginComponent = Loadable({
  loader: () => import('../../modules/Login'),
  render (loaded, props) {
    const Component = loaded.Login
    return <Component {...props} />
  },
  loading: Loading
})

export const Login = () => <LoginComponent />
