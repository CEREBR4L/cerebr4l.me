'use strict';

angular.module('app').controller('FooterController', function ($scope) {
 
    var icons = ["i1", "i2", "i3", "i4", "i5", "i7", "i8", "i9"];
    
    $scope.icon = icons[Math.floor(Math.random() * icons.length)];
 
});

