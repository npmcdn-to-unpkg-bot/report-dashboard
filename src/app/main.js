 (function(root,factory){
     'use strict';
     //check for AMD loader
    if(typeof define === 'function' && define.amd){
       define(['angular'],factory); 
    }else if(typeof exports === 'object'){ //check for Node loader
        module.exports = factory(require('angular'));
    }else{ //all fails load to global angular
        root.returnExports = factory(root.angular);
    }
 }(this, function(angular){
    'use strict';
    //Community modules
    require('angular-translate');
    require('angular-translate-loader-partial');
    require('angular-ui-bootstrap');
    require('ng-storage');
    
    //API modules
    require('./core/modules/showerrors/module');
    
    //UI modules
    require('./dashboard/module');
    require('./login/module');
    
    //create module instance
    var app = angular.module('app', [require('angular-ui-router'),require('angular-sanitize'),'ui.bootstrap','ui.bootstrap.showErrors','dashboard','login']);
    //setup routes
    app.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });
    //globals 
    app.run(function($rootScope){
        //setup list menu tabs
        $rootScope.tabs = [
            {
                id:0,
                title:'Page 1',
            },
            {
                id:1,
                title:'Page 2',
            },
            {
                id:2,
                title:'Page 3',
            }
        ];
        //setup default active
        $rootScope.currentTab = 0;
        //create update method
        $rootScope.tabSelect = function(id){
            $rootScope.currentTab = id;
        };
        //
        $rootScope.wideScreen = false;
        $rootScope.enableWideScreen = function(){
            $rootScope.wideScreen = true;
        };
        $rootScope.disableWideScreen = function(){
            $rootScope.wideScreen = false;
        };
    });
 }));
 