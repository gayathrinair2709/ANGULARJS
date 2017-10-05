var app= angular.module("FirstApp",[]);
app.controller("FirstController",function($scope)
{

    $scope.name='';
    $scope.dob='';
    $scope.email='';
    
    
    $scope.emp = [];


    $scope.submit=function()
    {
        var model = {name:$scope.name,dob:$scope.dob,email:$scope.email}
        if($scope.updateObj)
        {
            var index = $scope.emp.indexOf($scope.updateObj);
            $scope.emp[index] = model;
            return false;//so that the flow stops and the push function below is not executed
        }
        
        $scope.emp.push(model);
    }

   $scope.update=function(obj)
   { 
     $scope.name=obj.name;
     $scope.dob=obj.dob;
     $scope.email=obj.email;
     $scope.updateObj = obj;
   }

   $scope.delete=function(obj)
   {   
       $scope.emp.splice($scope.emp.indexOf(obj),1);
   }

});
