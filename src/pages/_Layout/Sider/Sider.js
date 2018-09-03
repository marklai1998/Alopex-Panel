// flow strict

import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { uiCreators } from '../../../redux'
import { isSiderCollapsedSelector } from '../../../redux/ui/selectors'
import styles from './index.css'

type Props = {
  isSiderCollapsed: boolean,
}

class Sider extends PureComponent<Props> {
  render () {
    return (
      <div
        className={classnames(styles.sider, {
          [styles.collapsed]: this.props.isSiderCollapsed
        })}
      >
        <ul
          className={classnames(styles.nav, {
            [styles.collapsed]: this.props.isSiderCollapsed
          })}
        >
          <li>
            <i className='fas fa-tachometer-alt' />
            <span>
              Dashboard
            </span>
          </li>
          <li>
            <i className='fas fa-user' />
            <span>
              Players
            </span>
          </li>
          <li>
            <i className='fas fa-map-marked-alt' />
            <span>
              World
            </span>
          </li>
          <li>
            <i className='fas fa-cogs' />
            <span>
              Settings
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isSiderCollapsed: isSiderCollapsedSelector(state)
})

export default connect(mapStateToProps)(Sider)
