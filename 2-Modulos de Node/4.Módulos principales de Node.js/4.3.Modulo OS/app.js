const os = require('os');

console.log(os.type()); // te dice el tipo de sistema operativo.
console.log(os.homedir()); //directorio principal.
console.log(os.uptime()); //tiempo transcurrido desde que empezó a usarse el sistema operativo (en segundos)
console.log(os.userInfo()); //información sobre el usuario