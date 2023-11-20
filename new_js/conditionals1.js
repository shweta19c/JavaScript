/* 😎 Sunglasses App 😎 */

/*  Protocols: 
    -If it is sunny outside, tell the user to wear sunglasses.
    -Otherwise, tell them not to wear sunglasses. 
    
    Assumption:
    -It must be sunny or not sunny (there are no other possibilities).*/

    var sunny = true;    
    if(sunny==true){
        console.log("Wear sunglasses");
    }
    else
    {
        console.log("Don't wear sunglasses");
    }

    /*🚦 Traffic Simulator 🚗 */

/*  Protocols: 
    -If the light is green, the driver should go.
    -If the light is red, the driver should stop.
    -If the light is yellow, the driver should slow down.
    -If the light is broken, the driver should exercise caution.
    
    Assumption: 
    - The light can only be green, red, yellow, or broken. */
    //With if - else if
    /*
    var light = "green";

    if(light == "green"){
        console.log("The driver should go.");
    }
    else if(light == "red"){
        console.log("The driver should stop.");
    }
    else if(light == "yellow"){
        console.log("The driver should slow down.");
    }
    else{
        console.log("The driver should exercise caution.");
    }
    */
    
    //With switch statements

    var light = "green";
    switch(light){
        case "green":
            console.log("The driver should go.");
            break;
        case "red":
            console.log("The driver should stop.");
            break;
        case "yellow":
            console.log("The driver should slow down.");
            break;
        case "default":
            console.log("The driver should exercise caution.");
            break;
    }

    /* ☀️ Weather App 🌧

    Clothing Advice: 
        -If the weather is "sunny", tell the user to "Wear shorts and a t-shirt.". 
        -If the weather is "cold", tell the user to "Wear a coat."
        -If the weather is "rainy", tell the user to "Wear a rain jacket."
        -If the weather is "in-between", tell the user to "Wear a sweater." 
        
    Tornado Warning: 
        -If there is a tornado warning in effect, tell the user "🚨Tornado Warning!🚨 "
        -Otherwise, tell the user "The weather is normal."
        
    Seven-Day Forecast
          - If the app receives a forecast for day 1, display the day as "Monday." 
            For day 2, display "Tuesday" — etc., all the way up to day 7 ("Sunday"). 
          - If it receives a forecast for day 8 or higher, register that the 
            "maximum number of forecasts has been reached."
*/

var tornadoWarning = false;
var weather = "sunny"; 
var day = 8; 

if(weather == "sunny"){
    console.log("Wear shorts and a t-shirt.");
}
else if(weather == "cold"){
    console.log("Wear a coat.");
}
else if(weather == "rainy"){
    console.log("Wear a rain jacket.");
}
else{
    console.log("Wear a sweater." );
}

if(tornadoWarning == true){
    console.log("🚨Tornado Warning!🚨 ");
}
else
{
    console.log("The weather is normal.");
}

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("maximum number of forecasts has been reached.");
}

