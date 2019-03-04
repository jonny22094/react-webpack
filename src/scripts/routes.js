//@flow
import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import loadable from '@loadable/component'

const Router = {
  Landing: loadable(() => import('@app/pages/Landing')),
  Missing: loadable(() => import('@app/pages/Missing'))
}

class Routes extends Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Router.Landing}/>
          <Route component={Router.Missing}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes