define(['../module'], function (module) {
    'use strict';
    module.controller('dashboardController', [
        '$scope',
        '$interval',
        'utilsService',
        'dashboardService',
        'userService',
        function ($scope, $interval, googleMapsUtils, dashboardService,service) {

            $scope.onClickValue={
                Total:0,
                Active:0,
                Removed:0
            };

            $scope.map = {
                center: {
                    latitude: 41.3892457,
                    longitude: 2.163869
                },
                zoom: 15,
                bounds: {}
            };
            $scope.options = {
                scrollwheel: false
            };

            $scope.labels = ["", "", "", "", "", "", ""];
            $scope.series = ['Total','Active', 'Removed'];
            $scope.data = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ];

            $scope.options = {
                animation: false,
                scaleBeginAtZero:true
            };

            $scope.bar1={
                value:0,
                type:'success',
                max:0
            };
            $scope.bar2={
                value:0,
                type:'danger',
                max:0
            };

            $scope.fillMapWithUsers = function(response) {
                var markers = [];
                for (var i = 0; i < response.length; i++) {
                    markers.push(googleMapsUtils.createRandomMarker(i, $scope.map.bounds,null,response[i].firstName))
                }
                $scope.randomMarkers = markers;

            };

            $scope.callAtInterval = function(response) {
                $scope.users = service.query($scope.fillMapWithUsers);

                var actived = response.data.actived;
                var removed = response.data.removed;
                var total = response.data.actived + response.data.removed;

                $scope.data[0].push(total);
                $scope.data[1].push(actived);
                $scope.data[2].push(removed);
                $scope.labels.push(response.data.time);

                if($scope.data[0].length>7){
                    $scope.data[0].splice(0,1);
                    $scope.data[1].splice(0,1);
                    $scope.data[2].splice(0,1);
                    $scope.labels.splice(0,1);
                }

                $scope.bar1={value:actived,
                    type:'success',
                    max:total};
                $scope.bar2={value:removed,
                    type:'danger',
                    max:total};
            };

            $scope.callAtIntervalTimer = function() {
                dashboardService.getUserDashboardData($scope.callAtInterval,null)
            };

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
                $scope.onClickValue={
                  Total:points[0].value,
                  Active:points[1].value,
                  Removed:points[2].value
                };
            };

            $scope.intervalId = $interval($scope.callAtIntervalTimer, 5000);
            $scope.$on(
                "$destroy",
                function(event){
                    if($scope.intervalId != undefined){
                        $interval.cancel($scope.intervalId);
                    }
                }
            );
        }
    ]);
});
