// ==UserScript==
// @name         Old YouTube searchbar
// @namespace    https://github.com/makl11
// @version      1.1
// @description  Restores the YouTube seachbars old location
// @author       makl11
// @icon         https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico
// @match        https://*.youtube.com/*
// @match        http://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const ytSearch = document.querySelector('ytd-searchbox');
    ytSearch.style.justifyContent = 'flex-start';
    ytSearch.style.marginLeft = '11vw';
})();