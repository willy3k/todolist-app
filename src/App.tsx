import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer";
import { useTodo } from "./hooks/useTodo";


function App() {

  const { addTodo,toggleTodoCompleted, filteredTodoList,  clearCompleted, removeTodo, setFilter, filter } =  useTodo();


  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todoList={filteredTodoList}  toggleTodoCompleted={toggleTodoCompleted} setFilter={setFilter} filter={filter}
      clearCompleted={clearCompleted} removeTodo={removeTodo}></TodoList>
    </TodoContainer>
  )
}

export default App
