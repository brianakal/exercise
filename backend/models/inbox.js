'use strict';
module.exports = (sequelize, DataTypes) => {
  const inbox = sequelize.define('inbox', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    subject: DataTypes.STRING,
    body: DataTypes.STRING,
    attachment: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    signature: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  inbox.associate = function(models) {
    // associations can be defined here
    inbox.belongsTo(models.user, { 
      foreignKey: 'id_users' 
    })
  };
  return inbox;
};