import React,{createContext, useContext,useState} from "react";

const StateContext = createContext();

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children}) => {
    
    const [activeMenu, setActivemenu] = useState(true);
    const [isClicked,setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]:true});
    }
    
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActivemenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);