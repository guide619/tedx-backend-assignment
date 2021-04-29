import {RequestHandler} from 'express'
import {speakers} from '../model/speaker'
import {sortByProperty} from '../utils/utils'

export const getSpeakers:RequestHandler = (req, res , next) => {
    const fieldParams = req.query.fields as string
    const sortBy = req.query.sortByAsc
    if (fieldParams) {
        const listFields = fieldParams.split(',')
        let result = speakers.map((speaker) => {
            let struct:any= {}
            listFields.map(field => {
                const map = new Map(Object.entries(speaker))
                struct[field] = map.get(field)
            } )
            return struct
        }) 
        return res.json({
            status : 200 , 
            data: result.sort(sortByProperty(sortBy))
        })
    }

    res.json({status : 200 , data: speakers.sort(sortByProperty(sortBy))})
}

export const getSpeakerByID: RequestHandler <{ID : string}> = (req , res ,next) => {
    const speakerID = req.params.ID
    res.json({
        status:200 , data: speakers.find((speaker => speaker.id === speakerID))
    })
}

export const pushSpeaker : RequestHandler = (req , res , next) => {
    const speakerInputID = String(Number(speakers[speakers.length-1].id) + 1)
    if (req.body.firstName){
        const speakerInput = {id:speakerInputID , firstName :req.body.firstName, lastName :req.body.lastName , topic :req.body.topic}
        speakers.push(speakerInput)
        return res.json({
            status:200,
            data: speakers
        })
    }
    throw new Error('Invalid json body!')
}