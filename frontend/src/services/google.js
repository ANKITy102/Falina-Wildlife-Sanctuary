import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

const google = () => {

    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                const { accessToken, profileObj } = credentialResponse;
                console.log(accessToken, profileObj)
              console.log(credentialResponse);
              console.log(credentialResponse.credential)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
    )
}

export default google;