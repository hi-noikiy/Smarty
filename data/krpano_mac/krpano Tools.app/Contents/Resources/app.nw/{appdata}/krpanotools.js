var krpanotools={};(function(){function s(e){return e}var e=krpanotools;e.get_krpanotools_basepath=function(){return t},e.get_krpanotools_filepath=function(){return n},e.get_krpanotools_version=function(){return r},e.umode=null;var t=null,n=null,r=null,i=null;e.connect=function(e){function m(e){fatalerror(e)}function g(t){i=t,i.sendCommandSync("connect:"+process.pid,function(t,n){t.indexOf("version:")==0&&(r=t.slice(8)),e&&e()})}var s=require("os"),o=require("path"),u=require("fs"),a=(s.platform()+s.type()+process.platform).toLowerCase(),f=a.indexOf("darwin")>=0||a.indexOf("mac")>=0,l=!f&&a.indexOf("freebsd")>=0||a.indexOf("linux")>=0,c=!f&&!l&&a.indexOf("win")>=0,h=process.env["PROCESSOR_ARCHITECTURE"]=="AMD64"||process.env["PROCESSOR_ARCHITEW6432"]=="AMD64";if(c){var p=o.dirname(process.execPath),d="krpanotools"+(h?"64":"32")+".exe";if(o.basename(p,o.extname(p))=="runtime"){p=o.dirname(p);var v=p+o.sep+"krpanotools"+(h?"64":"32")+"_d.exe";u.existsSync(v)?n=v:n=p+o.sep+d}else n=p+o.sep+d}else f?(n=o.dirname(process.execPath),n+=o.sep+"..",n+=o.sep+"..",n+=o.sep+"..",n+=o.sep+"..",n+=o.sep+"..",n+=o.sep+"..",n+=o.sep+"krpanotools",n=o.normalize(n)):l&&(n=o.dirname(process.execPath),o.basename(n)=="runtime"&&(n=o.dirname(n)),n+=o.sep+"krpanotools");if(u.existsSync(n)==0){fatalerror("Missing file:<br>"+n);return}t=o.dirname(n)+o.sep,ipc_connect(n,g,m)},e.getRegInfo=function(e){i.sendCommandSync("reg:get",function(t,n){e&&e(t)})},e.registerCode=function(e,t){i.sendCommandSync("reg:"+e,function(e,n){t&&t(e)})},e.removeRegistration=function(e){i.sendCommandSync("reg:remove",function(t,n){e&&e(t)})},e.loadRegInfo=function(e,t){i.sendCommand("loadreginfo:"+e,null,function(e,n){t&&t(e)})},e.encodeParam=function(e){return"'"+e.split("\\").join("\\\\").split("'").join("\\'")+"'"},e.pingImage=function(e,t,n,r,o){i.sendCommand("pingimage:"+s(e),t,n,r,o)},e.makeThumb=function(e,t,n,r,s){i.sendCommand("makethumb:"+e,t,n,r,s)},e.protectTool=function(e,t){i.sendCommand("protect:"+e,null,t)},e.encryptFile=function(e,t){i.sendCommand("encrypt:"+e,null,t)},e.updateCheck=function(e,t){i.sendCommand("updatetool:check "+e,null,t)},e.updateFile=function(t,n){i.sendCommand("updatetool:update "+t+(e.umode?" "+e.umode:""),null,n)},e.ipcStats=function(){console.log(i.getCommandStats())},e.exit=function(){i&&(i.exit(),i=null)}})()