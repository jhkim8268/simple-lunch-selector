import React, { Component } from 'react';

class LunchContent extends Component {
  render(){
    return(
      <div>
        <div className='row'>
          <img name='food' className='img-fluid' src={this.props.selectedFoodURL} width='300' height='300'></img> 
          <img name='drink' className='img-fluid' src={this.props.selectedDrinkURL} width='300' height='300'></img>
        </div>
        <div className='text-center'><strong>Bone Apple Tea!</strong></div>
      </div>
    )
  }
}

export default LunchContent