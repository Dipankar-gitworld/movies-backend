const app = require ("./index");

const connect = require("./configs/db");

app.listen(2222, async ()=>{
    await connect();
    console.log("listening to port 2222");
})