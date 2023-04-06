//get info year
const today = new Date();
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())


//get info jam
const hours = today.getHours()
const minute = today.getMinutes().toString().padStart(2,'0'); // padstartl berlaku untuk under minit 10
console.log(`Jam ${hours} : ${minute}`)

//create new date with argument
const tomorrow = new Date(2021,8,23)
console.log(tomorrow)

//adding date
const now = new Date()
const currentDate = now.getDate();
now.setDate(currentDate + 10)
console.log(`Tanggal esok ${now}`)

