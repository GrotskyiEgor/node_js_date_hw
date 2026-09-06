import moment from "moment"

const my_moment = moment()

const yearDaysCount = 365

function getCurrentDay(){
    console.log(my_moment.format('dddd'))
}

function getCurrentMonth(){
    console.log(my_moment.format("MMMM"))
}

function getCurrentYear(){
    console.log(my_moment.year())
}

function getCurrentDate(){
    console.log(my_moment.format("dddd, MMMM D, YYYY"))
}

function isWeekend(){
    const weekday = Number(my_moment.format("d"))

    if (weekday === 6 || weekday === 0) {
        console.log("Today is a weekend")
    }

    console.log("Today is a weekday")
}

function getDaysUntilNewYear(){
    const currentDay = my_moment.dayOfYear()

    console.log(yearDaysCount - currentDay, " days until New Year")
}

function getAge(date){
    const birthDate = moment(date)
    let age = my_moment.year() - birthDate.year()

    if (birthDate.month() > my_moment.month() || (birthDate.month() === my_moment.month() && birthDate.date() > my_moment.date())){
        age--
    }

    console.log(`You are ${age} years old`)
}

function getDaysUntilBirthday(date){
    const birth = moment(date)
    const today = my_moment

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