(function(){
	"use strict";
    function createNode(type, obj, data, style) {
        var node = document.createElement(type);
        if (obj)
            for (var opt in obj)
                if (obj.hasOwnProperty(opt))
                    node[opt] = obj[opt];
        if (data)
            for (var el in data)
                if (data.hasOwnProperty(el))
                    node.dataset[el] = data[el];
        if (style)
            for (var st in style)
                if (style.hasOwnProperty(st))
                    node.style[st] = style[st];
        return node;
    }

	var params = document.body.innerHTML.match(/\"params\",(\"[^\"]*\")/)[1];
	params =  JSON.parse(decodeURIComponent(JSON.parse(params)));
	var url  = params.video_data[0].sd_src || params.video_data[0].hd_src;
	var player = createNode("video", {
		width: "100%",
		heigth: "100%",
//		preload: true,
		controls: true,
		autoplay: true,
		src: url
	});

	document.getElementsByClassName("_53j5")[0].innerHTML = "";
	document.getElementsByClassName("_53j5")[0].appendChild(player);
//        location = url;
}());
