define(["jquery","src/header/components/default","src/util/versioning","src/util/util"],function(a,b,c,d){function e(){}return d.inherits(e,b,{initImpl:function(){this.viewHandler=c.getViewHandler()},_onClick:function(){var a=this;clearTimeout(this.timeout),a.$_dom.css({color:"#000"}),a.viewHandler.serverPush(c.getView()).then(function(){a.$_dom.css({color:"#357535"}),a.returnToBlack()},function(){a.$_dom.css({color:"#872A2A"}),a.returnToBlack()})},returnToBlack:function(){var a=this;this.timeout=setTimeout(function(){a.$_dom.animate({color:"#000"},500)},500)}}),e});