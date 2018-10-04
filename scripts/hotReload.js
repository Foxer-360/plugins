const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '../');

/**
 * Simple helper to color text into red
 *
 * @param  {string} text
 * @return {string}
 */
const red = (text) => {
  const reset = '\x1b[0m';
  const bright = '\x1b[1m';
  const red = '\x1b[31m';

  return bright + red + text + reset;
};

/**
 * Simple helper to color text into green
 *
 * @param  {string} text
 * @return {string}
 */
const green = (text) => {
  const reset = '\x1b[0m';
  const bright = '\x1b[1m';
  const green = '\x1b[32m';

  return bright + green + text + reset;
};

/**
 * This will return passed function, but debounced by given parameter
 *
 * @param {Function} fce which will be debounced
 * @param {number} ms time in miliseconds
 * @return {Function} debounced function
 */
const debounce = (fce, ms) => {
  let timeout;

  return function() {
    const context = this;
    const args = arguments;

    const callback = () => {
      timeout = null;
      fce.apply(context, args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(callback, ms);
  }
};

/**
 * Simple watch listener, which is called everytime some file changes. This
 * function just call rebuild of package and also filter just to TS files
 *
 * @param  {string} eventType change, rename
 * @param  {string} filename  name of file
 * @return {void}
 */
const watchListener = (eventType, filename) => {
  console.log(`File ${filename} was changed ! ${red('Rebuilding...')}`);

  execSync('yarn rebuild', {
    cwd: rootDir,
  });
  console.log(green('Done...'));
};

/**
 * Main function of this script
 *
 * @return {void}
 */
const main = () => {
  // This will clear terminal
  process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');

  console.log(green('Hot reload is running...\n'));

  const dirPath = path.resolve(rootDir, 'src');

  // Run watches
  const options = {
    persistent: true,
    recursice: true,
  };
  fs.watch(dirPath, options, debounce(watchListener, 100));
};

// Just run main function
main();
