import React, {useState, useReducer} from 'react';
import './App.css';
import BurgerMenu from './BurgerMenu/BurgerMenu'
import { useRef } from 'react';

function App() {
  const [message, setMessage] = useState(null)

  const callbackFunction = (e) => {
      setMessage(e.target)
      console.log("Parant GELIK ", e)
  }

  const myOpeningAllert = () =>{
    // alert("it opening!!!!!")
    console.log("Click to open!!!!!")
  }

  const myClosingAllert = () =>{
    // alert("it close!!!!!")
    console.log("Click to close!!!!!")
  }

  const myStartTtansition = ()=>{
    console.log("entering!!!!!")
  }

  const myCloseTtansition = ()=>{
    console.log(" Menu has entered!!!!!")
  }

  const onExiting = ()=>{
    console.log("start close transition ")
  }

  const onExited = ()=>{
    console.log("Menu closed ")
  }

  const buttonContainer = useRef()
  const [menuAnimation,setMenuAnimation] = useState("slideLeft")
  const chooseStyle = (e) => {
    e.preventDefault();
    [...buttonContainer.current.children].map(item =>{ 
      item.classList.remove('current_style');
    })
    e.target.classList.add('current_style')
    setMenuAnimation(e.target.text)
  }

  return (
    <div className="App">
      <div className="menuBar">
              <BurgerMenu 
                    // width= {'auto'}
                    height = {'auto'}
                    isOpen  = {false}
                    onEnter={myOpeningAllert} 
                    onEntering={myStartTtansition}
                    onEntered = {myCloseTtansition}

                    onExit={myClosingAllert} 
                    onExiting = {onExiting}
                    onExited = {onExited}
                    onMenuItemClick = {callbackFunction}
                    // buttonBorder = {true}
                    // transitionDuration="0.6"
                    menuAnimation = {menuAnimation}
                    // buttonBorder = "true"
                    menuBarTop = {70}
                    classes={{line: "bgRed"}} 
                    >
                  <button dtat-href="#hi" >illustrations</button>
                  <button data-href="#hello" >about</button>
              </BurgerMenu>
        </div>
      <div className="wrapper">
        <div className="container">
          <h1>animated-burger-menu</h1>
          <div className="button_container" ref={buttonContainer}>
            <a className="current_style" onClick={chooseStyle}>slideLeft</a>
            <a onClick={chooseStyle}>fallDown</a>
            {/* <a onClick={chooseStyle}>doteLeft</a> */}
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;