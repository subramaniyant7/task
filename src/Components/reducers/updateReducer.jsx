const initialState = { input : '0', estimated : '', fees : ''  }
const updateReducer = (state = initialState, action) => {
    switch(action.type){
        case 'updateValue':
            return action.payload;
        default:
            return state;
    }
}

export default updateReducer

