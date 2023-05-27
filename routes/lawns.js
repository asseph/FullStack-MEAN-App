const express = require('express');
const router = express.Router();
const Lawn = require('../models/lawn');

router.get('/', (req, res, next) => {
    Lawn.getAllLawns((err, lawns) => {
        if(err) {
            return next(err);
        }else {
            res.json(lawns);
        }
    });
});

router.get('/:id', (req, res, next) => {
    Lawn.getLawn(req.params.id, (err, lawn) => {
        if(err) {
            return next(err);
        }else {
            res.json(lawn);
        }
    });
});

router.post('/', (req, res, next) => {
    const newLawn = new Lawn({
        title: req.body.title,
        address: req.body.address,
        size: req.body.size
    });

    Lawn.addLawn(newLawn, (err, lawn) => {
        if(err) {
            return next(err);
        }else {
            res.json(newLawn);
        }
    });
});

router.put('/:id', (req, res, next) => {
    Lawn.updateLawn(req.params.id, req.body, (err, lawn) => {
        if(err) {
            return next(err);
        }else {
            res.json(req.body);
        }
    });
});

router.delete('/:id', (req, res, next) => {
    Lawn.deleteLawn(req.params.id, (err, lawn) => {
        if(err) {
            return next(err);
        }else {
            res.json(lawn);
        }
    })
});

module.exports = router;