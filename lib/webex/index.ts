import { Message } from "../../interfaces"

const CISCO_API = `https://webexapis.com/v1`
const axios = require('axios')

export function getRooms() {
  return axios.get(`${CISCO_API}/rooms?max=3`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.WEBEX_BOT_TOKEN}`
    }
  })
  .then((response: any) => {
    return response.data
  })

}

export async function getMessagesForRoom(roomId: string) {
  console.log('Getting messages for room ', roomId)
  return axios.get(`${CISCO_API}/messages?max=3&roomId=${roomId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.WEBEX_BOT_TOKEN}`
    }
  })
  .then(async (response: any) => {
    return Promise.all(response.data.items.map( async (item: Message) => {
      const person = await getPerson(item.personId)
      return {
        ...item,
        person
      }
    }))
  })

}


export function sendMessageToRoom(roomId: string, text: string) {
  console.log('Sending message to roomId', roomId, text)
  return axios.post(`${CISCO_API}/messages`, {
    roomId,
    text
  }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `Bearer ${process.env.WEBEX_BOT_TOKEN}`
    } 
  })
  .then((response: any) => {
    return response.data
  })
  
  
}

export function getPerson(personId: string) {
  return axios.get(`${CISCO_API}/people/${personId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.WEBEX_BOT_TOKEN}`
    }
  })
  .then((response: any) => {
    return response.data
  })
  .catch(() => {
    return {
      avatar: '',
      displayName: ''
    }
  })
}