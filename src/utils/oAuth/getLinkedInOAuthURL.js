

const getLinkedInOAuthURL = () => {
    const rootURL = process.env.REACT_APP_LINKEDIN_OAUTH_ROOT_URL
    const options = {
        client_id: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_LINKEDIN_OAUTH_REDIRECT_URL,
        scope: 'r_liteprofile r_emailaddress',
        response_type: 'code',
    };

    const params = new URLSearchParams(options).toString();
    return `${rootURL}?${params}`;
};

export default getLinkedInOAuthURL;
