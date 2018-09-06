// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../../modules/_shared/components/Loading'
import { Scroll } from '../../_Layout/Scroll'

const AboutComponent = Loadable({
  loader: () => import('../../../modules/settings/About'),
  render (loaded, props) {
    const Component = loaded.About
    return <Component {...props} />
  },
  loading: Loading
})

export const About = () => (
  <Scroll>
    <AboutComponent />
  </Scroll>
)
