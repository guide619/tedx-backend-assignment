import {RequestHandler} from 'express'
import {attendees } from '../model/attendee'
import {sortByProperty} from '../utils/utils'

export const getAttendees:RequestHandler = (req, res , next) => {
    const fieldParams = req.query.fields as string
    const sortBy = req.query.sortByAsc
    if (fieldParams) {
        const listFields = fieldParams.split(',')
        let result = attendees.map((attendee) => {
            let struct:any= {}
            listFields.map(field => {
                const map = new Map(Object.entries(attendee))
                struct[field] = map.get(field)
            } )
            return struct
        }) 
        return res.json({
            status : 200 , 
            data: result.sort(sortByProperty(sortBy))
        })
    }

    res.json({status : 200 , data: attendees.sort(sortByProperty(sortBy))})
}

export const getAttendeeByID: RequestHandler <{ID : string}> = (req , res ,next) => {
    const attendeeID = req.params.ID
    res.json({
        status:200 , data: attendees.find((attendee => attendee.id === attendeeID))
    })
}

export const pushAttendee : RequestHandler = (req , res , next) => {
    const attendeeInputID = String(Number(attendees[attendees.length-1].id) + 1)
    if (req.body.firstName){
        const attendeeInput = {id:attendeeInputID , firstName :req.body.firstName, lastName :req.body.lastName , email :req.body.email}
        attendees.push(attendeeInput)
        return res.json({
            status:200,
            data: attendees
        })
    }
    throw new Error('Invalid json body!')
}