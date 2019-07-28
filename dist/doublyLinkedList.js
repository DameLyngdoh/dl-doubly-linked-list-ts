"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Doubly Linked-List implementation class.
 */
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this._start = null;
        this._end = null;
        this._length = 0;
    }
    Object.defineProperty(DoublyLinkedList.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (start) {
            this._start = start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoublyLinkedList.prototype, "end", {
        get: function () {
            return this._end;
        },
        set: function (end) {
            this._end = end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoublyLinkedList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true if the list is empty.
     * @returns Returns true if list is empty or false otherwise.
     */
    DoublyLinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    };
    /**
     * Inserts a node to the start of the list.
     * @param node The node to be inserted to the list.
     */
    DoublyLinkedList.prototype.insertStart = function (node) {
        if (this.isEmpty()) {
            this.start = node;
            this.end = node;
        }
        else {
            node.next = this.start;
            if (this.start != null) {
                this.start.previous = node;
            }
            this.start = node;
        }
        this._length++;
    };
    /**
     * Inserts a node to the end of the list.
     * @param node The node to be inserted to the list.
     */
    DoublyLinkedList.prototype.insertEnd = function (node) {
        if (this.isEmpty()) {
            this.start = node;
            this.end = node;
        }
        else {
            node.previous = this.end;
            if (this.end != null) {
                this.end.next = node;
            }
            this.end = node;
        }
        this._length++;
    };
    /**
     * Inserts a node at the specified index in the list.
     * @param node The node to be inserted to the list.
     * @param index The index to insert the node at. A value of -1 will insert the node to the end of the list.
     */
    DoublyLinkedList.prototype.insert = function (node, index) {
        if (index == 0) {
            this.insertStart(node);
            return;
        }
        else if (index == -1) {
            this.insertEnd(node);
            return;
        }
        var currentNode = this.start;
        var i = 0;
        for (i = 0; i < index - 1 && currentNode != null; i++) {
            currentNode = currentNode.next;
        }
        // Insertion not possible
        if (i != index - 1 && currentNode == null) {
            return;
        }
        if (currentNode != null) {
            node.previous = currentNode;
            node.next = currentNode.next;
            if (currentNode.next != null) {
                currentNode.next.previous = node;
            }
            else {
                this.end = node;
            }
            currentNode.next = node;
        }
        this._length++;
    };
    /**
     * Deletes the first node from the list.
     */
    DoublyLinkedList.prototype.deleteStart = function () {
        if (this.isEmpty()) {
            return;
        }
        if (this.start != null && this.start.next == null) {
            this.start = null;
            this.end = null;
        }
        else if (this.start != null) {
            this.start = this.start.next;
            if (this.start != null) {
                this.start.previous = null;
            }
        }
        this._length--;
    };
    /**
     * Deletes the last node from the list.
     */
    DoublyLinkedList.prototype.deleteEnd = function () {
        if (this.isEmpty()) {
            return;
        }
        if (this.end != null && this.end.previous == null) {
            this.start = null;
            this.end = null;
        }
        else if (this.end != null) {
            this.end = this.end.previous;
            if (this.end != null) {
                this.end.next = null;
            }
        }
        this._length--;
    };
    /**
     * Deletes a node from a specific index in the list. If the index is out of bounds, then no deletion will occur.
     * @param index The index of the node to be deleted.
     */
    DoublyLinkedList.prototype.delete = function (index) {
        if (this.isEmpty()) {
            return;
        }
        if (index == 0) {
            this.deleteStart();
            return;
        }
        else if (index == -1) {
            this.deleteEnd();
            return;
        }
        var node = this.getNode(index);
        if (node != null) {
            if (node.next == null && node.previous != null) {
                this.deleteEnd();
            }
            else if (node.previous == null && node.next != null) {
                this.deleteStart();
            }
            else if (node.next != null && node.previous != null) {
                node.previous.next = node.next;
                node.next.previous = node.previous;
                this._length--;
            }
        }
    };
    /**
     * Retrieves a node from the specific index.
     * @param index The index from which to retrieve the node.
     * @returns Returns the node at the specific index or null if the index is out of bounds.
     */
    DoublyLinkedList.prototype.getNode = function (index) {
        if (this.isEmpty() || index < 0) {
            return null;
        }
        var currentNode = this.start;
        for (var i = 1; i <= index && currentNode != null; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    /**
     * Returns an array of the nodes in the order of the list.
     * @returns Array of nodes.
     */
    DoublyLinkedList.prototype.toArray = function () {
        var array = new Array();
        if (this.length == 0) {
            return array;
        }
        var i = 0;
        var currentNode = this.start;
        while (currentNode != null && i < 12) {
            array.push(currentNode);
            currentNode = currentNode.next;
            i++;
        }
        return array;
    };
    /**
     * Clears the list and deletes all nodes.
     */
    DoublyLinkedList.prototype.clear = function () {
        this.end = null;
        this.start = null;
        this._length = 0;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
