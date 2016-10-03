var app = require("express")();
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/api/readFile", upload.single("file"), function(req,res){
    console.log(req.file.size);
    res.json({"size": req.file.size + " bytes"});
});

app.listen(process.env.PORT, function(){
    console.log("Listening on port " + process.env.PORT);
})