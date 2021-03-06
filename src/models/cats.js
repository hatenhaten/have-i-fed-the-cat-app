module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: {
                args: [true],
                msg: 'Name cannot be empty',
              },
              notNull: {
                args: [true],
                msg: 'We need a name',
              },
            },
          },
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastFed: DataTypes.DATE
    }

    return sequelize.define('Cat', schema)
};