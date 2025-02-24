#!/usr/bin/env node
/**
 * @file fortunateCow.js
 * @description Exports a function that returns a cowsay message with a random fortune.
 * The module demonstrates data encapsulation and filtering: fortunes can be filtered by category.
 * For the student assignment, some parts of the code are marked for you to implement.
 * @module fortunateCow
 */

import { say } from 'cowsay';
import fortunesData from './fortunes.json' with { type: 'json' };

/**
 * Loads the fortunes array from the imported fortunesData.
 *
 * @returns {Array<Object>} An array of fortune objects.
 */
function loadFortunes() {
  return fortunesData.fortunes;
}

/**
 * Filters fortunes based on category.
 *
 * For the student assignment, please remove the example filtering logic below
 * and replace it with your own implementation if desired.
 *
 * @param {Array<Object>} fortunes - Array of fortune objects.
 * @param {string} [category] - Optional category to filter by.
 * @returns {Array<Object>} The filtered array of fortune objects.
 */
function filterFortunes(fortunes, category) {
  // TODO: BEGIN STUDENT ASSIGNMENT
  // TODO: If there is no category, return the original array
  true; // replace this with your code here
  // TODO: END STUDENT ASSIGNMENT

  // TODO: BEGIN STUDENT ASSIGNMENT
  // TODO: Create an array of fortunes matching category
  true; // replace this with your code here
  // TODO: END STUDENT ASSIGNMENT
  return fortunes;
}

/**
 * Selects a random fortune from the provided fortunes array.
 *
 * @param {Array<Object>} fortunes - An array of fortune objects.
 * @returns {string} The text of a randomly selected fortune.
 */
function getRandomFortune(fortunes) {
  // TODO: BEGIN STUDENT ASSIGNMENT
  // TODO: msg must be changed to be a random fortune
  const msg = `Get a random fortune from the ${fortunes.length} fortunes`;  // replace this with your code here
  // TODO: END STUDENT ASSIGNMENT
  return msg;
}

/**
 * Returns a cowsay message containing a random fortune.
 * Optionally filters the fortunes by category.
 *
 * @param {string} [category] - The category to filter fortunes by.
 * @returns {string} The cowsay message with the selected fortune.
 *
 * @example
 * To use the module, supply an optional filter:
 * const msg = fortunateCow("motivational");
 * console.log(msg);
 */
export function fortunateCow(category) {
  let fortunes = loadFortunes();

  // If a filtering option is provided, filter the fortunes.
  if (category) {
    fortunes = filterFortunes(fortunes, category);
  }

  // If no fortunes match the filters, return a default message.
  if (!fortunes.length) {
    return "No fortune found matching your criteria.";
  }

  const fortune = getRandomFortune(fortunes);

  // TODO: BEGIN STUDENT ASSIGNMENT
  // TODO: Replace msg by calling the say function
  const fortuneMessage = `${fortune} and then a cow using its say() function`;  // replace this with your code here
  // TODO: END STUDENT ASSIGNMENT
  return fortuneMessage;

}
