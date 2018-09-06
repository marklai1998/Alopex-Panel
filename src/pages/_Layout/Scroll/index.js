// @flow strict

import * as React from 'react'

import styles from './index.css'

type Props = {
  children: React.Node
}

export const Scroll = (props: Props) => (
  <div className={styles.wrapper}>{props.children}</div>
)
