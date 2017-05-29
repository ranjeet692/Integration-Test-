// JavaScript source code
var app = angular.module("myApp", [])
app.controller('MainController', ['$scope', function ($scope) {
    $scope.head = 'Tutorials Available';
    $scope.tutorials = [{
        name: 'AnimationTest',
        site: 'file:///C:/Users/Yashmi/Documents/Visual%20Studio%202013/Projects/WebApplication2/DSAnim-master/web/animationtest.html'
    },
    {
        name: 'ArrayQueue',
        site: 'file:///C:/Users/Yashmi/Documents/Visual%20Studio%202013/Projects/WebApplication2/DSAnim-master/web/animationtest.html'
    },
    {
        name: 'ArrayStack',
        site: 'file:///C:/Users/Yashmi/Documents/Visual%20Studio%202013/Projects/WebApplication2/DSAnim-master/web/arraystack.html'
    }];
}]);
// JavaScript source code
