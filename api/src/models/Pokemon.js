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
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vida: {
        type: DataTypes.INTEGER,
       
      },
      fuerza: {
        type: DataTypes.INTEGER,
       
      },
      defensa: {
        type: DataTypes.INTEGER,
        
      },
      velocidad: {
        type: DataTypes.INTEGER,
       
      },
      altura: {
        type: DataTypes.INTEGER,
        
      },
      peso: {
        type: DataTypes.INTEGER,
        
      },
      createdInBd:{//me sirve para hacer un llamado solamente a lo que esta en base de datos 
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    },
    {
      timestamps: false,
    }
  );
};

/* [ ] Pokemon con las siguientes propiedades:
ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
Nombre *
Vida
Fuerza
Defensa
Velocidad
Altura
Peso
[ ] Tipo con las siguientes propiedades:
ID
Nombre */
