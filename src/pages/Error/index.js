// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../modules/_shared/components/Loading'

const ErrorComponent = Loadable({
  loader: () => import('../../modules/Error'),
  render (Loaded, props) {
    return <Loaded.ErrorComponent {...props} />
  },
  loading: Loading
})

export const ErrorPage = () => <ErrorComponent />
