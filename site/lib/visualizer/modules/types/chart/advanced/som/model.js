define(["modules/default/defaultmodel","src/util/datatraversing"],function(a,b){function c(){}return c.prototype=$.extend(!0,{},a,{getjPath:function(a){var c,d;switch(a){case"element":if(c=this.module.getDataFromRel("dataset"),c&&(d=c.getChildSync(["data",0,"info",0])))return b.getJPathsFromElement(d);break;case"elementList":if(c=this.getAllDataFromRel("dataset")){var e={};for(var f in c)e[f]={};return b.getJPathsFromElement(e)}break;case"cellInfo":if(c=this.module.getDataFromRel("model"))return b.getJPathsFromElement({x:0,y:0,info:c.data[0][0]})}return[]}}),c});