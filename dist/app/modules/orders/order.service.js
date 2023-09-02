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
exports.OrderService = void 0;
const cow_model_1 = require("../cows/cow.model");
const mongoose_1 = __importDefault(require("mongoose"));
const order_model_1 = __importDefault(require("./order.model"));
const seller_model_1 = require("../seller/seller.model");
const buyer_model_1 = require("../buyer/buyer.model");
//-------- order a new cow service------------------------------
const orderCow = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    let newOrderData = null;
    try {
        session.startTransaction();
        // Find the cow to be sold
        //cow:id
        //buyer:id
        const cow = yield cow_model_1.Cow.findById(order.cow).session(session);
        if (!cow) {
            throw new Error('Cow not found');
        }
        // Check if the cow is available for sale
        if (cow.label !== 'for sale') {
            throw new Error('The cow is not available for sale');
        }
        // Find the seller
        const seller = yield seller_model_1.Seller.findById(cow.seller).session(session);
        if (!seller) {
            throw new Error('Seller not found');
        }
        // Find the buyer
        const buyer = yield buyer_model_1.Buyer.findById(order.buyer).session(session);
        if (!buyer) {
            throw new Error('Buyer not found');
        }
        // Check if the buyer has enough budget to buy the cow
        if (buyer.budget < cow.price) {
            throw new Error('Buyer does not have enough budget to buy the cow');
        }
        // Update the cow's status to sold
        cow.label = 'sold out';
        yield cow.save();
        // Transfer money from buyer to seller
        seller.income += cow.price;
        buyer.budget -= cow.price;
        yield seller.save();
        yield buyer.save();
        const newOrder = yield order_model_1.default.create({
            cow: cow._id,
            buyer: buyer._id,
        }, { session });
        newOrderData = newOrder[0];
        // Populate the 'buyer' field in the newOrder document
        const populatedOrder = yield order_model_1.default.findById(newOrderData._id)
            .populate('buyer')
            .populate('cow');
        yield session.commitTransaction();
        yield session.endSession();
        return populatedOrder;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw error;
    }
});
//--------get all orders service------------------------------
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.find({}).populate('cow').populate('buyer');
    return result;
});
exports.OrderService = {
    orderCow,
    getAllOrders,
};
