import React, { Component } from 'react'
import './style.css'
export class ChickOne extends Component {
    constructor(){
        super()
        this.state = {
            activeIndex:0
        }
    }
    handelClick(i){
        this.setState({activeIndex:i})
        this.props.onClick(i)
    }
  render() {
    const {list} = this.props
    const {activeIndex} = this.state
    return (
      <div className='tab-control'>{
        list.map((item, index) =>{
            return(
                <div className={`tab-name ${activeIndex === index?'active':''}`} key={item} onClick={()=>this.handelClick(index)}>
                    <span className='tab-list'>{item}</span>
                </div>
            )
        
        })
      }</div>
    )
  }
}

export default ChickOne