/// <reference path="../typings/angularjs/angular.d.ts"/>
angular.module('directivePractice', ['ngRoute'])
      .config(function ($routeProvider) {
            $routeProvider
                  .when('/home', {
                        templateUrl: 'app/home.html',
                        controller: 'homeCtrl',

                  })
                  .otherwise({
                        redirectTo: '/home'
                  })
      });
