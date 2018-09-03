// @flow strict

import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route } from 'react-router-dom'

import icon from '../favicon.ico'
import { Dashboard } from '../modules/Dashboard'
import { Layout } from './_Layout'

export const App = () => (
  <React.Fragment>
    <Helmet>
      <link rel='shortcut icon' href={icon} />
    </Helmet><BrowserRouter>
      <Layout>
        <Route path='/' component={Dashboard} />
      </Layout>
    </BrowserRouter>
  </React.Fragment>
)
