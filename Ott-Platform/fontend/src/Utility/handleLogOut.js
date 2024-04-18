import Cookies from "js-cookie";


export default function handleLogOut({setSystemLoggedIn , setLoggedInUserData}){
    try {
        Cookies.remove("uid");
        setSystemLoggedIn(false);
        setLoggedInUserData({
          source: "handleLogOut() at Utility Folder",
        });
        window.location.reload();
    } catch (error) {
        console.log('Error at handleLogOut Utility function = ' , error.message)
    }
}

