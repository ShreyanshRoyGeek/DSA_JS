/*
    Design a Parking Lot System

    Question - Design a parking lot system that supports:
        1. Signle entry and exit gates.
        2. Multiple entry and exit gates. The system should manage parking space allocation and vehicle tracking efficiently.
    
*/


let ParkingLot = (() => {
    let instance;

    class ParkingLot {

        constructor(totalSlots, gates) {
            this.totalSlots = totalSlots;
            this.availableSlots = totalSlots;
            this.gates = gates;
            this.parkedVehicles = new Map();
            this.nextSlot = 0
        }

        parkedVehicle(vehicleNumber) {
            if(this.availableSlots <= 0) {
                return 'No Slots Available'
            }
            else {
                this.parkedVehicles.set(this.nextSlot, vehicleNumber)
                this.availableSlots--
                return `Vehicle number ${vehicleNumber} parked at the slot ${this.nextSlot++}`
            }
        }

        removeVehicle(vehicleNumber) { 
            for(let [slot, number] of this.parkedVehicles) {
                if(number == vehicleNumber) {
                    this.parkedVehicles.delete(slot)
                    this.availableSlots++
                    return `Vehicle ${vehicleNumber} removed from the slot ${slot}`
                }
            }

            return `Vehicle number ${vehicleNumber} not found!`
        }

        getAvailableSlots() {
            return this.availableSlots
        }

    }

    return {
        getInstance: (totalSlots, gates) => {
            if(!instance) {
                instance = new ParkingLot(totalSlots, gates)
            }
            return instance
        }
    }

})()


// Test Case
let lot = ParkingLot.getInstance(100, [{entry : true, exit : true}])
console.log(lot.parkedVehicle('BR0015'))
console.log(lot.removeVehicle('BR0015'))
console.log(lot.getAvailableSlots())


