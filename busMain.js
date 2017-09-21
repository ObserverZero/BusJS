/*
 BusJS data communication system.
 */



// Main BusJS Object
function BusJS(data){
    busData = data;
}


// Defaults for the address field
// parcel object.
BusJS.prototype.parcelDefaults = {
    console: {
        string: {
            format: "string"
        },
        array: {
            format: "iterated"
        }
    },
    me: {},
    localDB: {},
}

BusJS.prototype.defineAddress = () => {
    // TODO: address name
    // TODO: type of destination
    // TODO: defaults
}

Object.defineProperty(BusJS, "wow", {
});


BusJS.prototype.primaryPackageInterpreter = () => {
}


BusJS.prototype.console = (attributes = {format: "normal"}) => {
    if (attributes.format === "array") {
        busData = busData.split(' ');
        for (i in busData){
            console.log(busData[i]);
        }
    } else {
        console.log(busData);
    }
    return this;
}

BusJS.prototype.me = () => {
    return busData;
}


BusJS.prototype.internal = {};


BusJS.prototype.internal.stringToArray = () => {
    if (busData === String) {
        busData = busData.split(' ');
    } else {
        console.log("not a string");
    }
    return self;
}



var Bus = (data) => {
    return new BusJS(data);
}








var something;


Bus(thisPackageOfMine)
    .mySetOfAddresses();





