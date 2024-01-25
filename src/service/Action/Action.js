import { GETDOCDATAREJ, GETDOCDATAREQ, GETDOCDATARES } from "../Const"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {addDoc , collection , deleteDoc, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
import { db } from "../../Component/Firebase/Firebase";

export const GetDocDataReq = () => {
    return{
        type: GETDOCDATAREQ
    }
}

export const GetDocDataRes = (data) => {
    return{
        type: GETDOCDATARES,
        payload:data
    }
}

export const GetDocDataRej = () => {
    return{
        type: GETDOCDATAREJ
    }
}

export const dataGet = () => {
    return async dispatch => {
      dispatch(GetDocDataReq());
  
      try {
        const querySnapshot = await getDocs(collection(db, "user"));
        let arr = [];
        querySnapshot.forEach((doc) => {
          let obj = { id: doc.id, ...doc.data() };
          arr = [...arr, obj];
        });
        console.log("Firestore Data:", arr);
        dispatch(GetDocDataRes(arr));
      } catch (err) {
        console.error("Error fetching data from Firestore:", err);
        dispatch(GetDocDataRej(err));
      }
    };
  };