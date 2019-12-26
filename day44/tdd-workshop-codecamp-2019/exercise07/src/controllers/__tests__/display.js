import {displayTask} from "../display";
import db from "../../lowdb";

function setup() {
  const req = {
    body: {},
  }
  const res = {}
  const next = jest.fn()
  Object.assign(res, {
    status: jest.fn(
      function status() {
        return this
      }.bind(res),
    ),
    json: jest.fn(
      function json() {
        return this
      }.bind(res),
    ),
    send: jest.fn(
      function send() {
        return this
      }.bind(res),
    ),
    set: jest.fn(   //กำหนดให้ res สามารถใช้ res.setได้
        function send() {
          return this
        }.bind(res),
      ),
  })
  return {req, res, next}
}

jest.mock("../../lowdb", () => {
  const low = require('lowdb');
  const Memory = require('lowdb/adapters/Memory');

  return low(new Memory());
})

beforeAll(() => {
    db.defaults({tasks:[]}).write()
})

afterEach(() => {
    db.set('tasks',[]).write()
})

describe('displayTask', function () {
    test('displayTasK: task is empty should send message "Yotu have no task."', async ()=>{
        const {req,res,next} = setup();
        db.defaults({tasks : []}).write()   //เป็น db ที่จำลองออกมาจาก db.json

        await displayTask(req,res);

        expect(res.send).toHaveBeenCalled(); // check ว่า function res.send ถูกเรียกหรือเปล่า
        expect(res.send).toHaveBeenCalledWith("You have no task.")  //check ว่า functionที่ถูกเรียกแสดง ค่าอะไรออกมา ตรงกันไหม 
        expect(db.get('tasks').value()).toEqual([]); //check ว่าใน db ไม่มีข้อมูลอยู๋ในนั้นจริงๆๆ  **กรณีที่ 3 นี้มันไม่ได้เช็คใน db จริงๆจึงต้องมีการ testกลับกัน
    })

    test('displayTasK: task is not empty should not send message "Yotu have no task."', async ()=>{
        const {req,res,next} = setup();
        db.defaults({tasks : []}).write()  
        
        db.get('tasks').push({title:"Do homework"}).write();
        await displayTask(req,res);

        expect(res.send).not.toHaveBeenCalledWith("You have no task.")     //ถ้ามีtaskอยู่ จะไม่ส่ง res.send ข้อความ You have no task. ออกไปแน่นอน
        expect(db.get('tasks').value()).toEqual([{title:"Do homework"}]); 


    })

    test('displayTasK: when task is not empty should return list correctly', async ()=>{
        const {req,res,next} = setup();
        db.defaults({tasks : []}).write() 
        db.get('tasks').push({title:"Do homework"}).write();
        db.get('tasks').push({title:"Watch Movie"}).write();
        db.get('tasks').push({title:"Workout"}).write();

        await displayTask(req,res);

        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(`1. Do homework<br>2. Watch Movie<br>3. Workout<br>`); 
    })
});
