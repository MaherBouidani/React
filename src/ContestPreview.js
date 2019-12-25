import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Contest from './Contest';



const useStyles = makeStyles(() => ({
    paper: {
        height: 140,
        justifyContent: 'center',
        width: 1200,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 5,
        marginBottom: 20,
        boxShadow: '1px 0px 20px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    },
    container: {
        justifyItems: 'center'
    },
    button: {
        marginTop: 50,
        marginLeft: 600
    }
}));

export default function ContestPreview(contests) {
    const classes = useStyles();

    const [header, setPageHeader] = useState('Naming Contest');
    const [conId, setIds] = useState(0);
    const fetchContest = function (a) {
        pushHistory({ currentId: a.id },
            `/contests/${a.id}`
        );
        setPageHeader(a.contestName);
        setIds(a.id);
    };
    const pushHistory = (obj, url) =>
        window.history.pushState(obj, '', url);


    // var journal = [];

    // var object1 = {
    //     val: 10,
    //     val2: 20
    // };

    // var object2 = {
    //     val: 10,
    //     val2: 20
    // };
    // function addEntry(events, val) {
    //     journal.push(events, val);
    // }
    // addEntry(["work", "touched tree", "pizza",
    //     "running", "television"], false);
    // addEntry(["delo", "touched", "pizza",
    //     "running", "tele"], true);


    // console.log(journal);
    // Object.keys(object1).map(function (element) {
    //     if (object1[element] == object2[element]) {
    //         console.log(true)
    //     } else {
    //         console.log(false)
    //     }
    // })

    // var jour = [
    //     {
    //         events: "pizza",
    //         squirrel: false
    //     },
    //     {
    //         events: "work",
    //         squirrel: false
    //     },
    //     {
    //         events: "weekend",
    //         squirrel: true
    //     },
    // ];



    // var str = "Hi!-Welcome-to-Deloitte"

    // let strWord = str.split("-");
    // console.log(strWord);

    // console.log(strWord.join(""))

    // var listOfObjects = [];
    // var a = ["car", "bike", "scooter"];
    // a.forEach(function (entry) {
    //     var singleObj = {}
    //     singleObj['type'] = 'vehicle';
    //     singleObj['value'] = entry;
    //     listOfObjects.push(singleObj);
    // });

    // console.log("listOfObjects", listOfObjects);

    // class Node {
    //     constructor(data, next=null){
    //         this.data = data;
    //         this.next = next;
    //     }
    // }
    // //  const n1 = new Node (100);
    // //  console.log(n1);

    //  class LinkedList {
    //      constructor(){
    //          this.head = null;
    //          this.size = 0;
    //      }
    //      //Insert the first node 
    //      inserFirst(data){
    //          this.head = new Node(data, this.head);
    //          this.size++;
    //      }

    //      //Insert the last node 
    //      insertLast(data){
    //          let node = new Node(data);
    //          let current;

    //          if (!this.head){
    //              this.head = node 
    //          }
    //          else {
    //             current = this.head;
    //             console.log("current f", current)
    //             while(current.next){
    //                 current = current.next;
    //                 console.log("current s", current)
    //             }
    //             current.next=node
    //             console.log("current next", current.next)
    //          }

    //          this.size++; 
    //         }

    //      //Get at Index 
    //      insertAtIndex(data, indx){
    //          let node = new Node (data);
    //          let current, prev;



    //      }

    //      //Remove at Index

    //      //Clear the List 

    //      //Print the List data

    //  }

    // //  const ll = new LinkedList();
    
    // //  ll.inserFirst(200);
    // //  ll.inserFirst(100);
    // //  ll.insertLast(300);
    // //  console.log(ll);


    // //  ll.inserFirst(200);
   

     

    // // console.log(max.sort((a, b) => a-b))

    // // function maxCalculate(arr) { 
    // //     let index = arr.length - 1 
    // //     console.log(arr) 
    // //     for (var i =0; i<arr.length; i++){
    // //         if(arr[i] > arr[i+1]){
    // //            var tmp = arr[i];
    // //            console.log(tmp)
    // //            arr[i] = arr [i+1];
    // //            console.log("arr i ", arr[i])
    // //            arr[i+1] = tmp;
    // //           console.log("arr +1", arr[i+1])
    // //         }
    // //     }

    // //     console.log(arr)

    // //     console.log("the max number is: ",  arr[index])
    // // }

    // // maxCalculate(max);



    return (
        <Grid container className={classes.container}>
        <Grid item xs={12}>
        
        <Header headerMessage={header} />
        </Grid>
        {header !== 'Naming Contest' ? <Contest pageID={conId}/> :
            Object.keys(contests).map(contest => (
                <Paper className={classes.paper}>
                <Grid item xs={3}>
                        <Typography>
                            {contests[contest].categoryName}
                        </Typography>
                        {contests[contest].contestName}
                        <Button variant="contained" color="primary" className={classes.button} onClick={fetchContest.bind(this, contests[contest])}>
                            Run
            </Button>
                  
                </Grid>
                </Paper>
            ))
        }
        </Grid>
    );
}


ContestPreview.propTypes = {
    contests: PropTypes.object,

};


