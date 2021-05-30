import React from 'react' 
import {connect} from 'react-redux'
import {fetchRescues} from '../actions/fetchRescues'
import Rescues from '../components/Rescues'
import RescueForm from '../components/RescueForm'


class RescuesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRescues()
    }

    render(){
        return(
            <div>
                <RescueForm/><br></br>
                <Rescues rescues={this.props.rescues}/>
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