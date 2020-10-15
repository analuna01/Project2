module.exports = function(sequelize, DataTypes) {
    var leaderboard = sequelize.define("leaderboard", {
      time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: false
  });
    return leaderboard;
  };