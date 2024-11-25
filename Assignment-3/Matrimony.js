const EventEmitter = require('events');

class MatrimonyChat extends EventEmitter {
    constructor() {
        super();
        this.users = new Map();
    }

    joinRoom(userId) {
        this.users.set(userId, []);
        this.emit('join', userId);
    }

    sendMessage(userId, message) {
        if (this.users.has(userId)) {
            this.emit('message', userId, message);
        }
    }

    leaveRoom(userId) {
        if (this.users.has(userId)) {
            this.emit('leave', userId);
            this.users.delete(userId);
        }
    }
}


const chat = new MatrimonyChat();

chat.on('join', (userId) => console.log(`${userId} joined the chat`));
chat.on('message', (userId, message) => console.log(`${userId}: ${message}`));
chat.on('leave', (userId) => console.log(`${userId} left the chat`));

chat.joinRoom('Groom1');
chat.sendMessage('Groom1', "Hello, is there anyone?");
chat.leaveRoom('Groom1');