// @flow strict

import classnames from 'classnames'
import React from 'react'

import styles from './index.css'

type Props = {
  isSiderCollapsed: boolean,
  toggleConsoleCollapse: () => void,
  toggleSiderCollapse: () => void,
  title: string
}

export const SubHeader = (props: Props) => (
  <div className={styles.subHeader}>
    <button
      type='button'
      className={classnames(styles.toggleNavButton, {
        [styles.collapsed]: props.isSiderCollapsed
      })}
      onClick={props.toggleSiderCollapse}
    >
      <i className='fas fa-angle-double-left' />
    </button>
    <div className={styles.shadow}>
      <div className={styles.title}>{props.title}</div>
      <button
        type='button'
        className={styles.toggleConsoleButton}
        onClick={props.toggleConsoleCollapse}
      >
        <i className='fas fa-terminal' />
      </button>
    </div>
  </div>
)
