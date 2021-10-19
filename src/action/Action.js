export const addButton1 = (data) => {
    return{
        type: "ADD_BUTTON1",
        data: data
    }
};

export const deletebutton1 = (id) => {
    return{
        type: "DELETE_BUTTON1",
        id: id
    }
}
export  const deleteall = (deleteall) => {
    return{
        type: "DELETE_ALL",
        deleteall: deleteall

    }
}

