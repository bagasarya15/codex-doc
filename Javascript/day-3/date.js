//Create obect date with constructor
const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());

// Get info hour minute
const hours = today.getHours();
//PadStart menambah 2 digit '0' jika jamnya dibawah 2 digit dibawah 10
const minute = today.getMinutes().toString().padStart(2,'0');
// const minute2 = today.getMinutes().toString();
console.log(`Jam ${hours}:${minute}`);

//Create new Date with argument
const tomorrow = new Date(2021, 8, 23)
console.log(tomorrow)

// Initial date with formated date
const eventDate = new Date ('2021-08-12T03:24:00Z')
console.log(eventDate);