import React from 'react';
import Child from './Child';
import {Button} from 'antd';
import  './index.less';


export default class Life extends React.Component{
  constructor(props){
     super(props);
     this.state={
       count:0
     }
  }     
  handerAdd=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  handerJian=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
    render(){
        return(
          <div className='content'>
              <p>生命周期介绍</p>
              <button onClick={this.handerAdd}>加法</button>
              <button onClick={this.handerJian}>减法</button>
              <p>{this.state.count}</p>
                 <Button type='primary'>提交</Button>
              <Child name='xph'></Child>
          </div>
        )
      }
}