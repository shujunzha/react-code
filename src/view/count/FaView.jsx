import React, { Component } from 'react'
import SonView from './SonView'
export class FaView extends Component {
  constructor(){
    super()
    this.state={
      countNum:10
    }
  }
  facount(e){
    this.setState({countNum:this.state.countNum+e});
  }
  render() {
    const {countNum} = this.state
    return (
      <div>
        <div>数字：{countNum}</div>
        <SonView tiele='nahasduhisdghu' faclick={(c)=>{this.facount(c)}}/>
      </div>
    )
  }
}

export default FaView