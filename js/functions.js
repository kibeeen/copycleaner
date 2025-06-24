

const removables = [



    [/\u00A0/g, ' ', 'Non-breaking space'],
    [/\u202F/g, ' ', 'Narrow non-breaking space'],
    [/\u200B/g, '', 'Zero-width space'],
    [/\u200C/g, '', 'Zero-width non-joiner'],
    [/\u200D/g, '', 'Zero-width joiner'],
    [/\uFEFF/g, '', 'Byte order mark'],
    [/\u2060/g, '', 'Word joiner'],


    // [/<li>Gambling Problem? Call 1-800-GAMBLER.<\/li>/g, '<p>Gambling Problem? Call 1-800-GAMBLER.</p>'],


    [/​/g, '', 'Half spaces'],
    [/ /g, ' ', 'Narrow spaces'],
    [/ [] /g, '', 'Narrow spaces'],
    [/\(<em>Link to these<\/em>\)./g, '.'],
    [/ \(<i>Link to these<\/i>\)\./g, '.'],
    [/\(<em>/g, ''],
    [/\(<\/em>/g, ''],
    [/i&gt;/g, ''],
    [/<p>&nbsp;<\/p>/g, ' ', 'Extra Spacing'],
    [/<i>&nbsp;<\/i>/g, ' ', 'Sticky Text'],
    [/<p><strong>&nbsp;<\/strong><\/p>/g, '', 'Sticky Text'],

    // [/<p><strong>Description of Promotion:&nbsp;<\/strong>&nbsp;<\/p>/g, '<strong>Description of Promotion:</strong>'],
    // [/<p><strong>Prizes:&nbsp;<\/strong>&nbsp;<\/p>/g, '<p><strong>Prizes:</strong></p>'],
    // [/<p><strong>Claiming Promotional Offer:&nbsp;<\/strong>&nbsp;<\/p>/g, '<p><strong>Claiming Promotional Offer:</strong></p>'],
    [/:&nbsp;<\/strong>/g, '</strong>'],
    [/ <\/strong>/g, '</strong>'],

    [/&nbsp;/g, ' ', '&nbsp; tags'],
    [/<br>/g, ' ', '<br> tags'],
    [/<\/br>/g, ' ', '<br> tags'],
    [/< \/br>/g, ' ', '<br> tags'],


    [/<strong>\s*<\/strong>/g, ' ', 'Extra <strong> tags'], // removes extra strong
    [/<\/strong>\s*<strong>/g, ' ', 'Extra <strong> tags'], // removes extra strong

    [/<span style="color:black;">/g, ''],
    [/<span style="color:#202124;">/g, ''],
    [/<span style="color:#242424;">/g, ''],
    [/<span style="color:red;">/g, ''],
    [/<span style="color:#050505;">/g, ''],
    [/<span style="color:#2F5496;">/g, ''],
    [/<span style="color:#2B579A;">/g, ''],
    [/<span style="color:#242424;">/g, ''],
    [/<span style="color:#404040;">/g, ''],
    [/\(<em>\(Link to Terms of Service\)<\/em>\)/g, '', ''],
    [/\(as defined in the Terms of Service \(Link to Terms of Service\)/g, '(as defined in the Terms of Service)', ''],
    [/\(as defined in the Terms of Service \(https:\/\/help.pa.borgataonline.com\/en\/general-information\/legal-matters\/general-terms-and-conditions\)/g, '(as defined in the Terms of Service)', ''],
    [/\(as defined in the Terms of Service \(https:\/\/help.pa.betmgm.com\/en\/general-information\/legal-matters\/general-terms-and-conditions\)/g, '(as defined in the Terms of Service)', ''],


    [/General Terms and Conditions, Terms of Service, and Privacy Policy apply \(<a href="https:\/\/help.pa.borgataonline.com\/en\/general-information\/legal-matters\/general-terms-and-conditions">https:\/\/help.pa.borgataonline.com\/en\/general-information\/legal-matters\/general-terms-and-conditions<\/a>\)./g, '<a href="!!M2.Help/general-information/legal-matters/general-terms-and-conditions">Terms of Service</a>, and Privacy Policy apply.'],


    // [[ HOW IT WORKS SECTION ]]



    [/<\/span>/g, ''],
    [/<p><\/p>/g, '', 'Extra <p> tags'],
    [/<p><\/p>/g, '', 'Extra <p> tags'],
    [/<p> <\/p>/g, '', 'Extra <p> tags'],
    [/<p>\s*<\/p>/g, '', 'Extra <p> tags'],
    [/<p><\/p><p>/g, '', 'Extra <p> tags'],
    [/<\/ul><p> <\/p><p>/g, '', 'Extra <p> tags'],
    [/<br data-cke-filler="true">/g, '', 'Extra <p> tags'],




    [/\$10Bonus Dollars/g, '$10 Bonus Dollars', 'Sticky Text'],
    [/\$5Bonus Dollars/g, '$5 Bonus Dollars', 'Sticky Text'],
    [/1Bonus Dollars/g, '1 Bonus Dollars', 'Sticky Text'],
    [/2Bonus Dollars/g, '2 Bonus Dollars', 'Sticky Text'],
    [/3Bonus Dollars/g, '3 Bonus Dollars', 'Sticky Text'],
    [/4Bonus Dollars/g, '4 Bonus Dollars', 'Sticky Text'],
    [/6Bonus Dollars/g, '6 Bonus Dollars', 'Sticky Text'],
    [/7Bonus Dollars/g, '7 Bonus Dollars', 'Sticky Text'],
    [/8Bonus Dollars/g, '8 Bonus Dollars', 'Sticky Text'],
    [/9Bonus Dollars/g, '9 Bonus Dollars', 'Sticky Text'],
    [/0FREEPLAY®/g, '0 FREEPLAY®', 'Sticky Text'],
    [/1FREEPLAY®/g, '1 FREEPLAY®', 'Sticky Text'],
    [/2FREEPLAY®/g, '2 FREEPLAY®', 'Sticky Text'],
    [/3FREEPLAY®/g, '3 FREEPLAY®', 'Sticky Text'],
    [/4FREEPLAY®/g, '4 FREEPLAY®', 'Sticky Text'],
    [/5FREEPLAY®/g, '5 FREEPLAY®', 'Sticky Text'],
    [/6FREEPLAY®/g, '6 FREEPLAY®', 'Sticky Text'],
    [/7FREEPLAY®/g, '7 FREEPLAY®', 'Sticky Text'],
    [/8FREEPLAY®/g, '8 FREEPLAY®', 'Sticky Text'],
    [/9FREEPLAY®/g, '9 FREEPLAY®', 'Sticky Text'],
    [/0Free Spins/g, '0 Free Spins', 'Sticky Text'],
    [/1Free Spins/g, '1 Free Spins', 'Sticky Text'],
    [/2Free Spins/g, '2 Free Spins', 'Sticky Text'],
    [/3Free Spins/g, '3 Free Spins', 'Sticky Text'],
    [/4Free Spins/g, '4 Free Spins', 'Sticky Text'],
    [/5Free Spins/g, '5 Free Spins', 'Sticky Text'],
    [/6Free Spins/g, '6 Free Spins', 'Sticky Text'],
    [/7Free Spins/g, '7 Free Spins', 'Sticky Text'],
    [/8Free Spins/g, '8 Free Spins', 'Sticky Text'],
    [/9Free Spins/g, '9 Free Spins', 'Sticky Text'],

    // // REMOVES TEXT DECORATION AND REFORMATS TEXT
    [/ am /g, ' AM ', 'Time Capitalization'], // converts pm to uppercase
    [/ pm /g, ' PM ', 'Time Capitalization'], // converts pm to uppercase
    [/ am,/gi, ' AM,', 'Time Capitalization'], // converts pm to uppercase
    [/ pm,/gi, ' PM,', 'Time Capitalization'], // converts pm to uppercase
    [/ pm\./g, ' PM.', 'Time Capitalization'], // converts pm to uppercase
    [/ am\./gi, ' AM.', 'Time Capitalization'], // converts pm to uppercase


    [/ 11:59PM/gi, ' 11:59 PM', 'Time Capitalization'], // converts pm to uppercase
    [/ 11:59AM/gi, ' 11:59 AM', 'Time Capitalization'], // converts pm to uppercase

    [/<i>.<\/i>/g, '', 'Font decoration'], // cleans <i> tags
    [/à/g, ' >', 'Font decoration'], // cleans <i> tags
    [/#BONUS_CODE#/g, '<strong>#BONUS_CODE#</strong>', 'Font decoration'], // cleans <i> tags
    [/%%BONUS_CODE%%/g, '<strong>#BONUS_CODE#</strong>', 'Font decoration'], // cleans <i> tags
    [/\(Link to Terms of Service\)/g, '', 'Link to Terms Service lines'],
    [/<i>\(Link to Standard Promo TCs\)<\/i>/g, '', 'Bold characters'],
    [/<i>\(Link to Standard Promo TCs\)<\/i><strong> by <\/strong>/g, 'by ', 'Bold characters'],
    [/<strong> by <\/strong>/g, ' by ', 'Bold characters'],
    [/\(<i>Link<\/i>\)/g, '', ''],
    [/<i>\(Link to TCs\)<\/i>/g, '', ''],
    [/ \)/g, ')', ''],
    [/<p>&nbsp;<br><\/p>/g, '', ''],
    [/<strong>My Account &gt; My Balance.<\/strong>/g, 'My Account &gt; My Balance.', 'Bold characters'],
    [/<strong>My Account &gt; My Balance<\/strong>/g, 'My Account &gt; My Balance', 'Bold characters'],
    [/<strong>Please review these Standard Promotional Terms and Conditions <\/strong>/g, 'Please review these Standard Promotional Terms and Conditions ', 'Bold characters'],
    [/<strong>Please review these Standard Promotional Terms and Conditions<\/strong>/g, 'Please review these Standard Promotional Terms and Conditions', 'Bold characters'],
    [/<strong>Please review these Standard Promotional Terms by <\/strong>/g, 'Please review these Standard Promotional Terms by ', 'Bold characters'],
    [/<a href="https:\/\/adwords.google.com\/">/g, '', 'Bold characters'],
    [/&amp; Conditions.<\/a>/g, ' Conditions', 'Bold characters'],
    [/TOWARD BONUS WAGERING: <\/strong>/g, 'TOWARD BONUS WAGERING:</strong>', 'Extra white spaces'],
    [/TOWARD BONUS WAGERING<\/strong> /g, 'TOWARD BONUS WAGERING:</strong>', 'Extra white spaces'],
    [/<strong>DISCLAIMER<\/strong>:/gi, '<strong>Disclaimer:</strong>', 'Disclaimer Fixed Capitalization'],
    [/<strong>DISCLAIMER:<\/strong>/gi, '<strong>Disclaimer:</strong>', 'Disclaimer Fixed Capitalization'],
    [/<strong>DISCLAIMER<\/strong>/gi, '<strong>Disclaimer:</strong>', 'Disclaimer Fixed Capitalization'],
    [/<span style="color:#2C2C2C;">. &lt;MDHHS LOGO - MDHHS logo sized to 3” wide&gt;<\/p>/g, '', 'Unnecessary characters'],
    [/ \(<i>Link to Terms of Service\)\).<\/i>/g, ').', ''],
    [/<i>\(Link to Terms of Service\)<\/i>/g, '', ''],
    [/here\(LINKS TO: !!M2.Promo\/offers\/grouped\?filter=cb<i>\). <\/i>/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here.</a> ', ''],
    [/General Terms and Conditions. \(LINKS TO: Borgata Online T&amp;Cs for opting out of bonus\)./g, '<a href="https://help.borgataonline.com/en/general-information/howto/bonus/opt-out">General Terms and Conditions.</a> ', 'Linked to Opt Out Bonus'],
    [/<strong>My Account&gt; My Balance.<\/strong>/g, 'My Account&gt; My Balance.', 'Cleansed My Account: My Balance'],
    [/<strong>Standard Promotional Terms and Conditions<\/strong>/g, 'Standard Promotional Terms and Conditions', ''],
    [/\(as defined in the <strong>Terms of Service<\/strong>\)/g, 'as defined in the Terms of Service', ''],
    [/<strong>Standard Promotional Terms and Conditions <\/strong> by signing/g, 'Standard Promotional Terms and Conditions by signing', ''],
    [/<strong>Order of Funds Used for Wagering:<\/strong> <\/p>/g, '<p><strong>Order of Funds Used for Wagering:</strong></p>', ''],
    [/Game Contributions Toward Bonus Wagering/g, 'GAME CONTRIBUTIONS TOWARD BONUS WAGERING:', ''],
    [/<a href="http:\/\/betmgm.com\/" class="ck-link_selected"> BorgataOnline.com<\/a>/g, 'BorgataOnline.com', ''],
    [/<a href="http:\/\/betmgm.com\/"> BorgataOnline.com<\/a>/g, ' BorgataOnline.com', ''],
    [/<a href="http:\/\/betmgm.com\/"> BetMGM.com<\/a>/g, ' BetMGM.com', ''],
    [/<a href="http:\/\/betmgm.com\/"> PartyCasino.com<\/a>/g, ' PartyCasino.com', ''],


    // // ADDING LINK TO TEXT
    [/go <strong>here;<\/strong> <i>\(hyperlink to <\/i>!!M2\.Promo\/offers\/grouped\?filter=cb\./g, 'go <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>. ', ''],
    // [/<strong>here;<\/strong> \[<i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb\]/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>. ', ''],
    // [/<strong>here;<\/strong>\[<em>\(<\/em><em>hyperlink to <\/em>!!M2.Promo\/offers\/grouped\?filter=cb<em>\)<\/em>]<em>.<\/em>/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here.</a> ', ''],
    // [/<strong>here.<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb./gi, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.', 'Linked to Promo Offers'],
    // [/<strong>here;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb<i>\).<\/i> <\/li>/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.', 'Linked to Promo Offers'], // wrap in <a> tag
    // [/ <strong>here;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Linked to Promo Offers'], // wrap in <a> tag
    // [/<strong>here;<\/strong> <i>\(hyperlink to !!M2.Promo\/offers\/grouped\?filter=cb\).<\/i>/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.', 'Linked to Promo Offers'], // wrap in <a> tag
    // [/ <strong>here<\/strong><strong>;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Linked to Promo Offers'], // wrap in <a> tag
    // [/<strong>here<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/g, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Linked to Promo Offers'],
    // [/<strong>here ;<\/strong> <i>\(hyperlink to !!M2.Promo\/offers\/grouped\?filter=cb\)<\/i>/gi, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Linked to Promo Offers'],
    // [/<strong>here ;<\/strong> <i>\(hyperlink to <\/i>!!M2.Promo\/offers\/grouped\?filter=cb/gi, ' <a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Linked to Promo Offers'],
    [/\[LINK: Please create link to loyalty page. Example - <a href="https:\/\/www.nj.betmgm.com\/en\/labelhost\/login\?rurlauth=1&amp;rurl=https:%2F%2Fwww.nj.betmgm.com%2Fen%2Fmobileportal%2Floyalty">CLICK HERE<\/a>\]./gi, '<a href="!!M2.Portal/mobileportal/loyalty">here</a>.', 'Linked to Loyalty Page'],
    [/ \[LINK: Please create link to loyalty page. Example -<a href="https:\/\/www.nj.betmgm.com\/en\/labelhost\/login\?rurlauth=1&amp;rurl=https:%2F%2Fwww.nj.betmgm.com%2Fen%2Fmobileportal%2Floyalty"> CLICK HERE<\/a>\]/gi, ' <a href="!!M2.Portal/mobileportal/loyalty">here</a>', 'Linked to Loyalty Page'],
    [/here; \(hyperlink to !!M2.Promo\/offers\/grouped\?filter=cb\)/gi, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>', 'Linked to Promo Offers'],
    [/ \(Link to Standard Promo TCs\) /gi, ' ', 'Linked to Promo Offers'],
    [/<i>\).<\/i>\)/g, '', ''],
    [/<i>\).<\/i>/g, '.', ''],
    [/.<i>\).<\/i>\)/g, '.', ''],
    [/<i>\(Link to TCs\)<\/i>/g, '', ''],
    [/\(<i>Link<\/i>\) /g, '', ''],
    [/\(<i>Link<\/i>\)/g, '', ''],
    [/<i>\(Link\)<\/i>/g, '', ''],
    [/PartyCasino/g, 'PartyCasino', ''],



    // FIX 2025
    [/i&gt;/g, ''],
    [/i&gt;\)\./g, ''],
    [/&nbsp;/g, ''],
    [/<p> <\/p>;/g, ''],

    [/\<i>/g, ''], // removes italic format
    [/\<\/i>/g, ''], // removes italic format
    [/<i>One<\/i>/g, 'One'], // removes italic format
    [/<i>one<\/i>/g, 'One'], // removes italic format
    [/<\/strong><i><strong>/g, ''], // removes italic format
    [/<\/strong><\/i><strong>/g, ''], // removes italic format
    [/&nbsp;<\/strong>/g, ''], // removes extra spaces
    [/HOW TO PARTICIPATE:/g, '<strong>How It Works:</strong>'],
    [/HOW TO PARTICIPATE/g, '<strong>How It Works:</strong>'],
    [/How to participate\?/g, '<strong>How It Works:</strong>'],
    [/here \(LINKS TO: !!M2\.Promo\/offers\/grouped\?filter=cb\)/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>'],
    [/<strong>here;<\/strong> \(hyperlink to !!M2\.Promo\/offers\/grouped\?filter=cb\./g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.'],
    [/<strong>here;<\/strong> \(hyperlink to !!M2\.Promo\/offers\/grouped\?filter=cb\./g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.'],
    [/<strong>here;<\/strong> \[\(hyperlink to !!M2\.Promo\/offers\/grouped\?filter=cb\]/g, '<a href="!!M2.Promo/offers/grouped?filter=cb">here</a>.'],
    [/visit our General Terms and Conditions. \(LINKS TO: BetMGM T&amp;Cs for opting out of bonus\)/g, 'visit our <a href="!!M2.Help/general-information/legal-matters/general-terms-and-conditions">General Terms and Conditions</a>.'],
    [/visit our General Terms and Conditions. \(LINKS TO: BRAND T&amp;Cs for opting out of bonus\)/g, 'visit our <a href="!!M2.Help/general-information/legal-matters/general-terms-and-conditions">General Terms and Conditions</a>'],
    [/visit our General Terms and Conditions. \(LINKS TO: PartyCasino T&amp;Cs for opting out of bonus\)/gi, 'visit our <a href="!!M2.Help/general-information/legal-matters/general-terms-and-conditions">General Terms and Conditions</a>'],
    [/<p>TERMS AND CONDITIONS \(these “Terms and Conditions”\):<\/p>\)/g, ''],
    // [/BetMGM.com/g, '<a href="BetMGM.com">BetMGM.com</a>'], 
    // [/BorgataOnline.com/g, '<a href="BorgataOnline.com">BorgataOnline.com</a>'], 
    [/Please make sure to read our full Terms and Conditions before participating in this promotion./g, '<em>Please make sure to read our full Terms and Conditions before participating in this promotion.</em>'],
    [/Please make sure to read our full Terms and Conditions before participating in this Promotion./g, '<em>Please make sure to read our full Terms and Conditions before participating in this promotion.</em>'],

    [/<p>\s*&nbsp;\s*<\/p>/g, ''],
    [/\s*&nbsp;\s*/g, ' '],
    [/<p>    &nbsp;/g, ''],
    [/[]]/g, ''],
    [/\[\]/g, '', ''],
    [/Dollarsand/g, 'Dollars and', ''],
    [/Dollarswagering/g, 'Dollars wagering', ''],
    [/Dollarsvalid/g, 'Dollars valid', ''],
    [/<p>KEY TERMS:<\/p>/g, '<strong>Key Terms:</strong>', ''],
    // [/<ul>\s*<li>Gambling Problem\s*<\/li>\s*<\/ul>/gi, '<p>Gambling Problem?</p>', ''],
    [/Call 1-800-GAMBLER.Must/g, 'Call 1-800-GAMBLER. Must', ''],
    [/p.m./g, 'PM'],
    [/<strong>KEY TERMS:<\/strong>/g, '<strong>Key Terms:</strong>'],
    [/Key Terms>/g, '<strong>Key Terms:</strong>'],
    [/Prizes include:>/g, '<strong>Prizes Include:</strong>'],
    [/Prizes include>/g, '<strong>Prizes Include:</strong>'],
    [/<li>OLG Internal Control Trigger Based applies to this Promotion<\/li>/g, '<li>OLG Internal Control Trigger Based applies to this Promotion.</li>'],
    [/<p>GAMBLING PROBLEM:<\/p>/g, '<p><strong>GAMBLING PROBLEM:</strong></p>'],
    // [/Eligible Game\(s\):/g, 'Eligible Games:'],
    // [/This is a leaderboard promotion where players earn\s*<\/li>\s*<\/ul>\s*<p>\s*\(“Leaderboard Points\).\s*<\/p>/g, 'This is a leaderboard promotion where players earn (“Leaderboard Points).</li>'],

    [/earn<\/li>\s*<li>/gi, 'earn '],
    [/this “Promotion”\)<\/strong>/g, 'this “Promotion”):</strong>'],
    [/<strong>Description of Promotion<\/strong>/g, '<strong>Description of Promotion:</strong>'],
    [/<p><strong>Promotional Period<\/strong>\s*<\/p>/g, '<p><strong>Promotional Period:</strong></p>'],
    [/<p><strong>Claiming Promotion Offer<\/strong>\s*<\/p>/g, '<p><strong>Claiming Promotion Offer:</strong></p>'],
    [/<strong>Claiming Promotional Offer<\/strong>/g, '<strong>Claiming Promotional Offer:</strong>'],
    [/<p><strong>Registration Procedure<\/strong>\s*<\/p>/g, '<p><strong>Registration Procedure:</strong></p>'],
    [/<p><strong>Registration Procedures<\/strong>\s*<\/p>/g, '<p><strong>Registration Procedures:</strong></p>'],
    [/<p><strong>Important Terms<\/strong>\s*<\/p>/g, '<p><strong>Important Terms:</strong></p>'],
    [/<p><strong>Eligible Game\(s\)<\/strong>\s*<\/p>/g, '<p><strong>Eligible Game(s):</strong></p>'],
    [/<p><strong>ELIGIBLE GAME\(S\)<\/strong>\s*<\/p>/g, '<p><strong>ELIGIBLE GAME(S):</strong></p>'],

    [/<p>\s*&nbsp;\s*<\/p>/g, ''],


    [/<em>..<\/em>/g, ''],
    [/\(\)/g, ''],

    [/GAMBLER.\s*Must/g, 'GAMBLER.</p><p>Must'],
    // [/<p><br data-cke-filler="true">\s*<\/p>/g, ''],
    // [/<ul>\s*<li>\s*Gambling Problem? Call 1-800-GAMBLER.\s*<\/li>\s*<\/ul>/g, '<p>Gambling Problem? Call 1-800-GAMBLER.</p>'],

    









    // [/<strong>Bonus Spins:&nbsp;<\/strong>/g, '<strong>Bonus Spins</strong>'],
    // [/<strong>Bonus Dollars:&nbsp;<\/strong>/g, '<strong>Bonus Dollars</strong>'],
    // [/<strong>25% Deposit Match:&nbsp;<\/strong>/g, '<strong>25% Deposit Match</strong>'],
    // [/<strong>Prizes:&nbsp;<\/strong>/g, '<strong>Prizes</strong>'],
    // [/<strong>Bonus Spins:<\/strong>/g, '<strong>Bonus Spins</strong>'],
    // [/<strong>Bonus Dollars:<\/strong>/g, '<strong>Bonus Dollars</strong>'],
    // [/<strong>25% Deposit Match:<\/strong>/g, '<strong>25% Deposit Match</strong>'],
    // [/<strong>Prizes:<\/strong>/g, '<strong>Prizes</strong>'],


    // [/ <\/p>/g, '</p>', 'Extra white spaces'],
    // [/ <\/li>/g, '</li>', 'Extra white spaces'],
    // [/<p><\/p>/g, '', 'Extra white spaces'],
    // [/ <strong>/g, '<strong>', 'Extra white spaces'],
    // [/<strong> /g, '<strong>', 'Extra white spaces'],
    // [/<p> <strong>/g, '<p><strong>', 'Extra white spaces'],
    // [/<p> <\/p>/g, '', 'Extra white spaces'], // removes extra white spaces
    // [/! <\/p>/g, '!</p>', 'Extra white spaces'], // removes extra white spaces
    // [/<p> /g, '<p>', 'Extra <p> tags'], // removes extra white spaces


    // [/<p>\[REWARD TILE\]<\/p>/gi, '<span>[REWARD TILE]</span>', 'Rewrite Text'],
    // [/<p>REWARD TILE<\/p>/gi, '<span>[REWARD TILE]</span>', 'Rewrite Text'],
    // [/<p>SUBTITLE:/gi, '', 'Rewrite Text'],
    // [/<p>\[SHORT SUMMARY]\: /gi, '[SHORT SUMMARY]<p>', 'Rewrite Text'],
    // [/<p>\[SHORT SUMMARY\]<\/p>/gi, '<span>[SHORT SUMMARY]</span>', 'Rewrite Text'],
    // [/H1:/g, '', 'Rewrite Text'],
    // [/H2:/g, '', 'Rewrite Text'],
    // [/  /g, ' ', 'Rewrite Text'],
    // [/> </g, '><', 'Rewrite Text'],
    // [/<p>\[promotion details\]<\/p>/g, '<span>[promotion details]</span>', 'Rewrite Text'],
    // [/<p>\[CTA\]<\/p>/g, '<span>[CTA]</span>', 'Rewrite Text'],
    // [/<strong>\[CTA\]<\/strong>/g, '<span>[CTA]</span>', 'Rewrite Text'],
    // [/<p>\[PREVIEW DESCRIPTION\]<\/p>/g, '<span>[PREVIEW DESCRIPTION]</span>', 'Rewrite Text'],
    // [/<p>\[PREVIEW DESCRIPTION\]:<\/p>/g, '<span>[PREVIEW DESCRIPTION]</span>', 'Rewrite Text'],
    // [/<p>\[OVERLAY DESCRIPTION\]<\/p>/g, '<span>[OVERLAY DESCRIPTION]</span>', 'Rewrite Text'],
    // [/<p>\[TOASTER DESCRIPTION\]<\/p>/g, '<span>[TOASTER DESCRIPTION]</span>', 'Rewrite Text'],
    // [/<p>\[HERO IMAGE ART\]<\/p>/g, '<span>[HERO IMAGE ART]</span>', 'Rewrite Text'],
    // [/<p>\[HERO IMAGE ART\] <\/p>/g, '<span>[HERO IMAGE ART]</span>', 'Rewrite Text'],
    // [/<p>\[promotion dates\] /gi, '[promotional dates]<p>', 'Rewrite Text'],
    // [/\[promotional dates\] /gi, '[promotional dates]<p>', 'Rewrite Text'],
    // [/\[promotion description\] /gi, '</p>[promotion description]<p>', 'Rewrite Text'],
    // [/<p>\[FULLVIEW TITLE\]: /gi, '[FULLVIEW TITLE]:<p>', 'Rewrite Text'],
    // [/<p>\[FULLVIEW DESCRIPTION\]: /gi, '[FULLVIEW DESCRIPTION]:<p>', 'Rewrite Text'],
    // [/<p>\[FULLVIEW DESCRIPTION\]<\/p>/gi, '', 'Rewrite Text'],
    // [/<p><strong>\[CTA\] /gi, '[CTA]:<p><strong>', 'Rewrite Text'],
    // [/\[FULLVIEW TITLE\]/gi, '', 'Rewrite Text'],
    // [/<p>\[HERO IMAGE ART\]  <\/p>/gi, '', 'Rewrite Text'],



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

function removeFigureDivTags(inputString) {

    function removeHtmlAttributes(htmlString) {
        return htmlString.replace(/<(\w+)(?:\s+[^>]+)?\s*(\/?)>/g, "<$1$2>");
    }

    const regex = /(<figure.*?>|<\/figure>|<svg.*?>[\s\S]*?(?:(?=<\/svg>)|<\/svg>)|<div.*?>)[\s\S]*?(?!(?:[^<]+>|[^>]+<\/table>))(?:(?=<\/table>)|<\/table>)/g;
    const outputString = inputString.replace(regex, '{table removed}');

    // Extract all tables from the cleaned output
    const tableRegex = /<table[\s\S]*?<\/table>/g;
    const extractedTables = inputString.match(tableRegex) || [];

    // Combine extracted tables into a string
    const assembleTableData = extractedTables.join('\n');

    tableData = removeHtmlAttributes(assembleTableData);


    return { outputString, tableData }; // Return both the cleaned HTML and the extracted tables
}


function formatRewardTable(rawHtml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');
    const table = doc.querySelector('table');

    if (!table) return rawHtml; // In case no table is found

    // Add styling and classes to table
    table.className = 'table table-bordered table-striped';
    table.style.textAlign = 'center';
    table.style.marginBlock = '1rem';
    table.style.tableLayout = 'fixed';

    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const containsLeaderboard = rawHtml.toLowerCase().includes('leaderboard');

    const thead = document.createElement('thead');
    thead.setAttribute('style', 'background-color: #d4b962;');

    // If Leaderboard is mentioned, create a colspan header
    if (containsLeaderboard) {
        const headerRow1 = document.createElement('tr');
        const th = document.createElement('th');
        th.colSpan = 2;
        th.innerHTML = rows[0].textContent.trim();
        th.setAttribute('style', 'background-color: #d4b962;');
        headerRow1.appendChild(th);
        thead.appendChild(headerRow1);
        rows.shift(); // remove from tbody
    }

    // Convert first row into <th> with styles
    const headerRow2 = rows.shift();
    const newHeaderRow = document.createElement('tr');
    headerRow2.querySelectorAll('td').forEach(td => {
        const th = document.createElement('th');
        th.innerHTML = td.innerHTML;
        th.setAttribute('style', 'background-color: #d4b962;');
        newHeaderRow.appendChild(th);
    });
    thead.appendChild(newHeaderRow);

    // Create a clean, styled tbody
    const newTbody = document.createElement('tbody');
    newTbody.setAttribute('style', 'background-color: #ffffff;');

    rows.forEach((tr, index) => {
        const newRow = document.createElement('tr');
        const cells = tr.querySelectorAll('td');
        const isLastRow = index === rows.length - 1;

        cells.forEach(td => {
            const newCell = document.createElement('td');
            newCell.innerHTML = isLastRow ? `<strong>${td.innerHTML}</strong>` : td.innerHTML;
            newRow.appendChild(newCell);
        });

        newTbody.appendChild(newRow);
    });

    // Replace original content
    table.innerHTML = '';
    table.appendChild(thead);
    table.appendChild(newTbody);

    return table.outerHTML;
}

function previewTerms() {
    let termsData = editor.getData('ck5-textarea');
    let tableData = document.getElementById("table-view");
    let termsPreviewBox = document.getElementById("fullterms-preview-full");


    let assembledTerms = termsData.replace('{table removed}', tableData.outerHTML);



    // Inject the result into the preview box
    termsPreviewBox.innerHTML = assembledTerms;
}

function copyPreviewTerms() {
    let termsPreviewBox = document.getElementById("fullterms-preview-full");
    editor.setData(termsPreviewBox.innerHTML);
}


function updateLinkColor(brand, game, state) {

    let termsData = editor.getData('ck5-textarea');
    let tableData = document.getElementById("table-code");
    let termsPreviewBox = document.getElementById("fullterms-preview-full");



    if (brand == 'borgata') {

        let assembledTerms = termsData.replace('#d4b962', '#d21c5d');

    }


    termsPreviewBox.innerHTML = assembledTerms;
}


const target = document.querySelector('#ck5-textarea');
var cleanedText = null;
let cleanedTableData = "";


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
    const result = removeFigureDivTags(editor.getData());
    rawText = removeFigureDivTags(rawText); // removes <figure> and <div> tags

    rawText = result.outputString;
    tableData = result.tableData;

    console.log(tableData);

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


    for (let i = 0; i < removables.length; i++) {
        const regex = new RegExp(removables[i][0]);
        const errorName = removables[i][2];
        const qaItem = removables[i][3];
        const replacements = removables[i][1];
        const matches = tableData.match(regex);

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

        tableData = tableData.replace(regex, replacements);

        count = 0;
        counter = 0;

    }


    cleanedText = rawText;
    cleanedTableData = tableData;
    editor.setData(cleanedText);

    copyTableToClipboard();


    console.log(cleanedTableData);

    // return cleanedText;


}


function copyTableToClipboard() {
    let tableElement = document.getElementById("table-code");
    let tablePreview = document.getElementById("table-view");

    if (!tableElement) {
        console.error("Element with ID 'terms' not found!");
        return;
    }

    formattedTable = formatRewardTable(cleanedTableData);

    console.log(formattedTable);
    tableElement.innerHTML = formattedTable;
    tablePreview.innerHTML = formattedTable;

    // alert("Copied Table");
}

function copyToClipboard() {
    // Get the text field
    var copyText = editor.getData('ck5-editor');

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);


    // Alert the copied text
    alert("Copied Terms and Conditions");
}


function updateLinkColor(cleanedtext, brand) {
    // Define brand colors
    const brandColors = {
        "BetMGM Casino": "gold",
        "Borgata": "purple",
        "PartyCasino": "pink",
        "BetMGM Poker": "green",
        "Borgata Poker": "orange"
    };

    // Get the selected brand color
    const color = brandColors[brand] || "black"; // Default to black if brand not found

    // Create a temporary div to manipulate the HTML content
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = cleanedtext;

    // Update all <a> tag colors
    let links = tempDiv.querySelectorAll("a");
    links.forEach(link => {
        link.style.color = color;
    });

    // Return the modified HTML as a string
    return tempDiv.innerHTML;
}

