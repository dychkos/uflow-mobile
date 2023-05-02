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

export const loginRules = [
  {
    key: 'email',
    rule: (value) =>
      value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    msg: 'Insert a valid email.'
  },
  {
    key: 'password',
    rule: (value) => Boolean(value) && value.length > 3, //todo: return to 7
    msg: 'Provide more secure password.'
  }
];
