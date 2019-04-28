import * as React from 'react';
import './App.css';
import Artciles from './modules/Artciles'
import SideBar from './modules/SideBar'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <SideBar/>
          <Artciles/>
      </div>
    );
  }
}

export default App;
