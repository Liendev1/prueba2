var gdjs;(function(l){const u=new l.Logger("PIXI game renderer"),f=[37,38,39,40];class R{constructor(t,e){this._isFullPage=!0;this._isFullscreen=!1;this._pixiRenderer=null;this._threeRenderer=null;this._gameCanvas=null;this._domElementsContainer=null;this._canvasWidth=0;this._canvasHeight=0;this._keepRatio=!0;this._nextFrameId=0;this.getElectronRemote=()=>{if(typeof require=="function"){const t=this._game.getAdditionalOptions(),e=t&&t.electronRemoteRequirePath?t.electronRemoteRequirePath:"@electron/remote";try{return require(e)}catch(i){console.error(`Could not load @electron/remote from "${e}". Error is:`,i)}}return null};this._game=t,this._forceFullscreen=e,this._marginLeft=this._marginTop=this._marginRight=this._marginBottom=0,this._setupOrientation()}createStandardCanvas(t){let e;typeof THREE!="undefined"?(e=document.createElement("canvas"),this._threeRenderer=new THREE.WebGLRenderer({canvas:e,antialias:this._game.getAntialiasingMode()!=="none"&&(this._game.isAntialisingEnabledOnMobile()||!l.evtTools.common.isMobile())}),this._threeRenderer.useLegacyLights=!0,this._threeRenderer.autoClear=!1,this._threeRenderer.setSize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight()),this._pixiRenderer=new PIXI.Renderer({width:this._game.getGameResolutionWidth(),height:this._game.getGameResolutionHeight(),view:e,context:this._threeRenderer.getContext(),clearBeforeRender:!1,preserveDrawingBuffer:!0,antialias:!1,backgroundAlpha:0}),e=this._threeRenderer.domElement):(this._pixiRenderer=PIXI.autoDetectRenderer({width:this._game.getGameResolutionWidth(),height:this._game.getGameResolutionHeight(),preserveDrawingBuffer:!0,antialias:!1}),e=this._pixiRenderer.view),this._pixiRenderer.plugins.accessibility.destroy(),delete this._pixiRenderer.plugins.accessibility,t.appendChild(e),this._gameCanvas=e,e.style.position="absolute",e.tabIndex=1,e.style.userSelect="none",e.style.outline="none";const i=document.createElement("div");i.style.position="absolute",i.style.overflow="hidden",i.style.outline="none",i.style.pointerEvents="none",i.addEventListener("scroll",o=>{i.scrollLeft=0,i.scrollTop=0,o.preventDefault()}),e.addEventListener("pointerdown",()=>{e.focus()}),i.style["-webkit-user-select"]="none",t.appendChild(i),this._domElementsContainer=i,this._resizeCanvas(),this._game.getScaleMode()==="nearest"&&(e.style["image-rendering"]="-moz-crisp-edges",e.style["image-rendering"]="-webkit-optimize-contrast",e.style["image-rendering"]="-webkit-crisp-edges",e.style["image-rendering"]="pixelated"),this._game.getPixelsRounding()&&(PIXI.settings.ROUND_PIXELS=!0),window.addEventListener("resize",()=>{this._game.onWindowInnerSizeChanged(),this._resizeCanvas()}),e.focus()}static getWindowInnerWidth(){return typeof window!="undefined"?window.innerWidth:800}static getWindowInnerHeight(){return typeof window!="undefined"?window.innerHeight:800}updateRendererSize(){this._resizeCanvas()}_setupOrientation(){if(typeof window=="undefined"||!window.screen||!window.screen.orientation)return;const t=this._game.getGameData().properties.orientation;try{if(t==="default"){const e=window.screen.orientation.unlock();e&&e.catch(()=>{})}else window.screen.orientation.lock(t).catch(()=>{})}catch(e){u.error("Unexpected error while setting up orientation: ",e)}}_resizeCanvas(){if(!this._pixiRenderer||!this._domElementsContainer)return;(this._pixiRenderer.width!==this._game.getGameResolutionWidth()||this._pixiRenderer.height!==this._game.getGameResolutionHeight())&&(this._pixiRenderer.resize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight()),this._threeRenderer&&this._threeRenderer.setSize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight()));const t=this._forceFullscreen||this._isFullPage||this._isFullscreen;let e=this._game.getGameResolutionWidth(),i=this._game.getGameResolutionHeight(),o=window.innerWidth-this._marginLeft-this._marginRight,r=window.innerHeight-this._marginTop-this._marginBottom;if(o<0&&(o=0),r<0&&(r=0),t&&!this._keepRatio)e=o,i=r;else if(t&&this._keepRatio||e>o||i>r){let c=o/e;i*c>r&&(c=r/i),e*=c,i*=c}this._gameCanvas&&(this._gameCanvas.style.top=this._marginTop+(r-i)/2+"px",this._gameCanvas.style.left=this._marginLeft+(o-e)/2+"px",this._gameCanvas.style.width=e+"px",this._gameCanvas.style.height=i+"px"),this._domElementsContainer.style.top=this._marginTop+(r-i)/2+"px",this._domElementsContainer.style.left=this._marginLeft+(o-e)/2+"px",this._domElementsContainer.style.width=e+"px",this._domElementsContainer.style.height=i+"px",this._canvasWidth=e,this._canvasHeight=i}keepAspectRatio(t){this._keepRatio!==t&&(this._keepRatio=t,this._resizeCanvas())}setMargins(t,e,i,o){this._marginTop===t&&this._marginRight===e&&this._marginBottom===i&&this._marginLeft===o||(this._marginTop=t,this._marginRight=e,this._marginBottom=i,this._marginLeft=o,this._resizeCanvas())}setWindowSize(t,e){const i=this.getElectronRemote();if(i){const o=i.getCurrentWindow();if(o)try{o.setContentSize(t,e)}catch(r){u.error(`Window size setting to width ${t} and height ${e} failed. See error:`,r)}}else u.warn("Window size can't be changed on this platform.")}centerWindow(){const t=this.getElectronRemote();if(t){const e=t.getCurrentWindow();if(e)try{e.center()}catch(i){u.error("Window centering failed. See error:",i)}}}setFullScreen(t){if(!this._forceFullscreen&&this._isFullscreen!==t){this._isFullscreen=!!t;const e=this.getElectronRemote();if(e){const i=e.getCurrentWindow();if(i)try{i.setFullScreen(this._isFullscreen)}catch(o){u.error(`Full screen setting to ${this._isFullscreen} failed. See error:`,o)}}else this._isFullscreen?document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen();this._resizeCanvas()}}isFullScreen(){const t=this.getElectronRemote();return t?t.getCurrentWindow().isFullScreen():this._isFullscreen||window.screen.height===window.innerHeight}convertCanvasToDomElementContainerCoords(t,e){const i=e||[0,0];return i[0]=t[0]*this._canvasWidth/this._game.getGameResolutionWidth(),i[1]=t[1]*this._canvasHeight/this._game.getGameResolutionHeight(),i}getCanvasToDomElementContainerHeightScale(){return(this._canvasHeight||1)/this._game.getGameResolutionHeight()}bindStandardEvents(t,e,i){const o=this._gameCanvas;if(!o)return;const r=n=>{const s=[n.pageX-o.offsetLeft,n.pageY-o.offsetTop];return s[0]*=this._game.getGameResolutionWidth()/(this._canvasWidth||1),s[1]*=this._game.getGameResolutionHeight()/(this._canvasHeight||1),s},c=n=>{const s=n.pageX-o.offsetLeft,a=n.pageY-o.offsetTop;return 0<=s&&s<(this._canvasWidth||1)&&0<=a&&a<(this._canvasHeight||1)};(function(){isNaN(o.offsetLeft)&&(o.offsetLeft=0,o.offsetTop=0),isNaN(i.body.scrollLeft)&&(i.body.scrollLeft=0,i.body.scrollTop=0),(i.documentElement===void 0||i.documentElement===null)&&(i.documentElement={}),isNaN(i.documentElement.scrollLeft)&&(i.documentElement.scrollLeft=0,i.documentElement.scrollTop=0),isNaN(o.offsetLeft)&&(o.offsetLeft=0,o.offsetTop=0)})();const g=()=>!(i.activeElement===o||i.activeElement===i.body||i.activeElement===null),d=n=>!(n.target===o||n.target===i.body);i.onkeydown=function(n){g()||(f.includes(n.keyCode)&&n.preventDefault(),t.onKeyPressed(n.keyCode,n.location))},i.onkeyup=function(n){g()||(f.includes(n.keyCode)&&n.preventDefault(),t.onKeyReleased(n.keyCode,n.location))};function m(n){switch(n){case 1:return l.InputManager.MOUSE_MIDDLE_BUTTON;case 2:return l.InputManager.MOUSE_RIGHT_BUTTON}return n}o.onmousemove=function(n){const s=r(n);t.onMouseMove(s[0],s[1])},o.onmousedown=function(n){return t.onMouseButtonPressed(m(n.button)),e.focus!==void 0&&e.focus(),!1},o.onmouseup=function(n){return t.onMouseButtonReleased(m(n.button)),!1},o.onmouseleave=function(n){t.onMouseLeave()},o.onmouseenter=function(n){t.onMouseEnter();const s=[l.InputManager.MOUSE_LEFT_BUTTON,l.InputManager.MOUSE_RIGHT_BUTTON,l.InputManager.MOUSE_MIDDLE_BUTTON,l.InputManager.MOUSE_BACK_BUTTON,l.InputManager.MOUSE_FORWARD_BUTTON];for(let a=0,v=s.length;a<v;++a){const h=s[a],_=(n.buttons&1<<a)!=0,p=t.isMouseButtonPressed(h);_&&!p?t.onMouseButtonPressed(h):!_&&p&&t.onMouseButtonReleased(h)}},e.addEventListener("click",function(n){return e.focus!==void 0&&e.focus(),!1},!1),o.oncontextmenu=function(n){return n.preventDefault(),n.stopPropagation(),!1},o.onwheel=function(n){t.onMouseWheel(-n.deltaY)},e.addEventListener("touchmove",function(n){if(!d(n)&&(n.preventDefault(),n.changedTouches))for(let s=0;s<n.changedTouches.length;++s){const a=r(n.changedTouches[s]);t.onTouchMove(n.changedTouches[s].identifier,a[0],a[1]),t.isSimulatingMouseWithTouch()&&(c(n.changedTouches[s])?t.onMouseEnter():t.onMouseLeave())}},{passive:!1}),e.addEventListener("touchstart",function(n){if(!d(n)){if(n.preventDefault(),n.changedTouches)for(let s=0;s<n.changedTouches.length;++s){const a=r(n.changedTouches[s]);t.onTouchStart(n.changedTouches[s].identifier,a[0],a[1])}return!1}},{passive:!1}),e.addEventListener("touchend",function(n){if(!d(n)){if(n.preventDefault(),n.changedTouches)for(let s=0;s<n.changedTouches.length;++s)t.onTouchEnd(n.changedTouches[s].identifier);return!1}},{passive:!1}),e.addEventListener("touchcancel",function(n){if(!d(n)){if(n.preventDefault(),n.changedTouches)for(let s=0;s<n.changedTouches.length;++s)t.onTouchCancel(n.changedTouches[s].identifier);return!1}},{passive:!1})}setWindowTitle(t){typeof document!="undefined"&&(document.title=t)}getWindowTitle(){return typeof document!="undefined"?document.title:""}startGameLoop(t){let e=0;const i=o=>{this._nextFrameId=requestAnimationFrame(i);const r=e?o-e:0;e=o,t(r)||cancelAnimationFrame(this._nextFrameId)};requestAnimationFrame(i)}getPIXIRenderer(){return this._pixiRenderer}getThreeRenderer(){return this._threeRenderer}getDomElementContainer(){return this._domElementsContainer}openURL(t){if(typeof window!="undefined"){const e=this.getElectron();e?e.shell.openExternal(t):typeof window.cordova!="undefined"&&typeof window.cordova.InAppBrowser!="undefined"?window.cordova.InAppBrowser.open(t,"_system","location=yes"):window.open(t,"_blank")}}stopGame(){const t=this.getElectronRemote();if(t){const e=t.getCurrentWindow();if(e)try{e.close()}catch(i){u.error("Window closing failed. See error:",i)}}else typeof navigator!="undefined"&&navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()}getCanvas(){return this._gameCanvas}isWebGLSupported(){return!!this._pixiRenderer&&this._pixiRenderer.type===PIXI.RENDERER_TYPE.WEBGL}getElectron(){return typeof require=="function"?require("electron"):null}getGame(){return this._game}}l.RuntimeGamePixiRenderer=R,l.RuntimeGameRenderer=R})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map
