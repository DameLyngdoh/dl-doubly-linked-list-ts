"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Node implementation class. A node is a vertex in the list which contains data and pointers to the next node and previous node.
 */
var DLNode = /** @class */ (function () {
    function DLNode() {
        /**
         * The data contained in the node.
         */
        this._data = null;
        /**
         * The edge or pointer to the next node.
         */
        this._next = null;
        /**
         * The edge or pointer to the previous node.
         */
        this._previous = null;
    }
    Object.defineProperty(DLNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DLNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DLNode.prototype, "previous", {
        get: function () {
            return this._previous;
        },
        set: function (previous) {
            this._previous = previous;
        },
        enumerable: true,
        configurable: true
    });
    return DLNode;
}());
exports.DLNode = DLNode;
