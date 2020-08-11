//const { ReactComponent } = require("*.svg");
import React from 'react';
import axios from 'axios';

export default class Foodsearch extends React.Component {
    state = {

    }

    componentDidMount() {
        //const query = event.target.value;
        const API_KEY = process.env.API_KEY
        axios.get(`https://api.nal.usda.gov/fdc/v1/food/784416?api_key=${API_KEY}`)
            .then(res => {

                console.log(res)

            })
    }//784416

}


