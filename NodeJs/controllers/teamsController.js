const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Teams } = require('../models/teams');
router.get('/', (req, res) => {
    Teams.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Reatriving Teams : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/team/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Teams.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Reatriving Teams : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/add-team', (req, res) => {
    var team = new Teams({
        team_name: req.body.team_name,
        team_region: req.body.team_region,
        team_logotipe: req.body.team_logotipe,
        team_prize_money: req.body.team_prize_money,
    });
    team.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Teams Save: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/update-team/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var team = {
        team_name: req.body.team_name,
        team_region: req.body.team_region,
        team_logotipe: req.body.team_logotipe,
        team_prize_money: req.body.team_prize_money,
    };
    Teams.findByIdAndUpdate(req.params.id, { $set: team }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Teams Updating: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/del-team/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Teams.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Teams Deleting: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;