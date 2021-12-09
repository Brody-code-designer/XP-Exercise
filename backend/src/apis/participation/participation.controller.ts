import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {insertParticipation} from "../../utils/participation/insertParticipation";
import {Status} from "../../utils/interfaces/Status";
import {selectParticipationByParticipationProfileId} from "../../utils/participation/selectParticipationByParticipationProfileId";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfileCoinsByProfileId} from "../../utils/profile/updateProfileCoinsByProfileId";
import {updateParticipationTimeByProfileId} from "../../utils/participation/updateParticipationTimeByProfileId";

//This controller creates a new participation from a event name.
export const postParticipation = async (request: Request, response: Response): Promise<Response | undefined> => {
    try {
        const profile = <Profile>request.session?.profile
        const participationProfileId = <string>profile.profileId

        //gets the event id from a passed event Name
        const {participationEventId} = request.body

        const result = await insertParticipation(participationProfileId, participationEventId)

        const status: Status = {
            status: 200,
            message: result ?? 'Participation created Successfully',
            data: null
        }
        return response.json(status)
    } catch (error: any) {
        console.log(error)
        throw error
    }
}


export const getParticipationByParticipationProfileId = async (request: Request, response: Response): Promise<Response> => {
    try {
        const {participationProfileId} = request.params
        // console.log("participation profile id",participationProfileId)
        const mySqlResult = await selectParticipationByParticipationProfileId(participationProfileId)

        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        console.log(error)
        throw error
    }
}

export const putParticipationTimeByParticipationProfileIdController = async (request: Request, response: Response) : Promise<Response> => {
    try {
        const profile = <Profile>request.session.profile
        const profileId = <string>profile.profileId

        const result = await updateParticipationTimeByProfileId(profileId)

        const status: Status = {
            status: 200,
            message: result ?? 'Participation Successfully updated',
            data: null
        }
        return response.json(status)

    } catch (error) {
        return response.json( {status:400, data: null, message: error.message})
    }
}
