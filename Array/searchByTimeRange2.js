const orderData = [
    {orderId: 1, timeOfEntry: "10:20"},
    {orderId: 2, timeOfEntry: "11:30"},
    {orderId: 3, timeOfEntry: "12:40"},
    {orderId: 4, timeOfEntry: "12:50"},
    {orderId: 4, timeOfEntry: "15:05"},
    {orderId: 4, timeOfEntry: "15:08"},
    {orderId: 4, timeOfEntry: "15:55"},
]



const searchOrderWithInInterval = (orderData, startTime, endTime) => {

    startTime = startTime.split(':')
    endTime = endTime.split(':')

    let startMinute = startTime[0]
    let startSecond = startTime[1]

    let endMinute = endTime[0]
    let endSecond = endTime[1]

    // console.log(startMinute)
    // console.log(endMinute)


    let filterMinuteRange = orderData.filter(data => {

        const dataTime = data.timeOfEntry.split(':')
        const dataMinute = dataTime[0]
        // console.log(dataTime)

        if(dataMinute >= startMinute && dataMinute <= endMinute) {
            return true
        }

    })

    console.log("filterMinuteRange", filterMinuteRange)

    const filterMinuteAndSecondRange = []


    for(let ele of filterMinuteRange) {

        const eleTime = ele.timeOfEntry.split(':')
        const eleMinute = eleTime[0]
        const eleSecond = eleTime[1]

        let matchData = false

        if(eleMinute == startMinute) {

            if(eleSecond >= startSecond){
                matchData = true
            }
        }

        else if(eleMinute == endMinute) {
            
            if(eleSecond <= endSecond) {
                matchData = true
            }
        }

        else {
            matchData = true
        }

        if(matchData) {
            filterMinuteAndSecondRange.push(ele)
        }

    }

    return filterMinuteAndSecondRange
    
}


// const orderData = []
// for(let ele of bulkdata) {
    // const time = ele.timeOfEntry.split(":")
    // const obj = { orderId: ele.orderId, timeOfEntry: {minute , second}}
// }


const res = searchOrderWithInInterval(orderData, "11:40", "15:07")
console.log(res)

