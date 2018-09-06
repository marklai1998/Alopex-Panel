// @flow strict

import { AlopexBg } from 'assets/AlopexBg'
import { Text } from 'inputFields/Text'
import React from 'react'

import { Logo } from '../_shared/components/Logo'
import styles from './index.css'

const Login = () => (
  <AlopexBg>
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.title}>Login</div>
        <div className={styles.inputFields}>
          <Text label='User Name' id='username' />
          <Text label='Password' id='password' type='password' />
          <button type='submit' className={styles.submit}>
            <i className='fas fa-arrow-right' />
          </button>
        </div>
      </div>
    </div>
  </AlopexBg>
)

export default Login
