import { useContext, createContext } from "react";
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
export const AppContext = createContext(null);

export function useAppContext() {
    return useContext(AppContext);
}