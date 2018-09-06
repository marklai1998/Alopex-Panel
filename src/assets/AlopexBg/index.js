// @flow strict

import * as React from 'react'
import SnowStorm from 'react-snowstorm'

import alopex from './alopex.svg'
import styles from './index.css'
import land from './land.svg'
import mountains from './mountains.svg'

type Props = {
  children: React.Node
}

export const AlopexBg = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.content}>{props.children}</div>
    <SnowStorm
      freezeOnBlur={false}
      targetElement='snow'
      excludeMobile={false}
    />
    <div id='snow' className={styles.snow}>
      <span>Alopex</span>
    </div>
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
