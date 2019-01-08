const fs =require('fs')
const path=require('path')
module.exports =(dir,ext,callback)=>{
    ext="."+ext
    fs.readdir(dir,(err,list)=>{
        if(err) return callback(err)
        const filteredList=list.filter(el=>{
            return path.extname(el)===ext
        })
        return callback(null,filteredList)
    })
}
