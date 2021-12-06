const { Schema, ScahemaTypes } = require('../db');
const mongoose = require('../db');
const { SCHEMAS } = require('../../utils/config');
const config = require('../../utils/config');
const { SchemaTypes } = require('mongoose');

const adminSchema = new Schema({
    personalInfo: {
        name: { type: SchemaTypes.String, required: true, unique: true },
        mobile: { type: SchemaTypes.String, required: true, unique: true },
        type: {
            type: SchemaTypes.String, enum: [

                config.TYPES.student,
                config.TYPES.organization,
                config.TYPES.company,
            ], required: true,
        },
        tags: [
            { type: SchemaTypes.String, required: true, }
        ]
    },
    auth: {
        userName: { type: SchemaTypes.String, required: true, unique: true },
        pass: { type: SchemaTypes.String, required: true, unique: true }
    }
});

const AdminModel = mongoose.model(SCHEMAS.ADMIN, adminSchema);
module.exports = AdminModel;