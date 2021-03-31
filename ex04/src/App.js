import React, {Component} from 'react'

class App extends Component {
  setLocalStorage () {
    
    localStorage.setItem('Arena', 'Selection Month')
    
    }  
    getLocalStorage (){
     let myLocalStorageData = localStorage.getItem('Arena');
     console.log(myLocalStorageData)
    
   }  
  

    render(){
  return (
    <div className="App">
      <button onClick={() => this.setLocalStorage()}>setLocalStorage</button>
      <button  onClick={() => this.getLocalStorage()}>getLocalStorage</button>
    
    </div>
  );
  }  


}

export default App;
