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
    let custom_styles = document.createElement('style');
    let styles = "ytd-searchbox { justify-content: flex-start !important; margin-left: 11vw !important }";
    custom_styles.appendChild(document.createTextNode(styles));
    document.head.appendChild(custom_styles);
})();
