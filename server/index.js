//C:\Users\Dave-Work\Desktop\workspace\Sprint5\react-blog-challenge\server\index.js React Frontend Server

const express = require( "express" )
const path = require( "path" )

const server = express();

const port = process.env.PORT || 3000

const staticFolder = path.join( __dirname, "./public" )
server.use( express.static( staticFolder ) )

server.listen( port, () =>
{
  console.log( "Listening on port", port )
} )

