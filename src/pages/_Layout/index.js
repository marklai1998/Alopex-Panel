// flow strict

import React from 'react'

import { Console } from '../../modules/_shared/components/Console'
import { Header } from './Header'
import styles from './index.css'
import { Sider } from './Sider'
import { SubHeader } from './SubHeader'

export const Layout = props => (
  <div className={styles.mainFrame}>
    <Header />
    <SubHeader />
    <div className={styles.row}>
      <Sider />
      <div className={styles.content}>{props.children}</div>
      <Console />
    </div>
  </div>
)
