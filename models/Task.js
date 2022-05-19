module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const Task = sequelize.define('Task', {
     userid : {
        type: DataTypes.INTEGER,
        allowNull: false,
     },
      task: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    });
    return Task;
  };
  