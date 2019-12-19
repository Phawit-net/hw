module.exports = (app, db) => {
    app.get('/products', (req, res) => {
      db.product.findAll({
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })

    app.post('/product' , (req,res)=>{
      db.product.create({
          name : req.body.name,
          sub_category_id : req.body.sub_category_id,
          price : req.body.price,
          description : req.body.description,
          image : req.body.image,
          published_date : req.body.published_date
      }).then(result => {
          res.status(200).json(result)
        })
        .catch(error => {
          res.status(400).json({ message: error.message })
        })
    })
}