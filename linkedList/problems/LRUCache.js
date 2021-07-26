/**
 *  LRU Cache
 * 
 *  We are given total possible page numbers that can be referred. 
 *  We are also given cache (or memory) size (Number of page frames that cache can hold at a time). The LRU caching scheme is to remove the least recently used frame when the cache is full and a new page is referenced which is not there in cache.
 *  
 */

 class LRUCache {
   constructor(frameCapacity) {
     this.frameCapacity = frameCapacity;
     this.cache = new Map();
   }

   set(val) {
    if(!this.cache.has(val)) {
      this.cache.set(val, val);
    }
    if(this.cache.has(val)) {
      const value = this.cache.get(val);
      
      // To update the Map with recent entry
      this.cache.delete(value);
      this.cache.set(value, value);
    }
   }

   write(val) {
     let value = val
     if(this.cache.size === this.frameCapacity) {
       this.cache.delete(this.cache.keys().next().value);
       console.log(this.cache);
       this.cache.set(value, value);
     } else {
       this.set(value);
     }
   }

   getLru() {
     console.log(this.cache);
   }
 }







 /**
  *  process
  *  When a page is referenced, the required page may be in the memory. If it is in the memory, we need to detach the node of the list and bring it to the front of the queue. 
     If the required page is not in memory, we bring that in memory. In simple words, we add a new node to the front of the queue and update the corresponding node address in the hash. 
     If the queue is full, i.e. all the frames are full, we remove a node from the rear of the queue, and add the new node to the front of the queue.
  */



 var cache = new LRUCache(4)

 cache.write(1)
 cache.write(2)
 cache.write(3)
 cache.write(1)
 cache.write(4)
 cache.write(5)
 cache.getLru()

 