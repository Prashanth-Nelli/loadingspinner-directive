loadingspinner-directive
========================

download spinner.js file and include spinner as a dependency in module definition

###Example Code:-

```javascript

    add spinner.js,
        http://heartcode-canvasloader.googlecode.com/files/heartcode-canvasloader-min-0.9.1.js
        files
        
      angular.module('app',['spinner']).controller(['$scope',function($scope){
        $scope.show = true;
        $scope.toggle=function(){
          $scope.show=!$scope.show;
        };
        
        $scope.properties = {
    		setColor : '#ffffff',
    		setDiameter : 75,
    		setDensity : 40,
    		setRange : 0.5,
    		setFPS : 30
    	};
        
      }]);
      
```
    <div ng-app="app">
      <div spinner id="'spinner'" properties="properties" start="show">
      
      </div>
    </div>
    <button ng-click="toggle()">toggle spinner</button>
    
    directive id should be unique when this directive used multiple times,
    propeties is an object it is optional if it not available default values will be used 
