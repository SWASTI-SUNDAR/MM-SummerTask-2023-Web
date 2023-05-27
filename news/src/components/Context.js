import React from 'react'

const AppContext=React.createContext();
const AppProvider=({children})=>{
    return <AppContext.Provider value={"swasti"}>
    {children}</AppContext.Provider>
}
export default {AppContext,AppProvider};
