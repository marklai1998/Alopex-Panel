// flow strict

import classNames from 'classnames'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { isConsoleCollapsedSelector } from '../../../../redux/ui/selectors'
import styles from './index.css'

type Props = { isConsoleCollapsed: boolean }

class Console extends PureComponent<Props> {
  render () {
    return (
      <div
        className={classNames(styles.console, {
          [styles.collapsed]: this.props.isConsoleCollapsed
        })}
      >
        test
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isConsoleCollapsed: isConsoleCollapsedSelector(state)
})

export default connect(mapStateToProps)(Console)
