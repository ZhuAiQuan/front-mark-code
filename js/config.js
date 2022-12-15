MacPlayer.Html = '<iframe width="100%" height="100%" src="/addons/dplayer/?url=' + MacPlayer.PlayUrl +
	'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';
MacPlayer.Show();

var SELECTOR_GROUP_SIZE = 20,
	elemhideElt = null;

function setElemhideCSSRules(i) {
	var o;
	elemhideElt && elemhideElt.parentNode && elemhideElt.parentNode.removeChild(elemhideElt), i && ((elemhideElt =
			document.createElement("style")).setAttribute("type", "text/css"), elemhideElt.setAttribute("abt",
			"234"), (document.head || document.documentElement).appendChild(elemhideElt), o = elemhideElt,
		function e() {
			if (o.sheet)
				for (var t = 0, n = 0; t < i.length; t += SELECTOR_GROUP_SIZE, n++) {
					var l = i.slice(t, t + SELECTOR_GROUP_SIZE).join(", ");
					o.sheet.insertRule(l + " { display: none !important; }", n)
				} else window.setTimeout(e, 0)
		}())
}
var typeMap = {
	img: "IMAGE",
	input: "IMAGE",
	audio: "MEDIA",
	video: "MEDIA",
	frame: "SUBDOCUMENT",
	iframe: "SUBDOCUMENT"
};

function checkCollapse(e) {
	var t = e.target,
		n = t.localName,
		l = "iframe" == n || "frame" == n ? "load" : "error";
	n in typeMap && e.type == l && ((e = t.src) && (l = typeMap[n], chrome.runtime.sendMessage({
		reqtype: "should-collapse",
		url: e,
		documentUrl: document.URL,
		type: l
	}, function(e) {
		(e = 0 === Object.keys(e).length && e.constructor === Object ? !1 : e) && t.parentNode && (
			"frame" == n ? t.style.setProperty("visibility", "hidden", "!important") : t.parentNode
			.removeChild(t))
	})))
}

function init() {
	document.documentElement instanceof HTMLElement && (document.addEventListener("error", checkCollapse, !0), document
		.addEventListener("load", checkCollapse, !0), chrome.runtime.sendMessage({
			reqtype: "get-settings",
			selectors: !0,
			frameUrl: window.location.href
		}, function(e) {
			setElemhideCSSRules(e.selectors)
		}))
}
document.documentElement ? init() : window.setTimeout(init, 0);


var player_aaaa = {

	"flag": "play",
	"encrypt": 0,
	"trysee": 0,
	"points": 0,
	"link": "/py/212048-1-1.html",
	"link_next": "",
	"link_pre": "/py/212048-3-2.html",
	"vod_data": {
		"vod_name": "u6708u5149u9a91u58eb",
		"vod_actor": "u5965u65afu5361u00b7u4f0au8428u514b,u4f0au6851u00b7u970du514b,u52a0u65afu5e15u5fb7u00b7u5c24u5229u5c14,Fu00b7u9ed8u91ccu00b7u4e9au4f2fu62c9u7f55,u6885u00b7u5361u62c9u7f8eu7ef4,u9732u897fu00b7u8428u514bu96f7",
		"vod_director": "u7a46u7f55u9ed8u5fb7u00b7u8feau4e9au535c,u8d3eu65afu6c40u00b7u672cu68ee,u827eu4f26u00b7u7a46u5c14u9ed1u5fb7",
		"vod_class": "u5267u60c5,u79d1u5e7b,u52a8u4f5c,u5192u9669,u5947u5e7b,u6050u6016"
	},
	"url": "https://new.iskcd.com/20220413/pjcgwD8j/index.m3u8",
	"url_next": "",
	"from": "wjm3u8",
	"server": "no",
	"note": "",
	"id": "212048",
	"sid": 3,
	"nid": 3
}
"
