# Webex API Integrations in NextJS

This is a really simple project that shows the usage of Next.js with TypeScript connecting to the Webex APIs

## How to use it?

Create a [webex bot](https://developer.webex.com/docs/bots) and get an access token.

Once you have the token, create a `.env` file and add the following information:

```
WEBEX_BOT_TOKEN=YOUR_TOKEN
```

This token has to have access to fetch rooms and send messages, you can also use an user token

## Routes

- `GET /api/rooms` Returns the rooms this bot has access to
- `GET /api/rooms/ROOM_ID` Returns the room detail

- `GET /api/messages/ROOM_ID` fetches the messages for that room
- `POST /api/messages/ROOM_ID` sends a message to the room
