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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/logger&sendResponse/sendResponse"));
const catchAsync_1 = __importDefault(require("../../middlewares/catchAsync"));
const user_service_1 = require("./user.service");
//----------send user response-----------------------------------
const sendUserResponse = (res, message, data) => __awaiter(void 0, void 0, void 0, function* () {
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data,
    });
});
//----------signup a new user seller--------------------------------
const createSeller = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { seller } = _a, userData = __rest(_a, ["seller"]);
    const result = yield user_service_1.UserService.createSeller(seller, userData);
    sendUserResponse(res, 'Seller created successfully!', result);
}));
//----------signup a new user buyer--------------------------------
const createBuyer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _b = req.body, { buyer } = _b, userData = __rest(_b, ["buyer"]);
    const result = yield user_service_1.UserService.createBuyer(buyer, userData);
    sendUserResponse(res, 'Buyer created successfully!', result);
}));
//---------get all users----------------------------------
const getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getAllUsers();
    sendUserResponse(res, ' All  Users are fetched successfully', result);
}));
//---------get a single user----------------------------------
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.UserService.getSingleUser(id);
    sendUserResponse(res, 'Single User is found', result);
}));
//---------update a user----------------------------------
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.UserService.updateUser(id, req.body);
    yield sendUserResponse(res, `User is Updated successfully`, result);
}));
//---------delete a user----------------------------------
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.UserService.deleteUser(id);
    yield sendUserResponse(res, `User is Deleted successfully`, result);
}));
exports.UserController = {
    createSeller,
    createBuyer,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
