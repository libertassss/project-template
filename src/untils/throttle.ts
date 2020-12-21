

const throttle = ( func: any, wait: any, options?: any ) => {
    let time: any, context: any, args: any
    let previous = 0;
    if (!options) options = {};

    let later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        time = null;
        func.apply(context, args);
        if (!time) context = args = null;
    };

    let throttled = function (this: any) {
        let now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        let remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (time) {
                clearTimeout(time);
                time = null;
            }
            previous = now;
            func.apply(context, args);
            if (!time) context = args = null;
        } else if (!time && options.trailing !== false) {
            time = setTimeout(later, remaining);
        }
    };
    return throttled;
}

export default throttle;