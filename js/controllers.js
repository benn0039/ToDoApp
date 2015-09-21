var ToDoApp = angular.module('ToDoApp', []);

ToDoApp.controller('ToDoCtrl', function ($scope) {
  $scope.tasks = [
      {item: "Give Justin an A", done: false},
      {item: "Feed the cat", done: false},
      {item: "Cut the lawn", done: false}
  ];
});

ToDoApp.controller('TaskSubmitCtrl', function($scope) {
    $scope.submit = function() {
        $scope.tasks.push({item: $scope.taskDescrip, done: false});
        $scope.taskDescrip = '';
    };
  console.log($scope.tasks);
});

ToDoApp.controller('TaskDelete', function($scope) {
    $scope.delete = function(idx) {
      console.log(idx);
        $scope.tasks.splice(idx, 1);
    };
});