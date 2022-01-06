"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var AdaptiveImage = (function () {
    function AdaptiveImage(img) {
        this.data = img;
    }
    Object.defineProperty(AdaptiveImage.prototype, "uri", {
        get: function () {
            console.log('PixelRatio: ', react_native_1.PixelRatio.get(), 'data: ', JSON.stringify(this.data));
            if (react_native_1.PixelRatio.get() > 2 && this.data['uri@3x']) {
                return this.data['uri@3x'];
            }
            else if (react_native_1.PixelRatio.get() > 1 && this.data['uri@2x']) {
                return this.data['uri@2x'];
            }
            return this.data.uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveImage.prototype, "width", {
        get: function () {
            return this.data.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveImage.prototype, "height", {
        get: function () {
            return this.data.height;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveImage.prototype.toString = function () {
        return this.uri;
    };
    return AdaptiveImage;
}());
exports.default = AdaptiveImage;
