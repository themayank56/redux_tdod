import React, {useState} from 'react'

function A1reacttodo() {
    const [inputEvent, setInputEvent] = useState();
    const [item, setItem] = useState([]);
    const onSubmit = () => {
        setItem((elem) => {
            return[...elem, inputEvent]
        })
        setInputEvent('')
    }
    const onDelete  = () => {
        setItem((elem) => {
            return elem.filter((elem, index) => {
                return index;
            })
        })
    }
    return (
        <>
        <h1>React To-do</h1>
        <input 
          placeholder="Add item"
          type="text" 
          value={inputEvent}
          onChange={(event) => setInputEvent(event.target.value)}
          />
        <button onClick={onSubmit}>Submit</button>
        {
            item.map((itenvalue, index) => {
                return(
                    <>
                      <h1>{itenvalue}
                      <button onClick={() => {
                          onDelete(index)
                      }}>Delete</button>
                      </h1>
                    </>
                )
            })
        }
            
        </>
    )
}

export default A1reacttodo;
