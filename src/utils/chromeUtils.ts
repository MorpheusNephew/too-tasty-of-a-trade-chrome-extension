const getCurrentTabId = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  return tab.id;
};

export const executeScriptInTab = async <T>(
  scriptToRun: () => T
): Promise<T> => {
  const tabId = await getCurrentTabId();
  const [response] = await chrome.scripting.executeScript({
    target: { tabId },
    world: "MAIN",
    func: scriptToRun,
    injectImmediately: false,
  });

  return response.result;
};
