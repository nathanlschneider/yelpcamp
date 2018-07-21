var app = require('express')();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
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
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(3000);



