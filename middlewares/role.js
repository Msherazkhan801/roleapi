const Role = require("../models/role.model");
const ObjectId = require('mongoose').Types.ObjectId;
const httpError = require("http-errors");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/jwt.auth");
const userData = require("../helpers/user");
const _ = require('underscore');

exports.admin = async (req, res, next) => {
    const user = userData.user(req.headers.authorization);
    try {
        const role = await Role.findOne({_id: user.role_id}, {
            "name": 1,
        });
        if (role.name == "Admin") {
            next();
        } else {
            res.status(401).send({
                message: "Permission Denied"
            });
        }
    } catch (error) {
        res.status(500).send({
            errors: error.message
        });
    }
}
exports.manager = async (req, res, next) => {
    const user = userData.user(req.headers.authorization);
    try {
        const role = await Role.findOne({_id: user.role_id}, {
            "name": 1,
        });
        if (role.name == "Manager") {
            next();
        } else {
            res.status(401).send({
                message: "Permission Denied"
            });
        }
    } catch (error) {
        res.status(500).send({
            errors: error.message
        });
    }
}



