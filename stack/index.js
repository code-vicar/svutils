(function () {
    'use strict';

    var Stack = function Stack() {
        this.container = [];
    };

    // push a value onto the top of the stack
    Stack.prototype.push = function push(val) {
        this.container.unshift(val);
    };

    // pop a value off the top of the stack
    Stack.prototype.pop = function pop() {
        if (this.container.length > 0) {
            return (Array.prototype.splice.call(this.container, 0, 1))[0];
        }
        return null;
    };

    Stack.prototype.length = function length() {
        return this.container.length;
    };

    // see the value of the item on the top of the stack
    Stack.prototype.peek = function peek() {
        if (this.container.length > 0) {
            return this.container[0];
        }
        return null;
    };

    module.exports = Stack;
}());
