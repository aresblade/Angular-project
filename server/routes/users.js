'use strict';

const router = require('express').Router();

let users = require('../assets/users');
let games = require('../assets/games');

router.get('/:userId', (req, res) => {
    if (users[parseInt(req.params.userId) - 1]) {
        res.status(200).json(users[parseInt(req.params.userId) - 1]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

router.get('/:userId/games', (req, res) => {
    if (users[parseInt(req.params.userId) - 1]) {
        let response = games.filter((game) => {
            if (users[parseInt(req.params.userId) - 1].games.includes(game.id)) {
                return game;
            }
        });
        res.json({ userId: req.params.userId, myGames: response });
    } else {
        res.status(404).json(JSON.stringify({ message: 'User not found' }));
    }
});

router.get('/:userId/proposition', (req, res) => {
    if (users[parseInt(req.params.userId) - 1]) {
        let response = games.filter((game) => {
            if (!users[parseInt(req.params.userId) - 1].games.includes(game.id)) {
                return game;
            }
        });
        res.json({ games: response });
    } else {
        res.status(404).json(JSON.stringify({ message: 'User not found' }));
    }
});

module.exports = router;
