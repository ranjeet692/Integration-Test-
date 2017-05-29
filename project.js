angular.module('tutorialApp', [])
.controller('MainController', function () {
    var tests = this;
    tests.head = 'Tutorials Available';
    tests.tutorials = [{
        name: 'AnimationTest',
        site: 'animationtest.html'
    },
    {
        name: 'ArrayQueue',
        site: $http({
            method:'GET', 
            url: 'arrayqueue.html'
        })
        .then(function (response) {
            $scope.tutorial = response.data;
        });
    },
    {
        name: 'ArrayStack',
        site: 'arraystack.html'
    },
    {
        name: 'BubbleSort',
        site: 'bubble.html'
    },
    {
        name: 'InsertionSort',
        site: 'insertion.html'
    }
    ];
});
// JavaScript source code
