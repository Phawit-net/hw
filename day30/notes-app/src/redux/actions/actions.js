import { uniqueId } from 'lodash'

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

// export const SHOW_ACTIVE = 'SHOW_ACTIVE'
// export const SHOW_INACTIVE = 'SHOW_INACTIVE'

// export const STATUS_ACTIVE = 'STATUS_ACTIVE'
// export const STATUS_INACTIVE = 'STATUS_INACTIVE'

export function addNote(title, content, currentDate,tag) {
  return {
    id: new Date().getTime().toString(),
    type: ADD_NOTE,
    title: title,
    content: content,
    currentDate:currentDate,
    tag:tag
    // status: STATUS_ACTIVE  
  }
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id }
}

// export function showActive(){
//   return {type: SHOW_ACTIVE}
// }

// export function showInActive(){
//   return {type: SHOW_INACTIVE}
// }