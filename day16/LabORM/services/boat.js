module.exports = (app,db) =>{
    app.get('/boats',async (req,res)=>{    //get เวลาจะส่งค่าไปก็ ?id = 1(query string) ในช่อง url ไม่มีbodyจะทำให้คนอื่นเห็น passwordที่เราส่งไป
        // db.boat.findAll().then(
        //     (result) => res.status(201).json(result)    //เขียนแบบ promise
        //     )
        let result = await db.boat.findAll();     //เขียนแบบ await  status(201) ส่งกลับมาปกติ 
        res.status(201).json(result)
    })

    app.post('/boat',async(req,res)=>{    //post จะต้องใส่ body ว่าจะส่งอะไรเข้าไปด้วยเข้าไปด้วย ใส่ค่าลงในbody  
        try{ 
        boatName = req.body.name    //เอาค่าจาก body มาเก็บไว้ใน boatName โดย req.body.name มาจาก bodyในpostman
        boatColor = req.body.color
        const result = await db.boat.create({  //สร้าง db โดยใส่ไว้ใน column name , color
            name:boatName,         
            color:boatColor
        })
        res.status(201).json(result)           //ส่งค่ากลับออกไป จะshowขึ้นบน postman (idจะถูกสร้างขึ้นเอง)
        }
        catch(err){
            console.log(err)
            res.status(400).json({ErrorMessage:err.message})
        }
    })  

    // app.post('/boat',(req,res)=>{            //เขียนแบบ promise
    //     boatName = req.body.name    
    //     boatColor = req.body.color
    //     db.boat.create({  
    //         name:boatName,         
    //         color:boatColor
    //     }).then((result) => {
    //         es.status(201).json(result)  
    //     }).catch((err)=>{
    //         console.log(err)
    //         res.status(400).json()
    //     })          
    // })  

    app.put('/boat/:id',async(req,res)=>{
        try{                                    //ใช้แบบ try catch
        const result = await db.boat.update(
            {
                name:req.body.name,
                color:req.body.color
            },
            {
                where :{id:req.params.id}  //condition ที่เราจะupdate
            }
        )
        res.status(201).json(result)
        }
        catch(err){
            res.status(400).json()
        }
        
    })

    app.delete('/boat/:id',(req,res)=>{
        db.boat.destroy(
            {
                where :{id:req.params.id}  //condition ที่เราจะupdate
            }
        ).then((result) =>{
            res.status(204).json()
        }).catch((err) =>{
            res.status(400).json()
        })
        
    })
}