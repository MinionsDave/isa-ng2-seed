import { IMyOptions } from 'ngx-mydatepicker';

export const datePickerOptions: IMyOptions = {
  dateFormat: 'yyyy-mm-dd',
  dayLabels: {
    su: '日',
    mo: '一',
    tu: '二',
    we: '三',
    th: '四',
    fr: '五',
    sa: '六'
  },
  monthLabels: {
    1: '一月',
    2: '二月',
    3: '三月',
    4: '四月',
    5: '五月',
    6: '六月',
    7: '七月',
    8: '八月',
    9: '九月',
    10: '十月',
    11: '十一月',
    12: '十二月'
  },
  todayBtnTxt: '今天'
};

Object.freeze(datePickerOptions);
