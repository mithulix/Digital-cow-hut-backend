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
exports.BuyerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/logger&sendResponse/sendResponse"));
const catchAsync_1 = __importDefault(require("../../middlewares/catchAsync"));
const buyer_service_1 = require("./buyer.service");
const sendBuyerResponse = (res, message, data) => __awaiter(void 0, void 0, void 0, function* () {
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data,
    });
});
//------------get all buyers-------------------------------
const getAllBuyers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield buyer_service_1.BuyerService.getAllBuyers();
    sendBuyerResponse(res, ' All Buyer Buyers fetched successfully', result);
}));
//------------get a single buyer-------------------------------
const getSingleBuyer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield buyer_service_1.BuyerService.getSingleBuyer(id);
    sendBuyerResponse(res, 'Single Buyer is found', result);
}));
//------------update a buyer-------------------------------
const updateBuyer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield buyer_service_1.BuyerService.updateBuyer(id, req.body);
    yield sendBuyerResponse(res, `Buyer is Updated successfully`, result);
}));
//------------delete a buyer-------------------------------
const deleteBuyer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield buyer_service_1.BuyerService.deleteBuyer(id);
    yield sendBuyerResponse(res, `Buyer is Deleted successfully`, result);
}));
exports.BuyerController = {
    deleteBuyer,
    getAllBuyers,
    getSingleBuyer,
    updateBuyer,
};
