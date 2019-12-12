var app = angular.module('promesasApp.servicios',[]); 


app.factory('yaydoo',['$http','$q', function($http,$q,$scope){ 

	var self = { 		 
		"array":[] 
	};
 

	self.cargarData = function(){

		var req =  {

			method: 'GET',
			url:'https://stage.ws.yay.do/v2/enterprise/614e9dbd-70f1-46f9-ba26-09f6c8a5bfa2/purchaseOrder/?filter=1&type=3&page=1',
			headers: {
				'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MDEyMjg0NS1iZmQ1LTRhMzItYWY4ZS00NWIzZDkxMTQ2OGY6YzUxZTJmYjctM2NiOS00OGJiLTlmOWMtMjY5NTU5YjlmODcxIiwiaWF0IjoxNTcwODMzMjE5LCJleHAiOjE1ODYzODUyMTksImp0aSI6ImJhNjU2MTNiLWFjZTUtNDdhNS1hMmUzLWE2YTNiNzJmNTA1MiIsImFwcCI6MSwiaXNzIjoiaHR0cHM6Ly9zdGFnZS53cy55YXkuZG8vYWNjb3VudC9hdXRoZW50aWNhdGUiLCJuYmYiOjE1NzA4MzMyMTl9.8SOzepesA0f1Nj1l4bxc8IM7yrCt-D9Z37nXWUO4SCg'
			},

		}

		$http(req).then(function successCallback (response){
			self.array = response.data;
			console.log(response);
		},
		function errorCallback (error){
			console.log(error);

		});
			 
	};


	self.cargarData(); 
	
	return self;

}])