import Moment from 'moment'
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const today = moment()._d
const endDate = moment(today).add(7, "day").endOf("day").toDate()

const dueFilter = (query, tasks, setDisplayedTasks) => {
  let filteredTasks = []
  switch(query) {
    case "Due Soon":
      const dates = [moment(today, 'YYYY-MM-DD'), moment(endDate, 'YYYY-MM-DD')];
      const range = moment.range(dates);
      const dueSoon = tasks.filter(task => {
        return range.contains(moment(task.dueDate))
      })
      filteredTasks = dueSoon
      break;
    case "Due Later":
      const dueLater = tasks.filter(task => {
        return moment(task.dueDate).isAfter(endDate)
      })
      filteredTasks = dueLater
      break;
    case "Past Due":
      const pastDue = tasks.filter(task => {
        return moment(task.dueDate).isBefore(today)
      })
      filteredTasks = pastDue
      break;
    case "Not Due":
      const notDue = tasks.filter(task => {
        return !task.dueDate
      })
      filteredTasks = notDue
      break
    default:
      filteredTasks = tasks
  }
  setDisplayedTasks(filteredTasks)
}

export default dueFilter
