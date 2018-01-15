'use strict';

const router = require('express').Router();

let users = require('../assets/users');
let games = require('../assets/games');

router.get('/', (req, res) => {
    res.status(200).json({ games: games });
});

router.post('/:gameId/return', (req, res) => {
    if (games[parseInt(req.params.gameId) - 1] && req.query.userId && users[parseInt(req.query.userId) - 1]) {
        users[parseInt(req.query.userId) - 1].games.splice(parseInt(req.params.gameId) - 1,1);
        res.status(200);
    } else {
        res.status(409).json({ message: 'Required parameter is null or undefined' });
    }
});

router.post('/:gameId/rent', (req, res) => {
    if (games[parseInt(req.params.gameId) - 1] && req.query.userId && users[parseInt(req.query.userId) - 1]) {
        users[parseInt(req.query.userId) - 1].games.push(parseInt(req.params.gameId));
        res.sendStatus(200);
    } else {
        res.status(409).json({ message: 'Required parameter is null or undefined' });
    }
});

module.exports = router;