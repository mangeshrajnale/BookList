import React, { Component } from 'react'

export default class Book extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    };
    
  }
addCount = () => {
this.setState({
count:this.state.count+1
});
};
lowerCount = () => {
  this.setState({
  count:this.state.count-1
  });
  };
  resetCount = () => {
    this.setState({
    count:0
    });
    };

  render() {
   const {img,title,author}=this.props.info 
    return (
      <div className='book'>
       <img src={img} width="150 px" alt="book" />
       <div>
         <h4>Title:{title}</h4>
         <h6>by:{author}</h6>
         <button onClick={this.addCount}>Add Count</button>
         <button onClick={this.lowerCount}>Lower Count</button>
         <button onClick={this.resetCount}>Reset Count</button>
         <h1>count:{this.state.count}</h1>
         <h3>{this.state.name}</h3>
       </div>
      </div>
    );
  }
}
