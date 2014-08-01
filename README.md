loadingspinner-directive
========================
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.4/angular.min.js"></script>
<script src="http://heartcode-canvasloader.googlecode.com/files/heartcode-canvasloader-min-0.9.1.js"></script>
<script>
  angular.module('app',['spinner']).controller(['$scope',function($scope){
    
    $scope.show = true;
    
    $scope.toggle=function(){
      $scope.show=!$scope.show;
    };
    
  }]);  	
    
</script>

<div ng-app="app">
  <div spinner >
  
  </div>
</div>  

<button ng-click="toggle">toggle spinner</button>
