import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './app.css'
import Content from './Components/Content';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';


const App = () => {
  return (
    <ErrorBoundary >
      <Content key='list' />
    </ErrorBoundary>
  );
}

export default App;
