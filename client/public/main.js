import React from 'react';
import ReactDOM from 'react-dom';
import Lander from '../components/landing/landing.js';



//all components will be attached to this Page component. 
//Page component will be rendered to the html file
class Page extends React.Component {

constructor(props) {
	super(props);
	this.state = {
    user : null, 
 	}
 	this.changeLoggedInStatus = (username) => {
 		this.setState({username : username})
 	}


    render(){
      if (this.state.userLoggedIn === null) {return(
          <h6>
          	<Lander changeLogInFunction = {this.changeLoggedInStatus} />
          </h6>
        )
    	}
  	} else {return(
          <div>
          	<GamesView user = {this.state.user} />
          </div>
        )
    	}

}

ReactDOM.render(<Page />, document.getElementById('mount'))    