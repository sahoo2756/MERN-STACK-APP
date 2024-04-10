import {createContext, useState} from "react"

const Screen1InputQueryContext = createContext();

function useScrren1InputQuery() {
    const [screenInputQuery , setScreen1InputQuery] = useState('');

    return [screenInputQuery , setScreen1InputQuery]; 
}

export { Screen1InputQueryContext , useScrren1InputQuery}