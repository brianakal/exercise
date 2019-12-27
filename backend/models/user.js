'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    underscored: true,
    // tidak menampilkan field email
    /* defaultScope:{
      attributes:{
        exclude:['email']
      },
    } */
  });
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.inbox, {  
      foreignKey: 'id_users' 
    })
  };
  return user;
};