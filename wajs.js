const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("API is working fine !!");
});

app.post("/",(req,res)=>{
    res.send("API is working fine !!");
});


app.post("/podcli",(req,res)=>{
        const cmd = req.body.cmd;
        console.log(cmd);

        exec(cmd, (error, stdout, stderr) => {
                if(error) {
                        console.log(`exec error:  ${error}`);
                }

                if (stdout) {
                        res.send(stdout); return;
                } else if (stderr) {
                        res.send(stderr);
                        return;
                }
        });

});

app.listen(5000, console.log("Started on 5000"));