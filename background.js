chrome.runtime.onInstalled.addListener(() => {
  console.log('Something is happening!');
});

chrome.commands.onCommand.addListener((command) => {
  console.log('Command:', command);
})