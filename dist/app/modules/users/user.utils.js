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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBuyerId = exports.findLastBuyerId = exports.generateSellerId = exports.findLastSellerId = void 0;
const user_model_1 = require("./user.model");
//------------find last seller ------------------------------------
const findLastSellerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastSeller = yield user_model_1.User.findOne({ role: 'seller' }, { id: 1, _id: 0 })
        .sort({
        createdAt: -1,
    })
        .lean();
    return (lastSeller === null || lastSeller === void 0 ? void 0 : lastSeller.id) ? lastSeller.id.substring(2) : undefined;
});
exports.findLastSellerId = findLastSellerId;
//------------generate seller id ------------------------------------
const generateSellerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield (0, exports.findLastSellerId)()) || (0).toString().padStart(5, '0');
    let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementedId = `S-${incrementedId}`;
    return incrementedId;
});
exports.generateSellerId = generateSellerId;
//------------find last buyer ------------------------------------
const findLastBuyerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastBuyer = yield user_model_1.User.findOne({ role: 'buyer' }, { id: 1, _id: 0 })
        .sort({
        createdAt: -1,
    })
        .lean();
    return (lastBuyer === null || lastBuyer === void 0 ? void 0 : lastBuyer.id) ? lastBuyer.id.substring(2) : undefined;
});
exports.findLastBuyerId = findLastBuyerId;
//------------generate buyer id------------------------------------
const generateBuyerId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield (0, exports.findLastBuyerId)()) || (0).toString().padStart(5, '0');
    let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementedId = `B-${incrementedId}`;
    return incrementedId;
});
exports.generateBuyerId = generateBuyerId;
