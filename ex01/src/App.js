import React, {Component} from 'react'

class App extends Component {
  setMyStorage ()  {
    document.cookie ="Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('fronted','React');
    }  

  render(){
  return (
    <div className="App">
      <button type="button" onClick={() => this.setMyStorage()}>setMyStorage</button>
    </div>
  );
  }  


}
 
export default App;


