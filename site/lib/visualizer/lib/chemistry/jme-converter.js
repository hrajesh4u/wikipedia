define(function(){function a(a){var b=[];b.push("line 1"),b.push(""),b.push("line 3");for(var d=a.split("|"),f=0,g=0,h=[],i=0;i<d.length;i++){var j=d[i],k=j.split(/[ \r\n\t]+/);if(k.length<2)return;f+=parseInt(k[0]),g+=parseInt(k[1]),h.push(k)}f+="",g+="",b.push("   ".substring(0,3-f.length)+f+"   ".substring(0,3-g.length)+g+"  0  0  0  0  0  0  0  0999 V2000");for(var l=0,m=[],n=[],i=0;i<d.length;i++){for(var k=h[i],f=parseInt(k[0]),g=parseInt(k[1]),o=2;f>0;){f--;var p=k[o++],q=k[o++],r=k[o++];m.push(c(p,q,r))}for(;g>0;){g--;var s=1*k[o++],t=1*k[o++],u=k[o++];n.push(e(s+l,t+l,u))}l+=parseInt(k[0])}return b=b.concat(m),b=b.concat(n),b.push("M  END"),b.join("\n")}function b(a){var b=a+"",c=b.indexOf("."),d=5-c,e=5-(b.length-c),f="     ".substring(0,d)+b+"0000".substring(0,e);return f}function c(a,c,e){var f="";return f+=b(c),f+=b(e),f+="    0.0000 ",f+=d(a)}function d(a){var b="",c=a.replace(/^([0-9]*)([^-+]+)(.*)/,"$1"),d=a.replace(/^([0-9]*)([^-+]+)(.*)/,"$2"),e=a.replace(/^([0-9]*)([^-+]+)(.*)/,"$3");if(b+=d+"   ".substring(d.length,3),c){var f=1*c-h[d]+"";b+="  ".substring(f.length,2)+f}else b+=" 0";if(e)switch(e=e.match(/^\+*$/)?e.length:e.match(/^\-*$/)?-e.length:parseInt(e)){case 1:b+="  3";break;case 2:b+="  2";break;case 3:b+="  1";break;case-1:b+="  5";break;case-2:b+="  6";break;case-3:b+="  7"}else b+="  0";return b+="  0  0  0  0  0  0  0  0  0  0"}function e(a,b,c){var d="";switch(a+="",b+="",c=parseInt(c),d="   ".substring(a.length,3)+a+"   ".substring(b.length,3)+b,c){case-1:d+="  1  1";break;case-2:d+="  1  6";break;default:d+="  "+c+"  0"}return d}function f(a,b){var c=(a+"").split(/\n/),d=[],e=parseInt(c[3].substr(0,3)),f=parseInt(c[3].substr(3,3));d.push(e),d.push(f);for(var h=4;e+4>h;h++){{var i,j=c[h],k=parseFloat(j.substr(0,10)).toFixed(2),l=parseFloat(j.substr(10,10)).toFixed(2),m=j.substr(31,3).trim(),n=parseInt(j.substr(34,2).trim()),o=parseInt(j.substr(36,3).trim());parseInt(j.substr(48,3).trim())}i=Array.isArray(b)&&b[h-4]?b[h-4]:g(m,n,o),d.push(i,k,l)}for(var h=e+4;e+f+4>h;h++){var j=c[h],p=parseInt(j.substr(0,3)),q=parseInt(j.substr(3,3)),r=parseInt(j.substr(6,3)),s=parseInt(j.substr(9,3));1==s&&(r=-1),6==s&&(r=-2),d.push(p,q,r)}return d.join(" ")}function g(a,b,c){var d="";switch(0!=b&&(d+=h[a]+b),d+=a,c){case 1:d+="+3";break;case 2:d+="++";break;case 3:d+="+";break;case 5:d+="-";break;case 6:d+="--";break;case 7:d+="-3"}return d}var h={Cs:133,Cu:64,Kr:84,Cl:35,Co:59,Cr:52,Li:7,Cd:112,Ce:140,La:139,Lu:175,Tm:169,Ti:48,Te:128,Dy:162,Ta:181,Mg:24,Tc:98,Tb:159,F:19,Fe:56,B:11,C:12,N:14,O:16,H:1,Eu:152,Mo:96,I:127,Mn:55,K:39,Er:167,W:184,V:51,Ni:59,P:31,S:32,Nd:144,Ne:20,Nb:93,Y:89,Na:23,Ge:73,Gd:157,Ga:70,Yb:173,Pt:195,Pr:141,Hf:178,He:4,Pd:106,Ho:165,Pm:145,Xe:131,Os:190,Se:79,Au:197,Sc:45,In:115,Ar:40,Si:28,As:75,Sn:119,Sm:150,Ba:137,Sr:88,Ir:192,Ru:101,Ag:108,Sb:122,Al:27,Rb:85,Re:186,Rh:103,Br:80,Ca:40,Be:9,Zn:65,Zr:91};return{toJme:f,toMolfile:a}});