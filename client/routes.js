import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { Graph } from './components'
/**
 * COMPONENT
 */
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route component={Graph} />
            </Switch>
        )
    }
}

/**
 * CONTAINER
 */

export default withRouter(Routes)
