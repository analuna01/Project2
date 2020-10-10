module.exports = function(sequelize, DataTypes) {
    var leaderboard = sequelize.define("leaderboard", {
      score: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      timestamps: false
  });
    return leaderboard;
  };