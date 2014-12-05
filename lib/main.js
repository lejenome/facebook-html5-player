/* jshint esnext:true, node:true*/
"use strict";
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: /https?:\/\/(www.)?facebook.com\/video.php\?.*/,
    contentScriptFile: [data.url("facebook.js")],
    contentScriptWhen: "ready" //"start"
});