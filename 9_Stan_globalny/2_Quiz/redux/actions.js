const ADD_ANSWER = "ADD_ANSWER";


const addAnswer = (id) => {
    return {
        type: ADD_ANSWER,
        payload: id
    }
}

export {
    ADD_ANSWER,
    addAnswer
}
