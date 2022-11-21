
import './App.css';
import AppEmergenceBtn from "./components/app-emergenceBtn/app-emergenceBtn";
import AppTaskbar from "./components/app-taskbar/app-taskbar";
import AppDate from "./components/app-date/app-date";
import AppTaskCategories from "./components/app-task-categories/app-task-categories";
import AppTaskList from "./components/app-tasklist/app-tasklist";
import {useState} from "react";



function App() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = (e) => {
        if (todo !== "") {
            e.preventDefault();
            setTodos([...todos, todo]);
            setTodo("")
        }
    }

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text
        })
        setTodos(newTodos)
    }


  return (
      <div className="app">
          <AppEmergenceBtn />
          <AppTaskbar todo={todo} setTodo={setTodo} addTodo={addTodo}/>
          <AppTaskCategories/>
          <AppTaskList list={todos} deleteTodo={deleteTodo}/>
          <AppDate/>
      </div>
  );
}

export default App;
