import React, { Component } from 'react'
 
class News extends Component {
  constructor(){
    super();
    this.state = {
      news: ['newa1', 'newa2', 'newa3'],
      countClick: 0
    }
  }

  handleDisplay = () => {
    //this.setState({countClick: this.state.countClick + 1});
    this.setState((prevState)=>{
      console.log(prevState)
      return {
        countClick: prevState.countClick +1
      };
    })
  }

  handleReset= () => {
      console.log('reset');
  }
  render() {
    const {news, countClick} = this.state;

    return (
      <div className='container'>
        <ul>
          {
            countClick &&  news.filter((val, key) => {
              if(++key <= countClick){
                return (
                  <li key={key}>{val}</li>
                )
              }
              
            }) || null
          }
        </ul>
        <button onClick={this.handleDisplay}>Display</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default News;
// Design, develop a class component in React called "News" with two buttons "display"  and "reset" at the bottom of the page and does the following :-
//    * On clicking the display button once "News1" should be displayed.
//    * On clicking the display button for the second time  "News1", "News2" should be displayed.
//    * On clicking the display button for the third time  "News1", "News2, News3" should be displayed.
//    * On clicking the display button for the fourth time nothing should happen. (As in