import React, {Component} from 'react'

class App extends Component {
  setMyStorage = () => {
    document.cookie ="Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('fronted','React');
    }  
    getMyStorage = () => {
      let myCookieData = ("2021");
       let myLocalStorageData = localStorage.getItem('yes, but Arena first');
       let  mySessionStorageData =sessionStorage.getItem('React');
     return{myCookieData,myLocalStorageData,mySessionStorageData}; 
    
     
    }  

  render(){
  return (
    <div className="App">
      <button type="button" onClick={this.setMyStorage()}>set</button>
      <button type="button" onClick={this.getMyStorage()}>get</button>
   <p>{this.mySessionStorageData}</p>
   </div>

  );
  }  


}

export default App;
