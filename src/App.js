import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  /*for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
      date: new Date().getFullYear()+"-"+(new Date().getMonth()+1)+ "-"+new Date().getDate(),
    });
  }*/
  return array;
}


function todoReducer(todos, action) {	// todoReducer함수 만듬.
  switch (action.type) {
    case `INSERT`:
      todos.concat(action.todo); 

      if(new Date().getFullYear()+"-"+(new Date().getMonth()+1)+ "-"+new Date().getDate() == action.todo.date)return todos.concat(action.todo);
      else{
        return todos;
      }
    case `REMOVE`:
      return todos.filter(todo => todo.id !== action.id);
    case `TOGGLE`:
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [ todos, setTodos ] = useState ([
  //   {
  //     id: 1,
  //     text: '텍스트 01',
  //     checked: false
  //   },
  //   {
  //     id: 2,
  //     text: '텍스트 02',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     text: '텍스트 03',
  //     checked: false
  //   }
  // ]);

  // const nextId = useRef(4);

  // ============================= useState 사용 ============================= //

  // const [todos, setTodos] = useState(createBulkTodos);

  // const nextId = useRef(2501);

  // const onInsert = useCallback(
  //   text => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false
  //     };
  //     setTodos(todos.concat(todo));
  //     nextId.current +=1;
  //   },
  //   [todos]
  // );

  // const onRemove = useCallback(
  //   id => {
  //     setTodos(todos.filter(todo => todo.id !==id));
  //   },
  //   [todos]
  // );

  // const onToggle = useCallback(
  //   id => {
  //     setTodos(
  //       todos.map(todo =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo),
  //     );
  //   }, [todos]
  // );
  
  
  // return (
  //   <TodoTemplate>
  //     <TodoInsert onInsert={onInsert} />
  //     <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  //   </TodoTemplate>
  // );


  // ============================= useReducer 사용 ============================= //

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  const nextId = useRef(6);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        date: new Date().getFullYear()+"-"+(new Date().getMonth()+1)+ "-"+new Date().getDate(),
      };
      dispatch({ type: 'INSERT', todo});
      nextId.current +=1;
      console.log("투두리스트");
      console.log(todos);
    },
    []
  );

  const onRemove = useCallback(
    id => {
      dispatch({ type: 'REMOVE', id });
    },
    []
  );

  const onToggle = useCallback(
    id => {
      dispatch({ type: 'TOGGLE', id });
    }, []
  );
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );

}

export default App;