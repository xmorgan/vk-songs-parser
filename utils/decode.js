// taken from https://vk.com/js/cmodules/web/audioplayer.js
export default function(r,n){function t(r){if(!r||r.length%4==1)return!1;for(var n,t,i=0,o=0,f="";t=r.charAt(o++);)~(t=e.indexOf(t))&&(n=i%4?64*n+t:t,i++%4)&&(f+=String.fromCharCode(255&n>>(-2*i&6)));return f}function i(r,n){var t=r.length,i=[];if(t){var e=t;for(n=Math.abs(n);e--;)n=(t*(e+1)^n+e)%t,i[e]=n}return i}var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=",o={v:function(r){return r.split("").reverse().join("")},r:function(r,n){r=r.split("");for(var t,i=e+e,o=r.length;o--;)~(t=i.indexOf(r[o]))&&(r[o]=i.substr(t-n,1));return r.join("")},s:function(r,n){var t=r.length;if(t){var e=i(r,n),o=0;for(r=r.split("");++o<t;)r[o]=r.splice(e[t-1-o],1,r[o])[0];r=r.join("")}return r},i:function(r,t){return o.s(r,t^n)},x:function(r,n){var t=[];return n=n.charCodeAt(0),each(r.split(""),function(r,i){t.push(String.fromCharCode(i.charCodeAt(0)^n))}),t.join("")}};return function(r){if(r&&~r.indexOf("audio_api_unavailable")){var n=r.split("?extra=")[1].split("#"),i=""===n[1]?"":t(n[1]);if(n=t(n[0]),"string"!=typeof i||!n)return r;for(var e,f,u=(i=i?i.split(String.fromCharCode(9)):[]).length;u--;){if(f=i[u].split(String.fromCharCode(11)),e=f.splice(0,1,n)[0],!o[e])return r;n=o[e].apply(null,f)}if(n&&"http"===n.substr(0,4))return n}return r}(r)};