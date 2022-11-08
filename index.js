

//returns a distance in blocks + calculates distances below 42nd street
function distanceFromHqInBlocks(pickupLocation){
    if(42 > pickupLocation) {
        return 42 - pickupLocation
    }else if(pickupLocation > 42 ) {
        return  pickupLocation - 42  
    }
}      

//note to self: b/c you set street as a parameter, you didn't need to declare with let/const. when you call the function, it'll know that the number is the parameter street


 // returns a distance in feet
 function distanceFromHqInFeet(pickupLocation) {
    console.log(pickupLocation)
        return distanceFromHqInBlocks(pickupLocation) * 264;  
}  
 
// distanceTravelledInFeet

function distanceTravelledInFeet(start, destination){
    console.log(start, destination)
        return Math.abs(destination - start) * 264
}

//calculatesFarePrice

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if(distance < 400) {
        return 0
    }
    if(distance > 401 && distance <=2000) {
        return (distance - 400) * .02 
    }
    if(distance > 2000 && distance <= 2500){
        return 25
    }
    else if(distance > 2500) {
        return 'cannot travel that far'} 
}