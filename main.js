// ==============part 1
// angular.module('myApp',[])
// .controller('mainControl', ['$scope',myFunc]);
//second controller just to see
// angular.module('myApp').controller("myCtrl", ['$scope',secFunc]);


// function myFunc($scope){
//     $scope.clicker= function(){
//         console.log("finally");
//       $scope.showit=true;
//     }
    

// }
// function secFunc($scope){
//     $scope.secondClick = function(){
//         $scope.showList=true;
//     }
// }

// ==============Part 2
// angular.module('myApp',[])
// .controller('mainControl',['$scope',myFunc]);
//     function myFunc($scope){
//         $scope.mouseOver = function(){
//         $scope.pink={'color':'pink'};
//         $scope.addEx="!";
//         };
        
//         $scope.confirm = function(event) {
//             if(!confirm("Are You sure you want to continue")){
//                 event.preventDefault();
//                 console.log('clicked')
//                 $scope.remove=true;
//             }
//         };
//     }
    
    
// ================Part 3    
angular.module('myApp',[])
.controller('mainControl',['$scope',myFunc]);
    function myFunc($scope){
           $scope.popUp = function(){
            $scope.showDiv=true;
    }
        $scope.closeIt= function(){
            $scope.showDiv=false;
        }
}