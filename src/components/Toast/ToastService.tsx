import { AddNotificationParam } from "./ToastProvider";

class ToastService{
    private _sendNotification: Function|undefined;


    registerNotification(fn: Function){
        this._sendNotification = fn;
    }

    sendToast(data:AddNotificationParam){
        if(this._sendNotification){
            this._sendNotification(data);
        }else{
            console.error("No add toast fuction")
        }
    }
}


const store = new ToastService();

export default store;

// Global toast function
export const sendToast = (data:AddNotificationParam) => {
  return store.sendToast(data);
};
