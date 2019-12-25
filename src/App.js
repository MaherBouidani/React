import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';


class  App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {contests: this.props.initialContests }       
    }

   componentDidMount() {
    }

    render(){
    return (
        <div className="App">


          
            <ContestPreview {...this.state.contests}/>
            

         </div>
         
    );
}
}

export default App