// ==UserScript==
// @name         JSESSIONID Changer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  JSESSIONID cookie değiştirici
// @match        https://esatis.uyap.gov.tr/up/giris.jsp
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function () {
    'use strict';

    const header = document.createElement('div');
    header.style.cssText = 'position:fixed;top:0;left:0;width:100%;z-index:999999;background:#1a1a2e;padding:10px 20px;display:flex;align-items:center;gap:12px;box-shadow:0 2px 8px rgba(0,0,0,0.3);font-family:Arial,sans-serif;';

    const label = document.createElement('span');
    label.textContent = 'JSESSIONID:';
    label.style.cssText = 'color:#e0e0e0;font-size:14px;font-weight:bold;white-space:nowrap;';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Yeni JSESSIONID değerini girin...';
    input.style.cssText = 'flex:1;padding:8px 12px;border:1px solid #444;border-radius:4px;background:#2a2a3e;color:#fff;font-size:14px;outline:none;';

    const button = document.createElement('button');
    button.textContent = 'Uygula';
    button.style.cssText = 'padding:8px 20px;background:#e94560;color:#fff;border:none;border-radius:4px;font-size:14px;cursor:pointer;font-weight:bold;';

    button.addEventListener('click', function () {
        const newValue = input.value.trim();
        if (!newValue) {
            alert('Lütfen bir JSESSIONID değeri girin.');
            return;
        }
        document.cookie = 'JSESSIONID=' + newValue + '; path=/';
        window.location.href = 'https://esatis.uyap.gov.tr/pp/index.jsp';
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            button.click();
        }
    });

    header.appendChild(label);
    header.appendChild(input);
    header.appendChild(button);
    document.body.insertBefore(header, document.body.firstChild);

    // Sayfanın içeriğini header'ın altına kaydır
    document.body.style.paddingTop = '50px';
})();
