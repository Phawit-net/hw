import { uniqueId } from 'lodash'

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_INACTIVE = 'SHOW_INACTIVE'

export const STATUS_ACTIVE = 'STATUS_ACTIVE'
export const STATUS_INACTIVE = 'STATUS_INACTIVE'


//action creator 
export function addNote(title, content) {
  return {
    id: uniqueId(),
    type: ADD_NOTE,
    title: title,
    content: content,
    status: STATUS_ACTIVE  //เวลา add ใหม่ก็จะอยู่ใน active เสมอ
  }
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id }
}

export function showActive(){
  return {type: SHOW_ACTIVE}
}

export function showInActive(){
  return {type: SHOW_INACTIVE}
}