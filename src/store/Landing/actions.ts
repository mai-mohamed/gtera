import * as types from "./types";
type IContact = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  message: string;
};

export const submitContactRequest = (payload: IContact) => ({
  type: types.SUBMIT_CONTACT_REQUEST,
  payload,
});
