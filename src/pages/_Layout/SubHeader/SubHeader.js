// @flow strict

import classnames from 'classnames'
import * as R from 'ramda'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { connectScreenSize } from 'react-screen-size'

import { uiCreators } from '../../../redux'
import {
  isConsoleCollapsedSelector,
  isSiderCollapsedSelector
} from '../../../redux/ui/selectors'
import styles from './index.css'

type Props = {
  isSiderCollapsed: boolean,
  isConsoleCollapsed: boolean,
  isMobile: boolean,
  setSiderCollapsed: boolean => void,
  setConsoleCollapsed: boolean => void
}

class SubHeader extends PureComponent<Props> {
  setSiderCollapse = (collapse: boolean) => {
    if (this.props.isMobile && !collapse) this.props.setConsoleCollapsed(true)
    this.props.setSiderCollapsed(collapse)
  }

  setConsoleCollapsed = (collapse: boolean) => {
    if (this.props.isMobile && !collapse) this.props.setSiderCollapsed(true)
    this.props.setConsoleCollapsed(collapse)
  }

  toggleSiderCollapse = () => {
    this.setSiderCollapse(!this.props.isSiderCollapsed)
  }

  toggleConsoleCollapse = () => {
    this.setConsoleCollapsed(!this.props.isConsoleCollapsed)
  }

  render () {
    return (
      <div className={styles.subHeader}>
        <button
          type='button'
          className={classnames(styles.toggleNavButton, {
            [styles.collapsed]: this.props.isSiderCollapsed
          })}
          onClick={this.toggleSiderCollapse}
        >
          <i className='fas fa-angle-double-left' />
        </button>
        <div className={styles.shadow}>
          <div className={styles.title}>Dashboard</div>
          <button
            type='button'
            className={styles.toggleConsoleButton}
            onClick={this.toggleConsoleCollapse}
          >
            <i className='fas fa-terminal' />
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isSiderCollapsed: isSiderCollapsedSelector(state),
  isConsoleCollapsed: isConsoleCollapsedSelector(state)
})

const mapDispatchToProps = {
  setSiderCollapsed: uiCreators.setSiderCollapsed,
  setConsoleCollapsed: uiCreators.setConsoleCollapsed
}

const mapScreenSizeToProps = ({ xs }) => ({
  isMobile: xs
})

export default R.compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  connectScreenSize(mapScreenSizeToProps)
)(SubHeader)
