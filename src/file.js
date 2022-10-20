//const { readFileSync } = require("fs")
const ParseField=require("./parseField")
const { readFileSync } = require("fs")
const { erro } = require("../mock/typerr")
const { join } = require("path")



const theFaultOutput = {
    length: 6,
    Headers: ["id", "name", "instruction", "age"]
}
class File {
    static async showResult(filepath) {
        const file = await File.getContent(filepath)
        const peace = File.parseTxtToJson(file)
        return peace
       
    }

    static getContent(filepath) {
        const getCsvContent = join(__dirname, filepath)
        const data = readFileSync(getCsvContent, "utf-8")//I remove a callback coz im using promise return
        return data
    }
    static checkHeader(filepath, options = theFaultOutput) {
        if (filepath.length <= 0) {
            return {
                error: erro.EmptyFile,
                valid: false
            }
        }
        const becomeArray = filepath.split("\n")
        if (becomeArray.length > 0) {
            const [headers, ...contentRest] = becomeArray
            if (headers != theFaultOutput.Headers.join(",")) {
                return {
                    error: erro.WrongHeader,
                    valid: false
                    }
                }
        }
        
        
        if (becomeArray.length > 0 && becomeArray.length != theFaultOutput.length) {
            return {
                error: erro.WrongBody,
                valid: false
            }
        }
        return {
            valid: true
        } 

    }
    static parseTxtToJson(filepath){
        const peaceSplit = filepath.split("\n") 
        const peaceFile = peaceSplit.shift()
        const headers = peaceFile.split(",")
       
        const users = peaceSplit.map(line=>{
            const column = line.split(",")
            let id 
            let user = {}
            for (const index in column) {
               
                user[headers[index]] = column[index]
                
            }
            return new ParseField(user)
        })
        return users
        
       
        
    }
}




module.exports=File