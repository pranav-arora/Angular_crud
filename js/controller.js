app.controller("myctrl",($scope,myfactory,$window)=>{
      
    $scope.addRecord=()=>{
        myfactory.addTask($scope.name,$scope.desc)
        console.log(myfactory.taskArr);
        $scope.tasks=myfactory.taskArr;
    }
    $scope.edit=(task)=>{
        $scope.name = task.name;
        $scope.desc = task.desc;
        task.markforEdit=!task.markforEdit;
        $scope.disableButton=true;                
    }
    $scope.showMarking=(task)=>{
        task.toggle();
        task.markforEdit=false;
    }
    $scope.removeRecord=()=>{
        $window.alert("You are abbout to remove marked record/records.");
        myfactory.removeTask();
        
    }
    $scope.removeEdit=(task)=>{
        task.markforEdit=!task.markforEdit;
    }
})