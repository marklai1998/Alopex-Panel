// @flow strict

import React from 'react'

import { Avatar } from '../../../modules/_shared/components/Avatar'
import styles from './index.css'
import icon from './logo.svg'

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.icon}>
      <img src={icon} />
      <div className={styles.iconBG} />
    </div>
    <div className={styles.user}>
      <Avatar size={25} className={styles.avatar} />
      <div className={styles.userName}>User</div>
    </div>
  </div>
)
