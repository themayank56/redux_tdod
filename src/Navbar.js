import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <div>
              <div className="add_button">
                <NavLink className="navlink " to="todo" exact>
                  <button type="button" className="btn btn-outline-success">Add To-Do</button>
                </NavLink>
                <NavLink className="navlink " to="createPost" exact>
                  <button type="button" className="btn btn-outline-success">Create Post</button>
                </NavLink>
              </div>  
            
            
        </div>
    )
}

export default Home
