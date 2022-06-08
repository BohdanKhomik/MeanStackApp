const mongoose = require('mongoose');

var Teams = mongoose.model('Teams', {
    team_name: { type: String },
    team_region: { type: String },
    team_logotipe: { type: String },
    team_prize_money: { type: String }
});

module.exports = { Teams };