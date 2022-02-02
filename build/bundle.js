(()=>{"use strict";var e,t,n={527:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(614),a=n(115),s=n(726);t.default=function(e){const t=r.v4();return a.default({action:"chat-broadcast",data:Object.assign({id:t},e)}),{id:t,onIframeMessage(e){s.default(`iframe-message-for-${t}`,(t=>e(t)))},sendMessage(e){a.default({action:`iframe-message-to-${t}`,data:{data:e,id:t}})}}}},791:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerChatShareButton=void 0;const r=n(856);t.registerChatShareButton=function(e){r.default("chat-register-share-button",e)}},426:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Buttons=t.registerMessageAction=t.broadcast=t.send=t.intercept=t.listen=void 0;const r=n(181);t.listen=r.default;const a=n(588);t.intercept=a.default;const s=n(507);t.send=s.default;const o=n(527);t.broadcast=o.default;const i=n(746);t.registerMessageAction=i.default;const l=n(791);t.Buttons=l},588:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(614),a=n(115),s=n(726);t.default=function(e,t){const n=r.v4();a.default({action:"chat-intercept",data:{id:n,matcher:e.source}}),s.default(`chat-intercepter-${n}`,(e=>t(e)))}},181:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(614),a=n(115),s=n(726);t.default=function(e,t){const n=r.v4();a.default({action:"chat-listen"+((null==t?void 0:t.everyone)?"-everyone":""),data:{id:n}}),s.default(`chat-listener-${(null==t?void 0:t.everyone)?"everyone-":""}${n}`,(t=>e(t)))}},746:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(614),a=n(115),s=n(726);t.default=function({label:e,icon:t,imageSource:n,onClick:o}){const i=r.v4();a.default({action:"chat-register-message-action",data:{label:e,icon:t,imageSource:n,id:i}}),s.default(`chat-register-message-action-${i}`,(e=>{e.update=t=>{a.default({action:`chat-register-message-action-update-${e.id}`,data:t})},o(e)}))}},507:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(614),a=n(115),s=n(726);t.default=function(e){const t=r.v4();return a.default({action:"chat-send",data:Object.assign({id:t},e)}),{id:t,destroy(){a.default({action:`chat-delete-${t}`,data:Object.assign({id:t},e)})},onIframeMessage(e){s.default(`iframe-message-for-${t}`,(t=>e(t)))},sendMessage(e){a.default({action:`iframe-message-to-${t}`,data:{data:e,id:t}})}}}},472:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showIframe=void 0;const r=n(180);t.showIframe=function(e){return r.default("modal-show-iframe",{template:e.template,variables:e.variables,onMessage:e.onMessage},{size:e.size})}},645:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showIframe=void 0;const r=n(614),a=n(115),s=n(42);t.showIframe=function(e,t){a.default({action:"notification-center-show-iframe",data:{template:s.default(e,t),id:r.v4()}})}},287:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.subscribe=t.publish=void 0;const r=n(220);t.publish=r.default;const a=n(687);t.subscribe=a.default},220:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(115);t.default=function(e,t){r.default({action:"publish-event",data:Object.assign({eventName:e},t)})}},687:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(115),a=n(726);t.default=function(e,t){a.default(e,(e=>t(e))),r.default({action:"subscribe-event",data:{eventName:e}})}},743:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(726),a=n(672);t.default=function(e){r.default("register",(t=>{a.default.set(t),e()}))}},803:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerPanel=void 0;const r=n(180);t.registerPanel=function(e){return r.default("settings-register-event-panel",e)}},641:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.Event=void 0;const r=n(803);t.Event=r;const a=n(936);t.register=a.default},936:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(726),a=n(672);t.default=function(e){r.default("settings-register",(t=>{a.default.set(t),e()}))}},698:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerStageButton=t.registerShareButton=void 0;const r=n(115),a=n(42),s=n(726),o=n(856);t.registerShareButton=function(e){o.default("register-share-button",e)},t.registerStageButton=function(e){const{iframe:t}=e,n=o.default("register-stage-button",Object.assign(Object.assign({},e),{iframe:t?{width:t.width,height:t.height,template:a.default(t.template,t.variables)}:void 0}));return s.default(`iframe-message-for-${n}`,(e=>t.onMessage(e))),{remove(){r.default({action:"register-stage-button-remove",data:{id:n}})}}}},880:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Buttons=void 0;const r=n(698);t.Buttons=r},407:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getItem=t.setItem=void 0;const a=n(672);function s(e="event"){return"event"===e?a.default.eventTypeId:"session"===e?a.default.sessionId:"organization"===e?a.default.organizationId:a.default.eventTypeId}t.setItem=function(e,t,n={scope:"event"}){return r(this,void 0,void 0,(function*(){const{organizationId:r,pluginId:o,pluginHost:i}=a.default;return yield fetch(`${i}/api/v1/storage_keys`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:e,value:t,organization_id:r,session_id:s(n.scope),plugin_id:o})})}))},t.getItem=function(e,t={scope:"event"}){return r(this,void 0,void 0,(function*(){const{organizationId:n,pluginId:r,pluginHost:o}=a.default,i=yield fetch(`${o}/api/v1/storage_keys?organization_id=${n}&session_id=${s(t.scope)}&plugin_id=${r}&key=${e}`),l=yield i.json();return l.storageKey?l.storageKey.value:null}))}},142:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.registerCameraEffectButton=void 0;const a=n(856),s=n(726);t.registerCameraEffectButton=function(e){var{onUpload:t}=e,n=r(e,["onUpload"]);const o=a.default("register-camera-effect-button",n);"upload"===n.type&&s.default(`register-camera-effect-button-upload-${o}`,(e=>t(e)))}},731:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Buttons=t.registerMultipleCameraEffects=t.registerCameraEffect=t.addStream=void 0;const r=n(614),a=n(115),s=n(42),o=n(726),i=e=>({sendMessage(t){a.default({action:"camera-effect-wrapper-send-message",data:{data:t,id:e}})}});t.addStream=function(e){return new Promise((t=>{const n=r.v4();var i;o.default(`stream-message-for-${n}`,(t=>e.onMessage(t))),a.default({action:"add-stream",data:{template:s.default(e.template,e.variables),id:n,title:e.title,imageUrl:e.imageUrl}}),t((i=n,{update(e){a.default({action:"update-stream",data:{template:s.default(e.template,e.variables),id:i}})},destroy(){a.default({action:"remove-stream",data:{id:i}})}}))}))},t.registerCameraEffect=function(e){const t=r.v4();return a.default({action:"stream-register-camera-effect",data:{label:e.label,imageUrl:e.imageUrl,disabled:!!e.disabled,template:s.default(e.template,e.variables),immediateApply:e.immediateApply,source:e.source,id:t}}),i(t)},t.registerMultipleCameraEffects=function(e){const t=r.v4();return e.effects.forEach((n=>{const o=r.v4();a.default({action:"stream-register-camera-effect",data:{label:n.label,imageUrl:n.imageUrl,disabled:!!e.disabled,template:s.default(e.template,n.variables),variables:n.variables,isMultiple:!0,batchId:t,id:o}})})),i(t)},t.Buttons=n(142)},473:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setBackground=void 0;const r=n(115);t.setBackground=function({hue:e,saturation:t}){r.default({action:"theme-set-background",data:{hue:e,saturation:t}})}},559:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.everyone=t.teamMembers=t.me=void 0;const r=n(783);t.me=function(){return new Promise((e=>{r.default({action:"users-me",callback:({users:t})=>e(t)})}))},t.teamMembers=function(){return new Promise((e=>{r.default({action:"users-team-members",callback:({users:t})=>e(t)})}))},t.everyone=function(){return new Promise((e=>{r.default({action:"users-everyone",callback:({users:t})=>e(t)})}))}},437:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.userLeaves=t.userJoins=t.eventStarts=t.eventEnds=void 0;const r=n(783);t.eventEnds=function(e){r.default({action:"event-ends",listener:"event-ends-listener",callback:e})},t.eventStarts=function(e){r.default({action:"event-starts",listener:"event-starts-listener",callback:e})},t.userJoins=function(e){r.default({action:"user-joins",callback:e})},t.userLeaves=function(e){r.default({action:"user-leaves",callback:e})}},604:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.Settings=t.When=t.Users=t.Theme=t.Streams=t.Storage=t.Stage=t.PubSub=t.Modal=t.NotificationCenter=t.Chat=t.Configuration=void 0;const r=n(287);t.PubSub=r;const a=n(426);t.Chat=a;const s=n(731);t.Streams=s;const o=n(880);t.Stage=o;const i=n(473);t.Theme=i;const l=n(641);t.Settings=l;const c=n(645);t.NotificationCenter=c;const d=n(407);t.Storage=d;const u=n(559);t.Users=u;const f=n(472);t.Modal=f;const p=n(672);t.Configuration=p.default;const g=n(437);t.When=g;const m=n(743);t.register=m.default},672:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n{static set(e){for(const t in e)this[t]=e[t]}}t.default=n,n.url="*"},248:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(604);a(n(604),t),t.default=s},180:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(614),a=n(115),s=n(726),o=n(42);t.default=function(e,t,n={}){return new Promise((i=>{const l=r.v4();var c;s.default(`iframe-message-for-${l}`,(e=>t.onMessage(e))),a.default({action:e,data:Object.assign({template:o.default(t.template,t.variables||{}),id:l},n)}),i((c=l,{sendMessage(e){a.default({action:`iframe-message-to-${c}`,data:{data:e,id:c}})}}))}))}},856:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});const a=n(614),s=n(115),o=n(726);t.default=function(e,t){var{onClick:n}=t,i=r(t,["onClick"]);const l=a.v4();return s.default({action:e,data:Object.assign(Object.assign({},i),{id:l})}),o.default(`${e}-${l}`,(e=>n(e))),l}},42:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t={}){let n;try{n=`<script type="text/javascript">window.__VARIABLES__ = ${JSON.stringify(t)}<\/script>`}catch(e){throw new Error("The variables could not been injected: "+e)}return`${n}\n${e.replace(/({{)([0-9a-zA-Z-\s]+)(}})/g,((e,n,r)=>{const a=r.trim(),s=a in t?t[a]:"";if("object"==typeof s)try{return JSON.stringify(s)}catch(e){throw new Error(`The variable "${a}" could not been replaced in the template: ${e}`)}return String(s)}))}`}},115:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(672);t.default=function(e){const t=Object.assign({pluginName:r.default.pluginName},e);parent.postMessage(JSON.stringify(t),"*")}},783:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(614),a=n(115),s=n(726);t.default=function({action:e,listener:t,callback:n}){const o=r.v4();a.default({action:e,data:{id:o}}),s.default(`${t||e}-${o}`,(e=>n(e)))}},726:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){window.addEventListener("message",(n=>{n.data.eventName===e&&t(n.data.data||n.data)}))}},297:(e,t,n)=>{n.d(t,{Z:()=>r});const r='<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <link rel="preconnect" href="https://fonts.googleapis.com">\r\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r\n    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">\r\n  <style>\r\n\r\n\r\n    button {\r\n  margin-right: 15px;\r\n}\r\n   .container1{\r\n      height: 550px;\r\n      width: 800px;\r\n    }\r\n    body{\r\n      position: fixed;\r\n    }\r\n    .row1{\r\n      height: 520px;\r\n      width: 790px;\r\n    }\r\n    *{\r\n        font-family: \'Inter\', sans-serif;\r\n      }\r\n      .close-button{\r\n        display:none;\r\n      }\r\n    div,\r\n    html,\r\n    body,\r\n    section {\r\n      margin: 0px; \r\n   \r\n    }\r\n    #main-text{\r\n        margin-top: 5px;\r\n        margin-bottom: 5px;\r\n    }\r\n    .style{\r\n     margin-bottom: 10px;\r\n     min-height: 150px;\r\n     background-color: pink;\r\n     text-align: center;\r\n     font-size: large;\r\n     margin-top: 10px;\r\n    }\r\n\r\n    .inner-code{\r\n        display: flex;\r\n    }\r\n    .button{\r\n      margin-left:90px;\r\n      padding-top: 5px;\r\n      display: flex;\r\n    }\r\n    #sk{\r\n        margin: 10px;\r\n    }\r\n    #share{\r\n        font-size:25px;\r\n    }\r\n    .logo{\r\n      width: 853px;\r\n      margin-left: 20px;\r\n      margin-top: 10px;\r\n      margin-bottom: 10px;\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n    .ls-tooltip{\r\n      margin-left: 20px;\r\n    }\r\n    #k{\r\n      margin-left: 90px;\r\n      margin-top: 0px;\r\n    }\r\n    .pub{\r\n        margin-left: 75%;\r\n    }\r\n    \r\n    img{\r\n      border-radius: 50%;\r\n    }\r\n\r\n\r\n  </style>\r\n <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/livestorm/livestorm-plugin/dist/assets/css/style.css">\r\n  <title>chat1</title>\r\n</head>\r\n</html>\r\n<body>\r\n<div class="container, container1">\r\n  <div class="row row1">\r\n    <div class="col-md-12 col-sm-6 col-xs-3">\r\n    <div class="logo">\r\n      <img height="70px" src="https://livestorm-ireland-plugin-assets.s3-eu-west-1.amazonaws.com/cccbe280-e13b-4322-b029-2efca20d706f/Un.png">\r\n      <div class="ls-tooltip" >\r\n          <div class="inner-text">\r\n        <p class="ls-text-32-semibold" id="share">Share your code</p>\r\n        <p id="main-text">To Share code as message click Send...<br>To Colllaborate Code click Publish...</p>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n     \r\n    <div>\r\n      <textarea id="code"  placeholder="Enter your </Code>...."class="text , area k" rows="14" style="margin: 0px 0px 0px 110px; height: 405px; width: 760px;"></textarea>\r\n  </div>\r\n    <div class="button">\r\n      <div class="row">\r\n      <div class="col-sm-6" id="sk">\r\n        \r\n       </div>\r\n      </div>\r\n        <button onclick="closemodal()" class="ls-button ls-button-tertiary">\r\n        <div class="ls-button-wrapper">\r\n          Cancel\r\n        </div>\r\n       </button>\r\n        <button onclick="sendmessage()" class="ls-button ls-button-primary">\r\n          <div class="ls-button-wrapper">\r\n            Send\r\n          </div>\r\n       </button>\r\n       <button onclick="publishmessage()" class="ls-button ls-button-green-primary pub">\r\n          <div class="ls-button-wrapper ">\r\n            Publish\r\n          </div>\r\n       </button>\r\n    </div>\r\n   </div>\r\n  </div>\r\n</div>\r\n\r\n  <script\r\n    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"\r\n    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"\r\n    crossorigin="anonymous"\r\n  ><\/script>\r\n  <script>\r\n    var textareas = document.getElementsByTagName(\'textarea\');\r\nvar count = textareas.length;\r\nfor(var i=0;i<count;i++){\r\n    textareas[i].onkeydown = function(e){\r\n        if(e.keyCode==9 || e.which==9){\r\n            e.preventDefault();\r\n            var s = this.selectionStart;\r\n            this.value = this.value.substring(0,this.selectionStart) + "\\t" + this.value.substring(this.selectionEnd);\r\n            this.selectionEnd = s+1; \r\n        }\r\n    }\r\n}\r\nfunction publishmessage(){\r\n  const message =document.getElementById(\'code\').value\r\n  var a = {"message": `${message}` ,"change":"registered"}\r\n  postMessage(a)\r\n  closeModal();\r\n}\r\nfunction closemodal(){\r\n  closeModal();\r\n}\r\nfunction sendmessage(){\r\n  const message =document.getElementById(\'code\').value\r\n  if( message !== \'\' ){\r\n  postMessage({"message": `${message}`, "change":"no"});\r\n  closeModal();}\r\n} <\/script>\r\n</body>\r\n</html>\r\n'},445:(e,t,n)=>{n.d(t,{Z:()=>r});const r='<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n<link rel="preconnect" href="https://fonts.googleapis.com">\r\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r\n    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">\r\n  <style>\r\n\r\n    *{\r\n        font-family: \'Inter\', sans-serif;\r\n      }\r\n    button {\r\n      margin-right: 15px;\r\n    }\r\n   .container1{\r\n      height: 550px;\r\n      width: 800px;\r\n    }\r\n    body{\r\n      position: fixed;\r\n    }\r\n    .row1{\r\n      height: 520px;\r\n      width: 790px;\r\n    }\r\n    div,\r\n    html,\r\n    body,\r\n    section {\r\n      margin: 0px; /*to get rid of irregular spaces*/\r\n   \r\n    }\r\n    #main-text{\r\n        margin-top: 5px;\r\n        margin-bottom: 5px;\r\n    }\r\n    .style{\r\n     margin-bottom: 10px;\r\n     min-height: 150px;\r\n     background-color: pink;\r\n     text-align: center;\r\n     font-size: large;\r\n     margin-top: 10px;\r\n    }   \r\n    .inner-code{\r\n        display: flex;\r\n    }\r\n    .button{\r\n      margin-left:90px;\r\n      padding-top: 5px;\r\n      display: flex;\r\n    }\r\n    #sk{\r\n      margin: 10px;\r\n    }\r\n    #share{\r\n        font-size:25px;\r\n    }\r\n    .logo{\r\n      width: 853px;\r\n      margin-left: 20px;\r\n      margin-top: 10px;\r\n      margin-bottom: 10px;\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n    .ls-tooltip{\r\n      margin-left: 20px;\r\n    }\r\n    #k{\r\n      margin-left: 90px;\r\n      margin-top: 0px;\r\n    }\r\n    .pub{\r\n        margin-left: 75%;\r\n    }\r\n    \r\n    img{\r\n      border-radius: 50%;\r\n    }\r\n\r\n\r\n  </style>\r\n <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/livestorm/livestorm-plugin/dist/assets/css/style.css">\r\n\r\n\r\n  <title>chat1</title>\r\n</head>\r\n</html>\r\n<body>\r\n<div class="container, container1">\r\n  <div class="row row1">\r\n    <div class="col-md-12 col-sm-6 col-xs-3">\r\n    <div class="logo">\r\n      <img height="70px" src="https://livestorm-ireland-plugin-assets.s3-eu-west-1.amazonaws.com/cccbe280-e13b-4322-b029-2efca20d706f/Un.png">\r\n      <div class="ls-tooltip" >\r\n          <div class="inner-text">\r\n        <p class="ls-text-32-semibold" id="share">Share your code</p>\r\n        <p id="main-text">This code is sharing between all attendees...</p>\r\n      </div>\r\n        \x3c!-- <span class="ls-tooltip-text ls-tooltip-top">.ls-text-32-semibold</span> --\x3e\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n     \r\n    <div>\r\n      <textarea id="code1" onchange="publishmessage()" placeholder="Enter your </Code>...."class="text , area k" rows="14" style="margin: 0px 0px 0px 110px; height: 405px; width: 760px;">{{ content }}</textarea>\r\n  </div>\r\n    <div class="button">\r\n      <div class="row">\r\n      <div class="col-sm-6" id="sk">\r\n        \r\n       </div>\r\n      </div>\r\n        <button onclick="closemodal()" class="ls-button ls-button-tertiary">\r\n        <div class="ls-button-wrapper">\r\n          Cancel\r\n        </div>\r\n       </button>\r\n        <button onclick="sendmessage()" class="ls-button ls-button-primary">\r\n          <div class="ls-button-wrapper">\r\n            Send\r\n          </div>\r\n       </button>\r\n    </div>\r\n   </div>\r\n  </div>\r\n</div>\r\n\r\n  <script\r\n    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"\r\n    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"\r\n    crossorigin="anonymous"\r\n  ><\/script>\r\n  <script>\r\n    var textareas = document.getElementsByTagName(\'textarea\');\r\nvar count = textareas.length;\r\nfor(var i=0;i<count;i++){\r\n    textareas[i].onkeydown = function(e){\r\n        if(e.keyCode==9 || e.which==9){\r\n            e.preventDefault();\r\n            var s = this.selectionStart;\r\n            this.value = this.value.substring(0,this.selectionStart) + "\\t" + this.value.substring(this.selectionEnd);\r\n            this.selectionEnd = s+1; \r\n        }\r\n    }\r\n}\r\n\r\nfunction closemodal(){\r\n  closeModal();\r\n}\r\n\r\nfunction sendmessage(){\r\n  const message =document.getElementById(\'code1\').value\r\n  if( message !== \'\' ){\r\n  postMessage({"message": `${message}`, "change":"no"});\r\n  closeModal();}\r\n}\r\nfunction publishmessage(){\r\n  \r\n  const message =document.getElementById(\'code1\').value\r\n  postMessage({"message": `${message}`, "change":"yes"})\r\n\r\n}\r\n\r\nwindow.addEventListener(\'message\', (message)=> {\r\n  document.getElementById(\'code1\').value= `${message.data.data.message}`\r\n\r\n  })\r\n  <\/script>\r\n</body>\r\n</html>\r\n'},614:(e,t,n)=>{var r;n.r(t),n.d(t,{NIL:()=>C,parse:()=>v,stringify:()=>d,v1:()=>m,v3:()=>j,v4:()=>P,v5:()=>I,validate:()=>i,version:()=>E});var a=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(e){return"string"==typeof e&&o.test(e)};for(var l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));const d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var u,f,p=0,g=0;const m=function(e,t,n){var r=t&&n||0,a=t||new Array(16),o=(e=e||{}).node||u,i=void 0!==e.clockseq?e.clockseq:f;if(null==o||null==i){var l=e.random||(e.rng||s)();null==o&&(o=u=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==i&&(i=f=16383&(l[6]<<8|l[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:g+1,v=c-p+(m-g)/1e4;if(v<0&&void 0===e.clockseq&&(i=i+1&16383),(v<0||c>p)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=c,g=m,f=i;var h=(1e4*(268435455&(c+=122192928e5))+m)%4294967296;a[r++]=h>>>24&255,a[r++]=h>>>16&255,a[r++]=h>>>8&255,a[r++]=255&h;var b=c/4294967296*1e4&268435455;a[r++]=b>>>8&255,a[r++]=255&b,a[r++]=b>>>24&15|16,a[r++]=b>>>16&255,a[r++]=i>>>8|128,a[r++]=255&i;for(var y=0;y<6;++y)a[r+y]=o[y];return t||d(a)},v=function(e){if(!i(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function h(e,t,n){function r(e,r,a,s){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=v(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+e.length);if(o.set(r),o.set(e,r.length),(o=n(o))[6]=15&o[6]|t,o[8]=63&o[8]|128,a){s=s||0;for(var i=0;i<16;++i)a[s+i]=o[i];return a}return d(o)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function b(e){return 14+(e+64>>>9<<4)+1}function y(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function x(e,t,n,r,a,s){return y((o=y(y(t,e),y(r,s)))<<(i=a)|o>>>32-i,n);var o,i}function w(e,t,n,r,a,s,o){return x(t&n|~t&r,e,t,a,s,o)}function _(e,t,n,r,a,s,o){return x(t&r|n&~r,e,t,a,s,o)}function O(e,t,n,r,a,s,o){return x(t^n^r,e,t,a,s,o)}function M(e,t,n,r,a,s,o){return x(n^(t|~r),e,t,a,s,o)}const j=h("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r="0123456789abcdef",a=0;a<n;a+=8){var s=e[a>>5]>>>a%32&255,o=parseInt(r.charAt(s>>>4&15)+r.charAt(15&s),16);t.push(o)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[b(t)-1]=t;for(var n=1732584193,r=-271733879,a=-1732584194,s=271733878,o=0;o<e.length;o+=16){var i=n,l=r,c=a,d=s;n=w(n,r,a,s,e[o],7,-680876936),s=w(s,n,r,a,e[o+1],12,-389564586),a=w(a,s,n,r,e[o+2],17,606105819),r=w(r,a,s,n,e[o+3],22,-1044525330),n=w(n,r,a,s,e[o+4],7,-176418897),s=w(s,n,r,a,e[o+5],12,1200080426),a=w(a,s,n,r,e[o+6],17,-1473231341),r=w(r,a,s,n,e[o+7],22,-45705983),n=w(n,r,a,s,e[o+8],7,1770035416),s=w(s,n,r,a,e[o+9],12,-1958414417),a=w(a,s,n,r,e[o+10],17,-42063),r=w(r,a,s,n,e[o+11],22,-1990404162),n=w(n,r,a,s,e[o+12],7,1804603682),s=w(s,n,r,a,e[o+13],12,-40341101),a=w(a,s,n,r,e[o+14],17,-1502002290),n=_(n,r=w(r,a,s,n,e[o+15],22,1236535329),a,s,e[o+1],5,-165796510),s=_(s,n,r,a,e[o+6],9,-1069501632),a=_(a,s,n,r,e[o+11],14,643717713),r=_(r,a,s,n,e[o],20,-373897302),n=_(n,r,a,s,e[o+5],5,-701558691),s=_(s,n,r,a,e[o+10],9,38016083),a=_(a,s,n,r,e[o+15],14,-660478335),r=_(r,a,s,n,e[o+4],20,-405537848),n=_(n,r,a,s,e[o+9],5,568446438),s=_(s,n,r,a,e[o+14],9,-1019803690),a=_(a,s,n,r,e[o+3],14,-187363961),r=_(r,a,s,n,e[o+8],20,1163531501),n=_(n,r,a,s,e[o+13],5,-1444681467),s=_(s,n,r,a,e[o+2],9,-51403784),a=_(a,s,n,r,e[o+7],14,1735328473),n=O(n,r=_(r,a,s,n,e[o+12],20,-1926607734),a,s,e[o+5],4,-378558),s=O(s,n,r,a,e[o+8],11,-2022574463),a=O(a,s,n,r,e[o+11],16,1839030562),r=O(r,a,s,n,e[o+14],23,-35309556),n=O(n,r,a,s,e[o+1],4,-1530992060),s=O(s,n,r,a,e[o+4],11,1272893353),a=O(a,s,n,r,e[o+7],16,-155497632),r=O(r,a,s,n,e[o+10],23,-1094730640),n=O(n,r,a,s,e[o+13],4,681279174),s=O(s,n,r,a,e[o],11,-358537222),a=O(a,s,n,r,e[o+3],16,-722521979),r=O(r,a,s,n,e[o+6],23,76029189),n=O(n,r,a,s,e[o+9],4,-640364487),s=O(s,n,r,a,e[o+12],11,-421815835),a=O(a,s,n,r,e[o+15],16,530742520),n=M(n,r=O(r,a,s,n,e[o+2],23,-995338651),a,s,e[o],6,-198630844),s=M(s,n,r,a,e[o+7],10,1126891415),a=M(a,s,n,r,e[o+14],15,-1416354905),r=M(r,a,s,n,e[o+5],21,-57434055),n=M(n,r,a,s,e[o+12],6,1700485571),s=M(s,n,r,a,e[o+3],10,-1894986606),a=M(a,s,n,r,e[o+10],15,-1051523),r=M(r,a,s,n,e[o+1],21,-2054922799),n=M(n,r,a,s,e[o+8],6,1873313359),s=M(s,n,r,a,e[o+15],10,-30611744),a=M(a,s,n,r,e[o+6],15,-1560198380),r=M(r,a,s,n,e[o+13],21,1309151649),n=M(n,r,a,s,e[o+4],6,-145523070),s=M(s,n,r,a,e[o+11],10,-1120210379),a=M(a,s,n,r,e[o+2],15,718787259),r=M(r,a,s,n,e[o+9],21,-343485551),n=y(n,i),r=y(r,l),a=y(a,c),s=y(s,d)}return[n,r,a,s]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(b(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))})),P=function(e,t,n){var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return d(r)};function S(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function k(e,t){return e<<t|e>>>32-t}const I=h("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var a=0;a<r.length;++a)e.push(r.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var s=e.length/4+2,o=Math.ceil(s/16),i=new Array(o),l=0;l<o;++l){for(var c=new Uint32Array(16),d=0;d<16;++d)c[d]=e[64*l+4*d]<<24|e[64*l+4*d+1]<<16|e[64*l+4*d+2]<<8|e[64*l+4*d+3];i[l]=c}i[o-1][14]=8*(e.length-1)/Math.pow(2,32),i[o-1][14]=Math.floor(i[o-1][14]),i[o-1][15]=8*(e.length-1)&4294967295;for(var u=0;u<o;++u){for(var f=new Uint32Array(80),p=0;p<16;++p)f[p]=i[u][p];for(var g=16;g<80;++g)f[g]=k(f[g-3]^f[g-8]^f[g-14]^f[g-16],1);for(var m=n[0],v=n[1],h=n[2],b=n[3],y=n[4],x=0;x<80;++x){var w=Math.floor(x/20),_=k(m,5)+S(w,v,h,b)+y+t[w]+f[x]>>>0;y=b,b=h,h=k(v,30)>>>0,v=m,m=_}n[0]=n[0]+m>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+h>>>0,n[3]=n[3]+b>>>0,n[4]=n[4]+y>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),C="00000000-0000-0000-0000-000000000000",E=function(e){if(!i(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}},r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e].call(t.exports,t,t.exports,a),t.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=a(248),t=function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},a.n(e)().register((function(){e.Stage.Buttons.registerShareButton({label:"Live-Code",imageSource:"https://yt3.ggpht.com/ytc/AKedOLRn7y2EFXPcZB4Bndc0X38tS81O0O0v8iRgD0iu=s900-c-k-c0x00ffffff-no-rj",onClick:()=>e.Modal.showIframe({template:a(297).Z,variables:{abc:"abc"},onMessage:({message:n,change:r})=>t(this,void 0,void 0,(function*(){yield e.Storage.setItem("key",`${n}`),"registered"!=r?e.Chat.broadcast({text:`${n}`}):function(t){e.PubSub.publish("show-modal",{data:{content:`${t}`}})}(n)})),size:"extraLarge"})}),e.PubSub.subscribe("show-modal",(n=>t(this,void 0,void 0,(function*(){const t=yield e.Modal.showIframe({template:a(445).Z,variables:{content:`${n.content}`},onMessage:({message:t,change:n})=>{"no"==n?e.Chat.broadcast({text:`${t}`}):e.PubSub.publish("modal-change",{data:{message:`${t}`}})},size:"extraLarge"});e.PubSub.subscribe("modal-change",(e=>t.sendMessage(e)))}))))}))})();