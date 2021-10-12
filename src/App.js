import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    { 
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
  },
  {
      id:3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
  }
  ])

  const name = 'Brad'
  const x = false
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
      <h2>Hello qq3 {name}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
      );
}

export default App;