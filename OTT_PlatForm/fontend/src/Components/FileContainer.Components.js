import { FullPage_Screen1} from "./Screen1/FileContainer.Screen1"
import { FullPage_Screen2 } from "./Screen2/FileContainer.Screen2"
import { FullPage_Screen3 } from "./Screen3/FileContainer.Screen3"
import { FullPage_Screen4 } from "./Screen4/FileContainer.Screen4"
import {NavBar_Screen1} from "./Screen1/FileContainer.Screen1"

import { LoginPage_Auth , SignUpPage_Auth} from "./Authentication/FileContainer.Auth"
import { FullPage_DisPlayYoutubeData } from "./DisplayYoutubeData/FileContainer.DisplayYoutubeData.js"

import {Screen1InputQueryContext , useScrren1InputQuery} from "./Context/FileContainer.Context.Global.js"
import {fetchVideos_API} from "../Components/API/FileContainer.Api.js"
import { Documentation_FullPage } from "./Documentation/FileContainer.Documentation.js"

import {FullPage_ViewWatchHistory} from "../Components/viewWatchHistory/fileContainer.viewWatchHistory.js"
import {SystemLoggedInContext} from "./Context/FileContainer.Context.Global.js"
const baseURL = 'http://localhost:4000'


export {
    
    baseURL,

    FullPage_Screen1,
    FullPage_Screen2,
    FullPage_Screen3,
    FullPage_Screen4,
    NavBar_Screen1,

    LoginPage_Auth , 
    SignUpPage_Auth,

    FullPage_DisPlayYoutubeData ,

    Screen1InputQueryContext,
    useScrren1InputQuery,
    fetchVideos_API,

    FullPage_ViewWatchHistory,

    Documentation_FullPage , 
    SystemLoggedInContext
}