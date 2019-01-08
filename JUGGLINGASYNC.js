const http =require('http')
const bl=require('bl')
const arrs=process.argv.slice(2)
const async = require('async')
async.eachSeries(arrs,(url,callback)=>{
    http.get(url, response=> {
        response.pipe(bl((err, data)=> {
          if (err) return callback(err)
          data = data.toString()
          console.log(data)
          callback()

        }))
      })
})
