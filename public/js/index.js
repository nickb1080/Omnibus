!function t(o,e,n){function r(s,u){if(!e[s]){if(!o[s]){var p="function"==typeof require&&require;if(!u&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=e[s]={exports:{}};o[s][0].call(c.exports,function(t){var e=o[s][1][t];return r(e?e:t)},c,c.exports,t,o,e,n)}return e[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,o){var e,n,r,i,s,u=function(t,o){return function(){return t.apply(o,arguments)}},p={}.hasOwnProperty,c=function(t,o){function e(){this.constructor=t}for(var n in o)p.call(o,n)&&(t[n]=o[n]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};s=t("./regions/ToggleableRegion"),n=t("./views/AppView"),i=t("./modules/todo/TodoModule"),r=t("./modules/notification/NotificationModule"),e=function(t){function o(){return this.initialize=u(this.initialize,this),o.__super__.constructor.apply(this,arguments)}return c(o,t),o.prototype.initialize=function(){return console.log("Initializing app..."),this.router=new Backbone.Marionette.AppRouter,this.addInitializer(function(){return function(){return(new n).render()}}(this)),this.addInitializer(function(t){return function(){return t.addRegions({notificationRegion:{selector:"#notifications",regionType:s,module:t.submodules.Notification},todoRegion:{selector:"#todos",regionType:s,module:t.submodules.Todo}})}}(this)),this.addInitializer(function(){return function(){return Backbone.history.start()}}(this)),this.module("Notification",r),this.module("Todo",i),this.start()},o}(Backbone.Marionette.Application),o.exports=new e},{"./modules/notification/NotificationModule":4,"./modules/todo/TodoModule":7,"./regions/ToggleableRegion":14,"./views/AppView":15}],2:[function(t){var o;o=t("./app"),$(function(){return o.initialize()})},{"./app":1}],3:[function(t,o){var e,n={}.hasOwnProperty,r=function(t,o){function e(){this.constructor=t}for(var r in o)n.call(o,r)&&(t[r]=o[r]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};o.exports=e=function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,t),o.prototype.onStart=function(){return this.mainView=new this.MainView({vent:this.app.vent,collection:this.collection}),this.listenTo(this.mainView,"stop:notification:module",this.stop),this.region.show(this.mainView)},o.prototype.onStop=function(){return this.region.close()},o}(Marionette.Module)},{}],4:[function(t,o){var e,n,r={}.hasOwnProperty,i=function(t,o){function e(){this.constructor=t}for(var n in o)r.call(o,n)&&(t[n]=o[n]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};e=t("../BaseModule"),o.exports=n=function(o){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,o),e.prototype.initialize=function(){return this.MainView=t("./views/MainView"),console.log("Initializing NotificationModule"),this.startWithParent=!1},e.prototype.onStart=function(){return e.__super__.onStart.call(this),console.log("Starting NotificationModule")},e.prototype.onStop=function(){return e.__super__.onStop.call(this),console.log("Stopping NotificationModule")},e}(e)},{"../BaseModule":3,"./views/MainView":5}],5:[function(t,o){var e,n={}.hasOwnProperty,r=function(t,o){function e(){this.constructor=t}for(var r in o)n.call(o,r)&&(t[r]=o[r]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};o.exports=e=function(o){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,o),e.prototype.template=t("./templates/main"),e.prototype.ui={close:"button.close"},e.prototype.triggers={"click @ui.close":"stop:notification:module"},e.prototype.initialize=function(t){return this.action="Notification module started. Try working with the todos now...",this.vent=t.vent,this.vent.on("new:notification",this.newNotificaction,this)},e.prototype.newNotificaction=function(t){return this.action=t,this.render()},e.prototype.serializeData=function(){return{action:this.action}},e}(Backbone.Marionette.ItemView)},{"./templates/main":6}],6:[function(t,o){var e=t("jade/runtime");o.exports=function(t){var o=[],n=t||{},r=n.action;return o.push('<p class="alert alert-info"><button class="close">&times;</button>'+e.escape(null==(e.interp=r)?"":e.interp)+"</p>"),o.join("")}},{"jade/runtime":20}],7:[function(t,o){var e,n,r,i={}.hasOwnProperty,s=function(t,o){function e(){this.constructor=t}for(var n in o)i.call(o,n)&&(t[n]=o[n]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};r=t("./collections/Todos"),e=t("../BaseModule"),o.exports=n=function(o){function e(){return e.__super__.constructor.apply(this,arguments)}return s(e,o),e.prototype.initialize=function(){return this.MainView=t("./views/MainView"),console.log("Initializing TodoModule"),this.startWithParent=!0,this.collection=new r([{text:"Wash dishes",done:!1},{text:"Learn Marionette.js",done:!0}]),this.app.router.processAppRoutes(this,{"todo/:text":"showTodo"})},e.prototype.onStart=function(){return e.__super__.onStart.call(this),console.log("Starting TodoModule")},e.prototype.onStop=function(){return e.__super__.onStop.call(this),console.log("Stopping TodoModule")},e.prototype.showTodo=function(t){return this.collection.showTodo(t)},e}(e)},{"../BaseModule":3,"./collections/Todos":8,"./views/MainView":10}],8:[function(t,o){var e,n,r={}.hasOwnProperty,i=function(t,o){function e(){this.constructor=t}for(var n in o)r.call(o,n)&&(t[n]=o[n]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};e=t("../models/Todo"),o.exports=n=function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return i(o,t),o.prototype.model=e,o.prototype.showTodo=function(t){return _.each(this.where({text:t}),function(t){return t.toggleActive()})},o}(Backbone.Collection)},{"../models/Todo":9}],9:[function(t,o){var e,n={}.hasOwnProperty,r=function(t,o){function e(){this.constructor=t}for(var r in o)n.call(o,r)&&(t[r]=o[r]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};o.exports=e=function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return r(o,t),o.prototype.defaults={text:"",done:!1,active:!1},o.prototype.toggleActive=function(){return this.collection.each(function(t){return function(o){return o!==t?o.set("active",!1):t.set("active",!t.get("active"))}}(this))},o}(Backbone.Model)},{}],10:[function(t,o){var e,n,r,i={}.hasOwnProperty,s=function(t,o){function e(){this.constructor=t}for(var n in o)i.call(o,n)&&(t[n]=o[n]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};n=t("../models/Todo"),r=t("../collections/Todos"),o.exports=e=function(o){function e(){return e.__super__.constructor.apply(this,arguments)}return s(e,o),e.prototype.template=t("./templates/main"),e.prototype.itemViewContainer="#todo-list",e.prototype.itemView=t("./TodoView"),e.prototype.ui={form:"form#new-todo",close:"button.close"},e.prototype.triggers={"click @ui.close":"stop:notification:module"},e.prototype.events={"submit @ui.form":"addTodo"},e.prototype.initialize=function(t){return this.vent=t.vent},e.prototype.itemViewOptions=function(){return{vent:this.vent}},e.prototype.addTodo=function(t){var o;return t.preventDefault(),o=Backbone.Syphon.serialize(this),this.collection.add(new n({text:o.todo})),this.render(),this.vent.trigger("new:notification","Added todo: "+o.todo)},e}(Backbone.Marionette.CompositeView)},{"../collections/Todos":8,"../models/Todo":9,"./TodoView":11,"./templates/main":12}],11:[function(t,o){var e,n={}.hasOwnProperty,r=function(t,o){function e(){this.constructor=t}for(var r in o)n.call(o,r)&&(t[r]=o[r]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};o.exports=e=function(o){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,o),e.prototype.template=t("./templates/todo"),e.prototype.className=function(){return"list-group-item"+(this.model.get("active")?" active":"")},e.prototype.ui={check:".check",close:".close"},e.prototype.events={"click @ui.check":"toggleCheck","click @ui.close":"removeTodo"},e.prototype.initialize=function(t){return this.vent=t.vent},e.prototype.modelEvents={"change:done":"render","change:active":"todoToggled"},e.prototype.todoToggled=function(){return this.$el.toggleClass("active"),this.vent.trigger("new:notification","Selected/unselected todo: "+this.model.get("text"))},e.prototype.toggleCheck=function(){return this.model.set("done",!this.model.get("done")),this.vent.trigger("new:notification","Toggled todo: "+this.model.get("text"))},e.prototype.removeTodo=function(){return this.model.destroy(),this.vent.trigger("new:notification","Removed todo: "+this.model.get("text"))},e}(Backbone.Marionette.ItemView)},{"./templates/todo":13}],12:[function(t,o){var e=t("jade/runtime");o.exports=function(t){var o=[],n=t||{},r=n.action;return o.push('<div class="panel panel-default"><div class="panel-heading">Todo list<button class="close">&times;'+e.escape(null==(e.interp=r)?"":e.interp)+'</button></div><div class="panel-body"><div id="todo-list" class="list-group"></div><form id="new-todo"><input type="text" name="todo" placeholder="enter a new todo and press ENTER" autofocus="autofocus" class="form-control"/></form></div></div>'),o.join("")}},{"jade/runtime":20}],13:[function(t,o){var e=t("jade/runtime");o.exports=function(t){var o=[],n=t||{},r=n.done,i=n.text;return o.push(r?'<div class="check fa fa-check-square-o fa-fw"></div>':'<div class="check fa fa-square-o fa-fw"></div>'),o.push("<a"+e.attr("href","#todo/"+i,!0,!1)+e.cls(["text",r?" checked":""],[null,!0])+">"+e.escape(null==(e.interp=i)?"":e.interp)+'</a><span class="close">&times;</span>'),o.join("")}},{"jade/runtime":20}],14:[function(t,o){var e,n,r={}.hasOwnProperty,i=function(t,o){function e(){this.constructor=t}for(var n in o)r.call(o,n)&&(t[n]=o[n]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};e=t("../views/EmptyRegionView"),o.exports=n=function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return i(o,t),o.prototype.initialize=function(t){return this.module=t.module,this.module.region=this,this.initShow()},o.prototype.initShow=function(){return this.emptyView=new e,this.show(this.emptyView),this.listenTo(this.emptyView,"region:on",this.activateModule)},o.prototype.activateModule=function(){return this.module.start()},o.prototype.onClose=function(t){return t instanceof e?void 0:this.initShow()},o}(Backbone.Marionette.Region)},{"../views/EmptyRegionView":16}],15:[function(t,o){var e,n={}.hasOwnProperty,r=function(t,o){function e(){this.constructor=t}for(var r in o)n.call(o,r)&&(t[r]=o[r]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};o.exports=e=function(o){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,o),e.prototype.template=t("./templates/app"),e.prototype.el="#app",e}(Marionette.Layout)},{"./templates/app":17}],16:[function(t,o){var e,n={}.hasOwnProperty,r=function(t,o){function e(){this.constructor=t}for(var r in o)n.call(o,r)&&(t[r]=o[r]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};o.exports=e=function(o){function e(){return e.__super__.constructor.apply(this,arguments)}return r(e,o),e.prototype.template=t("./templates/emptyregion"),e.prototype.ui={regionOn:".region-on"},e.prototype.triggers={"click @ui.regionOn":"region:on"},e}(Marionette.ItemView)},{"./templates/emptyregion":18}],17:[function(t,o){t("jade/runtime");o.exports=function(){var t=[];return t.push('<div class="row"><div id="notifications"></div></div><div class="row"><div id="todos"></div></div><div class="footer"><a href="https://github.com/iampeter/backbone-marionette-gulp-seed" target="_blank" class="btn btn-primary">View on Github</a></div>'),t.join("")}},{"jade/runtime":20}],18:[function(t,o){t("jade/runtime");o.exports=function(){var t=[];return t.push('<div class="module-box"><div class="blank"><button class="region-on btn">Start module</button></div></div>'),t.join("")}},{"jade/runtime":20}],19:[function(){},{}],20:[function(t,o,e){(function(n){!function(t){if("object"==typeof e)o.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof n?r=n:"undefined"!=typeof self&&(r=self),r.jade=t()}}(function(){return function o(e,n,r){function i(u,p){if(!n[u]){if(!e[u]){var c="function"==typeof t&&t;if(!p&&c)return c(u,!0);if(s)return s(u,!0);throw new Error("Cannot find module '"+u+"'")}var a=n[u]={exports:{}};e[u][0].call(a.exports,function(t){var o=e[u][1][t];return i(o?o:t)},a,a.exports,o,e,n,r)}return n[u].exports}for(var s="function"==typeof t&&t,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(t,o,e){"use strict";function n(t){return null!=t&&""!==t}function r(t){return Array.isArray(t)?t.map(r).filter(n).join(" "):t}e.merge=function i(t,o){if(1===arguments.length){for(var e=t[0],r=1;r<t.length;r++)e=i(e,t[r]);return e}var s=t["class"],u=o["class"];(s||u)&&(s=s||[],u=u||[],Array.isArray(s)||(s=[s]),Array.isArray(u)||(u=[u]),t["class"]=s.concat(u).filter(n));for(var p in o)"class"!=p&&(t[p]=o[p]);return t},e.joinClasses=r,e.cls=function(t,o){for(var n=[],i=0;i<t.length;i++)n.push(o&&o[i]?e.escape(r([t[i]])):r(t[i]));var s=r(n);return s.length?' class="'+s+'"':""},e.attr=function(t,o,n,r){return"boolean"==typeof o||null==o?o?" "+(r?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof o?" "+t+"='"+JSON.stringify(o).replace(/'/g,"&apos;")+"'":n?" "+t+'="'+e.escape(o)+'"':" "+t+'="'+o+'"'},e.attrs=function(t,o){var n=[],i=Object.keys(t);if(i.length)for(var s=0;s<i.length;++s){var u=i[s],p=t[u];"class"==u?(p=r(p))&&n.push(" "+u+'="'+p+'"'):n.push(e.attr(u,p,!1,o))}return n.join("")},e.escape=function(t){var o=String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return o===""+t?t:o},e.rethrow=function s(o,e,n,r){if(!(o instanceof Error))throw o;if(!("undefined"==typeof window&&e||r))throw o.message+=" on line "+n,o;try{r=r||t("fs").readFileSync(e,"utf8")}catch(i){s(o,null,n)}var u=3,p=r.split("\n"),c=Math.max(n-u,0),a=Math.min(p.length,n+u),u=p.slice(c,a).map(function(t,o){var e=o+c+1;return(e==n?"  > ":"    ")+e+"| "+t}).join("\n");throw o.path=e,o.message=(e||"Jade")+":"+n+"\n"+u+"\n\n"+o.message,o}},{fs:2}],2:[function(){},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{fs:19}]},{},[2]);