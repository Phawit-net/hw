import db from "../lowdb";

async function displayTask(req, res) {
    const task = db.get('tasks').value();
    if(task.length ===0){
        return res.send("You have no task.")
    }
    let result = '';
    for(let i=0;i<task.length ;i++){
        result += `${i+1}. ${task[i].title}<br>`
    }
    res.set('Content-Type','text/html') // setให้อ่าน HTML ได้ ต้องไปกำหนด set ด้วย
    return res.send(result)
}

export {displayTask};
