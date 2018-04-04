// ==UserScript==
// @name         No MIUI Forums BS
// @namespace    https://github.com/nlivingston-ap/no-miui-forums-bs
// @version      1.0
// @description  Removes nonsense (medals, Chinese characters in thread titles, stamps, smileys are shrunk down) from the MIUI forum.
// @author       NLivingston
// @include 	  *.miui.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        GM_addStyle
// @run-at document-end
// ==/UserScript==

(function(cleanUpPage) {
    'use strict';
    // get every image on the page and put it in an array.
    var imgsOnPage = document.getElementsByTagName('img');
    for (var i = 0; i < imgsOnPage.length; i++) {
        // check if the image is from the smileys directory. if it is, make it so it's not quite so bloody huge.
        if (imgsOnPage[i].src.match('^http://en.miui.com/static/image/smiley/') || imgsOnPage[i].src.match('http://static.en.intl.miui.com/static/image/smiley')) {
            imgsOnPage[i].setAttribute("height", "20");
            imgsOnPage[i].setAttribute("width", "20");
        }
        // same as before, but check to see if it's from the stamps directory. if so, remove it.
        else if (imgsOnPage[i].src.match('^http://static.en.intl.miui.com/static/image/stamp')){
            $( imgsOnPage[i] ).remove();
        }
		// remove the images corresponding to filetypes before downloadable attachments
		else if (imgsOnPage[i].src.match('^http://static.en.intl.miui.com/static/miui/base/filetype')){
		    $( imgsOnPage[i] ).remove();
		}
    }
    // remove the medal boxes
    // get all users' medal boxes and put them in an array.
    var medalBoxes = document.getElementsByClassName('md_ctrl');
    for (var j = 0; j < medalBoxes.length; i++) {
        // ...then remove them.
        $( medalBoxes[j] ).remove();
    }
    // you know the drill. remove all threads with Chinese characters in the title from the list.
    var threadsInList = document.GetElementsByClassName('s xst'); {
        for (var k = 0; k < threadsInList.length; i++) {
            // something something remove the entries
            if (threadsInList[k].innerHTML.match(/[\u3400-\u9FBF]/)) {
                $( threadsInList[k] ).remove();
            }
        }
    }
})

();