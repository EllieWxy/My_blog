import * as React from 'react';
import * as ReactDom from 'react-dom'
import Sidebar from 'modules/SideBar'
import Articles from 'modules/Articles'

import * as style from './App.less'

class App extends React.Component {
  render() {
    return (
      <div className={style.App}>
        <Sidebar />
        <Articles />
      </div>
    );
  }
}

declare const module: any

if (module.hot) {
    module.hot.accept()
}
ReactDom.render(<App />, document.getElementById('root') as HTMLElement)
