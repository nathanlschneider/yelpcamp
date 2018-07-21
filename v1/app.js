var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var campgrounds = [
    { name: "Salmon Creen", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Granite Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/216676/pexels-photo-216676.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Salmon Creen", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Granite Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/216676/pexels-photo-216676.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Salmon Creen", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Granite Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350" },
    { name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/216676/pexels-photo-216676.jpeg?auto=compress&cs=tinysrgb&h=350" }
];

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.listen(3000);



