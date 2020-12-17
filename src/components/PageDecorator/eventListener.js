export default function eventListener(eventType, eventHandlerName) {
    return function (target) {
        const {
            prototype,
            prototype: {
                componentDidMount: originalComponentDidMount,
                componentWillUnmount: origanalComponentWillUnmount
            }
        } = target;

        prototype.componentDidMount = function () {
            originalComponentDidMount && originalComponentDidMount.call(this);
            if (this[eventHandlerName]) {
                window.addEventListener(eventType, this[eventHandlerName]);
            }
        };

        prototype.componentWillUnmount = function () {
            origanalComponentWillUnmount && origanalComponentWillUnmount.call(this);
            if (this[eventHandlerName]) {
                window.removeEventListener(eventType, this[eventHandlerName]);
            }
        };
    };
}
