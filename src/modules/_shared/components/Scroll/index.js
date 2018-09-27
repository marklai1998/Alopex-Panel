// @flow strict

import * as React from 'react'
import Scrollbars from 'react-custom-scrollbars'

type Props = {
  children: React.Node
}

export const Scroll = (props: Props) => (
  <Scrollbars universal>{props.children}</Scrollbars>
)
