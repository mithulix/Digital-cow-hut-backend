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
exports.CowController = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/logger&sendResponse/sendResponse"));
const pagination_fields_1 = require("../../../shared/pagination/pagination.fields");
const pick_1 = __importDefault(require("../../../shared/pagination/pick"));
const catchAsync_1 = __importDefault(require("../../middlewares/catchAsync"));
const cow_service_1 = require("./cow.service");
const cow_constant_1 = require("./cow.constant");
const sendCowResponse = (res, message, data) => __awaiter(void 0, void 0, void 0, function* () {
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data,
    });
});
//-------create a new cow--------------------------
const createCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CowData = __rest(req.body, []);
    const result = yield cow_service_1.CowService.createCow(CowData);
    sendCowResponse(res, 'Cow is created successfully', result);
}));
//-------get all cows--------------------------
const getAllCows = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, cow_constant_1.cowFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_fields_1.paginationFields);
    const result = yield cow_service_1.CowService.getAllCows(filters, paginationOptions);
    sendCowResponse(res, ' All Cows fetched successfully', result);
}));
//------------get a single cow---------------------------------
const getSingleCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield cow_service_1.CowService.getSingleCow(id);
    sendCowResponse(res, 'Single Cow is found', result);
}));
//-------update a cow--------------------------
const updateCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield cow_service_1.CowService.updateCow(id, req.body);
    yield sendCowResponse(res, `Cow is Updated successfully`, result);
}));
//-------delete a cow--------------------------
const deleteCow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield cow_service_1.CowService.deleteCow(id);
    yield sendCowResponse(res, `Cow is Deleted successfully`, result);
}));
exports.CowController = {
    createCow,
    getAllCows,
    getSingleCow,
    updateCow,
    deleteCow,
};
