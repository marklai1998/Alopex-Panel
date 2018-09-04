// @flow strict

import React from 'react'

import { Background } from './Background'
import styles from './index.css'

const Login = () => (
  <Background>
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.title}>Login</div>
        <div className={styles.inputFields}>test</div>
      </div>
    </div>
  </Background>
)

export default Login
