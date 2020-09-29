webpackJsonp([4],{1177:function(e,t,n){"use strict";var a=n(7),r=n(0);t.__esModule=!0,t.default=t.formatCode=void 0;var l=r(n(3)),o=r(n(17)),i=a(n(1178)),s=(r(n(2)),r(n(1)));n(1179),n(1180),n(1181),n(1182),n(1183),n(1184);var c=r(n(1185)),u={bash:function(e){return void 0===e&&(e=""),e.replace(/^[\w]/gm,"$$  $&")},json:function(e){return e},js:function(e){return void 0===e&&(e=""),e},jsx:function(e){return void 0===e&&(e=""),e},html:function(e){return void 0===e&&(e=""),e}},d=function(e,t){return e?(0,u[t])((n=e,Array.isArray(n)?n.join("\n"):(0,o.default)(n)?JSON.stringify(n,null,2):n)).replace(/\n$/,""):"";var n};t.formatCode=d;var p=s.default.memo(function(e){var t=e.className,n=e.copyable,a=void 0===n||n,r=e.fitted,o=e.formattable,u=void 0===o||o,p=e.label,m=e.mode,f=void 0===m?"jsx":m,g=e.value,h="language-"+f,v=u?d(g,f):g,b=s.default.useRef(null);return s.default.useLayoutEffect(function(){i.highlightElement(b.current)}),s.default.createElement("div",{className:t,style:(0,l.default)({fontSize:"12px",position:"relative"},e.style)},s.default.createElement(c.default,{copyable:a,label:p,mode:f,value:v}),s.default.createElement("pre",{style:{margin:r?"0":void 0}},s.default.createElement("code",{className:h,ref:b},v)))});p.handledProps=["className","copyable","fitted","formattable","label","mode","style","value"],p.propTypes={};var m=p;t.default=m},1178:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,l,o=a.util.type(t);switch(n=n||{},o){case"Object":if(l=a.util.objId(t),n[l])return n[l];for(var i in r={},n[l]=r,t)t.hasOwnProperty(i)&&(r[i]=e(t[i],n));return r;case"Array":return l=a.util.objId(t),n[l]?n[l]:(r=[],n[l]=r,t.forEach(function(t,a){r[a]=e(t,n)}),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var l=(r=r||a.languages)[e],o={};for(var i in l)if(l.hasOwnProperty(i)){if(i==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);n.hasOwnProperty(i)||(o[i]=l[i])}var c=r[e];return r[e]=o,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,l){l=l||{};var o=a.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],r||i);var s=t[i],c=a.util.type(s);"Object"!==c||l[o(s)]?"Array"!==c||l[o(s)]||(l[o(s)]=!0,e(s,n,i,l)):(l[o(s)]=!0,e(s,n,null,l))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var l,o=0;l=r.elements[o++];)a.highlightElement(l,!0===t,r.callback)},highlightElement:function(n,r,l){var o=a.util.getLanguage(n),i=a.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var s=n.parentNode;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:i,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),l&&l.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(l&&l.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var l={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",l),l.tokens=a.tokenize(l.code,l.grammar),a.hooks.run("after-tokenize",l),r.stringify(a.util.encode(l.tokens),l.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var s in n)t[s]=n[s];delete t.rest}var c=new l;return o(c,c.head,e),function e(t,n,l,s,c,u,d){for(var p in l)if(l.hasOwnProperty(p)&&l[p]){var m=l[p];m=Array.isArray(m)?m:[m];for(var f=0;f<m.length;++f){if(d&&d==p+","+f)return;var g=m[f],h=g.inside,v=!!g.lookbehind,b=!!g.greedy,E=0,y=g.alias;if(b&&!g.pattern.global){var S=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,S+"g")}g=g.pattern||g;for(var k=s.next,w=c;k!==n.tail;w+=k.value.length,k=k.next){var A=k.value;if(n.length>t.length)return;if(!(A instanceof r)){var x=1;if(b&&k!=n.tail.prev){g.lastIndex=w;var _=g.exec(t);if(!_)break;var T=_.index+(v&&_[1]?_[1].length:0),P=_.index+_[0].length,I=w;for(I+=k.value.length;T>=I;)k=k.next,I+=k.value.length;if(I-=k.value.length,w=I,k.value instanceof r)continue;for(var C=k;C!==n.tail&&(I<P||"string"==typeof C.value&&!C.prev.value.greedy);C=C.next)x++,I+=C.value.length;x--,A=t.slice(w,I),_.index-=w}else{g.lastIndex=0;var _=g.exec(A)}if(_){v&&(E=_[1]?_[1].length:0);var T=_.index+E,_=_[0].slice(E),P=T+_.length,D=A.slice(0,T),F=A.slice(P),O=k.prev;D&&(O=o(n,O,D),w+=D.length),i(n,O,x);var R=new r(p,h?a.tokenize(_,h):_,y,_,b);if(k=o(n,O,R),F&&o(n,k,F),x>1&&e(t,n,l,k.prev,w,!0,p+","+f),u)break}else if(u)break}}}}}(e,c,t,c.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,l=0;r=n[l++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function i(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach(function(t){r+=e(t,n)}),r}var l={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(l.classes,o):l.classes.push(o)),a.hooks.run("wrap",l);var i="";for(var s in l.attributes)i+=" "+s+'="'+(l.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+i+">"+l.content+"</"+l.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),r=n.language,l=n.code,o=n.immediateClose;e.postMessage(a.highlight(l,a.languages[r],r)),o&&e.close()},!1),a):a;var s=a.util.currentScript();function c(){a.manual||a.highlightAll()}if(s&&(a.filename=s.src,s.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&s&&s.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});void 0!==e&&e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n)}).call(t,n(22))},1179:function(e,t){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*\/~^%]/,punctuation:/[{}[\];(),.:]/}},1180:function(e,t){Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(?:e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}}},1181:function(e,t){Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",r)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup},1182:function(e,t){!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,lookbehind:!0,greedy:!0,inside:n}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=n.variable[1].inside,l=0;l<a.length;l++)r[a[l]]=e.languages.bash[a[l]];e.languages.shell=e.languages.bash}(Prism)},1183:function(e,t){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*\/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript},1184:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(n).join(""):""},a=function(t){for(var r=[],l=0;l<t.length;l++){var o=t[l],i=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===n(o.content[0].content[1])&&r.pop():"/>"===o.content[o.content.length-1].content||r.push({tagName:n(o.content[0].content[1]),openedBraces:0}):r.length>0&&"punctuation"===o.type&&"{"===o.content?r[r.length-1].openedBraces++:r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?r[r.length-1].openedBraces--:i=!0),(i||"string"==typeof o)&&r.length>0&&0===r[r.length-1].openedBraces){var s=n(o);l<t.length-1&&("string"==typeof t[l+1]||"plain-text"===t[l+1].type)&&(s+=n(t[l+1]),t.splice(l+1,1)),l>0&&("string"==typeof t[l-1]||"plain-text"===t[l-1].type)&&(s=n(t[l-1])+s,t.splice(l-1,1),l--),t[l]=new e.Token("plain-text",s,null,s)}o.content&&"string"!=typeof o.content&&a(o.content)}};e.hooks.add("after-tokenize",function(e){"jsx"!==e.language&&"tsx"!==e.language||a(e.tokens)})}(Prism)},1185:function(e,t,n){"use strict";var a=n(7),r=n(0);t.__esModule=!0,t.default=void 0;r(n(2));var l=a(n(1)),o=n(994),i=l.createElement("svg",{style:{height:".7rem",width:"0.7rem"},viewBox:"0 0 512 512"},l.createElement("path",{fill:"currentColor",d:"M461.6,109.6l-54.9-43.3c-1.7-1.4-3.8-2.4-6.2-2.4c-2.4,0-4.6,1-6.3,2.5L194.5,323c0,0-78.5-75.5-80.7-77.7  c-2.2-2.2-5.1-5.9-9.5-5.9c-4.4,0-6.4,3.1-8.7,5.4c-1.7,1.8-29.7,31.2-43.5,45.8c-0.8,0.9-1.3,1.4-2,2.1c-1.2,1.7-2,3.6-2,5.7  c0,2.2,0.8,4,2,5.7l2.8,2.6c0,0,139.3,133.8,141.6,136.1c2.3,2.3,5.1,5.2,9.2,5.2c4,0,7.3-4.3,9.2-6.2L462,121.8  c1.2-1.7,2-3.6,2-5.8C464,113.5,463,111.4,461.6,109.6z"})),s=l.createElement("svg",{style:{height:".7rem",width:"0.7rem"},viewBox:"0 0 16 16"},l.createElement("path",{d:"M2,0v1v2H0v13h13v-2h2h1V1V0H3H2z M15,1v12h-2V3H3V1H15z",fill:"currentColor "})),c=function(e){var t=e.copyable,n=e.label,a=e.mode,r=e.value,c=!1!==n,u=(0,o.useCopyToClipboard)(r),d=u[0],p=u[1];return c&&l.createElement("div",{onClick:t?p:void 0,style:{border:"1px solid #ccc",color:"#ccc",cursor:t?"pointer":"default",display:"flex",fontSize:"0.8rem",fontFamily:"monospace",lineHeight:1,padding:"0.2rem 0.35rem",position:"absolute",right:"0.8rem",top:"0.8rem",zIndex:100},title:t?"Copy":void 0},l.createElement("div",null,n||a),t&&l.createElement("div",{style:{marginLeft:"5px"}},d?i:s))};c.handledProps=["copyable","label","mode","value"],c.propTypes={};var u=c;t.default=u},1186:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},398:function(e,t,n){"use strict";var a=n(0);t.__esModule=!0,t.default=void 0;a(n(2));var r=a(n(1)),l=n(117),o=n(116),i=a(n(993)),s=a(n(996)),c=a(n(414)),u=n(187),d=function(e){var t=e.jsx,n=e.html;return r.default.createElement(o.Segment,{inverted:!0,style:{backgroundColor:"#2d2d2d"}},r.default.createElement(o.Grid,{columns:"equal",centered:!0,textAlign:"left"},r.default.createElement(o.Grid.Column,{computer:"8",largeScreen:"7",widescreen:"7"},r.default.createElement(o.Label,{color:"grey",size:"tiny",attached:"top left"},"JSX"),r.default.createElement(i.default,{fitted:!0,label:!1,mode:"jsx",value:t})),r.default.createElement(o.Grid.Column,{largeScreen:"2",only:"large screen",textAlign:"center"},r.default.createElement(o.Divider,{vertical:!0},r.default.createElement(o.Icon,{inverted:!0,name:"right arrow circle"}))),r.default.createElement(o.Grid.Column,{computer:"8",largeScreen:"7",widescreen:"7"},r.default.createElement(o.Label,{color:"grey",size:"tiny",attached:"top right"},"Rendered HTML"),r.default.createElement(i.default,{fitted:!0,label:!1,mode:"html",value:n}))))};d.handledProps=["html","jsx"],d.propTypes={};var p=function(e){var t=e.pkg,n=e.title;return r.default.createElement(s.default,{additionalTitle:"Introduction",title:n},r.default.createElement(o.Container,{id:"introduction-page"},r.default.createElement(o.Segment,{basic:!0,textAlign:"center"},r.default.createElement(c.default,{centered:!0,size:"small"}),r.default.createElement(o.Header,{as:"h1",textAlign:"center"},"Semantic UI React",r.default.createElement(o.Header.Subheader,null,t.description))),r.default.createElement(o.Segment,{basic:!0,padded:!0},r.default.createElement(o.Header,{as:"h2",dividing:!0},"Introduction"),r.default.createElement("p",null,"Semantic UI React is the official React integration for"," ",r.default.createElement("a",{href:u.semanticUIDocsURL},"Semantic UI")," ."),r.default.createElement(o.List,null,r.default.createElement(o.List.Item,{icon:"check",content:"jQuery Free"}),r.default.createElement(o.List.Item,{icon:"check",content:"Declarative API"}),r.default.createElement(o.List.Item,{icon:"check",content:"Augmentation"}),r.default.createElement(o.List.Item,{icon:"check",content:"Shorthand Props"}),r.default.createElement(o.List.Item,{icon:"check",content:"Sub Components"}),r.default.createElement(o.List.Item,{icon:"check",content:"Auto Controlled State"})),r.default.createElement("p",null,"Installation instructions are provided in the ",r.default.createElement(l.Link,{to:"/usage"},"Usage")," section.")),r.default.createElement(o.Segment,{basic:!0,padded:!0},r.default.createElement(o.Header,{as:"h2",dividing:!0},"jQuery Free"),r.default.createElement("p",null,"jQuery is a DOM manipulation library. It reads from and writes to the DOM. React uses a virtual DOM (a JavaScript representation of the real DOM). React only ",r.default.createElement("em",null,"writes")," ","patch updates to the DOM, but ",r.default.createElement("em",null,"never reads")," from it."),r.default.createElement("p",null,"It is not feasible to keep real DOM manipulations in sync with React's virtual DOM. Because of this, all jQuery functionality has been re-implemented in React.")),r.default.createElement(o.Segment,{basic:!0,padded:!0},r.default.createElement(o.Header,{as:"h2",dividing:!0},"Declarative API"),r.default.createElement("p",null,"Declarative APIs provide for robust features and prop validation."),r.default.createElement(d,{jsx:"<Rating rating={1} maxRating={5} />",html:'<div\n  class="ui rating"\n  data-rating="1"\n  data-max-rating="5"\n></div>'}),r.default.createElement(d,{jsx:"<Button size='small' color='green'>\n  <Icon name='download' />\n  Download\n</Button>",html:'<button class="ui small green button">\n  <i class="download icon"></i>\n  Download\n</button>'})),r.default.createElement(o.Segment,{basic:!0,padded:!0},r.default.createElement(o.Header,{as:"h2",dividing:!0},"Augmentation"),r.default.createElement("p",null,"Control the rendered HTML tag, or render one component ",r.default.createElement("code",null,"as")," another component. Extra props are passed to the component you are rendering ",r.default.createElement("code",null,"as"),"."),r.default.createElement("p",null,"Augmentation is powerful. You can compose component features and props without adding extra nested components. This is essential for working with ",r.default.createElement("code",null,"MenuLinks")," and"," ",r.default.createElement("code",null,"react-router"),"."),r.default.createElement(d,{jsx:"<Header as='h3'>\n  Learn More\n</Header>",html:'<h3 class="ui header">\n  Learn More\n</h3>'}),r.default.createElement(d,{jsx:"import { Link } from 'react-router-dom'\n\n<Menu>\n  <Menu.Item as={Link} to='/home'>\n    Home\n  </Menu.Item>\n</Menu>",html:'<div class="ui menu">\n  <a class="item" href="/home">\n    Home\n  </a>\n</div>'})),r.default.createElement(o.Segment,{basic:!0,padded:!0},r.default.createElement(o.Header,{as:"h2",dividing:!0},"Shorthand Props"),r.default.createElement("p",null,"Shorthand props generate markup for you, making many use cases a breeze. All object props are spread on the child components."),r.default.createElement(o.Header,{as:"h3"},"Child Object Arrays"),r.default.createElement("p",null,"Components with repeating children accept arrays of plain objects.",r.default.createElement("a",{href:"https://facebook.github.io/react/docs/context.html#parent-child-coupling",target:"_blank",rel:"noopener noreferrer"}," Facebook is fond of this "),"over using context to handle parent-child coupling and so are we."),r.default.createElement(d,{jsx:"<Accordion panels={[\n  { title: 'What is a dog?', content: '...' },\n  { title: 'What kinds are there?', content: '...' },\n]} />",html:'<div class="ui accordion">\n  <div class="title">\n    <i class="dropdown icon"></i>\n    What is a dog?\n  </div>\n  <div class="content">\n    <p>...</p>\n  </div>\n  <div class="title">\n    <i class="dropdown icon"></i>\n    What kinds are there?\n  </div>\n  <div class="content">\n    <p>...</p>\n  </div>\n</div>'}),r.default.createElement(o.Header,{as:"h3"},"icon={...}"),r.default.createElement("p",null,"The ",r.default.createElement("code",null,"icon")," prop is standard for many components. It can accept an Icon"," ",r.default.createElement("code",null,"name"),", an Icon props object, or an ",r.default.createElement("code",null,"<Icon />")," instance."),r.default.createElement(d,{jsx:"<Message\n  success\n  icon='thumbs up'\n  header='Nice job!'\n  content='Your profile is complete.'\n/>",html:'<div class="ui success message">\n  <i class="thumbs up icon"></i>\n  <div class="content">\n    <div class="header">\n      Nice job!\n    </div>\n    Your profile is complete.\n  </div>\n</div>'}),r.default.createElement(o.Header,{as:"h3"},"image={...}"),r.default.createElement("p",null,"The ",r.default.createElement("code",null,"image")," prop is standard for many components. It can accept an image"," ",r.default.createElement("code",null,"src"),", an Image props object, or an ",r.default.createElement("code",null,"<Image />")," instance."),r.default.createElement(d,{jsx:"<Label image='veronika.jpg' />",html:'<div class="ui image label">\n  <img src="veronika.jpg">\n</div>'})),r.default.createElement(o.Segment,{basic:!0,padded:!0},r.default.createElement(o.Header,{as:"h2",dividing:!0},"Sub Components"),r.default.createElement("p",null,"Sub components give you complete access to the markup. This is essential for flexibility in customizing components."),r.default.createElement(d,{jsx:"<Message icon>\n  <Icon name='circle notched' loading />\n  <Message.Content>\n    <Message.Header>\n      Just one second\n    </Message.Header>\n    We're fetching that content for you.\n  </Message.Content>\n</Message>",html:'<div class="ui icon message">\n  <i class="loading circle notched icon"></i>\n  <div class="content">\n    <div class="header">\n      Just one second\n    </div>\n    We\'re fetching that content for you.\n  </div>\n</div>'})),r.default.createElement(o.Segment,{basic:!0,padded:!0},r.default.createElement(o.Header,{as:"h2",dividing:!0},"Auto Controlled State"),r.default.createElement("p",null,"React has the concept of",r.default.createElement("a",{href:"https://facebook.github.io/react/docs/forms.html",target:"_blank",rel:"noopener noreferrer"}," controlled and uncontrolled "),"components."),r.default.createElement("p",null,"Our stateful components self manage their state out of the box, without wiring. Dropdowns open on click without wiring ",r.default.createElement("code",null,"onClick")," to the ",r.default.createElement("code",null,"open")," prop. The value is also stored internally, without wiring ",r.default.createElement("code",null,"onChange")," to ",r.default.createElement("code",null,"value"),"."),r.default.createElement("p",null,"If you add a ",r.default.createElement("code",null,"value")," prop or an ",r.default.createElement("code",null,"open")," prop, the Dropdown delegates control for that one prop to your value. The other props remain auto controlled. Mix and match any number of controlled and uncontrolled props. Add and remove control at any time by adding or removing props. Everything just works."),r.default.createElement("p",null,"Take a look at our",r.default.createElement("a",{href:u.repoURL+"/blob/master/src/lib/AutoControlledComponent.js"}," ",r.default.createElement("code",null,"AutoControlledComponent")," "),"to see how this was done. See the docs try it out live."),r.default.createElement(o.Divider,{hidden:!0,section:!0}),r.default.createElement(o.Divider,{hidden:!0,section:!0}),r.default.createElement(o.Divider,{hidden:!0,section:!0}))))};p.handledProps=["pkg","title"],p.propTypes={};var m=(0,l.withSiteData)(p);t.default=m},982:function(e,t,n){"use strict";var a=n(1186),r={"text/plain":"Text","text/html":"Url",default:"Text"},l="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,o,i,s,c,u,d=!1;t||(t={}),n=t.debug||!1;try{if(i=a(),s=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),void 0===a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=r[t.format]||r.default;window.clipboardData.setData(l,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))}),document.body.appendChild(u),s.selectNodeContents(u),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(a){n&&console.error("unable to copy using execCommand: ",a),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(a){n&&console.error("unable to copy using clipboardData: ",a),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:l),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),u&&document.body.removeChild(u),i()}return d}},993:function(e,t,n){"use strict";var a=n(0);t.__esModule=!0,t.default=void 0;var r=a(n(1)),l=a(n(1177)),o=a(n(995)),i=function(e){return r.default.createElement(o.default,null,r.default.createElement(l.default,e))};i.handledProps=[];var s=i;t.default=s},994:function(e,t,n){"use strict";var a=n(0);t.__esModule=!0,t.default=t.CopyToClipboard=t.useCopyToClipboard=void 0;var r=a(n(982)),l=a(n(2)),o=a(n(1)),i=function(e,t){void 0===t&&(t=3e3);var n=o.default.useState(!1),a=n[0],l=n[1];return[a,o.default.useCallback(function(){(0,r.default)("function"==typeof e?e():e),l(!0);var n=setTimeout(function(){return l(!1)},t);return function(){return clearTimeout(n)}},[t,e])]};t.useCopyToClipboard=i;var s=function(e){var t=e.children,n=e.timeout,a=e.value,r=i(a,n);return t(r[0],r[1])};t.CopyToClipboard=s,s.propTypes={children:l.default.func.isRequired,timeout:l.default.number,value:l.default.string.isRequired},s.defaultProps={timeout:3e3};var c=s;t.default=c},995:function(e,t,n){"use strict";var a=n(0);t.__esModule=!0,t.default=void 0;var r=a(n(1)),l=a(n(2)),o=function(e){var t=r.default.useState(!1),n=t[0],a=t[1];return r.default.useEffect(function(){a(!0)},[]),n?e.children:e.fallback};o.propTypes={children:l.default.node.isRequired,fallback:l.default.node},o.defaultProps={defer:!1,fallback:null};var i=o;t.default=i},996:function(e,t,n){"use strict";var a=n(7),r=n(0);t.__esModule=!0,t.default=void 0;var l=r(n(3)),o=r(n(6)),i=r(n(958)),s=(r(n(2)),a(n(1))),c=n(117),u=n(116),d=r(n(399)),p=n(187),m=n(4),f=new i.default({icon:"#"}),g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).resetPage=function(){var e=t.props.location;t.pathname!==e.pathname&&(clearTimeout(t.scrollStartTimeout),(0,m.isBrowser)()&&window.scrollTo(0,0),f.add("h2, h3, h4, h5, h6"),f.remove([1,2,3,4,5,6].map(function(e){return".rendered-example h"+e}).join(", ")),f.remove(".no-anchor"),t.scrollStartTimeout=setTimeout(p.scrollToAnchor,500),t.pathname=e.pathname)},t}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.resetPage()},n.componentDidUpdate=function(){this.resetPage()},n.componentWillUnmount=function(){clearTimeout(this.scrollStartTimeout)},n.render=function(){var e=this.props,t=e.additionalTitle,n=e.children,a=e.sidebar,r=e.title,o=a?{computer:11,largeScreen:12,widescreen:12}:{width:16},i=a?d.default.sidebarMain:d.default.main;return s.default.createElement(s.default.Fragment,null,s.default.createElement(c.Head,null,s.default.createElement("title",null,t?t+" - ":"",r)),s.default.createElement("div",{style:i},n,s.default.createElement(u.Grid,null,s.default.createElement(u.Grid.Column,(0,l.default)({},o,{textAlign:"center"}),"Blazing deployments by"," ",s.default.createElement("a",{href:"https://vercel.com/?utm_source=semantic-ui-react"},s.default.createElement("img",{height:"12",width:"14",src:"/vercel-logo.svg"})," Vercel"),"."))))},t}(s.Component);g.handledProps=["additionalTitle","children","location","sidebar","title"],g.propTypes={};var h=(0,c.withRouter)(g);t.default=h}});