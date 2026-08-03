import fs from "fs";
import path from "path";

const LOG_FILE = path.join(process.cwd(), "logs", "contact-submissions.log");

function logSubmission(data, status, error = null) {
  try {
    const dir = path.dirname(LOG_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const entry = {
      timestamp: new Date().toISOString(),
      status,
      ...data,
      ...(error ? { error: String(error) } : {}),
    };
    fs.appendFileSync(LOG_FILE, JSON.stringify(entry) + "\n");
  } catch (e) {
    console.error("Log write failed:", e);
  }
}

export async function POST(request) {
  const data = await request.json();

  if (!data.name || !data.email || !data.phone) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const res = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Script responded with ${res.status}`);
    logSubmission(data, "success");
    return Response.json({ ok: true });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);
    logSubmission(data, "failed", error);
    return Response.json({ error: "Submission failed" }, { status: 500 });
  }
}