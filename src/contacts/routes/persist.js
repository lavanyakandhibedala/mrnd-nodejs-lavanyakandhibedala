// JavaScript source code
var express = require('express');
var router = express.Router();
var data = [];
var i = -1;
router.get('/message/:id', function (req, res, next) {
    res.json(data[req.params.id].message);
});
router.get('/:id', function (req, res, next) {

    res.json(data[req.params.id]);
});
router.post('/', function (req, res, next) {
    console.log(req.body);

    i = i + 1;
    data.push(req.body);

    res.json(i);
});
router.put('/message/:id', function (req, res, next) {
    console.log(req.body);
    data[req.params.id].message = req.body.message;
    res.json(data[req.params.id]);
});
router.put('/:id', function (req, res, next) {
    console.log(req.body);

    data[req.params.id].firstName = req.body.firstName;
    //data[req.params.id] = req.body;
    res.json(data[req.params.id]);
});
module.exports = router;
