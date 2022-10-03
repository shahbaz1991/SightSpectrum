export const UPDATE_NAME_AND_ADDRESS = 'UPDATE_NAME_AND_ADDRESS';
export const UPDATE_EMAIL_AND_PASSWORD = 'UPDATE_EMAIL_AND_PASSWORD';
export const UPDATE_CODE_AND_NUMBER  = 'UPDATE_CODE_AND_NUMBER';

export const updateEmailAndPassword = (detailsObj) => ({
    type: UPDATE_EMAIL_AND_PASSWORD,
    payload: detailsObj
});

export const updateNameAndAdd = (detailsObj) => ({
    type: UPDATE_NAME_AND_ADDRESS,
    payload: detailsObj
});

export const updateCodeAndNumber = (detailsObj) => ({
    type: UPDATE_CODE_AND_NUMBER,
    payload: detailsObj
});