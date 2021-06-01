import React from 'react' 
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchRescues} from '../actions/fetchRescues'
import Rescues from '../components/Rescues'
import RescueShow from '../components/RescueShow'
import RescueForm from '../components/RescueForm'



class RescuesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRescues()
    }

    render(){
        return(
            <div>
                <Route path='/rescues/new' component={RescueForm}/>
                <Route path='/rescues/:id' render={(routerProps) => <RescueShow {...routerProps} rescues={this.props.rescues} /> } />
                <Route exact path='/rescues' render={(routerProps) => <Rescues {...routerProps} rescues={this.props.rescues} /> } />
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