import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TasksPage from './components/TasksPage'

const mockTasks = [
    {
      id: 1,
      title: 'Learn Redux',
      description: 'The store, actions, and reducers, oh my!',
      status: 'In Progress',
    },

    {
      id: 2,
      title: 'Peace on Earth',
      description: 'No big deal.',
      status: 'In Progress',
    },
]

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={mockTasks}/>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
