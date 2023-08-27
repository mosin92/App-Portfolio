import {useEffect, useRef, useState} from 'react';
/**
 *
 * @param {number} maxSeconds
 * @returns
 */
const useTimeCounter = (maxSeconds: number) => {
  const [seconds, setSeconds] = useState(maxSeconds);

  const intervalRef = useRef<any>(null);
  useEffect(() => {
    if (seconds <= 0) stopInterval();
  }, [seconds]);
  const startInterval = () => {
    clearInterval(intervalRef.current);
    setSeconds(maxSeconds);
    intervalRef.current = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
  };
  const stopInterval = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
  };
    // Hours, minutes and seconds
    const hrs = ~~(seconds / 3600);
    const mins = ~~((seconds % 3600) / 60);
    const secs = ~~seconds % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";
  
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
  
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
  
  return {
    startInterval,
    seconds,
    secondsStr: seconds < 10 ? '0' + seconds : seconds,
    stopInterval,
    isExpired: seconds <= 0,
    time:ret
  };
};
export {useTimeCounter};
