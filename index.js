
const express = require('express')
const app = express()
const port = 3000
const numOfCPU = require('os').cpus().length;
const cluster = require('cluster')


if (cluster.isMaster) {
    for (let i = 0; i < numOfCPU; i++) {
         cluster.fork()
    }
}else{
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
  })
}



