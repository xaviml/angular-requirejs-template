define(['../module'], function (module) {
    'use strict';
    module.controller('dashboardController', [
        '$scope','$interval',
        function ($scope, $interval) {

            $scope.map = {
                center: {
                    latitude: 40.1451,
                    longitude: -99.6680
                },
                zoom: 8,
                bounds: {}
            };
            $scope.options = {
                scrollwheel: false
            };
            var createRandomMarker = function(i, bounds, idKey) {
                var lat_min = bounds.southwest.latitude,
                    lat_range = bounds.northeast.latitude - lat_min,
                    lng_min = bounds.southwest.longitude,
                    lng_range = bounds.northeast.longitude - lng_min;

                if (idKey == null) {
                    idKey = "id";
                }

                var latitude = lat_min + (Math.random() * lat_range);
                var longitude = lng_min + (Math.random() * lng_range);
                var title='m' + i;
                var ret = {
                    latitude: latitude,
                    longitude: longitude,
                    title: title,
                    options: {
                        labelClass:'marker_labels',
                        labelAnchor:'10 0',
                        labelContent:title
                    }
                };
                ret[idKey] = i;
                return ret;
            };

            $scope.randomMarkers = [];
            // Get the bounds from the map once it's loaded
            $scope.$watch(function() {
                return $scope.map.bounds;
            }, function(nv, ov) {
                // Only need to regenerate once
                if (!ov.southwest && nv.southwest) {
                    var markers = [];
                    for (var i = 0; i < 5; i++) {
                        markers.push(createRandomMarker(i, $scope.map.bounds))
                    }
                    $scope.randomMarkers = markers;
                }
            }, true);

            $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.series = ['Series A', 'Series B'];
            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];

            var step  = 10;
            var max   = 100;
            var start = 0;

            $scope.options = {
                animation: false,
                //scaleBeginAtZero:true,
                scaleOverride: true,
                scaleSteps: Math.ceil((max-start)/step),
                scaleStepWidth: step,
                scaleStartValue: start
            };

            $scope.bar1={value:$scope.data[0][6]/($scope.data[0][6] + $scope.data[1][6])*100,
                type:'success'};
            $scope.bar2={value:$scope.data[1][6]/($scope.data[0][6] + $scope.data[1][6])*100,
                type:'info'};


            $scope.callAtInterval = function() {
                var r1 = $scope.data[0][6] + Math.floor((Math.random()*20)-10);
                var r2 = $scope.data[1][6] + Math.floor((Math.random()*20)-10);
                if(r1 < 0 || r1 > 100){
                    r1 = $scope.data[0][6];
                }
                if(r2 < 0 || r2 > 100){
                    r2 = $scope.data[1][6];
                }
                $scope.data[0].push(r1);
                $scope.data[1].push(r2);


                if($scope.data[0].length>7){
                    //$scope.labels.splice(0,1);
                    $scope.data[0].splice(0,1);
                    $scope.data[1].splice(0,1);
                }
                $scope.labels = ["1", "2", "3", "4", "5", "6", "7"];

                $scope.bar1={value:$scope.data[0][6]/($scope.data[0][6] + $scope.data[1][6])*100,
                    type:'success'};
                $scope.bar2={value:$scope.data[1][6]/($scope.data[0][6] + $scope.data[1][6])*100,
                    type:'info'};
            };

            $interval($scope.callAtInterval, 1000);

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        }
    ]);
});
