import React, { Component } from 'react'

export class SonView extends Component {

addClick(count){
    console.log(this.props);
    this.props.faclick(count)
}
  render() {

    return (
      <div>
        <button onClick={()=>this.addClick(1)}>+1</button>
        <button onClick={()=>this.addClick(5)}>+5</button>
        <button onClick={()=>this.addClick(10)}>+10</button>
      </div>
    )
  }
}

export default SonView