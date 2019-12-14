module.exports = (app, db) => {
    app.get('/categories', (req, res) => {
      db.category.findAll({
        include: [{
          model: db.sub_category
        }]
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.post('/category' , (req,res)=>{
        db.category.create({
            name : req.body.name,
            icon : req.body.icon
        }).then(result => {
            res.status(200).json(result)
          })
          .catch(error => {
            res.status(400).json({ message: error.message })
          })
    })
}