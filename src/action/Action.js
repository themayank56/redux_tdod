export const addbutton = (value) => {
    return{
        type: "ADD_BUTTON",
        value:value
    }
}
export const deletebutton = (value) => {
    return{
        type: "DELETE_BUTTON",
        value:value
    }
}

  // create a post
export const createPost = (data) => ({
    type: "CREATE_POST",
    data: data,
});

//list item page

export const mayank = (data) =>{
    return{
        type:"ADD",
        data:data
    }
}
export const deletemayank = (data) =>{
    return{
        type:"DELETE",
        data:data
    }
}

