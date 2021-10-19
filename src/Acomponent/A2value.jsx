import React from 'react'
import {deletebutton1, deleteall} from '../action/Action'
import {useDispatch,useSelector} from 'react-redux'
export default function A2value() {
    const list1 = useSelector((state) => state.login1.list);
    const dispatch = useDispatch();
    return (
        <>
          <h1>List Item</h1>
          <hr />
          {
              list1.map((itemvalue, id) => {
                  return(
                      <>
                        <h1>{itemvalue}
                        <button onClick={() => dispatch(deletebutton1(id))}>Delete</button>
                        </h1>
                       
                      </>
                  )
              })
          }
          <button onClick={() => dispatch(deleteall())}>Delete All</button>
         
        </>
    )
}
