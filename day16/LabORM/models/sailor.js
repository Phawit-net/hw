module.exports = (sequelize,DataTypes) => {
    //const Reserve = require('./reserve')(sequelize,DataTypes) // import reserve เข้ามาเป็น function
    const Sailor = sequelize.define('sailor',{
        name:{
            type:DataTypes.STRING(45),
            validate:{
                is: /Mr.|Mrs./g
            }
        },
        rating:{
            type:DataTypes.INTEGER,
            validate:{
                customValidatorRating(value) {
                    if(value >10)
                    {
                        throw new Error('rating more than 10');
                    }
                }
            }
        },
        age:{
            type:DataTypes.DOUBLE,
            validate:{
                customValidator(value) {
                    if (!((value >=20 && value<=40) || (value >=50 && value<=80) ||(value >=85 && value<=90))) {
                      throw new Error('age not in range');
                    }
                }
            }
        }
    })
    // ,{
    //     freezeTableName:true,  //จะไม่เติมsให้ชื่อตาราง
    //     timestamps:false   //จะไม่สร้าง createdAt,updateAt
    // })

    Sailor.associate = (models) =>{
        //Sailor.belongsToMany(models.boat,{through:Reserve})  //ความสัมพันธ์แบบ Many to Many โดยผ่าน(through) reserve
        Sailor.belongsToMany(models.boat,{through:models.reserve})
    }

    return Sailor;
}