import {Router} from 'express'
import {getAttendees , getAttendeeByID, pushAttendee} from '../handler/attendeeHandler'
import { getSpeakerByID, getSpeakers, pushSpeaker } from '../handler/speakerHandler'

const router = Router()


router.get('/'  , (req , res , next) =>{
    res.send("Welcome to application")
})
//attendee
router.get('/attendees' , getAttendees)
router.get('/attendee/:ID' , getAttendeeByID)
router.post('/attendee' , pushAttendee)
//speaker
router.get('/speakers' , getSpeakers)
router.get('/speaker/:ID' , getSpeakerByID)
router.post('/speaker' , pushSpeaker)

export default router