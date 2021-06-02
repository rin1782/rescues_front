import React from 'react' 
import {Route, Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
        <h1>Welcome to The Underdog Rescue Network</h1>
        <h4>Use the links above to search our current Rescue Centers and view their pets<br></br>
            or if you'd like, create your own!</h4>
        <img src="https://i.pinimg.com/originals/1b/72/ab/1b72abba256fd82a71165d626807a875.png" width="500px" height="425px" alt=""/>
        </div>
    )
}

export default Home