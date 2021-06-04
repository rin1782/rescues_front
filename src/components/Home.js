import React from 'react' 
import {Route, Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
        <h1>The Underdog Rescue Network</h1>
        <p>Where dog lovers can work together<br></br>
            until every dog has a home!</p>
        <img src="https://i.pinimg.com/originals/1b/72/ab/1b72abba256fd82a71165d626807a875.png" width="300px" height="175px" alt="adopt don't shop"/>
        </div>
    )
}

export default Home