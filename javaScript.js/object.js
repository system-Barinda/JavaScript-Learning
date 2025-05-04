const data = [
    {id:2,name:"barinda",location:"muhanga"},
    {id:3,name:"beathy",location:"kgl"},
    {id:34,name:"claire",location:"muhanga"},
    {id:67,name:"grace",location:"rwamagana"},
    {id:90,name:"sandrine",location:"huye"},
    {id:10,name:"system",location:"ruhango"}
];
const person = data.find(item => item.id === 90);
if(person)
{
    person.name = "vivant";
}
console.log("wait !................");
data.map((user) => {
      setTimeout(() => {
        console.log(user.name);
      },3000);
})
