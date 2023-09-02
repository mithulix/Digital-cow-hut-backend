"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
//----handle Validation Error --------------------------------
const handleValidationError = (error) => {
    const errorMessage = Object.values(error.errors).map(error => ({ path: error.path, message: error.message }));
    const status = 400;
    const message = error.message;
    return { status, message, errorMessage };
};
//----handle Zod Error --------------------------------
const handleZodError = (error) => {
    const errorMessage = error.issues.map(issue => ({
        path: issue.path[issue.path.length - 1],
        message: issue.message,
    }));
    const status = 400;
    const message = 'Validation Error';
    return { status, message, errorMessage };
};
//----handle Cast Error --------------------------------
const handleCastError = (error) => {
    const errorMessage = [
        { path: error.path, message: error.message },
    ];
    const status = 400;
    const message = 'Invalid ID';
    return { status, message, errorMessage };
};
exports.ErrorHandler = {
    handleValidationError,
    handleZodError,
    handleCastError,
};
