const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "وبلاگ",
        layout: "./layout/login"
    });
})

module.exports = router

gitignore