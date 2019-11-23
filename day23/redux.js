function createStore(reducer,initialState){
    let state = initialState
    let subscribers =[]
    return {
        getState:() => state,
        dispatch:(action) => {
            state = reducer(state,action)   //ต้องการเปลี่ยนเป็นstateก้อนใหม่ ก็เอาไปเก็บไว้ที่ตัวเดิม 
            subscribers.forEach(callback =>{
                if(callback){
                    callback()
                }
            })
        },    
        subscribe: callback =>{
            subscribers.push(callback)  
            return subscribers.length-1  //ใช้สำหรับ unsubscribe
        },
        
        unsubscribe: id =>{
            subscribers[id] = null
        }
    }
}

function myReducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return {x : state.x + 1}
        case 'DECREMENT':
            return {x : state.x - 1}
        case 'POW':
            return {x: action.pow ** state.x }
        default:
            return {x : state.x}
    }
}

function myListener(){
    console.log(store.getState())
}


let store = createStore(myReducer,{x:1}) //ไม่ใส่ parameter จะส่งค่า undefine เข้าไป
console.log(store.getState())

console.log(store.dispatch({type : "INCREMENT"}))
console.log(store.dispatch({type : "INCREMENT"}))
console.log(store.dispatch({type : "POW" , pow :3 } ))

console.log(store.getState())

store.subscribe(() =>{ console.log("CHANGE")})   //ทุกครั้งที่เรียก subscribe จะไปเรียก callback func

console.log(store.dispatch({type : "INCREMENT"}))
console.log(store.dispatch({type : "INCREMENT"}))
console.log(store.dispatch({type : "INCREMENT"}))

