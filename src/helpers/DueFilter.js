import Moment from 'moment'
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const today = moment()._d
const endDate = moment(today).add(7, "day").endOf("day").toDate()

const dueFilter = (query, tasks, setDisplayedTasks) => {
  switch(query) {
    case "Due Soon":
      const dates = [moment(today, 'YYYY-MM-DD'), moment(endDate, 'YYYY-MM-DD')];
      const range = moment.range(dates);
      const dueSoon = tasks.filter(task => {
        return range.contains(moment(task.dueDate))
      })
      setDisplayedTasks(dueSoon)
      break;
    case "Due Later":
      const dueLater = tasks.filter(task => {
        return moment(task.dueDate).isAfter(endDate)
      })
      setDisplayedTasks(dueLater)
      break;
    case "Past Due":
      const pastDue = tasks.filter(task => {
        return moment(task.dueDate).isBefore(today)
      })
      setDisplayedTasks(pastDue)
      break;
    case "Not Due":
      const notDue = tasks.filter(task => {
        return !task.dueDate
      })
      setDisplayedTasks(notDue)
      break
    default:
      setDisplayedTasks(tasks)
}}

export default dueFilter