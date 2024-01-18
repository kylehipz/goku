const express = require('express')
const { Client } = require('pg')

// Setup Cache Client

async function start () {
  const app = express()
  const pgClient = new Client()


  app.get("/", async (req, res) => {
    let source = "cache"

    const dbResult = await pgClient.query('SELECT * FROM metadata')

    const data = dbResult.rows

    return res.json({ data, source })
  })


  // Start Server and Connections
  await pgClient.connect()
  app.listen(8000, () => console.log("Server has started on port 8000"))

}

start()
