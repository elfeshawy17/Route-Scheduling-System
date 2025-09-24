export function parseEstimatedTime(str) {
    const hours = (str.match(/(\d+)\s*hour/) || [])[1] || 0;
    const mins  = (str.match(/(\d+)\s*min/)  || [])[1] || 0;
    return (Number(hours) * 60) + Number(mins);
}