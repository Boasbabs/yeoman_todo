'use strict';

/**
 * @ngdoc function
 * @name yeomanTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTodoApp
 */
angular.module('yeomanTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Ruby on Rails'
    ];
    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = "";
    };
  });
