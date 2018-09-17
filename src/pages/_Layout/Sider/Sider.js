// @flow strict

import classnames from 'classnames'
import * as R from 'ramda'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { isSiderCollapsedSelector } from '../../../redux/ui/selectors'
import styles from './index.css'

type Props = {
  isSiderCollapsed: boolean
}

const Sider = (props: Props) => (
  <div
    className={classnames(styles.sider, {
      [styles.collapsed]: props.isSiderCollapsed
    })}
  >
    <Scrollbars universal>
      <ul
        className={classnames(styles.nav, {
          [styles.collapsed]: props.isSiderCollapsed
        })}
      >
        <li>
          <Link to='/'>
            <i className='fas fa-tachometer-alt' />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/players'>
            <i className='fas fa-user' />
            <span>Players</span>
          </Link>
        </li>
        <li>
          <Link to='/worlds'>
            <i className='fas fa-map-marked-alt' />
            <span>Worlds</span>
          </Link>
        </li>
        <li>
          <Link to='/plugins'>
            <i className='fas fa-plug' />
            <span>Plugins</span>
          </Link>
        </li>
        <li>
          <Link to='/backups'>
            <i className='fas fa-file-archive' />
            <span>Backups</span>
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
        <Link to='/settings/about'>
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

export default R.compose(connect(mapStateToProps))(Sider)
