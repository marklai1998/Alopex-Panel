// @flow strict

import React from 'react'
import Loadable from 'react-loadable'

import { Loading } from '../../modules/_shared/components/Loading'
import { Scroll } from '../../modules/_shared/components/Scroll'

const PlayersComponent = Loadable({
  loader: () => import('../../modules/Dashboard'),
  render (Loaded, props) {
    return <Loaded.Dashboard {...props} />
  },
  loading: Loading
})

export const Players = () => (
  <Scroll>
    <PlayersComponent />
  </Scroll>
)
