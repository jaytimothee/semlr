import content from "@/data/content"
import transformations from "@/transformations/transform"

import _ from 'lodash';
import store from "../store";


export const fetchContent = () => {
    return content
}

export const fetchTransformations = () => {
    return transformations
}

export const renameData = (params) => {

    let index = _.findIndex(store.state.data, { id: params.target.id })

    if (index === undefined || index === -1) {
        throw {
            message: "can not rename",
            item: params.target.id
        }
    }

    return {
        index,
        propId: { id: params.newid }
    }
}

export const removeItem = (params) => {
    let index = _.findIndex(store.state.data, { id: params.target.id })

    if (index === -1 || index === undefined) {

        throw {
            message: "can not remove",
            item: params.target.id
        }
    }
    return {
        index,
        id: params.target.id,
    }
}

export const moveArray = (params) => {
    if (params.target.pos > store.state.data.length) {
        throw {
            message: "can not move",
            item: params.target.pos
        }
    }
    return {
        possition: params.target.pos,
        distance: params.distance,
    }
}
