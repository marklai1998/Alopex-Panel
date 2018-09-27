// @flow strict

import logo from 'assets/logo.svg'
import React from 'react'

import Avatar from '../../../modules/_shared/components/Avatar'
import styles from './index.css'

export default () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} />
      <div className={styles.logoBG} />
    </div>
    <div className={styles.user}>
      <Avatar size={25} className={styles.avatar} />
      <div className={styles.userName}>User</div>
    </div>
  </div>
)
