// ==UserScript==
// @name         github commit links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       rhaksw
// @match        https://github.com/*/commits/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.sha').forEach(link => {
        var blobLink = link.cloneNode(true);
        var parts = link.href.split('#').slice(0,-1).join('#').split('/');
        var suffix = window.location.pathname.split('/').slice(5).join('/');
        parts[parts.length-2] = 'blob';
        blobLink.href = parts.join('/')+'/'+suffix;
        blobLink.innerHTML = 'blob';
        link.parentNode.insertBefore(blobLink, null);
    })
})();
