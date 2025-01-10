# Discord Bot Project

A simple Discord bot using Node.js and Discord.js.

## Project Structure

```
├── command.js
├── index.js
├── package-lock.json
└── package.json
```

## Prerequisites

- **Node.js** (download [here](https://nodejs.org/))
- **Discord Bot Token** from the [Discord Developer Portal](https://discord.com/developers/applications)
  
## Setup

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the bot token:

    Create a `.env` file in the project directory and add:

    ```env
    DISCORD_TOKEN=YOUR_BOT_TOKEN
    ```

4. Run the bot:

    ```bash
    node index.js
    ```

5. Add the bot to your server by generating an invite link in the [Discord Developer Portal](https://discord.com/developers/applications).

## Customizing the Bot

- **command.js**: Define or modify commands.
- **index.js**: Bot initialization and command loading.

Example of a simple command in `command.js`:

```javascript
module.exports = {
  name: 'ping',
  description: 'Ping command',
  execute(message) {
    message.channel.send('Pong!');
  },
};


