/**
 * 
 */
app.service('myService',function(){
	
	this.setName = function(name){
		this.userName = name;
	}
	this.getName = function(){
		return this.userName;
	}
});