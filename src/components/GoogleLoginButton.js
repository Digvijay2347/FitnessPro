import React from 'react';
import supabase from '../supabaseClient';
import { useHistory } from 'react-router-dom';

const GoogleLoginButton = () => {
  const history = useHistory();

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error logging in:', error.message);
    } else {
     
      generateApiKey(user.id);
    }
  };

  const generateApiKey = async (userId) => {
    
    const apiKey = Math.random().toString(36).substring(2, 7).toUpperCase();

   
    const { data, error } = await supabase
      .from('api_keys')
      .insert([{ user_id: userId, api_key: apiKey }]);

    if (error) {
      console.error('Error storing API key:', error.message);
    } else {
      alert(`Your API Key: ${apiKey}`);
      history.push('/'); 
    }
  };

  return (
    <button
      className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
      onClick={handleLogin}
    >
      Get Key
    </button>
  );
};

export default GoogleLoginButton;
