// @flow strict

import alopex from 'assets/alopex.svg'
import land from 'assets/land.svg'
import mountains from 'assets/mountains.svg'
import * as React from 'react'
import NoSSR from 'react-no-ssr'
import SnowStorm from 'react-snowstorm'

import styles from './index.css'

type Props = {
  children: React.Node
}

export const AlopexBg = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.content}>{props.children}</div>
    <NoSSR>
      <SnowStorm
        freezeOnBlur={false}
        targetElement='snow'
        excludeMobile={false}
      />
    </NoSSR>
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
