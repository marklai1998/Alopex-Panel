// @flow strict

import * as React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import styles from './index.css'

type Props = {
  children: React.Node
}

export const Scroll = (props: Props) => (
  <div className={styles.wrapper}>
    <Scrollbars>{props.children}</Scrollbars>
  </div>
)
