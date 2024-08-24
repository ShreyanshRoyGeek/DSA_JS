class OrderEntry {
    constructor(orderID, timeOfEntry) {
        this.orderID = orderID;
        this.timeOfEntry = timeOfEntry;
    }
}

class OrderEntryList {
    constructor() {
        this.entries = [];
    }

    // Insert an order entry into the sorted list
    insert(orderID, timeOfEntry) {
        this.entries.push(new OrderEntry(orderID, timeOfEntry));
        this.entries.sort((a, b) => a.timeOfEntry - b.timeOfEntry);
    }

    // Search for order entries within a time range
    search(startTime, endTime) {
        const result = [];
        for (const entry of this.entries) {
            if (entry.timeOfEntry >= startTime && entry.timeOfEntry <= endTime) {
                result.push(entry);
            }
        }
        return result;
    }
}

// Example usage
const orderList = new OrderEntryList();
orderList.insert("1", { minutes: 10, seconds: 30 });
orderList.insert("2", { minutes: 10, seconds: 25 });
orderList.insert("3", { minutes: 20, seconds: 15 });
orderList.insert("4", { minutes: 20, seconds: 45 });
orderList.insert("5", { minutes: 20, seconds: 55 });

// Example time range (e.g., between 15 minutes and 30 seconds and 25 minutes and 0 seconds)
const startTime = { minutes: 10, seconds: 50 };
const endTime = { minutes: 18, seconds: 5 };

// const ordersWithinTimeRange = orderList.search(startTime, endTime);
// console.log("Orders within time range:", ordersWithinTimeRange);



const searchNew = (orderData, startTime, endTime) => {

    let minuteMatchRes = []

    for(let ele of orderData) {

        if(ele.timeOfEntry.minutes >= startTime.minutes &&  ele.timeOfEntry.minutes <= endTime.minutes) {
            minuteMatchRes.push(ele)
        }
    }

    console.log("minuteMatchRes", minuteMatchRes)

    let minuteAndsecondMatchRes = []

    for(let data of minuteMatchRes) {

        let dataMatch = false

        if(data.timeOfEntry.minutes == startTime.minutes)  {

            if(data.timeOfEntry.seconds >= startTime.seconds) {
                dataMatch = true
            }
        }

        else if(data.timeOfEntry.minutes == endTime.minutes) {

            if(data.timeOfEntry.seconds <= endTime.seconds) {
                dataMatch = true
            }
        }

        else {
            dataMatch = true
        }

        if(dataMatch) {
            minuteAndsecondMatchRes.push(data)
        }

    }


    return minuteAndsecondMatchRes




    // let tempArr = []

    // for(let ele of orderData) {

        // if(ele.timeOfEntry >= startTime &&  ele.timeOfEntry <= endTime) {
        //     tempArr.push(ele)
        // }

        // if(ele.timeOfEntry.minutes >= startTime.minutes && ele.timeOfEntry.minutes <= endTime.minutes) {
        //     // console.log(ele)
        //     if(ele.timeOfEntry.seconds >= startTime.seconds && ele.timeOfEntry.seconds <= endTime.seconds) {
        //         tempArr.push(ele)
        //     }
        // }
    // }

    // return tempArr

    // return orderData.filter(record => {

    //     let isSecondMatch = false 
    //     let startMinuteMatch = false
    //     let endMinuteMatch = false

    //     if(record.timeOfEntry.minutes == startTime.minutes) {
    //         startMinuteMatch = true
    //         isSecondMatch = true

    //     }

    //     else if(record.timeOfEntry.minutes == endTime.minutes) {
    //         endMinuteMatch = true
    //         isSecondMatch = true
    //     }

       
    //     // Check if minute falls within the range
    //     if((record.timeOfEntry.minutes !== startTime.minutes)) {

    //         // console.log(record.timeOfEntry.minutes)
    //         // console.log(endTime.minutes)

    //         const minuteInRange = record.timeOfEntry.minutes >= startTime.minutes && record.timeOfEntry.minutes <= endTime.minutes;
    //         return minuteInRange
    //         // console.log("minuteInRange", minuteInRange)
    //     }

    //     else if(record.timeOfEntry.minutes !== endTime.minutes) {

    //         const minuteInRange = record.timeOfEntry.minutes >= startTime.minutes && record.timeOfEntry.minutes <= endTime.minutes;
    //         return minuteInRange

    //     }

    //     // Check if second falls within the range
    //     else{
            
    //         const secondInRange = record.timeOfEntry.seconds >= startTime.seconds && record.timeOfEntry.seconds <= endTime.seconds;
    //         return secondInRange
    //     }
    //     // Return true if both minute and second are within the ranges
    //     // return minuteInRange && secondInRange;
    // });


}


// let orderData = [
//     {orderId : 1, timeOfEntry: { minutes: 10, seconds : 50}},
//     {orderId : 2, timeOfEntry: { minutes: 10, seconds : 40}},
//     {orderId : 3, timeOfEntry: { minutes: 12, seconds : 20}},
//     {orderId : 4, timeOfEntry: { minutes: 15, seconds : 10}},
// ]


// orderData = orderData.sort((a, b) => {
//     const miutes =  a.timeOfEntry - b.timeOfEntry
//     const seconds = a.timeOfEntry.seconds - b.timeOfEntry.seconds

//     return miutes && seconds
//     return miutes
// })

// console.log("orderData", orderData)

const bulkdata = [
    {orderId: 1, timeOfEntry: "10:20"},
    {orderId: 2, timeOfEntry: "11:30"},
    {orderId: 3, timeOfEntry: "12:40"},
    {orderId: 4, timeOfEntry: "12:50"},
    {orderId: 4, timeOfEntry: "15:05"},
    {orderId: 4, timeOfEntry: "15:08"},
    {orderId: 4, timeOfEntry: "15:55"},
]


let orderData = []

bulkdata.map((data) => {

    const time = data.timeOfEntry.split(":")
    const minutes = time[0]
    const seconds = time[1]

    const obj = { orderId: data.orderId, timeOfEntry: { minutes , seconds } }

    orderData.push(obj)

})

const searchParams = {
    startTime : { minutes: 12, seconds : 15 },
    endTime : { minutes: 15, seconds : 5 }
}


let filteredRecord = searchNew(orderData, searchParams.startTime, searchParams.endTime)
console.log("filteredRecords are", filteredRecord)





// // Sample array of records with minute and second data
// const records = [
//     { id: 1, minute: 10, second: 30 },
//     { id: 2, minute: 15, second: 45 },
//     { id: 3, minute: 20, second: 15 },
//     { id: 4, minute: 25, second: 30 },
// ];

// // Function to filter records based on time and second ranges
// function filterRecordsByTimeAndSecondRange(records, startMinute, endMinute, startSecond, endSecond) {
//     return records.filter(record => {
//         // Check if minute falls within the range
//         const minuteInRange = record.minute >= startMinute && record.minute <= endMinute;
//         // Check if second falls within the range
//         const secondInRange = record.second >= startSecond && record.second <= endSecond;
//         // Return true if both minute and second are within the ranges
//         return minuteInRange && secondInRange;
//     });
// }

// // Example: Filter records where minute is between 15 and 20 and second is between 20 and 40
// // const filteredRecords = filterRecordsByTimeAndSecondRange(records, 15, 20, 20, 40);
// // console.log(filteredRecords);

