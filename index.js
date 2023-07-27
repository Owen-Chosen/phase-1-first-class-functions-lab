// Code your solution in this file!
 const returnFirstTwoDrivers = function (arrayOfDrives) {
    return arrayOfDrives.slice(0,2);
 }

 const returnLastTwoDrivers = function (arrayOfDrives) {
    return arrayOfDrives.slice(-2);
 }

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier (value) {
    return (function (value){
        return value**2;
    });
 }

 function fareDoubler(fare) {
    return fare * 2;
 }

 function  fareTripler (fare) {
    return fare * 3;
 }

 function selectDifferentDrivers(arrayOfDrivers, toDo) {
    return toDo (arrayOfDrivers);
 }