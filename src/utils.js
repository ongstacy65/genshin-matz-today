const getToday = () => new Date().toLocaleString('en-us', {  weekday: 'long' })
const getItemsToday = (items, day) => Object.values(items).flatMap(list => list.filter(item => item.schedule.includes(day)))

export {
    getToday,
    getItemsToday
}