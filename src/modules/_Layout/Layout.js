// @flow strict

import * as R from 'ramda'
import * as React from 'react'
import { connect } from 'react-redux'
import withSizes from 'react-sizes'

import { Console } from '../../modules/_shared/components/Console'
import { uiCreators } from '../../redux'
import {
  isConsoleCollapsedSelector,
  isSiderCollapsedSelector
} from '../../redux/ui/selectors'
import { Header } from './Header'
import styles from './index.css'
import { Sider } from './Sider'
import { SubHeader } from './SubHeader'

type Props = {
  isSiderCollapsed: boolean,
  isConsoleCollapsed: boolean,
  isMobile: boolean,
  setSiderCollapsed: boolean => void,
  setConsoleCollapsed: boolean => void,
  children: React.Node,
  title: string
}

class Layout extends React.PureComponent<Props> {
  componentDidUpdate (prevProps) {
    if (prevProps.isMobile === false && this.props.isMobile) {
      this.setConsoleCollapsed(true)
    }
  }

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
      <div className={styles.mainFrame}>
        <Header />
        <SubHeader
          title={this.props.title}
          isSiderCollapsed={this.props.isSiderCollapsed}
          toggleSiderCollapse={this.toggleSiderCollapse}
          toggleConsoleCollapse={this.toggleConsoleCollapse}
        />
        <div className={styles.row}>
          <Sider />
          {this.props.children}
          <Console />
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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768
})

export default R.compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withSizes(mapSizesToProps)
)(Layout)
