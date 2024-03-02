
const getGoogleOAuthURL = () => {
    const rootURL = process.env.REACT_APP_GOOGLE_OAUTH_ROOT_URL

    const options = {
        redirect_uri: process.env.REACT_APP_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL,
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ].join(" "),
    }

    const qs = new URLSearchParams(options)
    return `${rootURL}?${qs.toString()}`
}

export default getGoogleOAuthURL
