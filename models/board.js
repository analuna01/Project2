module.exports = function(sequelize, DataTypes) {
  var board = sequelize.define("board", {
    img_loc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img_part: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
});
  return board;
};