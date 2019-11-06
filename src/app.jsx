import React, { Component } from 'react';
import axios from 'axios';
import WelcomeContent from './WelcomeContent'
import LunchContent from './LunchContent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      foods: [],
      selectedDrinkURL: '',
      selectedFoodURL: '',
      mode: 'welcome',
    };
    this.handleClickEvent = this.handleClickEvent.bind(this)
    this.changeContent = this.changeContent.bind(this)
  }

  componentDidMount() {
    axios
      .get('/drinks')
      .then(response => response.data)
      .then(drinks => this.setState({ drinks: drinks.hits }));
    axios
      .get('/foods')
      .then(response => response.data)
      .then(foods => this.setState({ foods: foods.hits }));
  }

  handleClickEvent() {
    var _randomNumber = Math.floor((Math.random() * 19) + 1);
    this.setState({
      selectedDrinkURL: this.state.drinks[_randomNumber].largeImageURL,
      selectedFoodURL: this.state.foods[_randomNumber].largeImageURL,
      mode: 'changed',
    })
  }

  changeContent() {
    var content = null;

    if (this.state.mode === 'welcome') {
      content = <WelcomeContent />;
    } else {
      content = <LunchContent selectedFoodURL={this.state.selectedFoodURL} selectedDrinkURL={this.state.selectedDrinkURL} />
    }
    return content;
  }

  render() {
    return (
      <div className='container text-center text-light'>
        <div id='title'>
          Do Worry about What You will Eat or Drink
        </div>
        <hr></hr>
        {this.changeContent()}
        <div>
          <button type='button' className='button' onClick={this.handleClickEvent}>get your menu!</button>
        </div>
      </div>
    );
  }
}

export default App;
