define(["modules/default/defaultmodel","src/util/datatraversing"],function(a,b){function c(){}return c.prototype=$.extend(!0,{},a,{getValue:function(){return this.dataValue},getjPath:function(){var a=[],c=this.module.getDataFromRel("list");return c&&null!=c?(c=c[0],b.getJPathsFromElement(c,a),a):a}}),c});