var ToDoApp = angular.module('ToDoApp', []);

ToDoApp.controller('ToDoCtrl', function ($scope) {
      $scope.tasks = [
          {item: "Give Justin an A", done: false, priority: true},
          {item: "Feed the cat", done: false, priority: false},
          {item: "Cut the lawn", done: false, priority: false}
      ];
    
    $scope.setfocus = function() {
        document.getElementById('inputToDo').focus();
    };
});

ToDoApp.controller('TaskSubmitCtrl', function($scope) {
    $scope.submit = function() {
        $scope.tasks.push({item: $scope.taskDescrip, done: false});
        $scope.taskDescrip = '';
        $scope.setfocus();
    };
});

ToDoApp.controller('TaskDelete', function($scope) {
    $scope.delete = function(idx) {
        $scope.tasks.splice(idx, 1);
        $scope.setfocus();
    };
});

