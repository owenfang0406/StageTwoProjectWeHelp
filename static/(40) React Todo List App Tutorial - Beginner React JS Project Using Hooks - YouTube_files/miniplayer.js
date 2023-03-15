(function(g){var window=this;'use strict';var Bdb=function(a){g.T.call(this,{G:"div",K:"ytp-miniplayer-ui"});this.Qf=!1;this.player=a;this.N(a,"minimized",this.Oh);this.N(a,"onStateChange",this.XN)},Cdb=function(a){g.VQ.call(this,a);
this.u=new g.IF(this);this.j=new Bdb(this.player);this.j.hide();g.mQ(this.player,this.j.element,4);a.gg()&&(this.load(),g.io(a.getRootNode(),"ytp-player-minimized",!0));this.player.S("web_rounded_containers")&&g.io(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(Bdb,g.T);g.k=Bdb.prototype;
g.k.eL=function(){this.tooltip=new g.aV(this.player,this);g.E(this,this.tooltip);g.mQ(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Pc=new g.OR(this.player);g.E(this,this.Pc);this.cj=new g.T({G:"div",K:"ytp-miniplayer-scrim"});g.E(this,this.cj);this.cj.Ca(this.element);this.N(this.cj.element,"click",this.cG);var a=new g.T({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\u95dc\u9589"},W:[g.lN()]});g.E(this,a);a.Ca(this.cj.element);this.N(a.element,"click",
this.Fo);a=new g.y2(this.player,this);g.E(this,a);a.Ca(this.cj.element);this.Zt=new g.T({G:"div",K:"ytp-miniplayer-controls"});g.E(this,this.Zt);this.Zt.Ca(this.cj.element);this.N(this.Zt.element,"click",this.cG);var b=new g.T({G:"div",K:"ytp-miniplayer-button-container"});g.E(this,b);b.Ca(this.Zt.element);a=new g.T({G:"div",K:"ytp-miniplayer-play-button-container"});g.E(this,a);a.Ca(this.Zt.element);var c=new g.T({G:"div",K:"ytp-miniplayer-button-container"});g.E(this,c);c.Ca(this.Zt.element);this.eV=
new g.uT(this.player,this,!1);g.E(this,this.eV);this.eV.Ca(b.element);b=new g.sT(this.player,this);g.E(this,b);b.Ca(a.element);this.nextButton=new g.uT(this.player,this,!0);g.E(this,this.nextButton);this.nextButton.Ca(c.element);this.gj=new g.OU(this.player,this);g.E(this,this.gj);this.gj.Ca(this.cj.element);this.Jc=new g.FT(this.player,this);g.E(this,this.Jc);g.mQ(this.player,this.Jc.element,4);this.SF=new g.T({G:"div",K:"ytp-miniplayer-buttons"});g.E(this,this.SF);g.mQ(this.player,this.SF.element,
4);a=new g.T({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\u95dc\u9589"},W:[g.lN()]});g.E(this,a);a.Ca(this.SF.element);this.N(a.element,"click",this.Fo);a=new g.T({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"\u95dc\u9589"},W:[g.sN()]});g.E(this,a);a.Ca(this.SF.element);this.N(a.element,"click",this.l5);this.N(this.player,"presentingplayerstatechange",this.ud);this.N(this.player,"appresize",this.Cb);this.N(this.player,"fullscreentoggled",
this.Cb);this.Cb()};
g.k.show=function(){this.cf=new g.Un(this.bv,null,this);this.cf.start();this.Qf||(this.eL(),this.Qf=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.cf&&(this.cf.dispose(),this.cf=void 0);g.T.prototype.hide.call(this);this.player.gg()||(this.Qf&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.cf&&(this.cf.dispose(),this.cf=void 0);g.T.prototype.ra.call(this)};
g.k.Fo=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.l5=function(){this.player.playVideo()};
g.k.cG=function(a){if(a.target===this.cj.element||a.target===this.Zt.element)g.bM(this.player.Fb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Oh=function(){g.io(this.player.getRootNode(),"ytp-player-minimized",this.player.gg())};
g.k.Ie=function(){this.Jc.vc();this.gj.vc()};
g.k.bv=function(){this.Ie();this.cf&&this.cf.start()};
g.k.ud=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Cb=function(){g.ZT(this.Jc,0,this.player.fb().getPlayerSize().width,!1);g.IT(this.Jc)};
g.k.XN=function(a){this.player.gg()&&(0===a?this.hide():this.show())};
g.k.Cc=function(){return this.tooltip};
g.k.fg=function(){return!1};
g.k.Yg=function(){return!1};
g.k.vk=function(){return!1};
g.k.zl=function(){return!1};
g.k.Qe=function(){return!1};
g.k.EC=function(){};
g.k.Ap=function(){};
g.k.wx=function(){};
g.k.xm=function(){return null};
g.k.JE=function(){return null};
g.k.ZA=function(){return null};
g.k.nk=function(){return new g.ul(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.wv=function(a,b,c,d,e){var f=0,h=d=0,l=g.Il(a);if(b){c=g.co(b,"ytp-prev-button")||g.co(b,"ytp-next-button");var m=g.co(b,"ytp-play-button"),n=g.co(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Gl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.co(b,"ytp-miniplayer-button-top-left"),f=g.Gl(b,this.element),b=g.Il(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.ce(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Qo=function(){};
g.k.ul=function(){return!1};
g.k.FC=function(){};
g.k.Py=function(){};
g.k.Aq=function(){};
g.k.zq=function(){};
g.k.OD=function(){};
g.k.yr=function(){};g.v(Cdb,g.VQ);g.k=Cdb.prototype;g.k.onVideoDataChange=function(){if(this.player.S("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.io(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
g.k.create=function(){g.VQ.prototype.create.call(this);this.u.N(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Ik=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.UQ("miniplayer",Cdb);})(_yt_player);
