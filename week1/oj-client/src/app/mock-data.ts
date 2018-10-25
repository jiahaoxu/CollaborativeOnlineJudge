import {Problem} from './models/problem.model';

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: 'Two Sum',
    desc: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n',
    difficulty: 'easy'
  },
  {
    id: 2,
    name: 'Add Two Numbers',
    desc: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in ' +
      'reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list',
    difficulty: 'medium'
  },
  {
    id: 3,
    name: 'Longest Substring Without Repeating Characters',
    desc: 'Given a string, find the length of the longest substring without repeating characters',
    difficulty: 'medium'
  }
];
