(function () {
    'use strict';

    var Queue = function Queue() {
        this.container = [];
    };

    // push a value onto the end of the queue
    Queue.prototype.enqueue = function enqueue(val) {
        this.container.push(val);
    };

    // pull a value off the front of the Queue
    Queue.prototype.dequeue = function dequeue() {
        if (this.container.length > 0) {
            return (Array.prototype.splice.call(this.container, 0, 1))[0];
        }
        return null;
    };

    Queue.prototype.length = function length() {
        return this.container.length;
    };

    // see the value of the item on the front of the Queue
    Queue.prototype.peek = function peek() {
        if (this.container.length > 0) {
            return this.container[0];
        }
        return null;
    };

    module.exports = Queue;
}());
