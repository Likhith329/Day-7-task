let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        let data=JSON.parse(xhr.responseText)
        let asiandata=data.filter(x=>{
            return x.region=="Asia"
        })
        console.log("COUNTRIES WITHIN THE REGION ASIA")
        console.log(asiandata)
        let popudata=data.filter(x=>{
            return x.population<200000
        })
        console.log("COUNTRIES WITH POPULATION LESS THAN 200000")
        console.log(popudata)
        


        console.log("NAME CAPITAL AND FLAG OF DIFFERENT COUNTRIES")
        data.forEach(x=>{
            console.log(`
            Name: ${x.name.common}
            Capital: ${x.capital}
            Flag: ${x.flag}
            `)
        
            
        })
        console.log("TOTAL POPULATION")
        let totpop=data.reduce((p,c)=>{
            return p+c.population
        },0)
        console.log(totpop)
       
         console.log("COUNTRIES WITH US DOLLAR AS CURRENCY( tried my level but getting some error)")
     data.forEach(x=>{
         if( x.currencies.USD!=undefined){
        console.log(x.name.common)}
     }
     )
        



    }
    else{
        console.log("error")
    }
}
