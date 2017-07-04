/**
 * 
 */
app.factory('myFactory',function(){
	var factoryObj = {};
	
	factoryObj.setName = function(name){
		factoryObj.UserName = name;		
	}
	factoryObj.getName = function(){
		return factoryObj.UserName;		
	}
	return factoryObj;
});