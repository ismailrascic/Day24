import React, {Component} from 'react'

class App extends Component {
  setLocalStorage = () => {
    
    localStorage.setItem('Arena', 'Selection Month')
    
    }  
    getLocalStorage = () => {
     var myLocalStorageData = localStorage.getItem('Arena');
     return myLocalStorageData;
    
   }  
  

    render(){
  return (
    <div className="App">
      <button onClick="setLocalStorage()">setLocalStorage</button>
      <button  onClick="getLocalStorage()">getLocalStorage</button>
    
    </div>
  );
  }  


}

export default App;