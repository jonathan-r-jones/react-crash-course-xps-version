import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const name = 'Brad'
  const x = false

  // Add Task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000 + 1)
    console.log(id)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?( 
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} />
      ) : ( 'No Tasks to Show')}
      <h2>Hello qq3 {name}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
      );
}

export default App;
