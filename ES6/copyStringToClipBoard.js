/**
 * 2. Write a JavaScript program to copy a string to the clipboard
 */
let navigator = Navigator();

const copyClipboard = () => {
  return new Promise((resolved, rejected) => {
    navigator.clipboard
      .writeText(`This is text to coped to clipboard`)
      .then(() => console.log(`text content clipboars`))
      .then(resolved())
      .catch((err) => rejected("failed to copied"));
  });
};

copyClipboard();
