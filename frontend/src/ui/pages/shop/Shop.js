import React, {useEffect, useState} from "react";
import {Menu} from "../../shared/menu/Menu";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useJwtToken} from "../../shared/utils/useJwtToken";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {httpConfig} from "../../shared/utils/http-config";
import {fetchItemShopByProfileId} from "../../../store/itemShop/itemShopSlice";
import {ButtonSelectionItemShop} from "./ButtonSelectionItemShop";


export const Shop = () => {

    const dispatch = useDispatch()

//redux functionality to get profile data
    const {authenticatedUser} = useJwtToken();

    const sideEffects = () => {
        if (authenticatedUser?.profileId) {
            dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
            dispatch(fetchItemShopByProfileId(authenticatedUser.profileId))
        }
    }

    useEffect(sideEffects, [authenticatedUser, dispatch]);

    const profile = useSelector(state => (
        state.profile
            ? state.profile
            : null
    ));

    //gets the item shop
    const itemShop = useSelector(state => state.itemShop)

    //item shops are created when this function runs
    const createItemShop = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.post(`/apis/itemShop/`)
                .then(reply => {
                        if (reply.status === 200) {
                            dispatch(fetchItemShopByProfileId(profile.profileId))
                        }
                    }
                )
        }
    }

    //this gets data from redux about the profiles item shop
    // const fetchItemShop = () => {
    //     if (profile === null) {
    //     } else if (profile != null) {
    //         dispatch(fetchItemShopByProfileId(profile.profileId))
    //     }
    // }

    return (
        <>
            <Menu profile={profile}/>
            <h1>Shop</h1>

            {
                (profile === null)
                    ? <></>
                    : <h2>{profile.profileCoins}</h2>
            }

            {
                (itemShop === null)
                    ? <Button onClick={createItemShop}>Enter Shop</Button>
                    : <></>
            }

            <ButtonSelectionItemShop itemShop={itemShop} profile={profile}/>
        </>
    )
}
