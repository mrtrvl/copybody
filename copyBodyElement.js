let copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: copyBody,
  })
});

copyBody = async () => {
  try {
    const bodyElement = document.body.innerHTML;
    const textAreaElement = document.createElement('textarea');
    textAreaElement.value = bodyElement;
    document.body.appendChild(textAreaElement);
    textAreaElement.select();
    document.execCommand('copy');
    console.log('Body element copied to clipboard');
  } catch (error) {
    console.log(error);
  }
}