import React, { Component } from 'react'

 class ClassState extends Component {
  
    constructor() {
      super()
    this.name='aditi'
      this.state = {
        num:0
      }
    }
     incrementNum=()=>{
        this.setState({
            num:this.state.num+1
        });
     }


  render() {
    return (
      <div>
        <h2>Number :{this.state.num}</h2>
        <h3>This is class component</h3>
        <h4>Company Name: {this.props.company}</h4>
        <button onClick={this.incrementNum}>Click Me</button>
      </div>
    )
  }
}
export default ClassState;