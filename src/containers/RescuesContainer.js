import React from 'react' 
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchRescues} from '../actions/fetchRescues'
import Rescues from '../components/Rescues'
import Rescue from '../components/Rescue'
import RescueForm from '../components/RescueForm'



class RescuesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRescues()
    }

    render(){
        return(
            <div>
              <Switch>
                <Route path='/rescues/new' component={RescueForm}/>
                <Route path='/rescues/:id' render={(routerProps) => <Rescue {...routerProps} rescues={this.props.rescues} /> } />
                <Route path='/rescues' render={(routerProps) => <Rescues {...routerProps} rescues={this.props.rescues} /> } />
              </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rescues: state.rescues
    }
}

export default connect(mapStateToProps, {fetchRescues})(RescuesContainer)