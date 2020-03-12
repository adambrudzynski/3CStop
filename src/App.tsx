import React from 'react';
import { StopList } from './Components/List/List';
import 'semantic-ui-css/semantic.min.css'
import './app.css'


const App =() =>{
  return (
    <div className='main'>
      <StopList key='list' />
    </div>
  );
}

export default App;
