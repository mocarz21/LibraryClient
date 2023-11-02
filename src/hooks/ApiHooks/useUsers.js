import { useContext } from "react";
import { UserContext } from '../../providers/UserProviders'
import { fetchPayload } from '../../OdevFetch/fetchPayload'
import { fetchSetting } from "../../OdevFetch/fetchConfig";
import { useQuery } from '../../OdevFetch/useQuery'
import { returnFetch } from "../../OdevFetch/returnFetch";

export const useUser = (id) => {
  
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser was used outside of its Provider");
  }
  const { isLogged, setLogged, setUserData, userData } = context;

    const endpoint = id ? `users/${id}` : `users`;
    const { loading, payload, refetch } = useQuery({ endpoint });

  const logIn = async (login, password) => {
    let data = null;

    await fetchPayload({
      endpoint: "authenticate",
      body:  { login, password } ,
      callback: payload => {
        data = payload;
      },
    });

    if (data.status === "success") {
      sessionStorage.setItem("accessToken", data.body.accessToken);
      sessionStorage.setItem("refreshToken", data.body.refreshToken);

      setLogged(true);
      setUserData(data.body);
      return { status: data.status, userData: data.body };
    } else if (data.error) {
      return { error: data.error };
    }

    return data;
  };

  const isLoggedIn = async () => {
    const accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = sessionStorage.getItem("refreshToken");

    if(accessToken) {
      try{
        const response = await fetch(`${process.env.REACT_APP_API_PATH}/secure/isLogged/${accessToken.split(" ")[1]}`, {
            ...fetchSetting,
            method: "GET",
            headers: {
              ...fetchSetting.headers,
              ["Access-Token"]: `${accessToken}`,
            }
        });
        if (!response.ok) throw new Error("Network response was not ok " + response.statusText);  
        const output = await response.json();

        if(output.status === "success") {
          setLogged(true);
          setUserData({...output.body, accessToken, refreshToken});
        } else {
          logOut();
        }
      } catch (error){
          logOut();
      }
    }
  };
  const logOut = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    setLogged(false);
  };

  const remove = async ( id ) => {
    const data = await returnFetch({ endpoint: `secure/users/${id}/remove` });
    return data;
  };

  return { 
    logIn,
    userData, 
    isLoggedIn, 
    isLogged, 
    logOut, 
    payload,
    loading,
    remove
  }; 
}