/**
 * package - 
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.widgets","app.admin","app.dashboard","app.layout"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";function t(){this.config={appErrorPrefix:void 0},this.configure=function(t){this.config.appErrorPrefix=t},this.$get=function(){return{config:this.config}}}function e(t){t.decorator("$exceptionHandler",a)}function a(t,e,a){return function(n,i){var o=e.config.appErrorPrefix||"",r={exception:n,cause:i};n.message=o+n.message,t(n,i),a.error(n.message,r)}}angular.module("blocks.exception").provider("exceptionHandler",t).config(e),e.$inject=["$provide"],a.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function t(t){function e(e){return function(a){t.error(e,a)}}var a={catcher:e};return a}angular.module("blocks.exception").factory("exception",t),t.$inject=["logger"]}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";function t(t,e){function a(a,n,i){e.error(a,i),t.error("Error: "+a,n)}function n(a,n,i){e.info(a,i),t.info("Info: "+a,n)}function i(a,n,i){e.success(a,i),t.info("Success: "+a,n)}function o(a,n,i){e.warning(a,i),t.warn("Warning: "+a,n)}var r={showToasts:!0,error:a,info:n,success:i,warning:o,log:t.log};return r}angular.module("blocks.logger").factory("logger",t),t.$inject=["$log","toastr"]}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";function t(t,e,a){var n={docTitle:void 0,resolveAlways:{}};t.html5Mode(!0),this.configure=function(t){angular.extend(n,t)},this.$get=["$location","$rootScope","$state","logger",function(t,i,o,r){function l(t,i){t.forEach(function(t){t.config.resolve=angular.extend(t.config.resolve||{},n.resolveAlways),e.state(t.state,t.config)}),i&&!p&&(p=!0,a.otherwise(i))}function s(){i.$on("$stateChangeError",function(e,a,n,i,o,l){if(!g){v.errors++,g=!0;var s=a&&(a.title||a.name||a.loadedTemplateUrl)||"unknown target",c="Error routing to "+s+". "+(l.data||"")+". <br/>"+(l.statusText||"")+": "+(l.status||"");r.warning(c,[a]),t.path("/")}})}function c(){s(),d()}function u(){return o.get()}function d(){i.$on("$stateChangeSuccess",function(t,e){v.changes++,g=!1;var a=n.docTitle+" "+(e.title||"");i.title=a})}var g=!1,p=!1,v={errors:0,changes:0},f={configureStates:l,getStates:u,stateCounts:v};return c(),f}],this.$get.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",t),t.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus"])}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t){t.options.timeOut=4e3,t.options.positionClass="toast-bottom-right"}function e(t,e,a){t.debugEnabled&&t.debugEnabled(!0),a.configure(n.appErrorPrefix),e.configure({docTitle:"HotTowel: "})}var a=angular.module("app.core");a.config(t),t.$inject=["toastr"];var n={appErrorPrefix:"[HotTowel Error] ",appTitle:"HotTowel Angular Demo"};a.value("config",n),a.config(e),e.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"]}(),function(){"use strict";function t(t){function e(){return t.when(72)}function a(){var e=[{firstName:"John",lastName:"Papa",age:25,location:"Florida"},{firstName:"Ward",lastName:"Bell",age:31,location:"California"},{firstName:"Colleen",lastName:"Jones",age:21,location:"New York"},{firstName:"Madelyn",lastName:"Green",age:18,location:"North Dakota"},{firstName:"Ella",lastName:"Jobs",age:18,location:"South Dakota"},{firstName:"Landon",lastName:"Gates",age:11,location:"South Carolina"},{firstName:"Haley",lastName:"Guthrie",age:35,location:"Wyoming"}];return t.when(e)}var n={getPeople:a,getMessageCount:e};return n}angular.module("app.core").factory("dataservice",t),t.$inject=["$q"]}(),function(){"use strict";angular.module("app.layout",[])}(),function(){"use strict";function t(t,e,a){function n(){a.success(e.appTitle+" loaded!",null),i()}function i(){t(function(){o.showSplash=!1},1e3)}var o=this;o.title=e.appTitle,o.busyMessage="Please wait ...",o.isBusy=!0,o.showSplash=!0,o.tagline={text:"Created by John Papa",link:"http://twitter.com/john_papa"},n()}angular.module("app.layout").controller("ShellController",t),t.$inject=["$timeout","config","logger"]}(),function(){"use strict";function t(t,e){function a(){n()}function n(){o.navRoutes=r.filter(function(t){return t.settings&&t.settings.nav}).sort(function(t,e){return t.settings.nav-e.settings.nav})}function i(e){if(!e.title||!t.current||!t.current.title)return"";var a=e.title;return t.current.title.substr(0,a.length)===a?"current":""}var o=this,r=e.getStates();o.isCurrent=i,a()}angular.module("app.layout").controller("SidebarController",t),t.$inject=["$state","routerHelper"]}(),function(){"use strict";function t(){function t(t,e){function a(e){var a="dropy";e.preventDefault(),i.hasClass(a)?i.hasClass(a)&&(i.removeClass(a),n.slideUp(350,t.whenDoneAnimating)):(n.slideDown(350,t.whenDoneAnimating),i.addClass(a))}var n=e.find(".sidebar-inner"),i=e.find(".sidebar-dropdown a");e.addClass("sidebar"),i.click(a)}var e={bindToController:!0,link:t,restrict:"EA",scope:{whenDoneAnimating:"&?"}};return e}angular.module("app.layout").directive("htSidebar",t)}(),function(){"use strict";function t(){function t(){}var e={bindToController:!0,controller:t,controllerAs:"vm",restrict:"EA",scope:{tagline:"=",title:"="},templateUrl:"app/layout/ht-top-nav.html"};return e}angular.module("app.layout").directive("htTopNav",t)}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";function t(t){function e(t,e,i){i.$observe("htImgPerson",function(t){t=a+(t||n),i.$set("src",t)})}var a=t.imageBasePath,n=t.unknownPersonImageSource,i={link:e,restrict:"A"};return i}angular.module("app.widgets").directive("htImgPerson",t),t.$inject=["config"]}(),function(){"use strict";function t(){var t={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA"};return t}angular.module("app.widgets").directive("htWidgetHeader",t)}(),function(){"use strict";angular.module("app.dashboard",[])}(),function(){"use strict";function t(t){t.configureStates(e(),"/")}function e(){return[{state:"dashboard",config:{url:"/",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"vm",title:"dashboard",settings:{nav:1,content:'<i class="fa fa-dashboard"></i> Dashboard'}}}]}angular.module("app.dashboard").run(t),t.$inject=["routerHelper"]}(),function(){"use strict";function t(t,e,a){function n(){var e=[i(),o()];return t.all(e).then(function(){a.info("Activated Dashboard View")})}function i(){return e.getMessageCount().then(function(t){return r.messageCount=t,r.messageCount})}function o(){return e.getPeople().then(function(t){return r.people=t,r.people})}var r=this;r.news={title:"Hot Towel Angular",description:"Hot Towel Angular is a SPA template for Angular developers."},r.messageCount=0,r.people=[],r.title="Dashboard",n()}angular.module("app.dashboard").controller("DashboardController",t),t.$inject=["$q","dataservice","logger"]}(),function(){"use strict";angular.module("app.admin",[])}(),function(){"use strict";function t(t){t.configureStates(e())}function e(){return[{state:"admin",config:{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"vm",title:"Admin",settings:{nav:2,content:'<i class="fa fa-lock"></i> Admin'}}}]}angular.module("app.admin").run(t),t.$inject=["routerHelper"]}(),function(){"use strict";function t(t){function e(){t.info("Activated Admin View")}var a=this;a.title="Admin",e()}angular.module("app.admin").controller("AdminController",t),t.$inject=["logger"]}(),angular.module("app.core").run(["$templateCache",function(t){t.put("app/admin/admin.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wviolet"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><h3>TODO: Implement Your Features</h3></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),t.put("app/dashboard/dashboard.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=blightblue><div class=pull-left><i class="fa fa-plane"></i></div><div class="datas-text pull-right"><span class=bold>May 18 - 19, 2015</span> Castle Resort, Neverland</div><div class=clearfix></div></li><li class=borange><div class=pull-left><i class="fa fa-envelope"></i></div><div class="datas-text pull-right"><span class=bold>{{vm.messageCount}}</span> Messages</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=col-md-6><div class="widget wviolet"><div ht-widget-header title=People allow-collapse=true></div><div class="widget-content text-center text-info"><table class="table table-condensed table-striped"><thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th></tr></thead><tbody><tr ng-repeat="p in vm.people"><td>{{p.firstName}}</td><td>{{p.lastName}}</td><td>{{p.age}}</td><td>{{p.location}}</td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class="widget wgreen"><div ht-widget-header title={{vm.news.title}} allow-collapse=true></div><div class="widget-content text-center text-info"><small>{{vm.news.description}}</small></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></div></section></section>'),t.put("app/layout/ht-top-nav.html",'<nav class="navbar navbar-fixed-top navbar-inverse"><div class=navbar-header><a href="/" class=navbar-brand><span class=brand-title>{{vm.title}}</span></a> <a class="btn navbar-btn navbar-toggle" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class="navbar-collapse collapse"><div class="pull-right navbar-logo"><ul class="nav navbar-nav pull-right"><li><a ng-href={{vm.tagline.link}} target=_blank>{{vm.tagline.text}}</a></li><li class="dropdown dropdown-big"><a href=http://www.angularjs.org target=_blank><img src=content/images/AngularJS-small.png></a></li><li><a href="http://www.gulpjs.com/" target=_blank><img src=content/images/gulp-tiny.png></a></li></ul></div></div></nav>'),t.put("app/layout/shell.html",'<div ng-controller="ShellController as vm"><header class=clearfix><ht-top-nav title=vm.title tagline=vm.tagline></ht-top-nav></header><section id=content class=content><div ng-include="\'app/layout/sidebar.html\'"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=../../content/images/busy.gif><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></section></div>'),t.put("app/layout/sidebar.html",'<div ng-controller="SidebarController as vm"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class="nlightblue fade-selection-animation" ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>'),t.put("app/widgets/widget-header.html",'<div class=widget-head><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right" ng-if=allowCollapse><a ht-widget-minimize></a></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>')}]);