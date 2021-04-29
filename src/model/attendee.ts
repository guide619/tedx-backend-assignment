export const attendees : Attendee[] = [
    {
      id: "1",
      firstName: "Ji-eun",
      lastName: "Lee",
      email: "iu@celebrity.com"
    },
    {
      id: "2",
      firstName: "Minho",
      lastName: "Choi",
      email: "minho@shineesback.com"
    }
  ]

 export interface Attendee {
     id : string
     firstName : string
     lastName : string
     email: string
  }