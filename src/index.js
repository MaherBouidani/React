import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';
import axios from 'axios';
import Contest from './Contest';




// console.log(data.contests[0]['categoryName']);
// console.log('catogry name:' +''+ obj[key]['categoryName'])

// var obj = data.contests; 
// for (var key = 0; key < obj.length; key++){
//         console.log('key' + key + obj[key]['id'])
// }
// obj.array.forEach((key) => 
//     console.log(key)
// )
axios.get('/api/contests')
        .then(res => {
            ReactDOM.render(
                <App initialContests={res.data.contests}/>, 
                document.getElementById('root')
            );
        })
        .catch(console.error);



// setTimeout (() => {
//     ReactDOM.render(
//         <h1>......</h1>,
//         document.getElementById('root')
//     );

// }, 4000);


// setTimeout(set, 4000);

// function set() {
//     ReactDOM.render(
//             <h1>......</h1>,
//                 document.getElementById('root')
//            );
// }




