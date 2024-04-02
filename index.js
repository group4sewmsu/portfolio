/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib)
});

;// CONCATENATED MODULE: ./lib/core/use.js
const __axle_js_middleware = [];
function use(cb) {
    return __axle_js_middleware.push(cb);
}
function __getMiddleware() {
    return __axle_js_middleware;
}

;// CONCATENATED MODULE: ./lib/core/useOptions.js
const __axle_js_middleware_options = [];
function useOptions(options) {
    return __axle_js_middleware_options.push(options);
}
function __getMiddlewareOptions() {
    return __axle_js_middleware_options;
}

;// CONCATENATED MODULE: ./lib/utils/handleStatus.js
function handleStatus(method, status, statusMessage) {
    if (status >= 400) {
        if (statusMessage) {
            return `${method.toUpperCase()}: Fetch returned with error code ${status}. Status Message: "${statusMessage}"`;
        }
        else {
            return `Fetch returned with error ${status}`;
        }
    }
    else {
        return false;
    }
}

;// CONCATENATED MODULE: ./lib/utils/isJSON.js
function isJSON(json) {
    try {
        const jsonStr = JSON.stringify(json);
        JSON.parse(jsonStr);
        return true;
    }
    catch (error) {
        return false;
    }
}

;// CONCATENATED MODULE: ./lib/utils/getQuery.js
function getQuery(url) {
    const urlSearchParams = new URLSearchParams(url);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
}

;// CONCATENATED MODULE: ./lib/utils/queryParam.js
function queryParam(name, url) {
    const urlSearchParams = new URLSearchParams(url);
    if (urlSearchParams.has(name)) {
        return urlSearchParams.get(name);
    }
    else {
        return null;
    }
}

;// CONCATENATED MODULE: ./lib/models/headers.js
class AxleHeaders {
    constructor(headers) {
        this.headers = headers;
    }
    append(name, value) {
        this.headers.append(name, value);
    }
    delete(name) {
        if (this.has(name)) {
            this.headers.delete(name);
            return true;
        }
        else {
            return false;
        }
    }
    deleteByValue(value) {
        const found = Object.keys(this.object()).find((key) => this.object()[key] === value);
        if (found) {
            delete this.object()[found];
            return true;
        }
        else {
            return false;
        }
    }
    get entries() {
        return this.headers.entries();
    }
    get(name) {
        return this.headers.get(name);
    }
    getByValue(value) {
        return Object.keys(this.object()).find((key) => this.object()[key] === value);
    }
    set(name, value, ifExists = false) {
        if (ifExists) {
            if (this.has(name)) {
                this.headers.set(name, value);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    has(name) {
        return this.headers.has(name);
    }
    hasValue(value) {
        const values = this.valueArray();
        for (let i = 0; i < values.length; i++) {
            const item = values[i];
            if (item === value) {
                return true;
            }
            else {
                if (i !== values.length) {
                    continue;
                }
                else {
                    return false;
                }
            }
        }
    }
    each(cb) {
        const obj = this.object();
        Object.keys(obj).forEach((key, index) => {
            return cb(key, obj[key], index);
        });
    }
    keys() {
        return this.headers.keys();
    }
    values() {
        return this.headers.values();
    }
    keyArray() {
        return [...this.keys()];
    }
    valueArray() {
        return [...this.values()];
    }
    object() {
        return Object.fromEntries(this.entries);
    }
    is(name, value) {
        if (this.has(name)) {
            return this.get(name) === value;
        }
        else {
            return null;
        }
    }
    includesValue(name, value) {
        var _a;
        if (this.has(name)) {
            return ((_a = this.get(name)) === null || _a === void 0 ? void 0 : _a.includes(value)) || false;
        }
        else {
            return null;
        }
    }
    get basic() {
        return Object.assign({}, this.headers);
    }
}

;// CONCATENATED MODULE: ./lib/models/response.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class AxleResponse {
    constructor(res, timeStart, timeEnd) {
        this.res = res;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
    }
    json() {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield this.res.json();
            return json;
        });
    }
    data() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield this.res.text();
            return text;
        });
    }
    body() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            return (_b = (yield ((_a = this.res.body) === null || _a === void 0 ? void 0 : _a.getReader().read()))) === null || _b === void 0 ? void 0 : _b.value;
        });
    }
    get bodyReader() {
        return this.res.body;
    }
    get bodyUsed() {
        return this.res.bodyUsed;
    }
    redirect(url, ifStatusOk = true) {
        if (ifStatusOk) {
            if (this.res.ok) {
                location.replace(url.toString());
            }
        }
        else {
            location.replace(url.toString());
        }
    }
    finishRedirect() {
        if (this.res.headers.has('Location')) {
            const url = this.res.headers.get('Location');
            location.replace((url === null || url === void 0 ? void 0 : url.toString()) ||
                (() => {
                    console.error('AxleJS: Unexpected error. Headers includes location but retrieved header is undefined or null. Defaulted to a blank string.');
                    return '';
                })());
            return true;
        }
        else {
            console.error('AxleJS: Cannot finish redirect. New Location Header ("Location") is not found.', `Location Header: ${this.res.headers.get('Location')}`);
            return null;
        }
    }
    get status() {
        return this.res.status;
    }
    get statusMessage() {
        return this.res.statusText;
    }
    blob() {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = yield this.res.blob();
            return blob;
        });
    }
    get url() {
        return this.res.url;
    }
    get query() {
        return getQuery(new URL(this.res.url).search);
    }
    queryParam(name) {
        return queryParam(name, new URL(this.res.url).search);
    }
    get headers() {
        return new AxleHeaders(this.res.headers);
    }
    get timeTook() {
        return this.timeEnd - this.timeStart;
    }
    get type() {
        return this.res.type;
    }
    get basic() {
        return Object.assign({}, this.res);
    }
}

