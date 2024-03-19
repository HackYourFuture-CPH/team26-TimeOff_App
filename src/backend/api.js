const express = require('express');
const mysql = require('mysql2/promise');

const app = express();


/*To test the API locally:

Download DBngine.
Create a connection by clicking on "+".
Service: mysql
Port: 3306
Then start the connection.
In MySQL Workbench:

Create the database using the queries in "databasedump.sql".


Remember!! that when creating the new connection, 
the hostname should be "localhost", the port 3306, 
and other information in the configuration.

Run the app afterwards. */


const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "timeoff"
};

app.get('/teams', async (req, res) => {
  try {
    const connection = await mysql.createConnection(config);
    const [rows] = await connection.execute('SELECT * FROM team');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});















































