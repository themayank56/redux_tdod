const initialstate ={
    item_list:[]
}
const itemreducer = (state=initialstate, action) => {
    switch(action.type){
        case "ADD_BUTTON":
            return{
                ...state,
                item_list:[
                    ...state.item_list,
                    action.value
                ]
            }
        case "DELETE_BUTTON" :
            const newList = state.item_list.filter((elem, id) => {
                return id
            })
            return{
                ...state,
                item_list:newList
            }
        default: return state;
    }
}


  //create post page
  const inistate = {
      post_item:[
          {
              id:0,
              title: "Demo",
              body: "Paragraphs Demo. The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph ..."
          },
      ]
  };
const mayankreducer = (state = inistate, action) => {
    switch(action.type){
        case "ADD":
            return{    
                post_item:[
                    ...state.post_item,
                        action.data
                ]
            }
        case "DELETE":
            const newdata = state.post_item.filter((elem, id) => {
                return id;
            })
            return{
                post_item:newdata
            }
            default: return state
        }
       
  }
export default itemreducer;
export { mayankreducer};