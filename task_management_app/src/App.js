import React from 'react'
import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Management Application</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
    
  );
}

export default App;
