"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowFilterableFields = exports.cowSearchableFields = exports.cowLabel = exports.cowCategory = exports.cowBreed = exports.cowLocation = void 0;
exports.cowLocation = [
    'Dhaka',
    'Chattogram',
    'Barishal',
    'Rajshahi',
    'Sylhet',
    'Comilla',
    'Rangpur',
    'Mymensingh',
];
exports.cowBreed = [
    'Brahman',
    'Nellore',
    'Sahiwal',
    'Gir',
    'Indigenous',
    'Tharparkar',
    'Kankrej',
];
exports.cowCategory = ['Dairy', 'Beef', 'DualPurpose'];
exports.cowLabel = ['for sale', 'sold out'];
//------------filter and search option for cows ----------------------
exports.cowSearchableFields = [
    'id',
    'name',
    'breed',
    'location',
    'label',
    'category',
];
exports.cowFilterableFields = [
    'searchTerm',
    'id',
    'name',
    'location',
    'breed',
    'price',
    'minPrice',
    'maxPrice',
];
