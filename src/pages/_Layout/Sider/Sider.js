// @flow strict

import classnames from 'classnames'
import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { connectScreenSize } from 'react-screen-size'

import { isSiderCollapsedSelector } from '../../../redux/ui/selectors'
import styles from './index.css'

type Props = {
  isSiderCollapsed: boolean,
  isMobile: boolean
}

const Sider = (props: Props) => (
  <div
    className={classnames(styles.sider, {
      [styles.collapsed]: props.isSiderCollapsed,
      [styles.mobile]: props.isMobile
    })}
  >
    <ul
      className={classnames(styles.nav, {
        [styles.collapsed]: props.isSiderCollapsed
      })}
    >
      <li>
        <i className='fas fa-tachometer-alt' />
        <span>Dashboard</span>
      </li>
      <li>
        <i className='fas fa-user' />
        <span>Players</span>
      </li>
      <li>
        <i className='fas fa-map-marked-alt' />
        <span>World</span>
      </li>
      <li>
        <i className='fas fa-cogs' />
        <span>Settings</span>
      </li>
    </ul>
  </div>
)

const mapStateToProps = state => ({
  isSiderCollapsed: isSiderCollapsedSelector(state)
})

const mapScreenSizeToProps = ({ xs }) => ({
  isMobile: xs
})

export default R.compose(
  connect(mapStateToProps),
  connectScreenSize(mapScreenSizeToProps)
)(Sider)
