// 3,4,5 are connected
//import
const names  = require('./4');
const greetMe = require('./5');
const persons = require('./6');

greetMe(names.a);
greetMe(names.b);
greetMe(persons.singlePerson.name)
greetMe(persons.items[0])
require('./7');
//require will import it and execute it
