import React, { PureComponent } from 'react'
import classNames from 'classnames'
export class index extends PureComponent {
  constructor(){
    super()
    this.state = {
      isTrue : false
    }
  }
  render() {
    const { isTrue } = this.state
    return (
      <>
      <div className={`aaa ${isTrue?"bbb":""}`}>index</div>
      <h3 className='aaa bbb'>呵呵呵</h3>
      <h3 className={classNames('aaa','vb')}>呵呵呵</h3>
      <h3 className={classNames('aaa',{qqq:isTrue})}>对手的防守</h3>
      </>
    )
  }
}

export default index