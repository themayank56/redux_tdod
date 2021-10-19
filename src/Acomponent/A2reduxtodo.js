import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addButton1,deletebutton1} from '../action/Action'

const A2reduxtodo = () => {
    const [dataList, setDataList] = useState();
    const list = useSelector((state) => state.login1.list);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Redux to-do</h1>
            <input 
              type="text" 
              placeholder="Add item" 
              value={dataList}
              onChange={(event) => setDataList(event.target.value)}
               />
            <button onClick={() => dispatch(addButton1(dataList), setDataList(' '))}>Add</button>
            <div>
            {
                list.map((itemvalue, id) => {
                    return(
                        <>
                          <h1>{itemvalue}
                          <button onClick={() => dispatch(deletebutton1(id))}>-</button></h1>
                         
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}

export default A2reduxtodo;
