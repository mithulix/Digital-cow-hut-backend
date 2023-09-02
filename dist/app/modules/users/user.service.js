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
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const envConfig_1 = __importDefault(require("../../../config/envConfig"));
const user_model_1 = require("./user.model");
const ApiError_1 = require("../../../shared/errors/ApiError");
const mongoose_1 = __importDefault(require("mongoose"));
const user_utils_1 = require("./user.utils");
const seller_model_1 = require("../seller/seller.model");
const buyer_model_1 = require("../buyer/buyer.model");
//------------create a new seller ------------------------------------
const createSeller = (seller, user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user.password) {
        user.password = envConfig_1.default.default_user_pass;
    }
    user.role = 'seller';
    let newUserAllData = null;
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const id = yield (0, user_utils_1.generateSellerId)();
        user.id = id; //s-00001
        seller.id = id; //s-00001
        const newSeller = yield seller_model_1.Seller.create([seller], { session });
        if (!newSeller.length) {
            throw new ApiError_1.ApiError(http_status_1.default.BAD_REQUEST, 'Failed to create Seller');
        }
        user.seller = newSeller[0]._id;
        const newUser = yield user_model_1.User.create([user], { session });
        if (!newUser.length) {
            throw new ApiError_1.ApiError(http_status_1.default.BAD_REQUEST, 'Failed to create user');
        }
        newUserAllData = newUser[0];
        yield session.commitTransaction();
        yield session.endSession();
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw error;
    }
    if (newUserAllData) {
        newUserAllData = yield user_model_1.User.findOne({ id: newUserAllData.id }).populate({
            path: 'seller',
        });
    }
    return newUserAllData;
});
//------------create a new seller ------------------------------------
const createBuyer = (buyer, user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user.password) {
        user.password = envConfig_1.default.default_user_pass;
    }
    user.role = 'buyer';
    let newUserAllData = null;
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const id = yield (0, user_utils_1.generateBuyerId)();
        user.id = id;
        buyer.id = id;
        const newBuyer = yield buyer_model_1.Buyer.create([buyer], { session });
        if (!newBuyer.length) {
            throw new ApiError_1.ApiError(http_status_1.default.BAD_REQUEST, 'Failed to create buyer');
        }
        user.buyer = newBuyer[0]._id;
        const newUser = yield user_model_1.User.create([user], { session });
        if (!newUser.length) {
            throw new ApiError_1.ApiError(http_status_1.default.BAD_REQUEST, 'Failed to create user');
        }
        newUserAllData = newUser[0];
        yield session.commitTransaction();
        yield session.endSession();
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw error;
    }
    if (newUserAllData) {
        newUserAllData = yield user_model_1.User.findOne({ id: newUserAllData.id }).populate({
            path: 'buyer',
        });
    }
    return newUserAllData;
});
//------get all users service---------------------------------------
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find({}).populate('seller').populate('buyer');
    return result;
});
//------get a single user service---------------------------------------
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id).populate('seller').populate('buyer');
    return result;
});
//------update a user service---------------------------------------
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
//-------delete a user service--------------------------------
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(id);
    if (!user) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const result = yield user_model_1.User.findByIdAndDelete(id);
    let buyerDelete = null;
    let sellerDelete = null;
    if (user.buyer) {
        buyerDelete = yield buyer_model_1.Buyer.findByIdAndDelete({ _id: user.buyer });
    }
    if (user.seller) {
        sellerDelete = yield seller_model_1.Seller.findByIdAndDelete({ _id: user.seller });
    }
    return { result, buyerDelete, sellerDelete };
});
exports.UserService = {
    createSeller,
    createBuyer,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
