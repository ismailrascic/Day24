import React, {Component} from 'react'

class App extends Component {
  setMyStorage = () => {
    document.cookie ="Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('fronted','React');
    }  
    getMyStorage ()  {
      let myCookieData = ("2021");
       let myLocalStorageData = localStorage.getItem('Paragon');
       let  mySessionStorageData =sessionStorage.getItem('fronted');
   
       console.log(myCookieData);
       console.log(myLocalStorageData);
       console.log(mySessionStorageData);     
    }  

  render(){
  return (
    <div className="App">
      <button type="button" onClick={() => this.setMyStorage()}>setMyStorage</button>
      <button type="button" onClick={() =>this.getMyStorage()}>getMyStorage</button>
  
   </div>

  );
  }  


}
export default App;