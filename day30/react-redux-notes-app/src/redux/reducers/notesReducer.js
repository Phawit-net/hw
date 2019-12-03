import { ADD_NOTE, REMOVE_NOTE,STATUS_INACTIVE} from "../actions/actions";

function notesReducer (notes=[],action){
    switch(action.type){
        case ADD_NOTE:
            return [
                ...notes,
                {
                    id : action.id,
                    title : action.title,
                    content : action.content,
                    status : action.status
                }
            ]
        case REMOVE_NOTE:
            // return notes.map(note => node.id === action.id ? {...note,status: 'STATUS_INACTIVE'} : note )
            return notes.map(note => {
                if (note.id === action.id){
                    return {...note, status: STATUS_INACTIVE}
                } else {
                    return note
                }
            })
        default :
            return notes           
    }
}

export default notesReducer