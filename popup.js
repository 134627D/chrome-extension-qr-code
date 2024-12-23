import browser from "webextension-polyfill";
import QRCode from 'qrcode';

document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the selected text from storage
  browser.storage.local.get('selectedText').then((data) => {
    const text = data.selectedText || 'No text selected';
    const qrContainer = document.getElementById('qrcode');

    // Generate QR code
    QRCode.toCanvas(qrContainer, String(text), { width: 200 }, (error) => {
      if (error) console.error('QR Code generation failed:', error);
    });
  });
});


