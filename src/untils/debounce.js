const debounce = (fn, wait) => {
    let callback = fn;    
    let timerId = null;
    function debounced() {
        // 保存作用域
        let context = this;
        // 保存参数，例如 event 对象
        let args = arguments;        

        clearTimeout(timerId);        
        timerId = setTimeout(function() {            
            callback.apply(context, args);
        }, wait);
    }
    
    // 返回一个闭包
    return debounced;     
}

export default debounce;