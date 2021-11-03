const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID, //id unico alfanumerico
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hp: {//vida 
        type: DataTypes.INTEGER,
      },
      attack: {
        type: DataTypes.INTEGER,
      },
      defense: {
        type: DataTypes.INTEGER,
      },
      speed: {
        type: DataTypes.INTEGER,
      },
      height: {//altura
        type: DataTypes.INTEGER,
      },
      weight: {//peso
        type: DataTypes.INTEGER,
      },
      img: {//donde conseguir buenas imagenes
        type: DataTypes.TEXT,
        allowNull: true,
      },
      // gif: {//buenos gifs?
      //   type: DataTypes.TEXT,
      // },
      createdInBd: {
        //me sirve para hacer un llamado solamente a lo que esta en base de datos
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

