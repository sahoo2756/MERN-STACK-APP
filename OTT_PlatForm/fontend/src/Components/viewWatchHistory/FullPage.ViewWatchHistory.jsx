import { useEffect } from "react";
import axios from "axios";

export default function FullPage_ViewWatchHistory({ loggedInUserData }) {
  console.log(loggedInUserData);
  useEffect(() => {
    // let email = loggedInUserData.email;
    // console.log(email)
    try {
      axios
        .get(`http://localhost:4000/users/api/validateToken?token=${token}` , {withCredentials : true})
        .then((res) => {
          // res.data contain an object if token is true otherwise null
          if (res.data.isSucess) {
          } else {
          }
        })
        .catch((err) => {
          console.log(
            `Error at axios.get() inside catch block [App.jsx] ${err.data.message}`
          );
        });

        
      axios
        .get(
          `http://localhost:4000/api/storeWatchURL?query=${"sahoo15820004@gmail.com"}`,
          { withCredentials: true }
        )
        .then((response) => {
          console.log("response => ", response);
        })
        .catch((error) => {
          console.log("error => ", error.message);
        });
    } catch (error) {
      console.log("error at main=> ", error.message);
    }
  }, []);

  const MovieCart = ({ videoUrl }) => {
    return (
      <div>
        <video src="#"></video>
      </div>
    );
  };
  return (
    <div className="bg-black w-full text-white min-h-[100vh] ">
      chai-aur-code
    </div>
  );
}
