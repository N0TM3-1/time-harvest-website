import { Domine } from 'next/font/google';

require('dotenv').config({ path: '.env.local' });

console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);


export const handleSubmit = async (e, email, username) => {
  e.preventDefault();

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  console.log(SUPABASE_URL, SUPABASE_ANON_KEY);

  const data = {
    email: email,
    username: username,
  };

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/emails`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email: data.email, username: data.username }),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      console.error(error);
      throw new Error(error);
    }else{
      //Change button
      document.getElementById("submit").style.backgroundColor = "lime";
      document.getElementById("submit").style.color= "black";
      document.getElementById("submit").innerHTML = "Submitted!";
      
      //Clear inputs
      document.getElementById("email").value = "";
      document.getElementById("slack").value = "";
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
