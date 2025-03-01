export default async function handler(req, res) {
  const SUPABASE_URL = process.env.URL;
  const SUPABASE_ANON_KEY = process.env.KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return res.status(500).json({ error: "Missing Supabase credentials" });
  }
}

export const handleSubmit = async (e, email, username) => {
  e.preventDefault();

  const data = {
    email: email,
    username: username,
  };
  console.log(data);

  try {
    const response = await fetch(
      "${SUPABASE_URL}/rest/v1/emails",
      {
        method: "POST",
        headers: {
          apikey:
          SUPABASE_ANON_KEY,
          Authorization:
            "Bearer ${SUPABASE_ANON_KEY}",
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email: data.email, username: data.username }),
      }
    );
    console.log(response);

    if (!response.ok) {
      const error = await response.json();
      console.error(error);
      throw new Error(error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
