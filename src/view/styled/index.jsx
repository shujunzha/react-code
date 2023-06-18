import React, { PureComponent } from 'react'
import {AppWrapper} from './style'
export class Index extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <div className="section">
            <h2 className='title'>我是标题</h2>
            <p className='contant'>我是内容</p>
        </div>
        <div className="footer">
            <p>免责声明</p>
            <p>版权问题</p>
        </div>
      </AppWrapper>
    )
  }
}

export default Index