const express = require("express");
const router = express.Router();

const users = require("../data/users");
const posts = require("../data/posts");
const comments = require("../data/comments");
const error = require("../utilities/error");


router
    .route("/")
    .get((req, res) => {
        console.log("Trying to use comments endpoint")
        const links = [
            {
                href: "comments/",
                rel: "",
                type: "GET",
            },

        ];
        console.log("Trying to respond")
        res.json({comments, links});
        console.log("Responded")
    })
    .post((req, res, next) => {
        if (req.params.id && req.params.userId && req.params.postId && req.params.body) next(error(404), "Resource not available")
        comments.push(req.params)
    })

module.exports = router