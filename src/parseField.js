class ParseField{
    constructor({id,name,instruction,birthdayYear}){
        let day = new Date()
        this.id=parseInt(id)
        this.name=name
        this.instruction=instruction
        this.birthdayYear=day.getFullYear() - parseInt(birthdayYear)
    }
}

module.exports =ParseField
