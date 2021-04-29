export const speakers : Speaker[] = [
    {
      id: "1",
      firstName: "Greta",
      lastName: "Thunberg",
      topic: "Climate Change is Real"
    },
    {
      id: "2",
      firstName: "Elon",
      lastName: "Musk",
      topic: "Bitcoin and Climate Change"
    }
  ]

  export interface Speaker {
    id : string
    firstName : string
    lastName : string
    topic: string
  }