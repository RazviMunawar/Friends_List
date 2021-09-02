import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Plan from './Components/Plan';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleAdd = () => {
    if(text !== ""){
      setItems([...items, text]);
      setText("");
    }
  }

  const handleDelete = (id) => {
    const newItem = items.filter( (ele, i) => {
      return i !== id
    });
    setItems([...newItem]);
  }
 
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className="text-center">To Do List</h2>
          <div className="row">
            <div className="col-9">
              <input type="text" className="form-control" placeholder="Write plan here..." onChange={ handleChange } value={ text } />
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 font-weight-bold" onClick={ handleAdd }>Add</button>
            </div>
            <div className="container-fluid">
              {/* <ul className="list-unstyled row m-5">
                {
                  items.map( (value, i) => {
                    return <Plan sendData={ handleDelete } key={i} id={ i } value={value} />
                  })
                }
              </ul> */}
              <ul className="list-unstyled row m-5">
                <Plan sendData={ handleDelete } items={items} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
