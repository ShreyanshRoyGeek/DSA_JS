/*
    1046. Last Stone Weight -> (Easy)

    You are given an array of integers stones where stones[i] is the weight of the ith stone.

    We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

    If x == y, both stones are destroyed, and
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
    At the end of the game, there is at most one stone left.

    Return the weight of the last remaining stone. If there are no stones left, return 0

*/


function lastStoneWeight(stones) {

    while (stones.length > 1) {

        stones.sort((a, b) => b - a);

        const x = stones.shift();
        const y = stones.shift();   

        if (x !== y) {
            stones.push(x - y);
        }       

    }

    return stones.length === 1 ? stones[0] : 0;

}



/*
    // Java variant - using PriorityQueue 


    public int lastStoneWeightNew(int[] stones) {

        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        for(int stone: stones) {
            pq.add(stone);
        }

        while(pq.size() > 1) {
            int x = pq.poll();
            int y = pq.poll();

            if(x > y) {
                pq.add(x-y);
            }
        }

        return pq.size() > 0 ? pq.peek() : 0;

    }

*/

