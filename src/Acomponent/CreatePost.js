import React,{useState} from 'react';
import shortid from 'shortid';
import { mayank,deletemayank } from '../action/Action';
import {useSelector, useDispatch} from 'react-redux'
const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const post_item = useSelector((state) => state.post2.post_item);
    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault()
        const newlist = {
            id:shortid.generate(),
            title: title,
            body: body
        }
        dispatch(mayank(newlist), setTitle(''),setBody(''))
    }
    return (
        <>
            
            <div id="post" className="container ">
                <div className="py-4">
                  <div className="card shadow">
                    <div className=" Add_item">
                       <h1>Create Post</h1>
                    </div>
                    <div id="add_button" className="card-body">
                    <form onSubmit={handelSubmit} >
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Post Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                        <textarea
                          rows="5"
                          className="form-control form-control-lg"
                          placeholder="Enter Post Body Text"
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          required
                        ></textarea>
                        <button type="submit" className="fas fa-plus"></button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
                {
                    post_item.map((elem, id) => {
                        return(
                            <>
                              <div id="display_item" className="container">
                                <div className="row">
                                  <div className="col-12">
                                  <div className="card">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 col-sm-12 ">
                                        <img  
                                          src={`https://source.unsplash.com/collection/${post_item.id}/1920x700`}
                                          alt={post_item.title}
                                          className="img-fluid"
                                          alt="put your image here"
                                        /> 
                                        </div>
                                        <div className="col-xl-7 col=md-6 col-sm-12 item">
                                            <h1>{elem.title}</h1>
                                            <p className="card-text">{elem.body}</p>  
                                        </div>
                                        <div className="col-xl-2 col=md-6 col-sm-12 delete_item2">
                                           <i onClick={() => dispatch(deletemayank(id))} className="fas fa-trash-alt"></i> 
                                        </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </>
                        )
                    })
                }
        </>
    )
}
export default CreatePost;