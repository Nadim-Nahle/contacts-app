import React from 'react'
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"

function Google() {

    const [user, setUser] = useState({});

    function handleCallBackResponse(response){

        console.log('ecncode jwt' + response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject);
        setUser(userObject);

    }

    useEffect(() => {

        /* global google */
        google.accounts.id.initialize({
            client_id: "80248917396-m4ihiqea2hs9ltjbri1j8lurko6710m7.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });


        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: 'outline', size:"large"}
        )
    }, []);
    

  return (
    <>
        <div id="signInDiv"></div>
    </>
    
  )
}

export default Google;
