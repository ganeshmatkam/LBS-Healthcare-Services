angular.module('starter.controllers', [])

  .controller('MapHomeCtrl', function ($scope, $rootScope, $state) {
    $scope.locate = {
      near: false,
      all: true
    };
    $rootScope.hospitals = [   //hospital details, set manually,instead of using spatialite
      ['AMO01', 'Dr. (Sqn. Ldr) Arun Jeet Dhir', 'AMO', 'Dr. (Sqn. Ldr) Arun Jeet Dhir, Astley Hall, Dehradun', '2653631', ' ', ' ', '10:00AM - 1:00PM', '78.04660034', '30.32719994'],
      ['AMO01', 'Dr. (Sqn. Ldr) Arun Jeet Dhir', 'AMO', 'Dr. (Sqn. Ldr) Arun Jeet Dhir, 57, Araghar, Dehradun', '2671863', ' ', ' ', '9:00AM - 10:00AM & 7:00PM - 8:00PM', '78.04949951', '30.30739975'],
      ['AMO01', 'Dr. (Sqn. Ldr) Arun Jeet Dhir', 'AMO', 'Dr. (Sqn. Ldr) Arun Jeet Dhir, IIRS Campus, Dehradun', ' ', ' ', ' ', '3:00PM - 5:00PM', '78.04750061', '30.34079933'],
      ['AMO02', 'Dr. (Mrs.) Naresh Bhandari', 'AMO', 'Dr. (Mrs.) Naresh Bhandari, D.L. Raod, Dehradun', '2741271', ' ', ' ', '5:30PM - 8:00PM', '78.06220245', '30.33460045'],
      ['AMO02', 'Dr. (Mrs.) Naresh Bhandari', 'AMO', 'Dr. (Mrs.) Naresh Bhandari, New Cantt Road, Hathibarkala, Dehradun.', ' ', ' ', ' ', '9:30PM - 1:30PM', '78.05020142', '30.34149933'],
      ['AMO03', 'Dr. Rakesh Mittal', 'AMO', 'Dr. Rakesh Mittal, 43, Tagore Villa, Dehradun.', '2715650', '2621598, 2629670', ' ', '11:00AM - 2:00PM & 5:30PM - 8:00PM', '78.03489685', '30.32760048'],
      ['DR001', 'Dr. B. Kumar Clinic', 'Specialist Doctor', 'Dr. B. Kumar Clinic, 13/2 New Road (Opp. MKP College), Dehradun', '2656600', '2654730', 'Ear, Nose & Throat', '9:00AM - 1:00PM & 5:00PM - 8:00PM', '78.04329681', '30.31749916'],
      ['DR002', 'Dr. Ashwing Garg', 'Specialist Doctor', 'Dr. Ashwing Garg, Garg Ear Nose Throat Clinic, Amba Complex, 112, Chakrata Road, Near Krishan Nagar Chowk, Dehradun', '2531188', ' ', 'Ear, Nose & Throat', '10:30AM - 1:00PM & 5:30PM - 8:00PM', '78.02780151', '30.33250046'],
      ['DR003', 'Dr. Mukesh Danda', 'Specialist Doctor', 'Dr. Mukesh Danda, 20/2, New Road, Dehradun', '2654445', '2658145', 'Dental', '10:00AM - 2:00PM & 5:00PM - 8:00PM', '78.04709625', '30.31679916'],
      ['DR004', 'Dr. Naveen Sardana', 'Specialist Doctor', 'Dr. Naveen Sardana, 1, Paltan Bazar, Ghoshi Gali, Dehradun', '2653493, 2657663', '2654730', 'Dental', '11:00AM - 2:00PM & 5:00PM - 8:00PM', '78.04309845', '30.31669998'],
      ['DR005', 'Dr. Sachin Rastogi', 'Specialist Doctor', 'Dr. Sachin Rastogi, Rastogi Dental Clinic, Chanakya Tower, Dilaram Bazar, Opp. Dilaram Mandir, Rajpur Road, Dehradun', '9412052826', ' ', 'Dental', '9:00AM - 2:00PM & 5:00PM - 8:30PM', '78.05619812', '30.33690071'],
      ['DR006', 'Dr. Nitish Kamboj', 'Specialist Doctor', 'Dr. Nitish Kamboj, Luxmi Dental Care & Implant Centre, F-4, Nehru Colony, Near Rispana Bridge, Haridwar Road, Dehradun.', '3201049', ' ', 'Dental', '10:00AM - 7:30PM', '78.05519867', '30.29669952'],
      ['DR007', 'Dr. B.S. Judge', 'Specialist Doctor', 'Dr. B.S. Judge, Tagore Villa,  Dehradun', '2657902', '2650081, 2655482', 'Skin', '5:00PM - 8:00PM', '78.03510284', '30.32649994'],
      ['DR008', 'Dr. (Mrs.) Neelam Tiwari', 'Specialist Doctor', 'Dr. (Mrs.) Neelam Tiwari, 6, Tilak Road, Dehradun', '2629395', ' ', 'Gynecologist & Dermatologist', '9:00AM - 1:00PM & 5:00PM - 7:00PM', '78.01670074', '30.32570076'],
      ['DR008', 'Dr. (Mrs.) Neelam, Tiwari', 'Specialist Doctor', 'Dr. (Mrs.) Neelam, Tiwari Nursing Home, 3, Chakrata Road, Near Bindal Bridge, Dehradun', ' ', ' ', 'Gynecologist & Dermatologist', '5:00PM - 7:00PM', '78.03170013', '30.32670021'],
      ['DR009', 'Dr. (Mrs.) Latika Joshi', 'Specialist Doctor', 'Dr. (Mrs.) Latika Joshi, 1, New Road,  Dehradun', '2653902', '2656316', 'Child', '10:00AM - 2:00PM & 6:00PM - 8:00PM', '78.04290009', '30.31940079'],
      ['DR009', 'Dr. (Mrs.) Latika Joshi', 'Specialist Doctor', 'Dr. (Mrs.) Latika Joshi Nursing home, 44, E.C road, Dehradun', ' ', ' ', 'Child', ' ', '78.04920197', '30.31710052'],
      ['DR010', 'Dr. Shashendera Saxena', 'Specialist Doctor', 'Dr. Shashendera Saxena, 30/13-A, Subhash Road, Dehradun', '2740497', ' ', 'Neurosurgery & Neurology', '11:00AM - 2:30PM & 6:00PM - 7:30PM', '78.04949951', '30.32889938'],
      ['DR011', 'Dr. P.K. Gupta', 'Specialist Doctor', 'Dr. P.K. Gupta, Gandhi Road, Near Jain Dharamshala, Dehradun', '2621343', ' ', 'Psychiatry Specialist', '10:30AM - 3:00PM & 5:00PM - 8:00PM', '78.03559875', '30.31459999'],
      ['DR012', 'Dr. Bhushan Kumar', 'Specialist Doctor', 'Dr. Bhushan Kumar, 15, Astley Hall, Rajpur Road, Dehradun', '2658054', ' ', 'Chest & Consultant Physician', ' ', '78.04660034', '30.32819939']];
    var tilesDict = {
      openstreetmap: {    //This will create map by using png tiles stored in img folder
        url: "img/mapTiles/{z}/{x}/{y}.png",
        options: {
          attribution: 'IIRS, LBS Healthcare Services'  //Set water mark at bottom of the map
        }
      }
    };
    var markers = {   //initializing markers object
      userMarker: {  // default user marker, setting it to center of dehradun, this userMarker will update after getting user current location 
        lat: 30.3165, //these are dehradun lat lang.
        lng: 78.0322,
        message: "You are here!",
        focus: true,
        draggable: false,
        icon: {
          iconUrl: 'img/user.png',
          iconSize: [30, 38],
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
        }
      }
    };
    var hf;
    for (var i in $rootScope.hospitals) {  // Creating markers for each hospital in hospital list by using their lat and lng
      hf = $rootScope.hospitals[i];
      markers[hf[0]] = {
        lat: parseFloat(hf[hf.length - 1]),
        lng: parseFloat(hf[hf.length - 2]),
        message: hf[1] + "(" + hf[0] + ")",
        focus: false,
        draggable: false,
        icon: {
          iconUrl: 'img/hospital.png',
          iconSize: [38, 38],
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
        }
      };
    }

    angular.extend($scope, {     // This will show markers on map
      center: {
        lat: 30.3165,
        lng: 78.0322,
        zoom: 13
      },
      markers: markers,
      defaults: {
        scrollWheelZoom: false,
        maxZoom: 15,
        minZoom: 9,
      },
      tiles: tilesDict.openstreetmap,
    });

    $scope.$on('leafletDirectiveMap.load', function (event) { // function executes after map loading at html
      window.map.on('popupopen', function (evt) {  // This function is show hospital details whenever user clicks on hospital marker
        if (evt.popup._content.indexOf("(") != -1) {
          var hid = evt.popup._content.split('(')[1].split(')')[0];
          $state.go('tab.details', { hid: hid });
        }
      })
    });

    $scope.showAll = function () {
      if ($scope.locate.all) {
        $scope.near = false;
      }
      else {

      }

    }
    $scope.setCurrentLocation = function () {
      if ($scope.locate.near) {
        $scope.locate.all = false;
        navigator.geolocation.getCurrentPosition( //  this is cordova plugin function to get user location,
          function (position) {   // on successful track of user location
                $scope.ulocation = {  // saving user location for future use
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                $scope.markers['userMarker'] = {  // Creating user marker using user location from above, to locate user on map
                  lat: $scope.ulocation.lat,
                  lng: $scope.ulocation.lng,
                  message: "You are here",
                  focus: true,
                  draggable: false,
                  icon: {
                    iconUrl: '../img/user.png',
                    iconSize: [30, 38],
                    shadowSize: [68, 95],
                    shadowAnchor: [22, 94]
                  }
                }
                angular.extend($scope, {
                  markers: markers
                });
          },
          function () {   //on error getting user location
              alert('Error getting user location, Please turn on your GPS settings');
          },
          { setView: true, enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 } //some options to get accurate position of the user
          );
        window.map.locate();
      }
      else {
        $scope.locate.all = true;
      }
    }

  })

  .controller('SearchCtrl', function ($scope, Chats) {
  })



  .controller('DetailsCtrl', function ($scope, $rootScope, $stateParams) {
    if ($rootScope.hospitals) {
      $scope.hospital = $rootScope.hospitals.filter(function (h) {
        if (h[0] == $stateParams.hid) {
          return true;
        }
      })[0];
      console.log($scope.hospital);
    }

  });
