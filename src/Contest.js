import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Paper, Typography, Button } from '@material-ui/core';




class Contest extends Component {
    constructor(props) {
        super(props);
        this.state = {per:[]}       
    }

componentDidMount(){
             axios.get(`/api/contests/${this.props.pageID}`)
                       .then(resp => {
                           const per =   resp.data; 
                           this.setState({ per });
                           
                        })
                       .catch(console.error);
            
}
    render() {
    return (
        <div>
            <Typography>
            {this.state.per.description}
            </Typography>
        </div>
    );
}
}



export default Contest;