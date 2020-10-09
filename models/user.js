module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        // id: {
        //     type: INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false 

});

return user;
};