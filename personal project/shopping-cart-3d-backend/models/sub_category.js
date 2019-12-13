module.exports = (sequelize, DataTypes) => {
    const sub_category = sequelize.define('sub_category', {
      name: {
        type: DataTypes.STRING(45)
      }
    })
  
    return sub_category
  }