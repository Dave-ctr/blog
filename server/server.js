//C:\Users\Dave-Work\Desktop\workspace\Sprint5\react-blog-challenge\server\server.js Backend Server

const express = require( "express" );
const cors = require( "cors" );
const path = require( "path" );
const fs = require( "fs" );
const helmet = require( "helmet" )


const app = express();

// Helmet middleware with CSP directives deactivated
app.use(
  helmet.contentSecurityPolicy( {
    content: "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-src 'self'; media-src 'self'; object-src 'self'; child-src 'self'; form-action 'self'; frame-ancestors 'self'; plugin-types ''; base-uri 'self'; manifest-src 'self'; report-uri 'self'; report-to 'self';"
  },
  )
);

const PORT = process.env.PORT || 3001;

// Middleware
app.use( cors() );
app.use( express.json() );

// Load posts from JSON file
const postsFilePath = path.join( __dirname, "../src/data/posts.json" );
let posts = [];

try
{
  const postsData = fs.readFileSync( postsFilePath );
  posts = JSON.parse( postsData );
} catch ( error )
{
  console.error( "Error loading posts:", error );
}

// Routes
app.get( "/api/posts", ( req, res ) =>
{
  res.setHeader( "Content-Type", "application/json" );
  res.setHeader( "Access-Control-Allow-Origin", "/api/posts" );
  res.json( posts );
} );

app.post( "/api/posts", ( req, res ) =>
{
  const newPost = req.body;
  posts.push( newPost );

  // Save updated posts to JSON file
  fs.writeFileSync( postsFilePath, JSON.stringify( posts, null, 2 ) );

  res.status( 201 ).json( newPost );
} );

app.get( "/api/posts", ( req, res ) =>
{
  const newPostData = req.body;
  addPost( newPostData );
  res.status( 200 ).send( "Post created successfully" );
  {
    const posts = getPosts();
    res.status( 200 ).json( posts );
  }
} );

app.listen( PORT, () =>
{
  console.log( `Server is running on port ${ PORT }` );
} );
