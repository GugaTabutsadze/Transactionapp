import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {
        name: "",
        userName: "",
        email: "",
        uid: "",
    }
})
 export const loadingScreenState = atom({
    key: "loadingScreenState",
    default: false,
  })