;// CONCATENATED MODULE: ./lib/models/request.js
var request_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class AxleRequest {
    constructor(method, url, body, options) {
        this.method = method.toUpperCase();
        this.url = url;
        this.body = body;
        this.options = options;
        this.response;
    }
    run() {
        return request_awaiter(this, void 0, void 0, function* () {
            let middlewareOptions = {};
            __getMiddlewareOptions().forEach((option) => {
                middlewareOptions = Object.assign(Object.assign({}, middlewareOptions), option);
            });
            let fetchBody = this.body;
            if (isJSON(fetchBody)) {
                fetchBody = JSON.stringify(this.body);
            }
            else {
                fetchBody = this.body;
            }
            const fetchOptions = Object.assign(Object.assign(Object.assign({}, this.options), { method: this.method, body: fetchBody }), middlewareOptions);
            const timeStart = performance.now();
            const res = yield fetch(this.url, fetchOptions);
            const timeEnd = performance.now();
            if (fetchOptions.handleStatus) {
                if (fetchOptions.handleStatus(res.status, res.statusText)) {
                    if (res.statusText.trim() !== '') {
                        this.response = new AxleResponse(res, timeStart, timeEnd);
                        console.error(`${this.method.toUpperCase()}: Fetch returned with error code ${res.status}. Status Message: "${res.statusText}"`);
                        return Promise.reject({
                            status: res.status,
                            message: `${this.method.toUpperCase()}: Fetch returned with error code ${res.status}. Status Message: "${res.statusText}"`,
                            response: this.response,
                            request: this,
                        });
                    }
                    else {
                        this.response = new AxleResponse(res, timeStart, timeEnd);
                        console.error(`${this.method.toUpperCase()}: Fetch returned with error code ${res.status}.`);
                        return Promise.reject({
                            status: res.status,
                            message: `${this.method.toUpperCase()}: Fetch returned with error code ${res.status}.`,
                            response: this.response,
                            request: this,
                        });
                    }
                }
                else {
                    this.response = new AxleResponse(res, timeStart, timeEnd);
                    __getMiddleware().forEach((cb) => {
                        cb(this, this.response);
                    });
                    return this.response;
                }
            }
            else {
                if (handleStatus(this.method, res.status, res.statusText)) {
                    this.response = new AxleResponse(res, timeStart, timeEnd);
                    console.error(handleStatus(this.method, res.status, res.statusText));
                    return Promise.reject({
                        status: res.status,
                        message: handleStatus(this.method, res.status, res.statusText),
                        response: this.response,
                        request: this,
                    });
                }
                else {
                    this.response = new AxleResponse(res, timeStart, timeEnd);
                    __getMiddleware().forEach((cb) => {
                        cb(this, this.response);
                    });
                    return this.response;
                }
            }
        });
    }
}

