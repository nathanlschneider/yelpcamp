var app = require('express')();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name:"Salmon Creen", image:""},
        {name:"Granite Hill", image:""},
        {name:"Mountain Goat's Rest", image:""}
    ];
    res.render("campgrounds");
});

app.listen(3000);



