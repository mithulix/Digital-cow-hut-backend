"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = exports.CowSchema = void 0;
const mongoose_1 = require("mongoose");
const cow_constant_1 = require("./cow.constant");
const ApiError_1 = require("../../../shared/errors/ApiError");
const http_status_1 = __importDefault(require("http-status"));
exports.CowSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    breed: {
        type: String,
        enum: cow_constant_1.cowBreed,
    },
    label: {
        type: String,
        enum: cow_constant_1.cowLabel,
    },
    location: {
        type: String,
        enum: cow_constant_1.cowLocation,
    },
    category: {
        type: String,
        enum: cow_constant_1.cowCategory,
    },
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Seller',
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
exports.CowSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified('label') && this.label === 'sold out') {
            return next();
        }
        const isExist = yield exports.Cow.findOne({ name: this.name });
        if (isExist) {
            throw new ApiError_1.ApiError(http_status_1.default.CONFLICT, 'This Cow is already exist!');
        }
        next();
    });
});
exports.Cow = (0, mongoose_1.model)('Cow', exports.CowSchema);
