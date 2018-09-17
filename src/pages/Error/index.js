// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../modules/_shared/components/Loading'

const ErrorComponent = Loadable({
  loader: () => import('../../modules/Error'),
  render (loaded, props) {
    const Component = loaded.ErrorComponent
    return <Component {...props} />
  },
  loading: Loading
})

export const ErrorPage = () => <ErrorComponent />
