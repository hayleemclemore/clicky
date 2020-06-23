import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ImageBlock from "./components/ImageBlock";
import pic from './images/sunset-1.jpg'
import pic2 from './images/sunset-2.jpg'
import pic3 from './images/sunset-3.jpg'
import pic4 from './images/sunset-4.jpg'
import pic5 from './images/sunset-5.jpg'
import pic6 from './images/sunset-6.jpg'
import pic7 from './images/sunset-7.jpg'
import pic8 from './images/sunset-8.jpg'
import pic9 from './images/sunset-9.jpg'
import pic10 from './images/sunset-10.jpg'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      cards: [
        {pic: pic, id: 1},
        {pic: pic2, id: 2},
        {pic: pic3, id: 3},
        {pic: pic4, id: 4},
        {pic: pic5, id: 5},
        {pic: pic6, id: 6},
        {pic: pic7, id: 7},
        {pic: pic8, id: 8},
        {pic: pic9, id: 9},
        {pic: pic10, id: 10},
      ],
      beenClicked: [],
      score: 0,
      message: "",
      highScore: 0
    }
  }

  handleClick = (id) => {
    console.log("you got clicked")
    function shuffle(a) {
      let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
  //console.log('WE GOT THE ID~!! in the on click', id)
  let oldBeenClicked = this.state.beenClicked
  if(oldBeenClicked.includes(id)) {
    let newHighScore = this.state.highScore
    if(this.state.score > newHighScore) {
      newHighScore = this.state.score
    }
    this.setState({score: 0, beenClicked:[], message:"Sorry, you lost!", highScore: newHighScore});
  }
  else{
    
    let score = this.state.score + 1
    let newBeenClicked = oldBeenClicked.concat(id)
    let newOrder = shuffle(this.state.cards)
    this.setState({cards: newOrder, beenClicked: newBeenClicked, score: score, message:""})
  }


  }

  render() {
    const styles = {
      picStyle: {
        height: '50px',
        padding:'40px'
      }
    }
    console.log('THIS IS OUR STATE!!', this.state)
    return (
      <div>
        <Navbar score={this.state.score} message={this.state.message} highScore={this.state.highScore}/>
        <Banner />
        {this.state.cards.map((singlePic)=> {
          return(<ImageBlock id={singlePic.id} click={this.handleClick} pic={singlePic.pic} />)
        })}
      </div>
    );
  }
}

export default App;
