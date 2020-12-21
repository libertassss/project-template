const filterDate = (time: number) => {
    const date = new Date(time);
    const M = date.getMonth()+1;
    const d = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const timeDate = `${M >= 10 ? M : `0${M}`}-${d >= 10 ? d : `0${d}`} ${h >= 10 ? h : `0${h}`}:${m >= 10 ? m : `0${m}`}`
    return timeDate;
}

export default filterDate;