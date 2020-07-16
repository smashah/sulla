"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var meow_1 = __importDefault(require("meow"));
var wa_automate_1 = require("@open-wa/wa-automate");
var path_1 = __importDefault(require("path"));
var express = require('express');
var app = express();
var fs = require('fs');
var uuidAPIKey = require('uuid-apikey');
var extraFlags = {};
var configWithCases = wa_automate_1.getConfigWithCase({
    path: "../src/api/model/config.ts",
    tsconfig: "../tsconfig.json",
    type: "ConfigObject",
});
configWithCases.map(function (_a) {
    var type = _a.type, key = _a.key;
    if (key === "popup")
        type = "number";
    extraFlags[key] = {
        type: type
    };
});
var configParamText = configWithCases.map(function (o) { return "      --" + o.p + "\t\t" + (o.p.length < 14 ? "\t" : "") + (o.p.length < 6 ? "\t" : "") + o.description; }).join("\n");
var cli = meow_1.default("\n\tUsage\n\t  $ @open-wa/wa-automate\n\n\tOptions\n      --no-api, -n \t\t\tDon't expose the api. This may be useful if you just want to set the webhooks\n      --port, -p \t\t\tSet the port for the api. Default to 8002\n      --webhook, -w \t\t\twebhook to use for the listeners\n      --key, k \t\t\tspecify an api key to use as a check for all requests. If you add -k by itself, a key will be autogenerated for you.\n      --config, -c \t\t\tThe relative json file that contains the config. By default the system will look for config.json which will override any config variables set. Default: './config.json'\n      --session, -s \t\t\tA properly escaped string of the session.data.json file.\n      --keep-alive, -a \t\t\tIf set, the system will force the session to refocus in this process. This will prevent you from opening a whatsapp session anywhere else.\n      --license, -l \t\t\tThe license key you want to use for this server. License keys are used to unlock features. Learn more here https://github.com/open-wa/wa-automate-nodejs#license-key\n" + configParamText + "\n\n\tPlease check here for more information on some of the above mentioned parameters: https://open-wa.github.io/wa-automate-nodejs/interfaces/configobject.html\n\n\tExamples\n\t  $ open-wa -p 8080 --disable-spins -a\n\t  \n", {
    flags: __assign({ port: {
            type: 'number',
            alias: 'p',
            default: 8008
        }, webhook: {
            type: 'string',
            alias: 'w'
        }, key: {
            type: 'string',
            alias: 'k'
        }, config: {
            type: 'string',
            alias: 'w'
        }, session: {
            type: 'string',
            alias: 's'
        }, noApi: {
            type: 'boolean',
            alias: 'n',
            default: false
        }, licenseKey: {
            type: 'string',
            alias: 'l'
        }, keepAlive: {
            type: 'boolean',
            alias: 'a'
        } }, extraFlags),
    booleanDefault: undefined
});
app.use(express.json({ limit: '200mb' }));
var c = cli.flags;
var PORT = c.port;
var config = {};
if (c === null || c === void 0 ? void 0 : c.config) {
    var configJsonPath = path_1.default.join(path_1.default.resolve(process.cwd()), (c === null || c === void 0 ? void 0 : c.config) || "config.json");
    if (fs.existsSync(configJsonPath)) {
        try {
            config = JSON.parse(fs.readFileSync(configJsonPath));
        }
        catch (error) {
            throw "Unable to parse config file as JSON. Please make sure " + configJsonPath + " is a valid JSON config file";
        }
    }
    else
        throw "config not found at " + configJsonPath;
}
else {
    config = __assign({}, c);
}
if (c === null || c === void 0 ? void 0 : c.session) {
    try {
        var sessionData = JSON.parse(fs.readFileSync(c === null || c === void 0 ? void 0 : c.session));
    }
    catch (error) {
        throw "Unable to parse session data string as JSON";
    }
}
if (c === null || c === void 0 ? void 0 : c.licenseKey) {
    config = __assign(__assign({}, config), { licenseKey: c.licenseKey });
}
if (!(c.key == null) && c.key == "") {
    c.key = uuidAPIKey.create().apiKey;
}
wa_automate_1.create(__assign({}, config))
    .then(function (client) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (c === null || c === void 0 ? void 0 : c.webhook)
            Object.keys(wa_automate_1.SimpleListener).map(function (eventKey) { return client.registerWebhook(wa_automate_1.SimpleListener[eventKey], c === null || c === void 0 ? void 0 : c.webhook); });
        if (c === null || c === void 0 ? void 0 : c.keepAlive)
            client.onStateChanged(function (state) {
                if (state === "CONFLICT" || state === "UNLAUNCHED")
                    client.forceRefocus();
            });
        if (!(c === null || c === void 0 ? void 0 : c.noApi)) {
            if (c === null || c === void 0 ? void 0 : c.key) {
                console.log("Please use the following api key for requests as a header:\nkey: " + c.key);
                app.use(function (req, res, next) {
                    var apiKey = req.get('key');
                    if (!apiKey || apiKey !== (c === null || c === void 0 ? void 0 : c.key)) {
                        res.status(401).json({ error: 'unauthorised' });
                    }
                    else {
                        next();
                    }
                });
            }
            app.use(client.middleware());
            app.listen(PORT, function () { return console.log("\n\u2022 Listening on port " + PORT + "!"); });
        }
        return [2];
    });
}); })
    .catch(function (e) { return console.log('Error', e.message); });
