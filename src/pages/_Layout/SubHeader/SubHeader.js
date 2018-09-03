// flow strict

import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { uiCreators } from '../../../redux'
import {
  isConsoleCollapsedSelector,
  isSiderCollapsedSelector
} from '../../../redux/ui/selectors'
import styles from './index.css'

type Props = {
  isSiderCollapsed: boolean,
  isConsoleCollapsed: boolean,
  setSiderCollapsed: boolean => void,
  setConsoleCollapse: boolean => void,
}

class SubHeader extends PureComponent<Props> {
  setSiderCollapse = () => {
    console.log(this.props.isSiderCollapsed)
    this.props.setSiderCollapsed(!this.props.isSiderCollapsed)
  }

  setConsoleCollapse = () => {
    this.props.setConsoleCollapse(!this.props.isConsoleCollapsed)
  }

  render () {
    return (
      <div className={styles.subHeader}>
        <button
          class={classnames(styles.toggleNavButton, {
            [styles.collapsed]: this.props.isSiderCollapsed
          })}
          onClick={this.setSiderCollapse}
        >
          <i className='fas fa-angle-double-left' />
        </button>
        <div className={styles.title}>Dashboard</div>
        <button
          class={styles.toggleConsoleButton}
          onClick={this.setConsoleCollapse}
        >
          <i className='fas fa-terminal' />
        </button>
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
  setConsoleCollapse: uiCreators.setConsoleCollapsed
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)
