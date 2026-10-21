// Example script value for the format guide: the sky follows the hour of the day.
// The script sees the frame's clock (clock.hour); in a rendered video the clock is fixed (see the guide's Scripts).
const night = [0.05, 0.07, 0.16];
const day = [0.45, 0.65, 0.9];
const k = 0.5 - 0.5 * Math.cos((clock.hour / 24) * 2 * Math.PI);
return [0, 1, 2].map(i => night[i] + (day[i] - night[i]) * k).concat([1]);
