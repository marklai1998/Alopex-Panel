// @flow strict

import React from 'react'
import SnowStorm from 'react-snowstorm'

import alopex from './alopex.svg'
import styles from './index.css'
import land from './land.svg'
import mountains from './mountains.svg'

export const Background = () => (
  <div className={styles.container}>
    <SnowStorm freezeOnBlur={false} targetElement='snow' />
    <div id='snow' className={styles.snow} />
    <div className={styles.top}>
      <img src={mountains} className={styles.mountains} />
      <img src={land} className={styles.land} />
    </div>
    <div className={styles.bottom}>
      <img src={mountains} className={styles.shadows} />
      <img src={alopex} className={styles.alopex} />
    </div>
  </div>
)
