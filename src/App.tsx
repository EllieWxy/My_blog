import * as React from 'react';
import * as ReactDom from 'react-dom'
import Sidebar from 'modules/SideBar'
import Artciles from 'modules/Artciles'

import * as style from './App.less'

class App extends React.Component {
  render() {
    return (
      <div className={style.App}>
        <Sidebar />
        <Artciles />
      </div>
    );
  }
}

declare const module: any

if (module.hot) {
    module.hot.accept()
}
ReactDom.render(<App />, document.getElementById('root') as HTMLElement)
