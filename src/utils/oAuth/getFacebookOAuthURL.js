

const getFacebookOAuthURL = () => {
    const rootURL = process.env.REACT_APP_FACEBOOK_OAUTH_ROOT_URL
    const options = {
        client_id: process.env.REACT_APP_FACEBOOK_APP_ID,
        redirect_uri: process.env.REACT_APP_FACEBOOK_OAUTH_REDIRECT_URL,
        scope: 'public_profile,email',
        response_type: 'code',
        auth_type: 'rerequest',
        display: 'popup',
    };

    const params = new URLSearchParams(options).toString();
    return `${rootURL}?${params}`;
};

export default getFacebookOAuthURL;
