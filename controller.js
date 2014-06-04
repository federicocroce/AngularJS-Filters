/**
 * Created by fede on 03/06/2014.
 */

function filterController($scope)
{
$scope.staff =
    [
        {name:'Fede', surname: 'Croce', firstDay: new Date(), salary: '5000', cel: 123456789},
        {name:'Nico', surname: 'Croce', firstDay: new Date(), salary: '5000', cel: 123456789},
        {name:'Eli', surname: 'Sternari', firstDay: new Date(), salary: '5000', cel: 123456789},
        {name:'Hector', surname: 'Croce', firstDay: new Date(), salary: '5000', cel: 123456789},
        {name:'Juan', surname: 'Sternari', firstDay: new Date(), salary: '5000', cel: 123456789}
    ];
    $scope.orderFor = function (order)
    {
       $scope.orderSelected = order;
    }
};