import {createSlice} from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name :"main",
    initialState: {
        followed: {
          item1: false,
          item2: false,
          item3: false,
          item4: false,
          item5: false,
        },
      openSearch : false,
      openNotif : false ,
      searchList : [],
      defaultSearchList : [
        "mervehediyee" , "Mryildirim" , "ecebeyzaozen" ,"meryemzeliha" ,"tubafidann"
      ]

      },
      reducers: {
        changeFollow: (state, action) => {
          const { btnName } = action.payload;
          state.followed[btnName] = !state.followed[btnName];
        },
        toggleSearch : (state) => {
          state.openSearch = !state.openSearch;
        },
        toggleNotif : (state) => {
          state.openNotif = !state.openNotif;
        },
        addSearch: (state, action) => {
          const searchTerm = action.payload;
          state.searchList.push(searchTerm);
         
        },
        findSearch: (state, action) => {
          const searchTerm = action.payload.toLowerCase();
         
          const filteredSearch = state.defaultSearchList.filter(item =>
            item.toLowerCase().includes(searchTerm)
          );
          // Filtrelenmiş sonuçları searchList'e atıyoruz
          state.searchList = filteredSearch;
        },
      },
    });
export const {changeFollow , toggleSearch , addSearch , findSearch , toggleNotif} = mainSlice.actions;
export default mainSlice.reducer;