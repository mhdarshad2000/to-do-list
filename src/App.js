import React, { useState } from 'react';
import AddTaskForm  from './components/AddTaskForm.js'
import UpdateTaskForm from './components/UpdateTaskForm.js'
import ToDo from './components/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css';

function App() {

  //TAsks (ToDo List)
  const [toDo, setToDo] = useState([

  ]);

  // Temp State
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  //Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('')
    }
  }


  //Delete Task
  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask)
  }

  //mark Task
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task
    })
    setToDo(newTask)
  }

  //cancel Update
  const cancelUpdate = (id) => {
    setUpdateData('')
  }

  //Change Task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  }

  //update Task
  const updateTask = (id) => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject)
    setUpdateData('')

  }


  return (
    <div className='container App'>
      <br /><br />
      <h2>ToDoList</h2>
      <br /><br />


      {updateData && updateData ? (
        <UpdateTaskForm
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
        />
      ) : (
       <AddTaskForm 
       newTask={newTask}
       setNewTask={setNewTask}
       addTask={addTask}
       />
      )}


      {/* Display Todos */}
      {toDo && toDo.length ? '' : 'No Taskss...'}
      <ToDo 
      toDo={toDo} 
      markDone={markDone} 
      setUpdateData={setUpdateData}  
      deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
