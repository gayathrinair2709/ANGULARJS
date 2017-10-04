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
        $scope.emp.push(model);
    }


}
);
