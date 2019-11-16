module.exports = (sequelize,DataTypes) => {
    const Reserve = sequelize.define('reserve',{
        date:{
            type:DataTypes.DATE,
            validate:{
                isAfter: "2019-11-13",
                isDate: true    
            }
        }
    })
    return Reserve;
}