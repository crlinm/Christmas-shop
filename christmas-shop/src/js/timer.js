
const TIMER_VALUES = document.querySelectorAll('.timer__value');

export function timer() {
    // const newYearDate = new Date("2025-01-01T00:00:00Z");
    const newYearDate = new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00Z`);
    let diffTime = newYearDate - Date.now();

    const mlsInDay = 1000 * 60 * 60 * 24;
    const mlsInHour = 1000 * 60 * 60;
    const mlsInMinute = 1000 * 60;

    const diffDays = Math.floor(diffTime / mlsInDay);
    diffTime -= diffDays * mlsInDay;

    const diffHours = Math.floor(diffTime / mlsInHour);
    diffTime -= diffHours * mlsInHour;

    const diffMinutes = Math.floor(diffTime / mlsInMinute);
    diffTime -= diffMinutes * mlsInMinute;

    const diffSeconds = Math.floor(diffTime / 1000);
    const res = [diffDays, diffHours, diffMinutes, diffSeconds];

    let i = 0;
    for (const t of TIMER_VALUES) {
        t.textContent = res[i++];
    }
}
