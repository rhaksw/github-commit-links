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
    var hasPath = document.querySelector('.final-path');

    document.querySelectorAll('.sha').forEach(link => {
        var blobLink = link.cloneNode(true);
        var hashParts = link.href.split('#');
        var parts = hashParts.slice(0,-1);
        if (hashParts.length === 1) {
            parts = hashParts;
        }
        parts = parts.join('#').split('/')
        var suffix = window.location.pathname.split('/').slice(5).join('/');
        if (hasPath) {
            parts[parts.length-2] = 'blob';
        } else {
            // special case for root directory history view
            parts[parts.length-2] = 'tree';
        }
        blobLink.href = parts.join('/')+'/'+suffix;
        blobLink.innerHTML = 'blob';
        link.parentNode.insertBefore(blobLink, null);
    })
})();
