export default async function handler(req, res) {
  try {
    const { userPrompt } = req.body;

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "minimax/minimax-m2:free",
        messages: [
          { role: "user", content: userPrompt }
        ]
      })
    });

    const j = await r.json();
    return res.status(200).json(j);

  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
                                 }
