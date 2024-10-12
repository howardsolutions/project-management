"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// ROUTES import
const projectRoute_1 = __importDefault(require("./routes/projectRoute"));
const taskRoute_1 = __importDefault(require("./routes/taskRoute"));
// Config ENV
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// secure Express apps by setting HTTP response headers.
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({
    policy: "cross-origin"
}));
// Body Parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// CORS
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("common"));
// ROUTES
app.get("/", (req, res) => {
    res.send("This is default route");
});
app.use("/projects", projectRoute_1.default);
app.use("/tasks", taskRoute_1.default);
// SERVER
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
