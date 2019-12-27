'use strict';
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    id_users: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    address: DataTypes.STRING,
    company: DataTypes.STRING
  }, {
    underscored: true,
  });
  profile.associate = function(models) {
    // associations can be defined here
  };
  return profile;
};