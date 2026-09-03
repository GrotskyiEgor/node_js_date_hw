console.log("hi node")

const moment = require("moment")

const yearDaysCount = 365

function getCurrentDay(){
    console.log(moment().format('dddd'))
}

function getCurrentMonth(){
    console.log(moment().format("MMMM"))
}

function getCurrentYear(){
    console.log(moment().year())
}

function getCurrentDate(){
    console.log(moment().format("dddd, MMMM D, YYYY"))
}

function isWeekend(){
    const weekday = Number(moment().format("d"))

    if (weekday === 6 || weekday === 7) {
        console.log("Today is a weekend")
    }

    console.log("Today is a weekday")
}

function getDaysUntilNewYear(){
    const currentDay = moment().dayOfYear()

    console.log(yearDaysCount - currentDay, " days until New Year")
}

function getAge(date){
    const birthDate = moment(date)
    let age = moment().year() - birthDate.year()

    if (birthDate.month() > moment().month() || (birthDate.month() === moment().month() && birthDate.date() > moment().date())){
        age--
    }

    console.log(`You are ${age} years old`)
}

function getDaysUntilBirthday(date){
    const birth = moment(date)
    const today = moment()

    const nextBirthday = moment({ year: today.year(), month: birth.month(), date: birth.date() })

    if (today.isAfter(nextBirthday, "day")) {
        nextBirthday.add(1, "years")
    }

    const daysLeft = nextBirthday.diff(today, 'days')
    console.log(daysLeft, " days until your birthday")
}

getCurrentDay()
getCurrentMonth()
getCurrentYear()
getCurrentDate()
isWeekend()
getDaysUntilNewYear()

getAge("2009-01-08")
getDaysUntilBirthday("2009-01-08")