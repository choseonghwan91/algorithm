function solution(video_len, pos, op_start, op_end, commands) {
    let currentTime = isOpeningTime(pos, op_start, op_end) ? op_end : pos;
    commands.forEach((command) => {
        if(command === "prev"){
            currentTime = handlePrev(currentTime);
        } else {
            currentTime = handleNext(currentTime, video_len);
        }
        if(isOpeningTime(currentTime, op_start, op_end)){
            currentTime = op_end;
        }
    })
    return currentTime;
}

const convertTimeToSec = (time) => {
    const timeArray = time.split(":");
    return Number(timeArray[0]) * 60 + Number(timeArray[1]);
}

const convertSecToMMSS = (sec) => {
    return parseInt(sec / 60).toString().padStart(2, '0') + ":" + (sec % 60).toString().padStart(2, '0');
}

const handlePrev = (time) => {
    const sec = convertTimeToSec(time);
    if(sec < 10) return "00:00";
    return convertSecToMMSS(sec - 10);
}

const handleNext = (time, endTime) => {
    const sec = convertTimeToSec(time);
    const endSec = convertTimeToSec(endTime);
    if(endSec - sec < 10) return endTime;
    return convertSecToMMSS(sec + 10);
}

const isOpeningTime = (time, openTime, closeTime) => {
    const currentSec = convertTimeToSec(time);
    const openSec = convertTimeToSec(openTime);
    const closeSec = convertTimeToSec(closeTime);
    return currentSec >= openSec && currentSec <= closeSec;
}