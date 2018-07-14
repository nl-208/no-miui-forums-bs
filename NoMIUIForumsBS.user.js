// ==UserScript==
// @id com.theautomatedparts.nlivingston.nomiuiforumsbs
// @name         No MIUI Forums BS
// @version      1.2
// @homepage https://theautomatedparts.com
// @description  Removes nonsense (medals, Chinese characters in thread titles, stamps, smileys are shrunk down, less icons) from the MIUI forum.
// @author       NLivingston
// @updateURL https://github.com/nlivingston-ap/no-miui-forums-bs/raw/master/NoMIUIForumsBS.user.js
// @include 	  *.miui.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// the grant below is just to ensure the sandbox activates (otherwise all other javascript elements on the page will break.) It doesn't do anything other than that.
// @grant        GM_addStyle
// @run-at document-end
// ==/UserScript==
// Variables
var imgsOnPage = document.getElementsByTagName('img');
var threadsInList = document.GetElementsByClassName('s xst');
var medalBoxes = document.getElementsByClassName('md_ctrl');

(function(removeMedals) {
        // remove the medal boxes
        // get all users' medal boxes and put them in an array.
        for (var j = 0; j < medalBoxes.length; i++) {
            // ...then remove them.
            $(medalBoxes[j]).remove();
        })

    (function(fixSmileys) {
            for (var i = 0; i < imgsOnPage.length; i++) {
                // check if the image is from the smileys directory. if it is, make it so it's not quite so bloody huge.
                if (imgsOnPage[i].src.match('^http://en.miui.com/static/image/smiley/') || imgsOnPage[i].src.match('http://static.en.intl.miui.com/static/image/smiley')) {
                    imgsOnPage[i].setAttribute("height", "20");
                    imgsOnPage[i].setAttribute("width", "20");
                }
            })

        (function(removeStamps) {
            // same as before, but check to see if it's from the stamps directory. if so, remove it.
            if (imgsOnPage[i].src.match('^http://static.en.intl.miui.com/static/image/stamp')) {
                $(imgsOnPage[i]).remove();
            }
        })

        (function(removeChineseTitles) {
            // you know the drill. remove all threads with Chinese characters in the title from the list.
                for (var k = 0; k < threadsInList.length; i++) {
                    // remove the entries from the list
                    if (threadsInList[k].innerHTML.match(/[\u3400-\u9FBF]/)) {
                        $(threadsInList[k]).remove();
                    }
                }
            }
        })

        ();