import React from 'react';
import './App.css';
import Foodsearch from './components/foodsearch'
import axios from 'axios'




export default class App extends React.Component {
  state = {
    fdcId: "",
    protein: "",
    calories: "",
    caloriesName: "",
  }

  // componentDidMount() {
  //   //const query = event.target.value;
  //   const API_KEY = 'rdG3dmLctSpzifYsNJgexsOQBscsGjW0hOFQBQgp'
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
      const API_KEY = 'rdG3dmLctSpzifYsNJgexsOQBscsGjW0hOFQBQgp'
      axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${query}`)
        .then(res => {

          function filter(data, target,key){
            return data.filter(item =>  item[target] === key)
          }
          const target =  'nu'
          const key = 'protein'
          var x = [{ nu:'protein',value:10},{y:20},{z:10,nu:20}]
          
          const c = filter(x,target,key)
          console.log(c[0].value)

          console.log(res)
          //this.setState({ results: res.data.results })
          const fdcId = res.data['foods']['1']['fdcId'];
          this.setState({ fdcId })

          // const protein = result['0'].value;
          // this.setState({ protein })

          // const calories = 
          // this.setState({ calories })

          const caloriesName = res['data']['foods']['0']['foodNutrients']['10']['unitName'];
          this.setState({ caloriesName })

          // const protein = res['data']['foodNutrients']['0']['amount'];
          // this.setState({ protein })
        })


    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.protein} </h1>
        <h1>{this.state.calories} {this.state.caloriesName}</h1>
        <input onKeyDown={event => this.clickHandler(event)} />
      </div>
    )
  }


}

