class LRU {

    constructor(max = 5) {
        this.max = max
        this.chache = new Map()
    }

    get(key) {

        const item = this.chache.get(key)

        if(item) {
            this.chache.delete(key)
            this.chache.set(key, item)
        }

        return item
    }

    set(key, value) {

        if(this.chache.has(key)) this.chache.delete(key)

        else if(this.chache.size == this.max) {
            this.chache.delete(this.first())
        }

        this.chache.set(key, value)
    }

    first() {
        return this.chache.keys().next().value
    }

}

const LRUCache = new LRU(3)

LRUCache.set("Name", "Shreyansh")
LRUCache.set("Age", "26")
LRUCache.set("Place", "Bangalore")

console.log(LRUCache)

LRUCache.get("Name")

console.log(LRUCache)

LRUCache.set("Designation", "SDE")

console.log(LRUCache)

