



const removables = [
    // [/error tags/g, 'replacement strings','Error Name','Is this a QA error? -> true or false']

    // REMOVES UNNECESSARY TAGS AND FIX SPACING ISSUES
    [/​/g, '', 'Half spaces', true],
    [/ /g, ' ', 'Narrow spaces', true],
    [/<i>&nbsp;<\/i>/g, ' ', 'Sticky Text', true],
    [/<p><strong>&nbsp;<\/strong><\/p>/g, '', 'Sticky Text', false],
    [/&nbsp;/g, ' ', '&nbsp; tags', true],
    [/<br>/g, ' ', '<br> tags', true],
    [/<\/br>/g, ' ', '<br> tags', true],
    [/< \/br>/g, ' ', '<br> tags', true],
    [/<p>&nbsp;<\/p>/g, '', 'Extra line spacing', false],
    [/<span style="color:black;">/g, '', 'Span tags', false],
    [/<span style="color:#202124;">/g, '', 'Span tags', false],
    [/<span style="color:#242424;">/g, '', 'Span tags', false],
    [/<span style="color:red;">/g, '', 'Span tags', false],
    [/<span style="color:#050505;">/g, '', 'Span tags', false],
    [/<span style="color:#2F5496;">/g, '', 'Span tags', false],
    [/<span style="color:#2B579A;">/g, '', 'Span tags', false],
    [/<span style="color:#242424;">/g, '', 'Span tags', false],
    [/<span style="color:#404040;">/g, '', 'Span tags', false],
    [/<\/span>/g, '', 'Span tags', false],
    [/<p><\/p>/g, '', 'Extra <p> tags', false],
    [/<p><\/p>/g, '', 'Extra <p> tags', false],
    [/<p> <\/p>/g, '', 'Extra <p> tags', false],
    [/<p>\s*<\/p>/g, '', 'Extra <p> tags', false],
    [/<p><\/p><p>/g, '', 'Extra <p> tags', false],
    [/<\/ul><p> <\/p><p>/g, '', 'Extra <p> tags', false],
    [/<br data-cke-filler="true">/g, '', 'Extra <p> tags', false],
    [/<strong>\s*<\/strong>/g, ' ', 'Extra <strong> tags', false], // removes extra strong
    [/<\/strong>\s*<strong>/g, ' ', 'Extra <strong> tags', false], // removes extra strong
    [/\$10Bonus Dollars/g, '$10 Bonus Dollars', 'Sticky Text', true],
    [/\$5Bonus Dollars/g, '$5 Bonus Dollars', 'Sticky Text', true],
    [/1Bonus Dollars/g, '1 Bonus Dollars', 'Sticky Text', true],
    [/2Bonus Dollars/g, '2 Bonus Dollars', 'Sticky Text', true],
    [/3Bonus Dollars/g, '3 Bonus Dollars', 'Sticky Text', true],
    [/4Bonus Dollars/g, '4 Bonus Dollars', 'Sticky Text', true],
    [/6Bonus Dollars/g, '6 Bonus Dollars', 'Sticky Text', true],
    [/7Bonus Dollars/g, '7 Bonus Dollars', 'Sticky Text', true],
    [/8Bonus Dollars/g, '8 Bonus Dollars', 'Sticky Text', true],
    [/9Bonus Dollars/g, '9 Bonus Dollars', 'Sticky Text', true],
    [/0FREEPLAY®/g, '0 FREEPLAY®', 'Sticky Text', true],
    [/1FREEPLAY®/g, '1 FREEPLAY®', 'Sticky Text', true],
    [/2FREEPLAY®/g, '2 FREEPLAY®', 'Sticky Text', true],
    [/3FREEPLAY®/g, '3 FREEPLAY®', 'Sticky Text', true],
    [/4FREEPLAY®/g, '4 FREEPLAY®', 'Sticky Text', true],
    [/5FREEPLAY®/g, '5 FREEPLAY®', 'Sticky Text', true],
    [/6FREEPLAY®/g, '6 FREEPLAY®', 'Sticky Text', true],
    [/7FREEPLAY®/g, '7 FREEPLAY®', 'Sticky Text', true],
    [/8FREEPLAY®/g, '8 FREEPLAY®', 'Sticky Text', true],
    [/9FREEPLAY®/g, '9 FREEPLAY®', 'Sticky Text', true],
    [/0Free Spins/g, '0 Free Spins', 'Sticky Text', true],
    [/1Free Spins/g, '1 Free Spins', 'Sticky Text', true],
    [/2Free Spins/g, '2 Free Spins', 'Sticky Text', true],
    [/3Free Spins/g, '3 Free Spins', 'Sticky Text', true],
    [/4Free Spins/g, '4 Free Spins', 'Sticky Text', true],
    [/5Free Spins/g, '5 Free Spins', 'Sticky Text', true],
    [/6Free Spins/g, '6 Free Spins', 'Sticky Text', true],
    [/7Free Spins/g, '7 Free Spins', 'Sticky Text', true],
    [/8Free Spins/g, '8 Free Spins', 'Sticky Text', true],
    [/9Free Spins/g, '9 Free Spins', 'Sticky Text', true],

    // REMOVES TEXT DECORATION AND REFORMATS TEXT
    [/ am /g, ' AM ', 'AM Time lettercase', true], // converts pm to uppercase
    [/ pm /g, ' PM ', 'PM Time lettercase', true], // converts pm to uppercase
    [/ am,/gi, ' AM,', 'AM Time lettercase', true], // converts pm to uppercase
    [/ pm,/gi, ' PM,', 'PM Time lettercase', true], // converts pm to uppercase
    [/ pm\./g, ' PM.', 'PM Time lettercase', true], // converts pm to uppercase
    [/ am\./gi, ' AM.', 'AM Time lettercase', true], // converts pm to uppercase
    [/<i>.<\/i>/g, '', 'Font decoration', true], // cleans <i> tags
    [/à/g, ' >', 'Font decoration', true], // cleans <i> tags
    [/#BONUS_CODE#/g, '<strong>#BONUS_CODE#</strong>', 'Font decoration', false], // cleans <i> tags
    [/\(as defined in the Terms of Service&nbsp;/g, '(as defined in the Terms of Service', 'Bold characters', false],
    [/\(<i>Link to Terms of Service<\/i>\)/g, '', '"Link to Terms Service" lines', true],
    [/<strong> by <\/strong>/g, ' by ', 'Bold characters', false],
    [/<i>\(Link to Terms of Service\)<\/i> /g, '', '"Link to Terms Service" lines', true],
    [/<i>\(Link to Terms of Service\)<\/i><i>\).<\/i> /g, ').', '"Link to Terms Service" lines', true],
    [/\(Link to Terms of Service\)/g, '', '"Link to Terms Service" lines', true],
    [/<i>\(Link to Standard Promo TCs\)<\/i>/g, '', '"Link to Terms Service" lines', true],
    [/<i>\(Link to Standard Promo TCs\)<\/i><strong> by <\/strong>/g, 'by ', 'Bold characters', false],
    [/<strong> by <\/strong>/g, ' by ', 'Bold characters', false],
    [/\(<i>Link<\/i>\)/g, '', '', false],
    [/<i>\(Link to TCs\)<\/i>/g, '', '', false],
    [/ \)/g, ')', '', false],
    [/<p>&nbsp;<br><\/p>/g, '', '', false],
    [/<strong>My Account &gt; My Balance.<\/strong>/g, 'My Account &gt; My Balance.', 'Bold characters', false],
    [/<strong>My Account &gt; My Balance<\/strong>/g, 'My Account &gt; My Balance', 'Bold characters', false],
    [/<strong>Please review these Standard Promotional Terms and Conditions <\/strong>/g, 'Please review these Standard Promotional Terms and Conditions ', 'Bold characters', false],
    [/<strong>Please review these Standard Promotional Terms by <\/strong>/g, 'Please review these Standard Promotional Terms by ', 'Bold characters', false],
    [/<a href="https:\/\/adwords.google.com\/">/g, '', 'Bold characters', false],
    [/&amp; Conditions.<\/a>/g, ' Conditions', 'Bold characters', false],
    [/TOWARD BONUS WAGERING: <\/strong>/g, 'TOWARD BONUS WAGERING:</strong>', 'Extra white spaces', false],
    [/TOWARD BONUS WAGERING<\/strong> /g, 'TOWARD BONUS WAGERING:</strong>', 'Extra white spaces', false],
    [/<strong>DISCLAIMER<\/strong>:/gi, '<strong>Disclaimer:</strong>', 'Fixed Capitalization', false],
    [/<strong>DISCLAIMER:<\/strong>/gi, '<strong>Disclaimer:</strong>', 'Fixed Capitalization', false],
    [/<strong>DISCLAIMER<\/strong>/gi, '<strong>Disclaimer:</strong>', 'Fixed Capitalization', false],
    [/<span style="color:#2C2C2C;">. &lt;MDHHS LOGO - MDHHS logo sized to 3” wide&gt;<\/p>/g, '', 'Unnecessary characters', false],
    [/<i>\(Link to TCs\)<\/i>/g, '', '', false],
    [/\(<i>Link<\/i>\) /g, '', '', false],
    [/\(<i>Link<\/i>\)/g, '', '', false],
    [/<i>\(Link\)<\/i>/g, '', '', false],
    [/.<i>\).<\/i>\)/g, '.', '', false],
    [/ \(<i>Link to Terms of Service\)\).<\/i>/g, ').', '', false],
    [/<i>\(Link to Terms of Service\)<\/i>/g, '', '', false],
    [/here\(LINKS TO: !!M2.Promo\/offers\/grouped\?filter=cb<i>\). <\/i>/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here.</a> ', '', false],
    [/General Terms and Conditions. \(LINKS TO: Borgata Online T&amp;Cs for opting out of bonus\)./g, '<a href="https://help.borgataonline.com/en/general-information/howto/bonus/opt-out">General Terms and Conditions.</a> ', '', false],
    [/<strong>My Account&gt; My Balance.<\/strong>/g, 'My Account&gt; My Balance.', '', false],
    [/<strong>Standard Promotional Terms and Conditions<\/strong>/g, 'Standard Promotional Terms and Conditions', '', false],
    [/\(as defined in the <strong>Terms of Service<\/strong>\)/g, 'as defined in the Terms of Service', '', false],
    [/<strong>Standard Promotional Terms and Conditions <\/strong> by signing/g, 'Standard Promotional Terms and Conditions by signing', '', false],
    [/<strong>Order of Funds Used for Wagering:<\/strong> <\/p>/g, '<p><strong>Order of Funds Used for Wagering:</strong></p>', '', false],
    [/Game Contributions Toward Bonus Wagering/g, 'GAME CONTRIBUTIONS TOWARD BONUS WAGERING:', '', false],
    [/<a href="http:\/\/betmgm.com\/" class="ck-link_selected"> BorgataOnline.com<\/a>/g, 'BorgataOnline.com', '', false],
    [/<a href="http:\/\/betmgm.com\/"> BorgataOnline.com<\/a>/g, ' BorgataOnline.com', '', false],
    [/<a href="http:\/\/betmgm.com\/"> BetMGM.com<\/a>/g, ' BetMGM.com', '', false],
    [/<a href="http:\/\/betmgm.com\/"> PartyCasino.com<\/a>/g, ' PartyCasino.com', '', false],


    // ADDING LINK TO TEXT
    [/<strong>here;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb<i>\).<\/i> <\/li>/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.', 'Extra <p> tags', true], // wrap in <a> tag
    [/ <strong>here;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Extra <p> tags', true], // wrap in <a> tag
    [/<strong>here;<\/strong> <i>\(hyperlink to !!M2.Promo\/offers\/grouped\?filter=cb\).<\/i>/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.', 'Extra <p> tags', true], // wrap in <a> tag
    [/ <strong>here<\/strong><strong>;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Extra <p> tags', true], // wrap in <a> tag
    [/<strong>here<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Extra <p> tags', true],
    [/<strong>here ;<\/strong> <i>\(hyperlink to !!M2.Promo\/offers\/grouped\?filter=cb\)<\/i>/gi, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Extra <p> tags', true],
    [/<strong>here ;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/gi, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Extra <p> tags', true],
    [/\[LINK: Please create link to loyalty page. Example - <a href="https:\/\/www.nj.betmgm.com\/en\/labelhost\/login\?rurlauth=1&amp;rurl=https:%2F%2Fwww.nj.betmgm.com%2Fen%2Fmobileportal%2Floyalty">CLICK HERE<\/a>\]./gi, '<a href="!!M2.Portal/mobileportal/loyalty">here</a>.', 'Loyalty Page Link', true],
    [/ \[LINK: Please create link to loyalty page. Example -<a href="https:\/\/www.nj.betmgm.com\/en\/labelhost\/login\?rurlauth=1&amp;rurl=https:%2F%2Fwww.nj.betmgm.com%2Fen%2Fmobileportal%2Floyalty"> CLICK HERE<\/a>\]/gi, ' <a href="!!M2.Portal/mobileportal/loyalty">here</a>', 'Loyalty Page Link', true],
    [/here; \(hyperlink to !!M2.Promo\/offers\/grouped\?filter=cb\)/gi, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Promo Offers Link', true],
    [/ \(Link to Standard Promo TCs\) /gi, ' ', 'Promo Offers Link', true],
    [/<i>\).<\/i>\)/g, '', '', false],



    // [/ <\/p>/g, '</p>', 'Extra white spaces', false],
    // [/ <\/li>/g, '</li>', 'Extra white spaces', false],
    // [/<p><\/p>/g, '', 'Extra white spaces', false],
    // [/ <strong>/g, '<strong>', 'Extra white spaces', false],
    // [/<strong> /g, '<strong>', 'Extra white spaces', false],
    // [/<p> <strong>/g, '<p><strong>', 'Extra white spaces', false],
    // [/<p> <\/p>/g, '', 'Extra white spaces', false], // removes extra white spaces
    // [/! <\/p>/g, '!</p>', 'Extra white spaces', false], // removes extra white spaces
    // [/<p> /g, '<p>', 'Extra <p> tags', false], // removes extra white spaces


    // [/<p>\[REWARD TILE\]<\/p>/gi, '<span>[REWARD TILE]</span>', 'Rewrite Text', false],
    // [/<p>REWARD TILE<\/p>/gi, '<span>[REWARD TILE]</span>', 'Rewrite Text', false],
    // [/<p>SUBTITLE:/gi, '', 'Rewrite Text', false],
    // [/<p>\[SHORT SUMMARY]\: /gi, '[SHORT SUMMARY]<p>', 'Rewrite Text', false],
    // [/<p>\[SHORT SUMMARY\]<\/p>/gi, '<span>[SHORT SUMMARY]</span>', 'Rewrite Text', false],
    // [/H1:/g, '', 'Rewrite Text', false],
    // [/H2:/g, '', 'Rewrite Text', false],
    // [/  /g, ' ', 'Rewrite Text', false],
    // [/> </g, '><', 'Rewrite Text', false],
    // [/<p>\[promotion details\]<\/p>/g, '<span>[promotion details]</span>', 'Rewrite Text', false],
    // [/<p>\[CTA\]<\/p>/g, '<span>[CTA]</span>', 'Rewrite Text', false],
    // [/<strong>\[CTA\]<\/strong>/g, '<span>[CTA]</span>', 'Rewrite Text', false],
    // [/<p>\[PREVIEW DESCRIPTION\]<\/p>/g, '<span>[PREVIEW DESCRIPTION]</span>', 'Rewrite Text', false],
    // [/<p>\[PREVIEW DESCRIPTION\]:<\/p>/g, '<span>[PREVIEW DESCRIPTION]</span>', 'Rewrite Text', false],
    // [/<p>\[OVERLAY DESCRIPTION\]<\/p>/g, '<span>[OVERLAY DESCRIPTION]</span>', 'Rewrite Text', false],
    // [/<p>\[TOASTER DESCRIPTION\]<\/p>/g, '<span>[TOASTER DESCRIPTION]</span>', 'Rewrite Text', false],
    // [/<p>\[HERO IMAGE ART\]<\/p>/g, '<span>[HERO IMAGE ART]</span>', 'Rewrite Text', false],
    // [/<p>\[HERO IMAGE ART\] <\/p>/g, '<span>[HERO IMAGE ART]</span>', 'Rewrite Text', false],
    // [/<p>\[promotion dates\] /gi, '[promotional dates]<p>', 'Rewrite Text', false],
    // [/\[promotional dates\] /gi, '[promotional dates]<p>', 'Rewrite Text', false],
    // [/\[promotion description\] /gi, '</p>[promotion description]<p>', 'Rewrite Text', false],
    // [/<p>\[FULLVIEW TITLE\]: /gi, '[FULLVIEW TITLE]:<p>', 'Rewrite Text', false],
    // [/<p>\[FULLVIEW DESCRIPTION\]: /gi, '[FULLVIEW DESCRIPTION]:<p>', 'Rewrite Text', false],
    // [/<p>\[FULLVIEW DESCRIPTION\]<\/p>/gi, '', 'Rewrite Text', false],
    // [/<p><strong>\[CTA\] /gi, '[CTA]:<p><strong>', 'Rewrite Text', false],
    // [/\[FULLVIEW TITLE\]/gi, '', 'Rewrite Text', false],
    // [/<p>\[HERO IMAGE ART\]  <\/p>/gi, '', 'Rewrite Text', false],



];

const gameCont_headerWrapper = [];


gameCont_headerWrapper[0] = [
    ['<li><strong>', '</strong><ul>'],
    ['<li>', '<ul>'],
    ['<li>', '<ul>'],
    ['<li>', '</li></ul></li>'],
    ['<li>', '<ul>'],
    ['<li>', '</li></ul></li>'],
    ['<li>', '<ul>'],
    ['<li>', '</li></ul></li></ul></li></ul></li></ul>'],
];


gameCont_headerWrapper[1] = [
    ['<li><strong>', '</strong><ul>'],
    ['<li>', '<ul>'],
    ['<li>', '<ul>'],
    ['<li>', '</li></ul></li>'],
    ['<li>', '<ul>'],
    ['<li>', '</li></ul></li>'],
    ['<li>', '</li>'],
    ['<li>', '<ul>'],
    ['<li>', '</li></ul></li></ul></li></ul></li></ul>'],
];

const gameCont_headerWrapper_p = [];

gameCont_headerWrapper_p[0] = [
    ['<ul><li>', '</li>'],
    ['<li>', '</li>'],
    ['<li>', '</li>'],
    ['<li>', '</li>'],
    ['<li>', '</li>'],
    ['<li>', '</li>'],
    ['<li>', '</li></ul>'],
];




const copyFix_settings = [

    {
        "id": 1,
        "element_id": 'promo-carousel',
        "headerTitle": "Carousel",
        "startIndexText": "<p><strong>CAROUSEL</strong></p>",
        "endIndexText": "<span>[CTA]</span>",
        "getTextBetweenTags": /<strong>(.*?)<(\/p|\/strong)>/g,
        "wrapInHTML": false
    },
    {
        "id": 2,
        "element_id": 'promo-keyterms',
        "headerTitle": "Promo Hub Key Terms",
        "startIndexText": "<p><strong>PROMO HUB KEY",
        "endIndexText": "[REWARD TILE]",
        "getTextBetweenTags": /<p>(.*?)<(\/p)>/gi,
        "wrapInHTML": false
    },
    {
        "id": 3,
        "element_id": 'promo-mpp',
        "headerTitle": "Promo Landing Page",
        "startIndexText": "[MPP 1080x486]:",
        "endIndexText": "How It Works:",
        "getTextBetweenTags": /<(?:p|strong)>(.*?)<\/(?:p|strong)>/gs,
        "wrapInHTML": false
    },
    {
        "id": 4,
        "element_id": 'promo-keyterms',
        "headerTitle": "Player Inbox",
        "startIndexText": "[PREVIEW TITLE]",
        "endIndexText": "OVERLAY",
        "getTextBetweenTags": /<(?:p|strong)>(.*?)<\/(?:p|strong)>/gs,
        "wrapInHTML": false
    },

]





const target = document.querySelector('#ck5-textarea');

// target.addEventListener('keyup', function () {
//     // alert('tru');
//     let keyStore = editor.getData('ck5-textarea');
//     document.getElementById('cleanedHTML__textarea').innerHTML = keyStore;
//     editor.setData(keyStore);
// });


target.addEventListener('copy', function () {

});





var cleanedText = null;


// function addSpacesBeforeText(str) {
//     const regexes = [/(\S+)Bonus Dollars/, /(\S+)FREEPLAY®/];
//     let result = str;
//     regexes.forEach(regex => {
//         const re = new RegExp(regex.source, 'g');
//         result = result.replace(re, '$1 $2');
//     });
//     return result;
// }

function removeFigureDivTags(inputString) {
    const regex = /(<figure.*?>|<\/figure>|<svg.*?>[\s\S]*?(?:(?=<\/svg>)|<\/svg>)|<div.*?>)[\s\S]*?(?!(?:[^<]+>|[^>]+<\/table>))(?:(?=<\/table>)|<\/table>)/g;
    const outputString = inputString.replace(regex, '');
    return outputString;
}



const cleanHTML = () => {


    const isCopied = () => {
        document.getElementById('overlay-loading').style.visibility = "visible";
        document.body.style.cursor = 'wait'
        let time_left = 1;
        let timer = setInterval(() => {
            if (time_left <= 0) {
                clearInterval(timer);
                document.getElementById('overlay-loading').style.visibility = "hidden";
                document.getElementById('overlay-loading').style.opacity = 0;
                document.body.style.cursor = 'default'
            }

            document.getElementById('overlay-loading').style.opacity = time_left;
            // console.log(time_left);
            // console.log(document.getElementById('overlay-loading').style.opacity);
            time_left -= .1;

        }, 20);

    }

    isCopied();

    let rawText = editor.getData('ck5-textarea');
    // let rawText = document.getElementById('ck5-textarea').innerHTML;
    rawText = removeFigureDivTags(rawText);
    let count = 0;

    let errorCatcher = [[]];
    let totalErrors = 0;

    for (let i = 0; i < removables.length; i++) {
        const regex = new RegExp(removables[i][0]);
        const errorName = removables[i][2];
        const qaItem = removables[i][3];
        const replacements = removables[i][1];
        const matches = rawText.match(regex);

        let counter = 0;

        if (matches) {
            counter += 1;

            errorCatcher[counter, 1] = count;

            if (qaItem == true) {
                errorCatcher.push([errorName, matches.length, qaItem, regex]);
                count += matches.length;
                totalErrors += count
            }

            console.log(matches);


        }

        rawText = rawText.replace(regex, replacements);

        count = 0;
        counter = 0;

    }


    console.log(errorCatcher);
    console.log(totalErrors);
    cleanedText = rawText;

    //    const newCleanedText = cleanedText;

    const newCleanedText = cleanedText // adds spaces Before FREEPLAY, BONUS DOLLARS, etc..

    // console.log(cleanedText)
    document.getElementById('promo-copy-fullterms').innerHTML = cleanedText;
    indentFix(newCleanedText);
}



const convertArray_toString = (toClean_text) => {

    let cleaned_text = '';
    for (let i = 0; i < toClean_text.length; i++) {
        cleaned_text += toClean_text[i];
    }
    return cleaned_text;

}

const cleanTags_fromArray = (array, regex) => {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(regex, '');
    }

    // removes empty strings from array
    array = array.filter(str => str.trim() !== '');

    return array;

}

const indentFix = (newCleanedText) => {

    const tempTextStorage = Array.from(cleanedText);
    const tempCleanedText = cleanedText;
    const tempTextStorage_length = tempTextStorage.length;


    let textWrapper = [];
    // console.log(cleanedText);

    let str = convertArray_toString(tempTextStorage);

    // console.log(str);
    // console.log(regexp_gameContributionHeader);

    let getStartIndex = '<li><strong>GAME CONTRIBUTIONS TOWARD';
    // let getStartIndex = ['<li><strong>GAME CONTRIBUTIONS TOWARD BONUS WAGERING','</p><ul><li>The percentage of your wager that counts toward your wagering requirement'];

    let getEndIndex = '<p><strong>Order of Funds Used for Wagering:</strong>';
    let matchesStartIndex = [...str.matchAll(getStartIndex)];
    let matchesEndIndex = [...str.matchAll(getEndIndex)];

    // console.log(matchesStartIndex);
    let startIndexNumber = 0;
    let endIndexNumber = 0;

    // CHECKS IF THE TERMS HAVE THE "GAME CONTRIBUTIONS HEADER" 



    if (matchesStartIndex != '') {
        // alert(matchesStartIndex);
        matchesStartIndex.forEach((matchesStart) => {
            startIndexNumber = matchesStart.index;
            // console.log("match found at " + matchesStart.index);
            // console.log(tempTextStorage.startIndexNumber);
        })

        if (matchesEndIndex) {
            matchesEndIndex.forEach((matchesEnd) => {
                endIndexNumber = matchesEnd.index;
                // console.log("match found at " + matchesEnd.index);
                // console.log(tempTextStorage.endIndexNumber);
            })
        }

        const cropText_1 = tempCleanedText.substring(0, startIndexNumber);
        const cropText_2 = tempCleanedText.substring(endIndexNumber, cleanedText.length);

        gameContributions_text = cleanedText.substring(startIndexNumber, endIndexNumber);

        let result = gameContributions_text.match(/<li>(.*?)<(ul|\/li)>/g);





        gameCont_headerWrapper.forEach((number, index) => {
            // console.log('Index: ' + index + ' Value: ' + number + ' length ' + number.length);
            let counter = 0;


            if (result != null && result.length == number.length) {


                // console.log('result: ' + result.length + ' == number: ' + number.length);
                // console.log('length of wrapper ' + gameCont_headerWrapper.length);

                let regex = /(<([^>]+)>)/ig;
                for (let i = 0; i < gameCont_headerWrapper[index].length; i++) {
                    result[i] = result[i].replace(regex, '');
                    // console.log(result[i]);                 
                }


                // console.log(result);

                // console.log(gameCont_headerWrapper[1][0][0]);
                // console.log(gameCont_headerWrapper[1][1][0]);
                // console.log(gameCont_headerWrapper[1][2][0]);
                // console.log(gameCont_headerWrapper[1][3][0]);
                // console.log(gameCont_headerWrapper[1][4][0]);
                // console.log(gameCont_headerWrapper[1][5][0]);
                // console.log(gameCont_headerWrapper[1][6][0]);
                // console.log(gameCont_headerWrapper[1][7][0]);
                // console.log('\n')
                // console.log(gameCont_headerWrapper[1][0][1]);
                // console.log(gameCont_headerWrapper[1][1][1]);
                // console.log(gameCont_headerWrapper[1][2][1]);
                // console.log(gameCont_headerWrapper[1][3][1]);
                // console.log(gameCont_headerWrapper[1][4][1]);
                // console.log(gameCont_headerWrapper[1][5][1]);
                // console.log(gameCont_headerWrapper[1][6][1]);
                // console.log(gameCont_headerWrapper[1][7][1]);
                // console.log(gameCont_headerWrapper[0][8][1]);
                // console.log('\n')
                // console.log();

                // Wrap HTML Tags in array
                for (let i = 0; i < gameCont_headerWrapper[index].length; i++) {
                    // console.log(i);
                    // console.log(gameCont_headerWrapper[result.length - 8][i][0]);
                    textWrapper[i] = gameCont_headerWrapper[result.length - 8][i][0] + result[i] + gameCont_headerWrapper[result.length - 8][i][1];
                    // console.log(textWrapper[i]);
                }





            }
        });


        // textWrapper = convertArray_toString(textWrapper);
        const tempCleanedText_1 = newCleanedText;
        const tempCleanedText_2 = newCleanedText;

        // console.log(endIndexNumber);
        // console.log(tempTextStorage[startIndexNumber-1]);
        // console.log(tempCleanedText_1.length);




        text_insert = convertArray_toString(textWrapper);

        // console.log(text_insert);


        // console.log(cropText_2);
        // console.log(cleanedText);

        cleanedText = cropText_1 + text_insert + cropText_2;

        // document.getElementById('cleanedHTML__textarea').innerHTML = cleanedText;
        // document.getElementById('promo-copy-fullterms').innerHTML = cleanedText;

        // extractDataFromCopy();

        // console.log(cleanedText);


        // adds spaces Before FREEPLAY, BONUS DOLLARS, etc..

        // document.getElementById('cleanedHTML__textarea').innerHTML = cleanedText;
        editor.setData(cleanedText);
        document.getElementById('promo-copy-fullterms').innerHTML = cleanedText;
        // console.log(cleanedText);
    } else {
        editor.setData(cleanedText);
        document.getElementById('promo-copy-fullterms').innerHTML = cleanedText;
        // console.log(cleanedText);
        // document.getElementById('cleanedHTML__textarea').innerHTML = cleanedText;
        // document.getElementById('promo-copy-fullterms').innerHTML = cleanedText;
    }



    return cleanedText;



}


const extractDataFromCopy = () => {

    for (let i = 0; i < copyFix_settings.length; i++) {
        const copy = cleanedText;
        const settings = copyFix_settings;
        const escape_tags = settings[i].getTextBetweenTags;

        // this is the expression used to clean html tags
        const regex = /(<([^>]+)>)/ig;

        let search_start_text = settings[i].startIndexText;
        let search_end_text = settings[i].endIndexText;

        let start = [...copy.matchAll(search_start_text)];
        let end = [...copy.matchAll(search_end_text)];


        let start_index_length = settings[i].startIndexText.length;
        let end_index_length = settings[i].endIndexText.length;

        let start_index = copy.indexOf(search_start_text);
        let end_index = copy.indexOf(search_end_text);

        // cropped the carousel
        let crop_text_from_copy = copy.substring(start_index + start_index_length, end_index);

        // console.log(crop_text_from_copy);

        // insert the matches found into this array
        let cropped_text_escape = crop_text_from_copy.match(escape_tags);


        result = cleanTags_fromArray(cropped_text_escape, regex);


        console.log(result);

        console.log(search_start_text);
        console.log(start_index);

        console.log(search_end_text);
        console.log(end_index);

        console.log(cleanedText);

        // let x = document.getElementsByClassName('div');


        // console.log(x);
    }


}

function copyToClipboard() {
    // Get the text field
    var copyText = editor.getData('ck5-editor');

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied Terms and Conditions");
}

















