const myModule=require('./exported.js')
const direction=process.argv[2]
const extention = process.argv[3]

myModule(direction,extention,(err,list)=>{
    if(err) return console.error(err)
    list.forEach(element => {
        console.log(element)
    });
})