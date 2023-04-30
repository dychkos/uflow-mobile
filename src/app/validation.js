import { Helper } from './services/Helper';

export const createTaskRules = [
  {
    key: 'action',
    rule: (value) => Boolean(value),
    msg: 'Provide Action to do.'
  },
  {
    key: 'how_many',
    rule: (value) => Boolean(value),
    msg: 'Provide how many things need to do.'
  },
  {
    key: 'how_many',
    rule: (value) => Boolean(value) && Helper.isValidInteger(value),
    msg: 'Input should be a numeric.'
  },
  {
    key: 'unit',
    rule: (value) => Boolean(value),
    msg: 'Describe what thing should be done.'
  },
  {
    key: 'days',
    rule: (value) => Array.isArray(value) && value.length,
    msg: 'Choose day to repeat the task.'
  }
];
