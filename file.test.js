const File = require("./src/file")
const {promisify} = require("util")
const {erro} = require("./mock/typerr")
const {rejects,deepStrictEqual} = require("assert")
    ; //Using closure, when you call a built in function you must use semicolon
(async ()=>{
    /*{
        const filepath = "./../mock/empty-file.txt"
        const Expected=new Error(erro.EmptyFile)
        const file = File.showResult(filepath)
        rejects(file,Expected)
    }
    {
        const filepath = "./../mock/fileContent.txt"
        const Expected=new Error(erro.WrongHeader)
        const file = File.showResult(filepath)
        rejects(file,Expected)
    }
    {
        const filepath = "./../mock/fileCorrect.txt"
        const Expected=new Error(erro.WrongBody)
        const file = File.showResult(filepath)
        rejects(file,Expected)
    }*/
    {
        const filepath = "./../mock/fileCorrect.txt"
        const Expected=[
            {
                "id":1,
                "name":"Victorino",
                "instruction":"SoftwareEng",
                "birthdayYear":21

            },
            {
                "id":2,
                "name":"Juliano",
                "instruction":"Developer",
                "birthdayYear":17

            },
            {
                "id":3,
                "name":"Arthur",
                "instruction":"SoftwareEng",
                "birthdayYear":19

            },
            {
                "id":4,
                "name":"Rui",
                "instruction":"SoftwareEng",
                "birthdayYear":21

            },
        ]
        const file = await File.showResult(filepath)
        deepStrictEqual(JSON.stringify(file),JSON.stringify(Expected))
    }
})();