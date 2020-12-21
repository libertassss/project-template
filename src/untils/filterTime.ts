const filterTime = (time: number) => {
    let h: number | string = 0;
    let m: number | string = 0;
    let s: number | string = 0;
    h = Math.floor(time/3600);
    m = Math.floor((time - h*3600)/60);
    s = time%60;
    if(h < 10){
       h = `0${h}`;
    }
    if(m < 10){
        m = `0${m}`
    }
    if(s < 10){
        s = `0${s}`
    }
    return `${h}:${m}:${s}`
}

export default filterTime;