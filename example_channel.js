// Example channel system scaffold
export class Channel {
  constructor(name) {
    this.name = name;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  publish(message) {
    for (const listener of this.listeners) {
      try {
        listener(message);
      } catch (err) {
        console.error(`Channel '${this.name}' listener failed:`, err);
      }
    }
  }
}

export const dailyEvents = new Channel('daily-events');

// Example:
// dailyEvents.subscribe(event => console.log(event));
// dailyEvents.publish({ type: 'MIDNIGHT_RESET' });