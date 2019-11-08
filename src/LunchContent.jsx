import React, { Component } from 'react';

class LunchContent extends Component {
  render() {
    return (
      <div>
        <div className='grid'>
          <img name='food' className='img-fluid' src={this.props.selectedFoodURL} ></img>
          <img name='drink' className='img-fluid' src={this.props.selectedDrinkURL}></img>
        </div>
        <div>Bone Apple Tea!</div>
      </div>
    )
  }
}

export default LunchContent
