function Subject()
{
  this.observers = [] // array of observer functions
}

Subject.prototype = {
  subscribe: function(fn)
  {
    this.observers.push(fn)
  },
  unsubscribe: function(fnToRemove)
  {
    this.observers = this.observers.filter( fn => {
      if(fn != fnToRemove)
        return fn
    })
  },
  fire: function()
  {
    this.observers.forEach( fn => {
      fn.call()
    })
  }
}

const subject = new Subject()

function Observer1()
{
  console.log("Observer 1 Firing!")
}

function Observer2()
{
  console.log("Observer 2 Firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.fire() 

subject.unsubscribe(Observer1)
subject.fire()

class PubSub {
  constructor() {
      // Storage for topics that can be broadcast
      // or listened to
      this.topics = {};

      // A topic identifier
      this.subUid = -1;
  }

  publish(topic, args) {
      if (!this.topics[topic]) {
          return false;
      }

      const subscribers = this.topics[topic];
      let len = subscribers ? subscribers.length : 0;

      while (len--) {
          subscribers[len].func(topic, args);
      }

      return this;
  }

  subscribe(topic, func) {
      if (!this.topics[topic]) {
          this.topics[topic] = [];
      }

      const token = (++this.subUid).toString();
      this.topics[topic].push({
          token,
          func,
      });
      return token;
  }

  unsubscribe(token) {
      for (const m in this.topics) {
          if (this.topics[m]) {
              for (let i = 0, j = this.topics[m].length; i < j; i++) {
                  if (this.topics[m][i].token === token) {
                      this.topics[m].splice(i, 1);

                      return token;
                  }
              }
          }
      }
      return this;
  }
}

const pubsub = new PubSub();

pubsub.publish('/addFavorite', ['test']);
pubsub.subscribe('/addFavorite', (topic, args) => {
  console.log('test', topic, args);
});