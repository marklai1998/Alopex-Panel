//flow strict

import React, { PureComponent } from 'react'

import { Avatar } from '../../../modules/_shared/components/Avatar'
import styles from './index.css'
import icon from './logo.svg'

export class Header extends PureComponent {
  render () {
    return (
      <div className={styles.header}>
        <div className={styles.icon}>
          <img src={icon} />
          <div class={styles.iconBG} />
        </div>
        <div className={styles.user}>
          <Avatar size={25} className={styles.avatar} />
          <div className={styles.userName}>User</div>
        </div>
      </div>
    )
  }
}
