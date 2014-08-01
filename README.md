loadingspinner-directive
========================

download spinner.js file and include spinner as a dependency in module definition

Example Code:-
================================================

    http://heartcode-canvasloader.googlecode.com/files/heartcode-canvasloader-min-0.9.1.js
    spinner.js
      angular.module('app',['spinner']).controller(['$scope',function($scope){
        $scope.show = true;
        $scope.toggle=function(){
          $scope.show=!$scope.show;
        };
      }]);  	
    
    <div ng-app="app">
      <div spinner >
      
      </div>
    </div>  
    
    <button ng-click="toggle">toggle spinner</button>
    
    </div>
