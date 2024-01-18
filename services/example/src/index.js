const express = require('express')
const { Client } = require('pg')
const { createClient } = require('redis')

const { 
  CACHE_HOST,
  CACHE_PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env

async function start () {
  const app = express()
  // Setup postgres database client
  const pgClient = new Client({
    host: DB_HOST,
    port: DB_PORT,
    password: DB_PASSWORD,
    user: DB_USER,
    database: DB_NAME
  })
  // Setup redis cache client
  const redisClient = createClient({
    socket: {
      host: CACHE_HOST,
      port: CACHE_PORT
    }
  })


  app.get("/", async (req, res) => {
    let source = "cache"

    const dbResult = await pgClient.query('SELECT * FROM video_metadata')

    const data = dbResult.rows

    return res.json({ data, source })
  })


  // Start Server and Connections
  try {
    await pgClient.connect()
    console.log("Database connected")

    await redisClient.connect()
    console.log("Cache connected")

    app.listen(8000, () => console.log("Server has started on port 8000"))
  } catch (err) {
    console.log(err)
  }
}

start()
