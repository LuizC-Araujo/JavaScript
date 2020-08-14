// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

//look for a name and if this name has a property return it
function lookUpProfile(name, prop){
    var nome = true;
    var propriedade = true;
    for(var i = 0; i < contacts.length; i++){
        console.log(name == contacts[i])
        if(name == contacts[i].firstName){
            if(contacts[i].hasOwnProperty(prop)){
                console.log(contacts[i][prop])
                return contacts[i][prop];
            }else{
                propriedade = false;
            }
        }else {
            nome = false;
        }
    }
    if(!propriedade)
        return "No such property";
    if(!nome)
        return "No such contact";
}


lookUpProfile("Kristian", "lastName");
