"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../app/modules/users/user.route");
const cow_route_1 = require("../app/modules/cows/cow.route");
const order_route_1 = require("../app/modules/orders/order.route");
const seller_route_1 = require("../app/modules/seller/seller.route");
const buyer_route_1 = require("../app/modules/buyer/buyer.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/buyers',
        route: buyer_route_1.BuyerRoutes,
    },
    {
        path: '/sellers',
        route: seller_route_1.SellerRoutes,
    },
    {
        path: '/cows',
        route: cow_route_1.CowRoutes,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.AppRoutes = router;
