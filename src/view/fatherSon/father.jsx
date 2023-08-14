import React, { PureComponent } from 'react'
import  Son from './son'
import eventBus from './utils/event-bus'

export class father extends PureComponent {
constructor(){
    super()
    this.state = {
        name: '',
        age:0,
        blood:false,
    }
}
    componentDidMount(){
        eventBus.on('gransonClick',this.gransonPrevClick,this)
    }
    gransonPrevClick(name,age,blood){
        this.setState({name, age, blood})
            console.log('father里面监听',name,age,blood);
       
    }
    componentWillUnmount(){ 
        eventBus.off('gransonClick',this.gransonPrevClick)
    }
  render() {
    const {name, age, blood} = this.state
    return (
        <>
      <div>father-{name}-{age}-{blood}</div>
      <Son></Son>
      </>
    )
  }
}

export default father