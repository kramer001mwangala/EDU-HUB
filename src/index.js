const server = require('./server');

server.listen(5000, () => {
    console.log(`server is running on http://localhost:5000/`)
})