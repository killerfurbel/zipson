"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A zipson writer takes a piece of zipson compression output as a string
 */
var ZipsonWriter = /** @class */ (function () {
    function ZipsonWriter() {
    }
    return ZipsonWriter;
}());
exports.ZipsonWriter = ZipsonWriter;
/**
 * Writes zipson compression outupt in full to a string
 */
var ZipsonStringWriter = /** @class */ (function (_super) {
    __extends(ZipsonStringWriter, _super);
    function ZipsonStringWriter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = '';
        return _this;
    }
    ZipsonStringWriter.prototype.write = function (data) {
        this.value += data;
    };
    ZipsonStringWriter.prototype.end = function () { };
    return ZipsonStringWriter;
}(ZipsonWriter));
exports.ZipsonStringWriter = ZipsonStringWriter;
//# sourceMappingURL=writer.js.map