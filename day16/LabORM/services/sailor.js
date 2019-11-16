module.exports = (app,db) =>{
    app.get('/sailors',async (req,res)=>{   
        try{   
        let result = await db.sailor.findAll({include:[db.boat]});   //  {include:[db.boat]} คืคอการบอกว่า มีsailorคนไทนจองเรือบ้าง ตามreserve
        res.status(201).json(result)
        }
        catch(err){
        res.status(400).json()
        }  
    })

    app.post('/sailor',async(req,res)=>{  
        try{   
        sailorName = req.body.name  
        sailorRating = req.body.rating
        sailorAge = req.body.age
        const result = await db.sailor.create({  
            name:sailorName,         
            rating:sailorRating,
            age:sailorAge
        })
        res.status(201).json(result) 
        }
        catch(err){
            console.log(err)
            res.status(400).json({ErrorMessage:err.message})
        }       
    })  

    //sila
    // app.put('/sailors/:id', async (req,res) => {   //:id ต้องใส่ให้ตรงกับบรรทักที่ 23
    //     try{ 
    //       res.status(201).json(
    //           await db.sailor.update(req.body, {where: {id: req.params.id}}));  //.id ต้องตรงกับ :id
    //     } catch (ex) {
    //       res.status(400).json({errorMessage: ex.message});
    //     }
    //   });     //await ใช้กับ try catch เพื่อดักerror

    app.put('/sailor/:id',async(req,res)=>{    
        try{ 
        const result = await db.sailor.update(
            {  
                name:req.body.name,
                rating:req.body.rating,
                age:req.body.age
            },
            {
                where :{id:req.params.id}
            }
        )
        res.status(201).json(result)    
        }
        catch(err){
            res.status(400).json()
        }       
    })

    app.delete('/sailor/:id',async(req,res)=>{
        try{ 
        const result = await db.sailor.destroy(
            {
                where :{id:req.params.id}  //condition ที่เราจะupdate
            }
        )
        res.status(200).json(result)
        }
        catch(err){
            res.status(400).json()
        }    
    })
}