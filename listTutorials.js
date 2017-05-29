app.directive('listTutorials', function(){
    return {
        restrict: 'E',
        template: '<ul ng-repeat="test in tutorials">' + 
            '<li><a href = "{{tutorials.site}}> {{tutorials.name}} </a> </li>' +
            '</ul>'
    };
} )
