module.exports = (sequelize,DataTypes) => {
    const Reserve = require('./reserve')(sequelize,DataTypes) // import reserve เข้ามาเป็น function
    const Boat = sequelize.define('boat',{     //define บอกว่าอยากให้ตารางboat มีAttr อะไรบ้าง
        name:{
            type:DataTypes.STRING(45),
            validate:{
                notContains: 'boat',
                isAlpha: true,
                len: [3,15],
            }
        },
        color:{
            type:DataTypes.STRING(45),
            validate:{
                isIn: {
                    args: [['Green', 'Blue','Red','Yellow','Orange']],
                    msg: "Only Green,Blue,Red,Yellow,Orange"
                  }
            }
        }
    })

    Boat.associate = (models) =>{
        Boat.belongsToMany(models.sailor,{through:Reserve})  //ความสัมพันธ์แบบ Many to Many โดยผ่าน(through) reserve
        //Boat.belongsToMany(models.sailor,{through:models.reserve}) จะไม่ต้องประกาศข้างบน
    }
    return Boat;
}