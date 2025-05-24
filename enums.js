import { eventNamesLocal, generalNamesLocal, messageTypesLocal } from "../data/enums";

const eventNamesLib = {
  DIALOG_OPEN: Symbol("open-dialog"),
  DIALOG_CANCEL: Symbol("cancel-dialog"),
  DIALOG_CONFIRM: Symbol("confirm-dialog"),
  NAVIGATE: Symbol("navigate"),
  SUB_PAGE_CONTAINER: Symbol("sub-page-container"),
  TOGGLE_SPINNING_CIRCLE: Symbol("toggle-spinning-circle")
};
export const eventNames = Object.freeze({ ...eventNamesLib, ...eventNamesLocal });

const generalNamesLib = {
  OBSERVABLE_USER: Symbol("user"),

  CONNECTION_LIVE: Symbol("connection-live"),
  CONNECTION_SOLO: Symbol("connection-solo"),
  CONNECTION_OFFLINE: Symbol("connection-offline")
};
export const generalNames = Object.freeze({ ...generalNamesLib, ...generalNamesLocal });

const messageTypesLib = {

};
export const messageTypes = Object.freeze({ ...messageTypesLib, ...messageTypesLocal });
