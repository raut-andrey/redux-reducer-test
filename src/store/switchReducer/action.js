import { FIRST, MIDDLE, LAST } from './actionNames';

export const toggleFirst = (cb) => ({ type: FIRST, cb });

export const toggleMiddle = (cb) => ({ type: MIDDLE, cb });

export const toggleLast = (cb) => ({ type: LAST, cb });
