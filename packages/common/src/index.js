"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInput = void 0;
var zod_1 = require("zod");
exports.UserInput = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
