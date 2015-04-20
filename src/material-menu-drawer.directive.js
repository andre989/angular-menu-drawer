'use strict';



angular.module('materialMenuDrawer', [
    'snap',
    'angularRipple',
  ])
  .directive('materialMenuDrawer', function (snapRemote) {
    return {
      transclude: true,
      templateUrl: 'menu-mobile-agrigelateria.html',
      restrict: 'E',
      replace: true,
      scope: {
        menu: '=',
        topImage: '='
      },

      link: function (scope, element, attrs) {
        var el = angular.element(document.getElementById('drawer-button'));
        snapRemote.getSnapper().then(function (snapper) {
          var animating = false;
          snapper.on('start', function () {
            animating = false;
            el.css('opacity', '0');
          });
          snapper.on('open', function () {
            el.css('opacity', '0');
          });
          snapper.on('end', function () {
            if (!animating) {
              el.css('opacity', '1');
            }
          });

          snapper.on('close', function () {
            el.css('opacity', '0');
          });
          snapper.on('animating', function () {
            console.log("animating");
            animating = true;
          });
          snapper.on('drag', function () {
            console.log('animating');
            animating = true;
          });

          snapper.on('animated', function () {
            animating = false;
            var positionDrawerButton = snapper.state().state === 'closed' ? 0 : "266px";
            el.css('right', positionDrawerButton);
            el.css('opacity', '1');
          });

        });
      },
      controller: function ($scope) {
        $scope.goToSection = function (paramID) {
          var el = document.getElementById(paramID);
          if (el) {
            document.getElementById(paramID).scrollIntoView();
          }
        };
      }
    };
  });