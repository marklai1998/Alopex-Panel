// @flow strict

import classnames from 'classnames'
import * as R from 'ramda'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
    <Scrollbars>
      <ul
        className={classnames(styles.nav, {
          [styles.collapsed]: props.isSiderCollapsed
        })}
      >
        <li>
          <Link to='/dashboard'>
            <i className='fas fa-tachometer-alt' />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/user'>
            <i className='fas fa-user' />
            <span>Players</span>
          </Link>
        </li>
        <li>
          <Link to='/world'>
            <i className='fas fa-map-marked-alt' />
            <span>World</span>
          </Link>
        </li>
        <li>
          <Link to='/config'>
            <i className='fas fa-sliders-h' />
            <span>Config</span>
          </Link>
        </li>
      </ul>
    </Scrollbars>
    <ul
      className={classnames(styles.nav, styles.bottom, {
        [styles.collapsed]: props.isSiderCollapsed
      })}
    >
      <li>
        <Link to='/settings'>
          <i className='fas fa-cogs' />
          <span>Settings</span>
        </Link>
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
