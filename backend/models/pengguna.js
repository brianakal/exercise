'use strict';
module.exports = (sequelize, DataTypes) => {
  const pengguna = sequelize.define('view_user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    // tableName: 'view_users',
    underscored: true,
    defaultScope:{
      /* attributes:{
        exclude:['email']
      }, */
    }
  });
  pengguna.associate = function(models) {
    // associations can be defined here
  };
  return pengguna;
};