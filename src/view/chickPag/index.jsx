import React, { Component } from 'react'
import ChickOne from './chickOne'
export class ChickPag extends Component {
    constructor(){
        super()
        this.state={
            list:['流行','最新','精选'],
            activeText:0
        }
    }
    handelChick(index){
        this.setState({activeText:index})
    }
  render() {
    const {list,activeText} = this.state
    return (
      <div>
   
        <div><ChickOne list={list} onClick={index=>this.handelChick(index)}/></div>
        <h1>{list[activeText]}</h1>
      </div>
    )
  }
}

export default ChickPag