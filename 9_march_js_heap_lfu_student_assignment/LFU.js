class LFUCache {

    // actual array to store the cache and frequencies
    cache = [];

    constructor(a, b) {

        // set auto loading and expiration
        this.autoLoadingFactor = a;
        this.expirySeconds = b;

        // check for least frequent user at every expiration interval and remove it
        setInterval(() => {
            if (this.cache.length > 0) {
                var leastFrequentUser = this.cache.pop();
                console.log(`Cache for least frequent user: ${leastFrequentUser.id} expired.`);
                console.log(`Removing user: ${leastFrequentUser.id}`);
                console.table(this.cache);
            }
        }, this.expirySeconds);
    }

    // this function will insert a user or change the frequency of existing user
    insertUser(user) {
        console.log(`User: ${user.id} just visited the website...`);
        if (this.cache.length == 0) {
            user.frequency++;
            this.cache.push(user);
        }
        else {
            var userFoundFlag = false;
            for (var i in this.cache) {
                if (this.cache[i].id == user.id) {
                    this.cache[i].frequency++;
                    userFoundFlag = true;
                    break;
                }
            }
            if (!userFoundFlag) {
                user.frequency++;
                this.cache.push(user);
            }
        }

        // rearrange the users according to frequency count
        this.cache = this.reArrange(this.cache);

        // reassign the automatic loading to frequent users
        this.automaticLoading(this.autoLoadingFactor);

        console.table(this.cache);
    }

    // this will rearrange the users in descending order of their frequencies, Quick sort: O(n log n)
    reArrange(arr) {
        if (arr.length < 2) return arr;
        var pivot_node = arr[arr.length - 1];
        var pivot = pivot_node.frequency;
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i].frequency <= pivot) {
                right.push(arr[i]);
            }
            else {
                left.push(arr[i]);
            }
        }
        return [...this.reArrange(left), pivot_node, ...this.reArrange(right)];
    }

    // provides automatic loading to first n users: O(n)
    automaticLoading(n) {
        for (var i in this.cache) {
            if (i < n) {
                this.cache[i].automaticLoaded = true;
            }
            else this.cache[i].automaticLoaded = false;
        }
    }

}

// to define a user
class User {
    constructor(id) {
        this.id = id;
        this.frequency = 0;
        this.automaticLoaded = false;
    }
}


// this is to identify first n users will be provided with autoloading facility
let autoLoadingFactor = 3;

// this is the time specified for expiration of cache of a least frequent user
let expirySeconds = 4000

// create a new instance of Cache class
let cache = new LFUCache(3, 3000);

console.log(`Initializing LFU Cache with auto loading factor: ${autoLoadingFactor} and Expiration time: ${expirySeconds}ms`);

// this will randomly add users with id 1 to 5
async function addUsers() {
    for (let i = 0; i < 20; i++) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                var user = new User(`User${Math.floor(Math.random() * 6)}`)
                cache.insertUser(user);
            }, 500);
        });
    }
}

addUsers();