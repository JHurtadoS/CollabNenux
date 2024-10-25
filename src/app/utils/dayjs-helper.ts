import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// Configura dayjs con los plugins necesarios
dayjs.extend(utc);

export default dayjs;
