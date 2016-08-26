var express = require('express');
var sqliteModels = require('./../Models/babag')

module.exports = {
    saveBabag: function (req, res, next) {
        sqliteModels.saveBabag(req)
            .then(function (result) {
                res.json({"success": result})
            });
    },
    getBabag: function (req, res, next) {
        sqliteModels.getBabag(req.query.offset, req.query.size)
            .then(function (result) {
                if (!result || result.length == 0) {
                    res.json({"success": false})
                } else {
                    res.json({"success": true, "jokes": result})
                }
            });
    }
}
