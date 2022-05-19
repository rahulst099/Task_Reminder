module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Aman", // update the db password here
    DB: "temp", //add database name here
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };