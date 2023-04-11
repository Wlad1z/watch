import React, { useState, useEffect } from 'react';

interface ClockProps {
timeZone: string;
}

interface ClockState {
hours: number;
minutes: number;
seconds: number;
}

const Clock: React.FC<ClockProps> = ({ timeZone }) => {
const [time, setTime] = useState<ClockState>({ hours: 0, minutes: 0, seconds: 0 });

useEffect(() => {
fetchTime();
const interval = setInterval(fetchTime, 1000);
return () => clearInterval(interval);
}, [timeZone]);

const fetchTime = async () => {
try {
const response = await fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`);
const data = await response.json();
const currentTime = new Date(data.datetime);
setTime({
hours: currentTime.getUTCHours(),
minutes: currentTime.getUTCMinutes(),
seconds: currentTime.getUTCSeconds(),
});
} catch (error) {
console.error('Failed to fetch time:', error);
}
};

return (
<div className="clock">
<div className="clock-face">
<div
className="hour-hand"
style={{ transform: `rotate(${time.hours * 30 + time.minutes * 0.5 + 150}deg)` }}
/>
<div
className="minute-hand"
style={{ transform: `rotate(${time.minutes * 6 + time.seconds * 0.1 + 70}deg)` }}
/>
<div
className="second-hand"
style={{ transform: `rotate(${time.seconds * 6}deg)` }}
/>
</div>
<div className="semi-circle"></div>
</div>
);
};

export default Clock;