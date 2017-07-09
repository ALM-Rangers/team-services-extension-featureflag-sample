define(["q"],function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=17)}([function(e,t,n){function r(e){return s.btoa(unescape(encodeURIComponent(e)))}function o(e){return r(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function i(e){return JSON.parse(JSON.stringify(e))}function a(e,t){var n={};if(!e||!t)return{};for(var r in e)e.hasOwnProperty(r)&&t[r]!==e[r]&&(n[r]={previous:e[r],current:t[r]});return n}var s=n(4);e.exports={btoa:r,base64URLEncode:o,clone:i,modifications:a}},function(t,n){t.exports=e},function(e,t,n){var r,o;r=[n,t,n(3),n(1)],void 0!==(o=function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.envId="590348c958ed570a3af8a496"}return e.init=function(t){var o=this,i=r.defer();return this.instance||(this.instance=new e,this.hashUserKey(t,!0).then(function(e){o.instance.ldClient=n.initialize(o.instance.envId,t,{hash:e}),o.instance.ldClient.on("change",function(e){o.setFlags()}),o.user=t,i.resolve(o.instance)})),i.promise},e.setFlags=function(){this.flags=this.instance.ldClient.allFlags()},e.updateFlag=function(e,t){this.flags[e]=t},e.trackEvent=function(e){this.instance.ldClient.track(e)},e.hashUserKey=function(e,t){var n=r.defer();return t?$.ajax({url:this.UriHashKey,contentType:"application/json; charset=UTF-8",type:"POST",dataType:"json",headers:{"Access-Control-Allow-Origin":"*"},data:"{'userkey':'"+e.key+"'}",success:function(e){n.resolve(e)}}):n.resolve(e.key),n.promise},e.updateUserFeature=function(e,t,n){var o=r.defer();return e?$.ajax({url:this.UriUpdateFlagUser,contentType:"application/json; charset=UTF-8",type:"POST",dataType:"json",headers:{"Access-Control-Allow-Origin":"*"},data:"{'userkey':'"+e.key+"', 'active':"+t+", 'feature' : '"+n+"' }",success:function(e){o.resolve(e)}}):o.resolve(e.key),o.promise},e}();o.UriHashKey="https://vstsextcrypto.azurewebsites.net/api/GetHashKey?code=aqi3cVQPaTfQaT0dBaQoJ0k/LiVlZVmQU4FRHpgbKPHbHIuZ9y4eoA==",o.UriUpdateFlagUser="https://vstsextcrypto.azurewebsites.net/api/UpdateUserFeature?code=erZlsJHBh9u/bwO1ZCO4czrvzqMA9XpUJjV6a9wHuMM1ajwprmcOKw==",t.LaunchDarklyService=o}.apply(t,r))&&(e.exports=o)},function(e,t,n){function r(e){w.enqueue({kind:"identify",key:e.key,user:e,creationDate:(new Date).getTime()})}function o(e,t,n){var r=T.getUser(),o=JSON.stringify(t)+(r&&r.key?r.key:"")+e,i=new Date,a=z[o];a&&i-a<3e5||(z[o]=i,w.enqueue({kind:"feature",key:e,user:r,value:t,default:n,creationDate:i.getTime()}))}function i(e,t){var n={kind:e,key:t.key,data:null,url:window.location.href,creationDate:(new Date).getTime()};return"click"===e&&(n.selector=t.selector),w.enqueue(n)}function a(e,t,n){T.setUser(e),k.fetchFlagSettings(T.getUser(),t,function(e,t){e&&console.warn("Error fetching flag settings: ",e),t&&p(t),n&&n()})}function s(e,t){var n;return n=M&&M.hasOwnProperty(e)?null===M[e]?t:M[e]:t,o(e,n,t),n}function c(){var e={};if(!M)return e;for(var t in M)M.hasOwnProperty(t)&&(e[t]=s(t,null));return e}function u(e){if(!O||0===O.length)return!1;for(var t=0;t<O.length;t++)if("custom"===O[t].kind&&O[t].key===e)return!0;return!1}function l(e,t){if("string"!=typeof e)throw F.invalidKey();O&&!u(e)&&console.warn(F.unknownCustomEventKey(e)),w.enqueue({kind:"custom",key:e,data:t,url:window.location.href,creationDate:(new Date).getTime()})}function f(){b.connect(function(){k.fetchFlagSettings(T.getUser(),S,function(e,t){e&&console.warn("Error fetching flag settings: ",e),p(t)})})}function p(e){var t,n;e&&(t=D.modifications(M,e),n=Object.keys(t),M=e,A&&localStorage.setItem(y(m,T.getUser()),JSON.stringify(M)),n.length>0&&(n.forEach(function(e){x.emit(H+":"+e,t[e].current,t[e].previous)}),x.emit(H,t),n.forEach(function(e){o(e,t[e].current)})))}function d(e,t,n){e.substr(0,H.length)===H?(b.isConnected()||f(),x.on.apply(x,[e,t,n])):x.on.apply(x,Array.prototype.slice.call(arguments))}function g(){x.off.apply(x,Array.prototype.slice.call(arguments))}function h(e){if(e.origin===E&&"SYN"===e.data.type){window.editorClientBaseUrl=E;var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=E+e.data.editorClientUrl;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}function y(e,t){var n="";return t&&t.key&&(n=t.key),"ld:"+e+":"+n}function v(e,t,n){function o(){setTimeout(function e(){w.flush(T.getUser()),setTimeout(e,V)},V)}function a(){U&&U.dispose(),O&&O.length&&(U=N(O,i))}var s;if(n=n||{},m=e,M="object"==typeof n.bootstrap?n.bootstrap:{},S=n.hash,E=n.baseUrl||"https://app.launchdarkly.com",C=n.eventsUrl||"https://events.launchdarkly.com",I=n.streamUrl||"https://clientstream.launchdarkly.com",b=_(I,m),w=L(C+"/a/"+m+".gif"),x=j(),T=P(t,r),k=q(E,m),s=y(m,T.getUser()),"object"==typeof n.bootstrap)setTimeout(function(){x.emit(R)},0);else if("string"==typeof n.bootstrap&&"LOCALSTORAGE"===n.bootstrap.toUpperCase()&&"undefined"!=typeof Storage){A=!0;try{M=JSON.parse(localStorage.getItem(s))}catch(e){localStorage.setItem(s,null)}null===M?k.fetchFlagSettings(T.getUser(),S,function(e,t){e&&console.warn("Error fetching flag settings: ",e),M=t,t&&localStorage.setItem(s,JSON.stringify(M)),x.emit(R)}):(setTimeout(function(){x.emit(R)},0),k.fetchFlagSettings(T.getUser(),S,function(e,t){e&&console.warn("Error fetching flag settings: ",e),t&&localStorage.setItem(s,JSON.stringify(t))}))}else k.fetchFlagSettings(T.getUser(),S,function(e,t){e&&console.warn("Error fetching flag settings: ",e),M=t,x.emit(R)});return k.fetchGoals(function(e,t){e&&console.warn("Error fetching goals: ",e),t&&t.length>0&&(O=t,U=N(O,i))}),"complete"!==document.readyState?window.addEventListener("load",o):o(),window.addEventListener("beforeunload",function(){w.flush(T.getUser(),!0)}),O&&O.length>0&&(window.history&&history.pushState?window.addEventListener("popstate",a):window.addEventListener("hashchange",a)),window.addEventListener("message",h),J}var m,w,k,b,x,S,T,E,C,I,U,A,O,L=n(7),j=n(6),N=n(8),_=n(11),q=n(10),P=n(9),D=n(0),F=n(12),M={},R="ready",H="change",V=2e3,z={},J={identify:a,variation:s,track:l,on:d,off:g,allFlags:c};e.exports={initialize:v},"undefined"!=typeof VERSION&&(e.exports.version=VERSION)},function(e,t,n){!function(){function e(e){this.message=e}var n=t,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.prototype=new Error,e.prototype.name="InvalidCharacterError",n.btoa||(n.btoa=function(t){for(var n,o,i=String(t),a=0,s=r,c="";i.charAt(0|a)||(s="=",a%1);c+=s.charAt(63&n>>8-a%1*8)){if((o=i.charCodeAt(a+=.75))>255)throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|o}return c}),n.atob||(n.atob=function(t){var n=String(t).replace(/=+$/,"");if(n.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,i,a=0,s=0,c="";i=n.charAt(s++);~i&&(o=a%4?64*o+i:i,a++%4)?c+=String.fromCharCode(255&o>>(-2*a&6)):0)i=r.indexOf(i);return c})}()},function(e,t,n){"use strict";var r=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(r,"\\$&")}},function(e,t){function n(){var e={},t={};return e.on=function(e,n,r){t[e]=t[e]||[],t[e]=t[e].concat({handler:n,context:r})},e.off=function(e,n,r){if(t[e])for(var o=0;o<t[e].length;o++)t[e][o].handler===n&&t[e][o].context===r&&(t[e]=t[e].slice(0,o).concat(t[e].slice(o+1)))},e.emit=function(e){if(t[e])for(var n=0;n<t[e].length;n++)t[e][n].handler.apply(t[e][n].context,Array.prototype.slice.call(arguments,1))},e}e.exports=n},function(e,t,n){function r(e){var t={},n=[],r=!0;return t.enqueue=function(e){n.push(e)},t.flush=function(i,a){var s=2e3-e.length,c=[];if(!i)return r&&console&&console.warn&&console.warn("Be sure to call `identify` in the LaunchDarkly client: http://docs.launchdarkly.com/docs/running-an-ab-test#include-the-client-side-snippet"),!1;for(r=!1;s>0&&n.length>0;){var u=n.pop();u.user=i,s-=o.base64URLEncode(JSON.stringify(u)).length,s<0&&c.length>0?n.push(u):c.push(u)}if(c.length>0){var l=e+"?d="+o.base64URLEncode(JSON.stringify(c));if("withCredentials"in new XMLHttpRequest){var f=new XMLHttpRequest;f.open("GET",l,!a),f.send()}else{(new Image).src=l}}return n.length>0&&(a?t.flush(i,a):setTimeout(function(){t.flush(i)},0)),!1},t}var o=n(0);e.exports=r},function(e,t,n){function r(e,t,n,r){var o,i,s=t.replace(n,"").replace(r,"");switch(e.kind){case"exact":i=t,o=new RegExp("^"+a(e.url)+"/?$");break;case"canonical":i=s,o=new RegExp("^"+a(e.url)+"/?$");break;case"substring":i=s,o=new RegExp(".*"+a(e.substring)+".*$");break;case"regex":i=s,o=new RegExp(e.pattern);break;default:return!1}return o.test(i)}function o(e,t){for(var n=[],r=0;r<t.length;r++)for(var o=e.target,i=t[r],a=i.selector,s=document.querySelectorAll(a);o&&s.length>0;){for(var c=0;c<s.length;c++)o===s[c]&&n.push(i);o=o.parentNode}return n}function i(e,t){for(var n={},e=e,i=null,a=[],s=0;s<e.length;s++)for(var c=e[s],u=c.urls||[],l=0;l<u.length;l++)if(r(u[l],location.href,location.search,location.hash)){"pageview"===c.kind?t("pageview",c):(a.push(c),t("click_pageview",c));break}return a.length>0&&(i=function(e){for(var n=o(e,a),r=0;r<n.length;r++)t("click",n[r])},document.addEventListener("click",i)),n.dispose=function(){document.removeEventListener("click",i)},n}var a=n(5);e.exports=i},function(e,t,n){function r(e){var t=i.clone(e);return t.key&&(t.key=t.key.toString()),t}function o(e,t){var n,o={};return o.setUser=function(e){n=r(e),t(i.clone(n))},o.getUser=function(){return i.clone(n)},e&&o.setUser(e),o}var i=n(0);e.exports=o},function(e,t,n){function r(e,t){var n=new XMLHttpRequest;return n.addEventListener("load",function(){200===n.status&&n.getResponseHeader("Content-type")===c?t(null,JSON.parse(n.responseText)):t(n.statusText)}),n.addEventListener("error",function(){t(n.statusText)}),n.open("GET",e),n.send(),n}function o(e,t){var n={};return n.fetchFlagSettings=function(n,o,c){var u,l=s.base64URLEncode(JSON.stringify(n)),f=[e,"/sdk/eval/",t,"/users/",l,o?"?h="+o:""].join(""),p=function(e){return function(){e.apply(null,arguments),i=null,a=null}}(c);i?(i.abort(),u=function(e){return function(){e&&e.apply(null,arguments),p.apply(null,arguments)}}(a)):u=p,a=u,i=r(f,u)},n.fetchGoals=function(n){r([e,"/sdk/goals/",t].join(""),n)},n}var i,a,s=n(0),c="application/json";e.exports=o},function(e,t){function n(e,t){var n={},e=e+"/ping/"+t,r=null;return n.connect=function(t){"undefined"!=typeof EventSource&&(r=new window.EventSource(e),r.addEventListener("ping",t))},n.disconnect=function(){r&&r.close()},n.isConnected=function(){return r&&(r.readyState===EventSource.OPEN||r.readyState===EventSource.CONNECTING)},n}e.exports=n},function(e,t){e.exports={invalidKey:function(){return"Event key must be a string"},unknownCustomEventKey:function(e){return'Custom event "'+e+'" does not exist'}}},function(e,t,n){var r,o;r=[n,t,n(15)],void 0!==(o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.disableTelemetry="false",this.disableAjaxTracking="false",this.enableDebug="false"}return e}();t.TelemetryClientSettings=r;var o=function(){function e(){this.IsAvailable=!0}return e.getClient=function(t){return this._instance||(console.log("Creating new TelemetryClient!"),this._instance=new e,this._instance.Init(t)),this._instance},e.prototype.Init=function(e){console.log("TelemetryClient settings key: "+e.key.substring(0,8)+"************"),console.log("TelemetryClient settings extension context: "+e.extensioncontext),console.log("TelemetryClient settings disableTelemetry: "+("true"===e.disableTelemetry)),console.log("TelemetryClient settings disableAjaxTracking: "+("true"===e.disableAjaxTracking)),console.log("TelemetryClient settings enableDebug: "+("true"===e.enableDebug));var t={instrumentationKey:e.key,disableTelemetry:"true"===e.disableTelemetry,disableAjaxTracking:"true"===e.disableAjaxTracking,enableDebug:"true"===e.enableDebug};this.ExtensionContext=e.extensioncontext;try{var r=VSS.getWebContext();n.AppInsights.downloadAndSetup(t),n.AppInsights.setAuthenticatedUserContext(r.user.id,r.collection.id)}catch(e){console.log(e)}},e.prototype.trackPageView=function(e,t,r,o,i){try{n.AppInsights.trackPageView(this.ExtensionContext+"."+e,t,r,o,i),n.AppInsights.flush()}catch(e){console.log(e)}},e.prototype.trackEvent=function(e,t,r){try{console.log("Tracking event: "+this.ExtensionContext+"."+e),n.AppInsights.trackEvent(this.ExtensionContext+"."+e,t,r),n.AppInsights.flush()}catch(e){console.log(e)}},e.prototype.trackException=function(e,t,r,o){try{console.error(e);var i={name:this.ExtensionContext+"."+t,message:e};n.AppInsights.trackException(i,t,r,o),n.AppInsights.flush()}catch(e){console.log(e)}},e.prototype.trackMetric=function(e,t,r,o,i,a){try{n.AppInsights.trackMetric(this.ExtensionContext+"."+e,t,r,o,i,a),n.AppInsights.flush()}catch(e){console.log(e)}},e}();t.TelemetryClient=o}.apply(t,r))&&(e.exports=o)},function(e,t,n){var r,o;r=[n,t],void 0!==(o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.settings={key:"21100e97-0b88-48ea-a1bb-efa840af423a",extensioncontext:"ffsample",disableTelemetry:"false",disableAjaxTracking:"false",enableDebug:"false"}}.apply(t,r))&&(e.exports=o)},function(e,t,n){var r,o;r=[n,t],void 0!==(o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e._createLazyMethod=function(t){var n=window[e.appInsightsName];n[t]=function(){var e=arguments;n.queue?n.queue.push(function(){return n[t].apply(n,e)}):n[t].apply(n,e)}},e._defineLazyMethods=function(){var t=window[e.appInsightsName];try{t.cookie=document.cookie}catch(e){}t.queue=[];for(var n=["clearAuthenticatedUserContext","flush","setAuthenticatedUserContext","startTrackEvent","startTrackPage","stopTrackEvent","stopTrackPage","trackDependency","trackEvent","trackException","trackMetric","trackPageView","trackTrace"];n.length;)e._createLazyMethod(n.pop())},e._download=function(t){e.appInsightsInstance.config=t;var n=window[e.appInsightsName];if(n.queue||(n.queue=[]),setTimeout(function(){var e=document.createElement("script");e.src=t.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",document.head.appendChild(e)}),!t.disableExceptionTracking){e._createLazyMethod("_onerror");var r=window.onerror;window.onerror=function(e,t,o,i,a){var s=r&&r(e,t,o,i,a);return!0!==s&&n._onerror(e,t,o,i,a),s}}},Object.defineProperty(e,"appInsightsInstance",{get:function(){return window[e.appInsightsName]||(window[e.appInsightsName]={downloadAndSetup:e._download,_defineLazyMethods:e._defineLazyMethods},e._defineLazyMethods()),window[e.appInsightsName]},enumerable:!0,configurable:!0}),e}();n.appInsightsInitialized=!1,n.appInsightsName="appInsights",t.AppInsights=n.appInsightsInstance}.apply(t,r))&&(e.exports=o)},,function(e,t,n){var r,o;r=[n,t,n(13),n(14),n(2)],void 0!==(o=function(e,t,n,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),VSS.require(["TFS/Dashboards/WidgetHelpers","TFS/WorkItemTracking/RestClient"],function(e,t){e.IncludeWidgetStyles();var i=VSS.getWebContext(),a={key:i.account.name+":"+i.user.email};o.LaunchDarklyService.init(a).then(function(i){i.ldClient.on("ready",function(){VSS.register("widgetId",function(){o.LaunchDarklyService.setFlags();var i=VSS.getWebContext().project.id,a=function(e){o.LaunchDarklyService.flags["display-logs"]&&console.log(e)},s=function(n){var r=JSON.parse(n.customSettings.data);if(!r||!r.queryPath){var o=$("#query-info-container");return o.empty(),o.text("Sorry nothing to show, please configure a query path"),a("Sorry nothing to show, please configure a query path"),e.WidgetStatusHelper.Success()}return t.getClient().getQuery(i,r.queryPath).then(function(t){var n=$("<ul>");n.append($("<li>").text("Query Id: "+t.id)),a("Query :"+t.id+"-"+t.name),n.append($("<li>").text("Query Name: "+t.name)),n.append($("<li>").text("Created By: "+(t.createdBy?t.createdBy.displayName:"<unknown>")));var r=$("#query-info-container");return r.empty(),r.append(n),e.WidgetStatusHelper.Success()},function(t){return e.WidgetStatusHelper.Failure(t.message)})};return{load:function(e){return o.LaunchDarklyService.flags["enable-telemetry"]?n.TelemetryClient.getClient(r.settings).trackPageView("widgetId.Index"):console.log("The Telemetry is disabled for your account"),$("h2.title").text(e.name),s(e)},reload:function(e){return $("h2.title").text(e.name),s(e)}}}),VSS.notifyLoadSucceeded()})})})}.apply(t,r))&&(e.exports=o)}])});