const countdown = (time: number = 24, cb?: (param?: any, timer?: any) => void) => {
    var start = time;
    let timer: any = null;
    if(time > 0){
        timer = setTimeout(() => {
            start--;
            countdown(start);
            cb && cb(start, timer);
            clearTimeout(timer);
        }, 1000);
    }else{
        clearTimeout(timer);
    }
}

export default countdown;