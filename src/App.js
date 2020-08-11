import React from 'react';
import './App.css';
import Foodsearch from './components/foodsearch'
import axios from 'axios'
require('dotenv').config();




export default class App extends React.Component {
  state = {
    fdcId: "",
    protein: ""
  }

  // componentDidMount() {
  //   //const query = event.target.value;
  //   const API_KEY = '*********************'
  //   axios.get(`https://api.nal.usda.gov/fdc/v1/food/784416?api_key=${API_KEY}`)
  //     .then(res => {

  //       // const protein = res['data']['foodNutrients']['0']['amount'];
  //       // this.setState({ protein })

  //       console.log(res)

  //     })
  // }


  clickHandler = (event) => {


    if (event.keyCode === 13) {
      const query = event.target.value;
      //const API_KEY = process.env.API_KEY
      const API_KEY = '***************'
      axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${query}`)
        .then(res => {

          console.log(res)
          //this.setState({ results: res.data.results })
          const fdcId = res.data['foods']['1']['fdcId'];
          this.setState({ fdcId })

          const protein = res['data']['foods']['0']['foodNutrients']['8']['nutrientNumber'];
          this.setState({ protein })

          // const protein = res['data']['foodNutrients']['0']['amount'];
          // this.setState({ protein })
        })


    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.protein}</h1>
        <input onKeyDown={event => this.clickHandler(event)} />
      </div>
    )
  }


}

