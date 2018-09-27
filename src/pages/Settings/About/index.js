// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../../modules/_shared/components/Loading'

const AboutComponent = Loadable({
  loader: () => import('../../../modules/settings/About'),
  render (Loaded, props) {
    return <Loaded.About {...props} />
  },
  loading: Loading
})

export const About = () => <AboutComponent />
