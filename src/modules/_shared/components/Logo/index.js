// @flow strict

import logo from 'assets/logo.svg'
import classNames from 'classnames'
import React from 'react'

import styles from './index.css'

type Props = {
  className: string
}

export const Logo = (props: Props) => (
  <div className={classNames(styles.logo, props.className)}>
    <img src={logo} />
    <div className={styles.logoBG} />
  </div>
)
