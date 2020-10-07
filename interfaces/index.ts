// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:

export type Room = {
  id: string
  title: string,
  lastActivity: string,
  created: string,
  creatorId: string,
  ownerId: string
}

export type Person = {
  id: string,
  avatar: string
}

export type Message = {
  id: string,
  text: string,
  personId: string,
  person: Person,
  created: string
}