import React from 'react';
import { Provider } from "mobx-react"
import store  from './store'
import './App.css';
import Home from "./pages/home/home"
function App() {
  return (
    <div className="App">
      {/* 注入store */}
      <Provider store={store}>
      你好!      
      <Home/>
      </Provider>
    </div>
    
  );
}

export default App;
