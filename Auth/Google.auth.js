const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.APP_CLINT_ID,
    iosClientId:
      "872500324349-o1egfvqjo00qh4fv58tt4do5p4kv0tnk.apps.googleusercontent.com",
  });
  const [accessToken, setAccessToken] = React.useState<string | null>();
  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      setAccessToken(authentication?.accessToken);
    }
    const getUserData = async () => {
      let useInfo = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const userData = await useInfo.json();
      console.log(userData);
    };
    getUserData();
  }, [response]);
