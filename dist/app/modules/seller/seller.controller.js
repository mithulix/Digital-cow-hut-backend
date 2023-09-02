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
exports.SellerController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/logger&sendResponse/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../middlewares/catchAsync"));
const seller_service_1 = require("./seller.service");
const sendSellerResponse = (res, message, data) => __awaiter(void 0, void 0, void 0, function* () {
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data,
    });
});
//-------------Get all Sellers----------------------------------------
const getAllSellers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seller_service_1.SellerService.getAllSellers();
    sendSellerResponse(res, ' All Seller Sellers fetched successfully', result);
}));
//-------------Get a single Seller----------------------------------------
const getSingleSeller = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield seller_service_1.SellerService.getSingleSeller(id);
    sendSellerResponse(res, 'Single Seller is found', result);
}));
//-------------update a Seller----------------------------------------
const updateSeller = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield seller_service_1.SellerService.updateSeller(id, req.body);
    yield sendSellerResponse(res, `Seller is Updated successfully`, result);
}));
//--------------Delete a Single Seller--------------------------------
const deleteSeller = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield seller_service_1.SellerService.deleteSeller(id);
    yield sendSellerResponse(res, `Seller is Deleted successfully`, result);
}));
exports.SellerController = {
    deleteSeller,
    getAllSellers,
    getSingleSeller,
    updateSeller,
};
