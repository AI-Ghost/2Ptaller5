var express = require('express');
var router = express.Router();

const { Op, Sequelize } = require('sequelize');
const Cliente = require('../models').cliente;
const Servicio = require('../models').servicio;


router.get('/view', (req, res, next) => {
    Cliente.findAll({
        attributes: { exclude: ["updatedAt", "createdAt"] },
        include: [{
            model: Servicio,
            attributes: ['descripcion', 'precio'],
            through: { attributes: [] }
        }],
    })
    .then(clientes => {
        res.render('servicioclientes', { clientes: clientes });
    })
    .catch(error => res.status(400).send(error));
});


router.get('/json',
    function (req, res, next) {
        Cliente.findAll({
            attributes:
            {
                exclude: ["updatedAt", "createdAt"],
            },
            include: [{
                model: Servicio,
                attributes: ['descripcion', 'precio'],
                through: { attributes: [] }
            }],

        })
            .then(clientes => {
                res.json(clientes);
            })
            .catch(error =>
                res.status(400).send(error))
    });

module.exports = router;