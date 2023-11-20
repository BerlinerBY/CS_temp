import './App.css';
import { Fragment } from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';


function App() {
  return (
    <Fragment>
      <div className="App">
        <div className="App-SideBar">
          <SideBar/>
        </div>
        <div className="App-Content">
          <Content/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

// кнопка logout ачышчае стан redux