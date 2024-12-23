import browser from 'webextension-polyfill';

// Create the context menu
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: 'sendToPhone',
    title: 'Send to Phone',
    contexts: ['selection'], // Show the menu only when text is selected
  });
});

// Handle the context menu click
browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log('Menu item clicked:', info);

  if (info.menuItemId === 'sendToPhone' && info.selectionText) {
    console.log('Selected text:', info.selectionText); // Debug log

    // Save the selected text
    browser.storage.local
      .set({ selectedText: info.selectionText })
      .then(() => {
        console.log('Text successfully saved!');
      })
      .catch((error) => {
        console.error('Failed to save text:', error);
      });
  } else {
    console.log('No text selected or incorrect menu item.');
  }
});

