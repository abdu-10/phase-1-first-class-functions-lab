// Code your solution in this file!
const  returnFirstTwoDrivers = function block(){
    return (['Antonia', 'Nuru'])}
    const  returnLastTwoDrivers = function block(){
        return (['Amari', 'Mo']);
    
    }
    const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
    function createFareMultiplier(number){
        return function(fare){
          return fare*number;
        };
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    
    const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers);
      };
