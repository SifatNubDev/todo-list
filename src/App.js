import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {TodoItem} from './MyComponents/TodoItem';
import {AddTodo} from './MyComponents/AddTodo';
import { useState } from 'react';

function App() {

  const Delete = (todo) => {
    console.log("Clicked", todo)

    setTodos(todos.filter((remove)=>{
      return remove!==todo;
    }))
  }

  const addTodo = (title, desc,) => {
    console.log(title, desc);
    let SL;
    if(todos.length===0){
      SL = 0;
    }
    else {
      let SL = todos[todos.length-1].sno + 1;
    }
    
    const mylist = {
      serial : SL,
      title : title,
      Description : desc,
    }
    setTodos([...todos, mylist]);
    console.log(mylist);
  }

  const [todos, setTodos] = useState([
    {
      SL : 1,
      title : "Learn React",
      Description : "Watch React tutorial videos for few hours"
    },
    {
      SL : 2,
      title : "Pray Salat",
      Description : "Pray Duhr with Jama't"
    },
    {
      SL : 3,
      title : "Have Lunch",
      Description : "Eat shitty lunch provided by softopark"
    }
  ])
    
  return (
    <div classNameName="App">
      <Header title="MyList"/>
      <AddTodo addTodo={addTodo}/>
      <Todos list={todos} Delete={Delete}/>
      <Footer/>
    </div>
  );
}

export default App;
