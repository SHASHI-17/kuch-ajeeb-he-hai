
import { createSlice } from "@reduxjs/toolkit";



const appConfigSlice = createSlice({
    name: "appConfigSlice",
    initialState: {
        isLoading: false,
        myProfile:{},
        toastData:{},
        posts:[],
        comments:[],
        loading:false,
        updated:[]
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        showToast:(state,action)=>{
            state.toastData=action.payload;
        },
        setLoader:(state,action)=>{
            state.loading=action.payload;
        }
    }
});




export default appConfigSlice.reducer;

export const { setLoading ,showToast,setLoader} = appConfigSlice.actions;
