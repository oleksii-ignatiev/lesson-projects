import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');
export const momentutc = (date) => moment.utc(date);