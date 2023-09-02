"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = exports.SellerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SellerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: {
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
        },
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
    profileImage: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Seller = (0, mongoose_1.model)('Seller', exports.SellerSchema);
