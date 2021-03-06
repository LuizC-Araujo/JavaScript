// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

//function receives id property and value
//add new property or change it in the object
function updateRecords(id, prop, value) {
  if(prop != "tracks" && value != ""){
    collection[id][prop] = value;
  }else{
    if(collection[id].hasOwnProperty("tracks") && value != ""){
      collection[id].tracks.push(value);
    }else if(collection[id].hasOwnProperty(prop) & value == ""){
      delete collection[id][prop];
    }else{
      var array = [];
      collection[id].tracks = array;
      collection[id].tracks.push(value);
    }
  }
  return collection;
}

updateRecords(5439, "artist", "ABBA");
