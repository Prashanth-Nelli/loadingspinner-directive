angular.module("spinner",[]).directive('spinner', [function(){
return {
	restrict : 'A',
	scope : {
		start : '=',
		name : '=',
		properties : '='
	},
	template : '<div class="wrapper" ></div>',
	link : function(scope, element, iAttrs) {
		$(element).attr('id', scope.name);
		var cl = new CanvasLoader(scope.name)
		,props = ['setColor', 'setDiameter', 'setDensity', 'setRange', 'setFPS']
		,key
		,defaultProperties = {
			setColor : '#ffffff',
			setDiameter : 75,
			setDensity : 40,
			setRange : 0.5,
			setFPS : 30
		};
	
		if (scope.properties) {
			for (var i = 0; i < props.length; i++) {
				key = props[i];
				cl[key](scope.properties[key]);
			}
		} else {
			for(var key in defaultProperties){
				cl[key](defaultProperties[key]);
			}
		}
	
		scope.$watch(function(newVal, oldVal) {
			if (scope.start) {
				cl.show();
			} else {
				cl.hide();
			}
		});
	}
};
}]);

