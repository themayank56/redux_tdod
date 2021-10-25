import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addbutton, deletebutton} from '../action/Action'
function Todo() {
    const [data, setData] = useState()
    const mydata = useSelector((state) => state.todo1.item_list);
    const dispatch = useDispatch();
    return (
          <div className="body">
            <div className="main_div">
              <div className="center_div">
                <div className="Add_item">
                  <h1>Add your Item</h1>
                </div>
                <div id="search">
                  <input 
                      type="text" 
                      name="search" 
                      placeholder="Add Item" 
                      value={data}
                      onChange={(event) => setData(event.target.value)}    
                  /> 
                  <i onClick={() => dispatch(addbutton(data),setData(''))} className="fas fa-plus"></i>
                  <div className="icons">  
                  </div>  
                </div>
                {
                  mydata.map((elem, id) => {
                      return(
                          <>
                          <div className="delete_item1">
                            <h1>{elem}
                              <i onClick={() => dispatch(deletebutton(id))} className="fas fa-trash-alt"></i>
                            </h1> 
                          </div> 
                         </>
                      )
                  })
                }
              </div>
            </div>
          </div>
        
    )
}

export default Todo;