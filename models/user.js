module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        // id: {
        //     type: INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, { timestamps: false 

});

return user;
};