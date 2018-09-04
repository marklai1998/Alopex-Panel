// @flow strict

import classNames from 'classnames'
import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { connectScreenSize } from 'react-screen-size'

import { isConsoleCollapsedSelector } from '../../../../redux/ui/selectors'
import styles from './index.css'

type Props = { isConsoleCollapsed: boolean, isMobile: boolean }

const Console = (props: Props) => (
  <div
    className={classNames(styles.console, {
      [styles.collapsed]: props.isConsoleCollapsed,
      [styles.mobile]: props.isMobile
    })}
  >
    test
  </div>
)

const mapStateToProps = state => ({
  isConsoleCollapsed: isConsoleCollapsedSelector(state)
})

const mapScreenSizeToProps = ({ xs }) => ({
  isMobile: xs
})

export default R.compose(
  connect(mapStateToProps),
  connectScreenSize(mapScreenSizeToProps)
)(Console)
