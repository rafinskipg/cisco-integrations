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
    console.log(response)
    return response.data
  })

}

export function getMessagesForRoom(roomId: string) {
  return axios.get(`${CISCO_API}/messages?max=3&roomId=${roomId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.WEBEX_BOT_TOKEN}`
    }
  })
  .then((response: any) => {
    console.log(response)
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
    console.log(response)
    return response.data
  })
}