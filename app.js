var PortfolioApp = angular.module('PortfolioApp',['ngMaterial','ngAnimate']).value('duScrollDuration', 1000);

PortfolioApp
.run([function(){
}])
.config(['$locationProvider',function($locationProvider) {
    $locationProvider.html5Mode({ enabled: false });
}])
.controller('MainCtrl', ['$scope', function($scope){
    $scope.page = 'home'
    $scope.title = 'Public Tranist Procurement Consultant';
    $scope.paragraph = 'Buy America & Public transit rail and bus rolling stock procurements Buy America Pre-Award and Post-Delivery audits Buy American regulatory and compliance reviews, Federal Transit Administration rolling stock procurements Federal Railroad Administration rolling stock procurements Amtrak rolling stock procurements cost/price analysis, contract audits, incurred cost reviews, operational reviews, fleet planning, contract negotiations, claims settlement litigation support. Expert witness testimony operational reviews';
    $scope.setContent = function(page) {
        switch(page) {
            case 'home':
                $scope.page = page
                $scope.title = 'Public Tranist Procurement Consultant';
                $scope.paragraph = 'Buy America & Public transit rail and bus rolling stock procurements Buy America Pre-Award and Post-Delivery audits Buy American regulatory and compliance reviews, Federal Transit Administration rolling stock procurements Federal Railroad Administration rolling stock procurements Amtrak rolling stock procurements cost/price analysis, contract audits, incurred cost reviews, operational reviews, fleet planning, contract negotiations, claims settlement litigation support. Expert witness testimony operational reviews';
                break;
            case 'about':
                $scope.page = page
                $scope.title = 'About Steve';
                $scope.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptas cum a repudiandae. Eaque, veritatis, debitis. Officiis ipsum quae laboriosam, id illum aperiam, est adipisci! Obcaecati dolore iusto natus quasi.';
                break;
            case 'contact':
                $scope.page = page
                $scope.title = 'Contact Me';
                $scope.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iste doloribus nulla recusandae accusamus, pariatur error tempora impedit totam soluta inventore iusto facere asperiores consectetur numquam, nostrum, libero ipsam quo.';
                break;
            case 'services':
                $scope.page = page
                $scope.title = 'Services';
                $scope.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odio, obcaecati ullam, atque fugit, laudantium dolore facere ab maiores dolorem numquam deleniti distinctio maxime enim dicta minus perspiciatis. Debitis, illo!';
                break;
            case 'credentials':
                $scope.page = page
                $scope.title = 'Credentials';
                $scope.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, cupiditate deserunt obcaecati repellat iste saepe iusto dolore odit eum! Cum omnis ea, modi ratione nostrum distinctio explicabo esse porro officiis.';
                break;
        }
    }
}])