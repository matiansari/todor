import { useState } from 'react';
import './App.css';

function App() {
  //state to hold the input value 
  const [input, setInput] = useState("");
  //store data of input value 
  const [data, setData] = useState([])

  // state to hold the index of the being edited
  const [editIndex, setEditIndex] = useState(null);


  // event handle for input field
  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);


  }
  const addItem = () => {
    if (!input) {
      alert('please enter value');
    } else if (editIndex !== null) {
      //Update existing item if in edit mode 
      const updateData = [...data];
      updateData[editIndex] = input;
      setData(updateData);
      setEditIndex(null);
      setInput('');

    }
    else {
      setData([...data, input]);
      setInput('');
    }
  }

  const deleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const ediItem = (index) => {
    setEditIndex(index);
    setInput(data[index]);

  }




  // const deleteItem = (index) =>{
  //   const newTodo = data.filter((val,todoid)=>{
  //     return id!==todo.id;
  //   });
  //   setData(newTodo);

  // }

  return (
    <div className="App">
      <div className='todo'>
        <div className='todo-top'>
          <h1>Todos</h1>
          <input type='text' value={input} placeholder='Enter Todos ' onChange={handleInput} />
          <button onClick={addItem}>{editIndex !== null ? 'update' : 'Add'}</button>

        </div>
        <div list>
          <ul>
            {data.map((val, index) => {
              return <li key={index}>
                {/* {val} */}

                {index === editIndex ? (
                  <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                ) : (
                  <span >{val}</span>
                )}
                <button onClick={() => (index === editIndex ? addItem() : ediItem(index))} >{index === editIndex ? 'done' : 'edit'}</button>
                <button onClick={() => deleteItem(index)}>del</button>
              </li>

            })
            }
          </ul>
        </div>
      </div>


    </div>
  );
}

export default App;
