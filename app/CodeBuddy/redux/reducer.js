import { UPDATE_NAME_AND_ADDRESS, UPDATE_EMAIL_AND_PASSWORD, UPDATE_CODE_AND_NUMBER } from "./actions";

const initialState = {
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: ""
};

const reducer = (state = initialState, action ) => {
    switch (action.type){
        case UPDATE_NAME_AND_ADDRESS:
        return {
            ...state, 
            emailId: action.payload.emailId,
            password: action.payload.password
        };
        case UPDATE_EMAIL_AND_PASSWORD:
        return {
            ...state, 
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            address: action.payload.address
        };
        case UPDATE_CODE_AND_NUMBER:
        return {
            ...state, 
            countryCode: action.payload.code,
            phoneNumber: action.payload.num
        };
        default:
            return state;
    };
};

export default reducer;