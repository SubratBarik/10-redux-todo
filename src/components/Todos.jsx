import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    margin: "0 5% 0 5%",
  };

  const cellStyle = {
    border: "1px solid black",
    padding: "8px",
    margin: "0 auto",
    textAlign: "center",
  };

  const btnStyle = {
    border: "1px solid red",
    background: "red",
    padding: "5px 10px",
    color: "white",
    cursor: "Pointer"
  };

   return (
    <>
      <h1>Our ToDos</h1>
      <table style={tableStyle}>
        <tr>
          <th style={cellStyle}>UID</th>
          <th style={cellStyle}>Task</th>
          <th style={cellStyle}>Action</th>
        </tr>
        {todos.map((todo) => (
          // <li key={todo.id}>
          // {todo.text} 
          // <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          // </li>
          <tr key={todo.id}>
            <td style={cellStyle}>{todo.id}</td>
            <td style={cellStyle}>{todo.text}</td>
            <td style={cellStyle}><button style={btnStyle} onClick={() => dispatch(removeTodo(todo.id))}>X</button></td>
          </tr>
        ))}
      </table>      
    </>
  )
}

export default Todos;
