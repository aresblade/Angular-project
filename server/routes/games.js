"use strict";

const router = require("express").Router();

let users = require("../assets/users");
let games = require("../assets/games");

router.get("/", (req, res) => {
  res.status(200).json({ games: games });
});

router.post("/:gameId/return", (req, res) => {
  let userId = parseInt(req.query.userId - 1);

  if (req.query.userId && users[parseInt(req.query.userId) - 1]) {
    console.log("before: ", users[userId].games);

    users[userId].games = users[userId].games.filter(game => {
      if (game !== parseInt(req.params.gameId)) {
        console.log(game);
        return game;
      }
    });

    console.log("after: ", users[userId].games);

    res.status(200);
  } else {
    res
      .status(409)
      .json({ message: "Required parameter is null or undefined" });
  }
});

router.post("/:gameId/rent", (req, res) => {
  if (
    games[parseInt(req.params.gameId) - 1] &&
    req.query.userId &&
    users[parseInt(req.query.userId) - 1]
  ) {
    users[parseInt(req.query.userId) - 1].games.push(
      parseInt(req.params.gameId)
    );
    res.sendStatus(200);
  } else {
    res
      .status(409)
      .json({ message: "Required parameter is null or undefined" });
  }
});

module.exports = router;
