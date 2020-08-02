import React, {useState} from 'react';
import './App.css';
import BurgerMenu from './BurgerMenu/BurgerMenu'

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

  console.log(message)

  return (
    <div className="App">
      <div className="App-header" >
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
                      buttonBorder = {true}
                      // transitionDuration="0.6"
                      menuAnimation = "fallDown"
                      // buttonBorder = "true"
                      // menuBarTop = {125}
                      classes={{line: "bgRed"}} 
                      >
                    <button dtat-href="#hi" >illustrations</button>
                    <button data-href="#hello" >about</button>
                </BurgerMenu>

          </div>
      </div>
    </div>
  );
}

export default App;