;// CONCATENATED MODULE: ./lib/core/delete.js
var delete_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function deleteReq(url, data, options = {
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
}) {
    return delete_awaiter(this, void 0, void 0, function* () {
        const req = new AxleRequest('DELETE', url, data, options);
        const res = yield req.run();
        return res;
    });
}

;// CONCATENATED MODULE: ./lib/core/get.js
var get_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function get(url, options = {
    mode: 'cors',
    cache: 'default',
}) {
    return get_awaiter(this, void 0, void 0, function* () {
        const req = new AxleRequest('GET', url, undefined, options);
        const res = yield req.run();
        return res;
    });
}

;// CONCATENATED MODULE: ./lib/core/head.js
var head_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function head(url, options = {
    mode: 'cors',
    cache: 'default',
}) {
    return head_awaiter(this, void 0, void 0, function* () {
        const req = new AxleRequest('HEAD', url, undefined, options);
        const res = yield req.run();
        return res;
    });
}

;// CONCATENATED MODULE: ./lib/core/patch.js
var patch_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function patch(url, data, options = {
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
}) {
    return patch_awaiter(this, void 0, void 0, function* () {
        const req = new AxleRequest('PATCH', url, data, options);
        const res = yield req.run();
        return res;
    });
}

;// CONCATENATED MODULE: ./lib/core/post.js
var post_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function post(url, data, options = {
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
}) {
    return post_awaiter(this, void 0, void 0, function* () {
        const req = new AxleRequest('POST', url, data, options);
        const res = yield req.run();
        return res;
    });
}

;// CONCATENATED MODULE: ./lib/core/put.js
var put_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function put(url, data, options = {
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
}) {
    return put_awaiter(this, void 0, void 0, function* () {
        const req = new AxleRequest('PUT', url, data, options);
        const res = yield req.run();
        return res;
    });
}

;// CONCATENATED MODULE: ./lib/middleware/cors.js
function cors() {
    return {
        mode: 'cors',
        cache: 'default',
    };
}

;// CONCATENATED MODULE: ./lib/middleware/kneepads.js
function kneepads() {
    return {
        credentials: 'omit',
        referrer: '',
        referrerPolicy: 'no-referrer',
    };
}

;// CONCATENATED MODULE: ./lib/middleware/timeTook.js
function timeTook() {
    return (req, res) => {
        console.log('Time Took: ' + res.timeTook + 'ms');
    };
}

;// CONCATENATED MODULE: ./lib/models/cancelMark.js
class AxleCancelMark {
    constructor() {
        this.controller = new AbortController();
        this.signal = this.controller.signal;
    }
    cancel(message) {
        this.controller.abort();
        if (message) {
            console.error(message);
        }
    }
}

;// CONCATENATED MODULE: ./lib/index.js












const Axle = {
    post: post,
    get: get,
    delete: deleteReq,
    put: put,
    patch: patch,
    head: head,
    all: (promises) => {
        return Promise.all(promises);
    },
    cancelMark: AxleCancelMark,
    use: use,
    useOptions: useOptions,
    middleware: {
        timeTook: timeTook,
    },
    middlewareOptions: {
        cors: cors,
        kneepads: kneepads,
    },
};
/* harmony default export */ const lib = (Axle);

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
