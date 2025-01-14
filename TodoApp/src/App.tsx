import React, { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./types/todo"


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodohandler = (title: string) => {
    const id = Math.floor(Math.random() * 1000)
    setTodos(
      [...todos,
      {
        id,
        title,
      }])
  }
  const removeHandler = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id))
  }

  return (
    <main className="max-w-7xl mx-auto m-5">
      <AddTodo onAddTodo={addTodohandler} />
      <TodoList todos={todos}  onRemoveTodo={removeHandler}/>
    </main>
  )
}

export default App