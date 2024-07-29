import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const exchangeCodeForToken = async (code: any) => {
      const clientId = '3MVG9IHf89I1t8hrvswazsWedXWY0i1qK20PSFaInvUgLFB6vrcb9bbWFTSIHpO8G2jxBLJA6uZGyPFC5Aejq';
      const clientSecret = '895F2E621028F261ABBDCA206623E8F440EE6048DD4737474669543BE00F15F5';
      const redirectUri = 'http://localhost:3000/';
      const endpoint = 'https://login.salesforce.com/services/oauth2/token';

      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('client_id', clientId);
      params.append('client_secret', clientSecret);
      params.append('redirect_uri', redirectUri);

      try {
        const response = await axios.post(endpoint, params.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        const token = response.data.access_token;
        localStorage.setItem('token', token);
        navigate('/');
      } catch (err) {
        console.error('Error exchanging code for token', err);
      }
    };

    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');

    if (code) {
      exchangeCodeForToken(code);
    } else {
      console.error('Authorization code not found');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
