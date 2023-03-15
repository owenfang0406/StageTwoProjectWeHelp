(function(g){var window=this;'use strict';var ucb=function(a,b){a.Oa("onAutonavCoundownStarted",b)},x5=function(a,b,c){g.io(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.cg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.HI&&(b.lengthText?(e=b.lengthText||null,f=b.Ru||null):b.lengthSeconds&&(e=g.gO(b.lengthSeconds),f=g.gO(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.FI(d).type;var l=b instanceof g.HI?b.isLivePlayback:null,m=b instanceof g.HI?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],w=[];n&&r.push(n);p&&(r.push(p),w.push(p));q&&w.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.DL("\u89c0\u770b\u300c$TITLE\u300d",{TITLE:b.title}),duration:e,timestamp:f,url:b.ao(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:w.join(" \u2022 "),autoplayAlternativeHeader:b.Tq};b instanceof g.GI&&(c.playlist_length=b.playlistLength);a.update(c)},y5=function(a){var b=a.V(),c=b.u;
g.T.call(this,{G:"a",K:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.T:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{G:"div",X:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],qa:"\u76f4\u64ad"},
{G:"div",Ga:["ytp-autonav-upcoming-stamp"],qa:"\u5373\u5c07\u64ad\u51fa"},{G:"div",K:"ytp-autonav-list-overlay",W:[{G:"div",K:"ytp-autonav-mix-text",qa:"\u5408\u8f2f"},{G:"div",K:"ytp-autonav-mix-icon"}]}]},{G:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});
this.F=a;this.suggestion=null;this.j=c;this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress)},z5=function(a,b){b=void 0===b?!1:b;
g.T.call(this,{G:"div",K:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.B=0;this.container=new g.T({G:"div",K:"ytp-autonav-endscreen-countdown-container"});g.E(this,this.container);this.container.Ca(this.element);b=a.V();var d=b.u;this.F=a;this.suggestion=null;this.onVideoDataChange("newdata",this.F.getVideoData());this.N(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.S("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.T({G:"div",K:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",K:"ytp-autonav-endscreen-upnext-header"},{G:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{G:"a",K:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.T:""},W:[{G:"div",Ga:e,X:{style:"{{background}}"},W:[{G:"div",
X:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],qa:"\u76f4\u64ad"},{G:"div",Ga:["ytp-autonav-upcoming-stamp"],qa:"\u5373\u5c07\u64ad\u51fa"}]},{G:"div",K:"ytp-autonav-endscreen-video-info",W:[{G:"div",K:"ytp-autonav-endscreen-premium-badge"},{G:"div",K:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{G:"div",K:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{G:"div",K:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},
{G:"div",K:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.E(this,this.j);this.j.Ca(this.container.element);d||this.N(this.j.Ea("ytp-autonav-endscreen-link-container"),"click",this.iP);this.F.rb(this.container.element,this,115127);this.F.rb(this.j.Ea("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.T({G:"div",K:"ytp-autonav-overlay"});g.E(this,this.overlay);this.overlay.Ca(this.container.element);this.u=new g.T({G:"div",K:"ytp-autonav-endscreen-button-container"});
g.E(this,this.u);this.u.Ca(this.container.element);this.cancelButton=new g.T({G:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.S("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"\u53d6\u6d88\u81ea\u52d5\u64ad\u653e"},qa:"\u53d6\u6d88"});g.E(this,this.cancelButton);this.cancelButton.Ca(this.u.element);this.cancelButton.Pa("click",this.YX,this);this.F.rb(this.cancelButton.element,this,115129);this.playButton=
new g.T({G:"a",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",b.S("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"\u64ad\u653e\u4e0b\u4e00\u90e8\u5f71\u7247"},qa:"\u7acb\u5373\u64ad\u653e"});g.E(this,this.playButton);this.playButton.Ca(this.u.element);this.playButton.Pa("click",this.iP,this);this.F.rb(this.playButton.element,this,115130);this.C=new g.Wn(function(){vcb(c)},500);
g.E(this,this.C);this.hP();this.N(a,"autonavvisibility",this.hP);this.F.S("web_autonav_color_transition")&&(this.N(a,"autonavchange",this.XX),this.N(a,"onAutonavCoundownStarted",this.Q3))},A5=function(a){var b=a.F.nk(!0,a.F.isFullscreen());
g.io(a.container.element,"ytp-autonav-endscreen-small-mode",a.Yg(b));g.io(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.ZG);g.io(a.F.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.F.Kf());g.io(a.F.getRootNode(),"countdown-running",a.wk());g.io(a.container.element,"ytp-player-content",a.F.Kf());g.xl(a.overlay.element,{width:b.width+"px"});if(!a.wk()){a.F.Kf()?wcb(a,Math.round(xcb(a)/1E3)):wcb(a);b=!!a.suggestion&&!!a.suggestion.Tq;var c=a.F.Kf()||!b;
g.io(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.io(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.eN(a.u,a.F.Kf());g.io(a.element,"ytp-enable-w2w-color-transitions",ycb(a))}},vcb=function(a){var b=xcb(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);wcb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.wk()?a.select(!0):a.wk()&&a.C.start()},xcb=function(a){if(a.F.isFullscreen()){var b;
a=null==(b=a.F.getVideoData())?void 0:b.cw;return-1===a||void 0===a?8E3:a}return 0<=a.F.Cr()?a.F.Cr():g.IG(a.F.V().experiments,"autoplay_time")||1E4},ycb=function(a){var b;
return!(null==(b=a.F.getVideoData())||!b.watchToWatchTransitionRenderer)},wcb=function(a,b){b=void 0===b?-1:b;
a=a.j.Ea("ytp-autonav-endscreen-upnext-header");g.Qe(a);if(0<=b){b=String(b);var c="\u4e0b\u4e00\u90e8\u5f71\u7247\u5c07\u5728 $SECONDS \u79d2\u5f8c\u64ad\u653e".match(RegExp("\\$SECONDS","gi"))[0],d="\u4e0b\u4e00\u90e8\u5f71\u7247\u5c07\u5728 $SECONDS \u79d2\u5f8c\u64ad\u653e".indexOf(c);if(0<=d){a.appendChild(g.Oe("\u4e0b\u4e00\u90e8\u5f71\u7247\u5c07\u5728 $SECONDS \u79d2\u5f8c\u64ad\u653e".slice(0,d)));var e=g.Ne("span");g.bo(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.We(e,b);
a.appendChild(e);a.appendChild(g.Oe("\u4e0b\u4e00\u90e8\u5f71\u7247\u5c07\u5728 $SECONDS \u79d2\u5f8c\u64ad\u653e".slice(d+c.length)));return}}g.We(a,"\u5373\u5c07\u64ad\u653e")},B5=function(a,b){g.T.call(this,{G:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},C5=function(a){g.T.call(this,{G:"div",
Ga:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{G:"div",K:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{G:"span",K:"ytp-upnext-top",W:[{G:"span",K:"ytp-upnext-header",qa:"\u5373\u5c07\u64ad\u653e"},{G:"span",K:"ytp-upnext-title",qa:"{{title}}"},{G:"span",K:"ytp-upnext-author",qa:"{{author}}"}]},{G:"a",K:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"\u64ad\u653e\u4e0b\u4e00\u90e8\u5f71\u7247"},W:[{G:"svg",X:{height:"100%",version:"1.1",
viewBox:"0 0 72 72",width:"100%"},W:[{G:"circle",K:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",K:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",K:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",K:"ytp-upnext-bottom",W:[{G:"span",K:"ytp-upnext-cancel"},
{G:"span",K:"ytp-upnext-paused",qa:"\u5df2\u66ab\u505c\u81ea\u52d5\u64ad\u653e\u529f\u80fd"}]}]});this.api=a;this.cancelButton=null;this.D=this.Ea("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.Wn(this.hE,5E3,this);this.u=0;var b=this.Ea("ytp-upnext-cancel");this.cancelButton=new g.T({G:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"\u53d6\u6d88\u81ea\u52d5\u64ad\u653e"},qa:"\u53d6\u6d88"});g.E(this,this.cancelButton);
this.cancelButton.Pa("click",this.ZX,this);this.cancelButton.Ca(b);this.cancelButton&&this.api.rb(this.cancelButton.element,this,115129);g.E(this,this.C);this.api.rb(this.element,this,18788);b=this.Ea("ytp-upnext-autoplay-icon");this.N(b,"click",this.aY);this.api.rb(b,this,115130);this.jP();this.N(a,"autonavvisibility",this.jP);this.N(a,"mdxnowautoplaying",this.B4);this.N(a,"mdxautoplaycanceled",this.C4);g.io(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},zcb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.cw;return-1===a||void 0===a?8E3:a}return 0<=a.api.Cr()?a.api.Cr():g.IG(a.api.V().experiments,"autoplay_time")||1E4},Acb=function(a,b){b=zcb(a,b);
var c=Math,d=c.min;var e=(0,g.Q)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.wk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.wk()&&a.j.start()},D5=function(a){B5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.T({G:"div",K:"ytp-suggestion-panel",W:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"\u66f4\u591a\u5f71\u7247"}]});this.J=new g.T({G:"div",K:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new z5(this.player);g.E(this,this.u);this.u.Ca(this.element);a.getVideoData().hc?this.j=this.u:(this.j=new C5(a),g.mQ(this.player,this.j.element,4),g.E(this,this.j));this.overlay=new g.T({G:"div",
K:"ytp-autonav-overlay-cancelled-state"});g.E(this,this.overlay);this.overlay.Ca(this.element);this.C=new g.IF(this);g.E(this,this.C);g.E(this,this.table);this.table.Ca(this.element);this.table.show();g.E(this,this.J);this.J.Ca(this.table.element);this.hide()},E5=function(a){var b=a.Kf();
b!==a.D&&(a.D=b,a.player.ma("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},F5=function(a,b){g.T.call(this,{G:"button",
Ga:["ytp-watch-on-youtube-button","ytp-button"],qa:"{{content}}"});this.F=a;this.buttonType=this.buttonType=b;b=this.F.getVideoData();if(a.S("embeds_enable_server_driven_watch_again_on_youtube")){var c,d;if(c=(a=null==(c=b.watchNextResponse)?void 0:null==(d=c.playerOverlays)?void 0:d.playerOverlayRenderer)&&g.N(a.watchOnYoutubeButton,g.hKa))this.j=c}if(this.j)this.update({content:this.j.title}),this.F.Gg(this.element,this),this.F.Ah(this.element,this.j.trackingParams||null);else{switch(this.buttonType){case 1:c=
"\u5728 YouTube \u4e0a\u518d\u6b21\u89c0\u770b";d=156915;break;case 2:c="\u524d\u5f80 YouTube \u7e7c\u7e8c\u89c0\u770b";d=156942;break;default:c="\u524d\u5f80 YouTube \u7e7c\u7e8c\u89c0\u770b",d=156942}this.update({content:c});this.F.rb(this.element,this,d)}2===this.buttonType&&g.eo(this.element,"ytp-continue-watching-button");this.Pa("click",this.onClick);g.eN(this,!0)},G5=function(a,b){B5.call(this,a,"embeds-lite-endscreen");
this.F=a;this.j=b;this.F.rb(this.element,this,156943);this.watchButton=new F5(a,2);g.E(this,this.watchButton);this.watchButton.Ca(this.element);this.hide()},Bcb=function(a){B5.call(this,a,"subscribecard-endscreen");
this.j=new g.T({G:"div",K:"ytp-subscribe-card",W:[{G:"img",K:"ytp-author-image",X:{src:"{{profilePicture}}"}},{G:"div",K:"ytp-subscribe-card-right",W:[{G:"div",K:"ytp-author-name",qa:"{{author}}"},{G:"div",K:"html5-subscribe-button-container"}]}]});g.E(this,this.j);this.j.Ca(this.element);var b=a.getVideoData();this.subscribeButton=new g.ZR("\u8a02\u95b1",null,"\u53d6\u6d88\u8a02\u95b1",null,!0,!1,b.Ql,b.subscribed,"trailer-endscreen",null,null,a);g.E(this,this.subscribeButton);this.subscribeButton.Ca(this.j.Ea("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.La);this.La();this.hide()},H5=function(a){var b=a.V(),c=g.LF||g.CH?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.T.call(this,{G:"a",Ga:e,X:{href:"{{url}}",target:d?b.T:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{G:"div",K:"ytp-videowall-still-image",X:{style:"{{background}}"}},{G:"span",K:"ytp-videowall-still-info",X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-info-bg",W:[{G:"span",K:"ytp-videowall-still-info-content",X:c,W:[{G:"span",K:"ytp-videowall-still-info-title",
qa:"{{title}}"},{G:"span",K:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{G:"span",K:"ytp-videowall-still-info-live",qa:"\u76f4\u64ad"},{G:"span",K:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{G:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-listlabel-icon"},"\u64ad\u653e\u6e05\u55ae",{G:"span",K:"ytp-videowall-still-listlabel-length",W:[" (",{G:"span",qa:"{{playlist_length}}"},
")"]}]},{G:"span",Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"\u5408\u8f2f",{G:"span",K:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.IF(this);g.E(this,this.j);this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress);this.j.N(a,"videodatachange",this.onVideoDataChange);a.Gg(this.element,this);this.onVideoDataChange()},
I5=function(a){B5.call(this,a,"videowall-endscreen");
var b=this;this.F=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.T=null;this.u=new g.IF(this);g.E(this,this.u);this.Z=a.S("web_rounded_thumbnails");this.I=new g.Wn(function(){g.eo(b.element,"ytp-show-tiles")},0);
g.E(this,this.I);var c=new g.T({G:"button",Ga:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"\u4e0a\u4e00\u90e8"},W:[g.jN()]});g.E(this,c);c.Ca(this.element);c.Pa("click",this.eY,this);this.table=new g.bN({G:"div",K:"ytp-endscreen-content"});g.E(this,this.table);this.table.Ca(this.element);c=new g.T({G:"button",Ga:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"\u4e0b\u4e00\u500b"},W:[g.kN()]});g.E(this,c);c.Ca(this.element);c.Pa("click",this.dY,this);a.getVideoData().hc?this.j=new z5(a,
!0):this.j=new C5(a);g.E(this,this.j);g.mQ(this.player,this.j.element,4);a.rb(this.element,this,158789);this.hide()},J5=function(a){return g.nQ(a.player)&&a.cA()&&!a.C},Ccb=function(a){var b,c,d,e;
return(null==(b=a.videoData)?0:null==(c=b.suggestions)?0:c.length)?null==(d=a.videoData)?void 0:d.suggestions:[null==(e=a.videoData)?void 0:g.JI(e)]},K5=function(a){var b=a.Kf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},L5=function(a){B5.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new F5(a,1);g.E(this,this.watchButton);this.watchButton.Ca(this.element);g.F4a(a)&&(this.j=new g.w2(a,g.$P(a)),g.E(this,this.j),this.u=new g.T({G:"div",Ga:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},W:[this.j]}),g.E(this,this.u),this.j.Ca(this.u.element),this.u.Ca(this.element));a.rb(this.element,this,156914);this.hide()},Gcb=function(a){g.VQ.call(this,a);
var b=this;this.endScreen=null;this.u=this.j=this.B=this.C=!1;this.listeners=new g.IF(this);g.E(this,this.listeners);var c=a.V(),d=a.getVideoData();d=d&&0!==d.endSeconds;if(g.Iw(g.WH(c))&&d&&!g.jQ(a))this.u=!0,this.endScreen=new G5(a,g.$P(a));else{var e;(null==(e=g.$P(a))?0:e.vk())?this.endScreen=new L5(a):Dcb(a)?(this.C=!0,Ecb(this),this.j?this.endScreen=new D5(a):this.endScreen=new I5(a)):c.Eg?this.endScreen=new Bcb(a):this.endScreen=new B5(a)}g.E(this,this.endScreen);g.mQ(a,this.endScreen.element,
4);Fcb(this);this.listeners.N(a,"videodatachange",this.onVideoDataChange,this);this.listeners.N(a,g.LB("endscreen"),function(f){b.onCueRangeEnter(f)});
this.listeners.N(a,g.MB("endscreen"),function(f){b.onCueRangeExit(f)})},Ecb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.ge&&a.B===b.hc)return!1;a.j=b.ge;a.B=b.hc;return!0},Dcb=function(a){a=a.V();
return a.Ad&&!a.Eg},Fcb=function(a){a.player.Uf("endscreen");
var b=a.player.getVideoData();b=new g.JB(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.JB(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Le([b,c])};
g.eV.prototype.Py=g.ba(37,function(a){this.IM!==a&&(this.IM=a,this.Pk())});
g.PS.prototype.Aq=g.ba(36,function(a){this.u!==a&&(this.u=a,this.La())});
g.eV.prototype.Aq=g.ba(35,function(a){this.shareButton&&this.shareButton.Aq(a)});
g.ES.prototype.zq=g.ba(34,function(a){this.j!==a&&(this.j=a,this.La())});
g.eV.prototype.zq=g.ba(33,function(a){this.overflowButton&&this.overflowButton.zq(a)});
g.KR.prototype.FC=g.ba(32,function(a){this.JM!==a&&(this.JM=a,this.So())});
g.fQ.prototype.Cr=g.ba(6,function(){return this.app.Cr()});
g.lZ.prototype.Cr=g.ba(5,function(){return this.getVideoData().CH});g.v(y5,g.T);y5.prototype.select=function(){this.F.hn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.yA||void 0)&&this.F.sb(this.element)};
y5.prototype.onClick=function(a){g.vR(a,this.F,this.j,this.suggestion.sessionData||void 0)&&this.select()};
y5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.iz(a)||(this.select(),g.hz(a))}};g.v(z5,g.T);g.k=z5.prototype;g.k.nD=function(a){this.suggestion!==a&&(this.suggestion=a,x5(this.j,a),this.playButton.updateValue("url",this.suggestion.ao()),A5(this))};
g.k.wk=function(){return 0<this.B};
g.k.Vy=function(){this.wk()||(this.B=Date.now(),vcb(this),ucb(this.F,xcb(this)),g.io(this.F.getRootNode(),"countdown-running",this.wk()))};
g.k.tv=function(){this.Dq();vcb(this);var a=this.j.Ea("ytp-autonav-endscreen-upnext-header");a&&g.We(a,"\u5373\u5c07\u64ad\u653e")};
g.k.Dq=function(){this.wk()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.F.nextVideo(!1,void 0===a?!1:a);this.Dq()};
g.k.iP=function(a){g.vR(a,this.F)&&(a.currentTarget===this.playButton.element?this.F.sb(this.playButton.element):a.currentTarget===this.j.Ea("ytp-autonav-endscreen-link-container")&&(a=this.j.Ea("ytp-autonav-endscreen-link-container"),this.F.Sa(a,!0),this.F.sb(a)),this.select())};
g.k.YX=function(){this.F.sb(this.cancelButton.element);g.hQ(this.F,!0);this.D&&this.F.Oa("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.qQ)?void 0:c.command};
g.k.Q3=function(a){if(ycb(this)){var b=this.F.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.rO(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.rO(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.rO(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.rO(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.rO(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.rO(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.io(this.element,"ytp-w2w-animate",!0)}};
g.k.XX=function(a){this.F.S("web_autonav_color_transition")&&2!==a&&g.io(this.element,"ytp-w2w-animate",!1)};
g.k.hP=function(){var a=this.F.Kf();this.I&&this.ub!==a&&g.eN(this,a);A5(this);this.F.Sa(this.container.element,a);this.F.Sa(this.cancelButton.element,a);this.F.Sa(this.j.Ea("ytp-autonav-endscreen-link-container"),a);this.F.Sa(this.playButton.element,a)};
g.k.Yg=function(a){return 400>a.width||459>a.height};g.v(B5,g.T);g.k=B5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.cA=function(){return!1};
g.k.Kf=function(){return!1};
g.k.oT=function(){return!1};g.v(C5,g.T);g.k=C5.prototype;g.k.hE=function(){this.notification&&(this.C.stop(),this.Fc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.nD=function(a){this.suggestion=a;x5(this,a,"hqdefault.jpg")};
g.k.jP=function(){g.eN(this,this.api.Kf());this.api.Sa(this.element,this.api.Kf());this.api.Sa(this.Ea("ytp-upnext-autoplay-icon"),this.api.Kf());this.cancelButton&&this.api.Sa(this.cancelButton.element,this.api.Kf())};
g.k.K4=function(){window.focus();this.hE()};
g.k.Vy=function(a){var b=this;this.wk()||(g.xz("a11y-announce","\u5373\u5c07\u64ad\u653e "+this.suggestion.title),this.u=(0,g.Q)(),this.j=new g.Wn(function(){Acb(b,a)},25),Acb(this,a),ucb(this.api,zcb(this,a)));
g.go(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.T.prototype.hide.call(this)};
g.k.wk=function(){return!!this.j};
g.k.tv=function(){this.Dq();this.u=(0,g.Q)();Acb(this);g.eo(this.element,"ytp-upnext-autoplay-paused")};
g.k.Dq=function(){this.wk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().S("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.hE(),this.notification=new Notification("\u5373\u5c07\u64ad\u653e",{body:this.suggestion.title,icon:this.suggestion.cg()}),this.B=this.N(this.notification,"click",this.K4),this.C.start())}this.Dq();this.api.nextVideo(!1,a)};
g.k.aY=function(a){!g.Ue(this.cancelButton.element,g.dz(a))&&g.vR(a,this.api)&&(this.api.Kf()&&this.api.sb(this.Ea("ytp-upnext-autoplay-icon")),this.select())};
g.k.ZX=function(){this.api.Kf()&&this.cancelButton&&this.api.sb(this.cancelButton.element);g.hQ(this.api,!0)};
g.k.B4=function(a){this.api.getPresentingPlayerType();this.show();this.Vy(a)};
g.k.C4=function(){this.api.getPresentingPlayerType();this.Dq();this.hide()};
g.k.ra=function(){this.Dq();this.hE();g.T.prototype.ra.call(this)};g.v(D5,B5);g.k=D5.prototype;g.k.create=function(){B5.prototype.create.call(this);this.C.N(this.player,"appresize",this.Gz);this.C.N(this.player,"onVideoAreaChange",this.Gz);this.C.N(this.player,"videodatachange",this.onVideoDataChange);this.C.N(this.player,"autonavchange",this.kP);this.C.N(this.player,"autonavcancel",this.bY);this.onVideoDataChange()};
g.k.show=function(){B5.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.hQ(this.player,!1);g.nQ(this.player)&&this.cA()&&!this.B?(E5(this),2===this.videoData.autonavState?this.player.V().S("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Vy():3===this.videoData.autonavState&&this.j.tv()):(g.hQ(this.player,!0),E5(this));this.Gz()};
g.k.hide=function(){B5.prototype.hide.call(this);this.j.tv();E5(this)};
g.k.Gz=function(){var a=this.player.nk(!0,this.player.isFullscreen());E5(this);A5(this.u);g.io(this.element,"ytp-autonav-cancelled-small-mode",this.Yg(a));g.io(this.element,"ytp-autonav-cancelled-tiny-mode",this.wF(a));g.io(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.xl(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.t(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.t(b.value);b=c.next().value;c=c.next().value;g.io(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.JI(this.videoData);b&&(this.j.nD(b),this.j!==this.u&&this.u.nD(b));for(b=0;b<Hcb.length;++b){var c=Hcb[b];if(a&&a[c]){this.videos[b]=new y5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,x5(d,c));g.E(this,this.videos[b]);this.videos[b].Ca(this.J.element)}}}this.Gz()}};
g.k.kP=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.Dq(),this.ub&&this.Gz()):(this.I=!0,this.Kf()&&(2===a?this.j.Vy():3===a&&this.j.tv()))};
g.k.bY=function(a){a?this.kP(1):(this.B=null,this.I=!1)};
g.k.cA=function(){return 1!==this.videoData.autonavState};
g.k.Yg=function(a){return(910>a.width||459>a.height)&&!this.wF(a)&&!(400>=a.width||360>=a.height)};
g.k.wF=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Kf=function(){return this.ub&&g.nQ(this.player)&&this.cA()&&!this.B};
var Hcb=[1,3,2,4];g.v(F5,g.T);g.k=F5.prototype;g.k.onClick=function(a){this.j?this.F.Oa("innertubeCommand",this.j.onTap):g.wR(this.getVideoUrl(),this.F,a);this.F.sb(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.F.getVideoUrl(a,!1,!1,!0);var b=this.F.V();if(g.EH(b)||g.OH(b)){var c={};b.Ka&&g.EH(b)&&g.uP(c,b.loaderUrl);g.EH(b)&&g.XP(this.F,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.tP(c,b);a=g.$h(a,c)}return a};
g.k.Sa=function(){this.F.Sa(this.element,this.ub&&this.ya)};
g.k.show=function(){g.T.prototype.show.call(this);this.Sa()};
g.k.hide=function(){g.T.prototype.hide.call(this);this.Sa()};
g.k.jc=function(a){g.T.prototype.jc.call(this,a);this.Sa()};g.v(G5,B5);G5.prototype.show=function(){3!==this.player.getPlayerState()&&(B5.prototype.show.call(this),this.j.Py(!0),this.j.Aq(!0),this.F.V().Nl||this.j.zq(!0),this.F.Sa(this.element,!0),this.watchButton.jc(!0))};
G5.prototype.hide=function(){B5.prototype.hide.call(this);this.j.Py(!1);this.j.Aq(!1);this.j.zq(!1);this.F.Sa(this.element,!1);this.watchButton.jc(!1)};g.v(Bcb,B5);Bcb.prototype.La=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Ql;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.v(H5,g.T);H5.prototype.select=function(){this.api.hn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.yA||void 0)&&this.api.sb(this.element)};
H5.prototype.onClick=function(a){g.vR(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
H5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.iz(a)||(this.select(),g.hz(a))}};
H5.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.D?!1:b.u};g.v(I5,B5);g.k=I5.prototype;g.k.create=function(){B5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.ep();this.u.N(this.player,"appresize",this.ep);this.u.N(this.player,"onVideoAreaChange",this.ep);this.u.N(this.player,"videodatachange",this.onVideoDataChange);this.u.N(this.player,"autonavchange",this.WH);this.u.N(this.player,"autonavcancel",this.cY);a=this.videoData.autonavState;a!==this.T&&this.WH(a);this.u.N(this.element,"transitionend",this.X5)};
g.k.destroy=function(){g.rA(this.u);g.ab(this.stills);this.stills=[];B5.prototype.destroy.call(this);g.go(this.element,"ytp-show-tiles");this.I.stop();this.T=this.videoData.autonavState};
g.k.cA=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.ub;B5.prototype.show.call(this);Ccb(this);g.go(this.element,"ytp-show-tiles");this.player.V().isMobile?g.Yn(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.hQ(this.player,!1);J5(this)?(K5(this),2===this.videoData.autonavState?this.player.V().S("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Vy():3===this.videoData.autonavState&&this.j.tv()):(g.hQ(this.player,!0),K5(this));a!==this.ub&&
this.player.Sa(this.element,!0)};
g.k.hide=function(){var a=this.ub;B5.prototype.hide.call(this);this.j.tv();K5(this);a!==this.ub&&this.player.Sa(this.element,!1)};
g.k.X5=function(a){g.dz(a)===this.element&&this.ep()};
g.k.ep=function(){var a=Ccb(this);if(a.length){g.eo(this.element,"ytp-endscreen-paginate");var b=this.F.nk(!0,this.F.isFullscreen()),c=g.$P(this.F);c&&(c=c.fg()?48:32,b.width-=2*c);var d=b.width/b.height,e=96/54,f=c=2,h=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=a.length,n=Math.pow(2,2);var p=m*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-n;for(p-=n;0<p&&(c<h||f<l);){var q=c/2,r=f/2,w=c<=h-2&&p>=r*n,x=f<=l-2&&p>=q*n;if((q+1)/r*e/d>d/(q/(r+1)*e)&&x)p-=q*n,f+=2;else if(w)p-=r*n,c+=2;else if(x)p-=q*
n,f+=2;else break}e=!1;p>=3*n&&6>=m*n-p&&(4<=f||4<=c)&&(e=!0);n=96*c;p=54*f;d=n/p<d?b.height/p:b.width/n;d=Math.min(d,2);n=Math.floor(Math.min(b.width,n*d));p=Math.floor(Math.min(b.height,p*d));b=this.table.element;b.ariaLive="polite";g.Hl(b,n,p);g.xl(b,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.nD(g.JI(this.videoData));this.j instanceof z5&&A5(this.j);g.io(this.element,"ytp-endscreen-takeover",J5(this));K5(this);n+=4;p+=4;d=0;b.ariaBusy="true";for(h=0;h<c;h++)for(l=0;l<f;l++)if(q=d,w=0,e&&
h>=c-2&&l>=f-2?w=1:0===l%2&&0===h%2&&(2>l&&2>h?0===l&&0===h&&(w=2):w=2),q=g.de(q+this.B,m),0!==w){r=this.stills[d];r||(r=new H5(this.player),this.stills[d]=r,b.appendChild(r.element));x=Math.floor(p*l/f);var z=Math.floor(n*h/c),B=Math.floor(p*(l+w)/f)-x-4,C=Math.floor(n*(h+w)/c)-z-4;g.Dl(r.element,z,x);g.Hl(r.element,C,B);g.xl(r.element,"transitionDelay",(l+h)/20+"s");g.io(r.element,"ytp-videowall-still-mini",1===w);g.io(r.element,"ytp-videowall-still-large",2<w);this.Z&&(w=Math.max(C,B),g.io(r.element,
"ytp-videowall-still-round-large",256<=w),g.io(r.element,"ytp-videowall-still-round-medium",96<w&&256>w),g.io(r.element,"ytp-videowall-still-round-small",96>=w));q=a[q];r.suggestion!==q&&(r.suggestion=q,w=r.api.V(),x=g.co(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",x5(r,q,x),g.EH(w)&&(x=q.ao(),z={},w.Ka&&g.uP(z,w.loaderUrl),g.XP(r.api,"addEmbedsConversionTrackingParams",[z]),x=g.$h(x,g.tP(z,"emb_rel_end")),r.updateValue("url",x)),(q=(q=q.sessionData)&&q.itct)&&r.api.Ah(r.element,
q));d++}b.ariaBusy="false";g.io(this.element,"ytp-endscreen-paginate",d<m);for(a=this.stills.length-1;a>=d;a--)c=this.stills[a],g.Se(c.element),g.$a(c);this.stills.length=d}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.ep())};
g.k.dY=function(){this.B+=this.stills.length;this.ep()};
g.k.eY=function(){this.B-=this.stills.length;this.ep()};
g.k.oT=function(){return this.j.wk()};
g.k.WH=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Dq(),this.ub&&this.ep()):(this.D=!0,this.ub&&J5(this)&&(2===a?this.j.Vy():3===a&&this.j.tv()))};
g.k.cY=function(a){if(a){for(a=0;a<this.stills.length;a++)this.F.Sa(this.stills[a].element,!0);this.WH(1)}else this.C=null,this.D=!1;this.ep()};
g.k.Kf=function(){return this.ub&&J5(this)};g.v(L5,B5);L5.prototype.show=function(){if(3!==this.player.getPlayerState()){B5.prototype.show.call(this);var a=this.u;if(a){var b=0<this.j.suggestionData.length;g.io(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.$P(this.player))||c.FC(!0);this.player.Sa(this.element,!0);this.watchButton.jc(!0)}};
L5.prototype.hide=function(){B5.prototype.hide.call(this);var a;null==(a=g.$P(this.player))||a.FC(!1);this.player.Sa(this.element,!1);this.watchButton.jc(!1)};g.v(Gcb,g.VQ);g.k=Gcb.prototype;g.k.Jv=function(){var a;if((null==(a=g.$P(this.player))?0:a.vk())||this.u)return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.JI(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!Dcb(this.player)||c;c=a.Jj||g.OH(a.u);var d=this.player.IA();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Kf=function(){return this.endScreen.Kf()};
g.k.w2=function(){return this.Kf()?this.endScreen.oT():!1};
g.k.ra=function(){this.player.Uf("endscreen");g.VQ.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.tb().Xe.get("heartbeat"),d=g.JI(a);!d||b.videoId!==d.videoId||a.VI?(this.player.hn(b.videoId,void 0,void 0,!0,!0,b),c&&c.EF("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.VQ.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.VQ.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Jv()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Fcb(this);this.C&&Ecb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new D5(this.player):this.endScreen=new I5(this.player),g.E(this,this.endScreen),g.mQ(this.player,this.endScreen.element,4))};g.UQ("endscreen",Gcb);})(_yt_player);
