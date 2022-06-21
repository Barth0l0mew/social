export const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE";
export const POST_DIALOG_MESSAGE = "POST_DIALOG_MESSAGE";

export const onAddDialogMessage = () => {
  return {
    type: ADD_DIALOG_MESSAGE,
  };
};
export const onPostDialogMessage = (bady) => {
  return { 
    type: POST_DIALOG_MESSAGE,       
    payLoad: bady };
};
