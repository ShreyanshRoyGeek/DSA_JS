/*
    973. K closest point to origin --> (Medium)

    Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane 
    and an integer k, return the k closest points to the origin (0, 0).

    The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
    You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

    Example 1:
    Input: points = [[1,3],[-2,2]], k = 1
    Output: [[-2,2]]            

    Example 2:
    Input: points = [[3,3],[5,-1],[-2,4]], k = 2
    Output: [[3,3],[-2,4]]


    Constraints:
    1 <= k <= points.length <= 104
    -104 <= xi, yi <= 104
    

*/



function kClosestOld(points, k) { // O(n * log n) 

    points.sort((a, b) => {
        let distA = Math.sqrt(a[0] ** 2 + a[1] ** 2)
        let distB = Math.sqrt(b[0] ** 2 + b[1] ** 2)
        return distA - distB
    })

    return points.slice(0, k)

}



/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
*/


var kClosest = function (points, k) {
    // Max-Heap storage: stores objects {dist, point}
    const maxHeap = [];

    // Helper to calculate squared distance
    const getDist = (p) => p[0] * p[0] + p[1] * p[1];

    for (const point of points) {
        const dist = getDist(point);

        // Push the new point into our heap
        insert(maxHeap, { dist, point });

        // If heap exceeds size K, remove the "farthest" (the max)
        if (maxHeap.length > k) {
            extractMax(maxHeap);
        }
    }

    // Map back to just the point coordinates
    return maxHeap.map(item => item.point);
};

// --- Minimized Heap Helpers ---

function insert(heap, node) {
    heap.push(node);
    let idx = heap.length - 1;
    while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        if (heap[parentIdx].dist >= heap[idx].dist) break;
        [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
        idx = parentIdx;
    }
}

function extractMax(heap) {
    if (heap.length === 1) return heap.pop();
    const max = heap[0];
    heap[0] = heap.pop();
    let idx = 0;
    while (true) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let largest = idx;

        if (left < heap.length && heap[left].dist > heap[largest].dist) largest = left;
        if (right < heap.length && heap[right].dist > heap[largest].dist) largest = right;
        if (largest === idx) break;

        [heap[idx], heap[largest]] = [heap[largest], heap[idx]];
        idx = largest;
    }
    return max;
}

function kClosestI(points, k) {

    let maxHeap = new MaxPriorityQueue({ priority: (point) => Math.sqrt(point[0] ** 2 + point[1] ** 2) })

    for (let point of points) {
        maxHeap.enqueue(point)
        if (maxHeap.size() > k) {
            maxHeap.dequeue()
        }

    }

    console.log(maxHeap) // for debugging
    console.log(maxHeap.toArray()) // for debugging

    let result = []
    while (!maxHeap.isEmpty()) {
        result.push(maxHeap.dequeue().element)
    }


    return result


}


let points = [[1, 3], [-2, 2]], k = 1
// console.log(kClosestI(points, k)) // [[-2,2]]

points = [[3, 3], [5, -1], [-2, 4]], k = 2
console.log(kClosestI(points, k)) // [[3,3],[-2,4]]

