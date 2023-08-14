import React, { PureComponent } from 'react'
import eventBus from './utils/event-bus'

export class granson extends PureComponent {
    prevClick(){
        console.log('上一个');
        eventBus.emit('gransonClick',"why",18,true)
    }
    nextClick(){
        console.log('下一个');
        eventBus.emit('gransonClick',"why1",181,false)

    }
  render() {
    return (
    <>
      <div>granson</div>
      <button onClick={e=>this.prevClick()}>上一个</button>
      <button onClick={e=>this.nextClick()}>下一个</button>
      </>
    )
  }
}

export default granson