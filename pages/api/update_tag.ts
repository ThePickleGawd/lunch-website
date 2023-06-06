import { NextApiRequest, NextApiResponse } from "next";
import { SB_serveronly } from "@/lib/utils/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { student_id, ble_addr } = req.body;

  if (req.method !== "POST" || !student_id || !ble_addr) {
    res.status(400).json({ message: "Invalid request" });
    return;
  }

  // Update person in database
  const { data, error } = await SB_serveronly.from("tags").upsert({
    ble_addr,
    student_id,

    // Get postgres date: https://gist.github.com/jczaplew/f055788bf851d0840f50
    updated_at: String(
      new Date(Date.now() + 1000 * 60 * -new Date().getTimezoneOffset())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "")
    ),
  });

  if (error) {
    res.status(500).json({ message: error.message });
  } else {
    res.status(200).json({ message: "Success" });
  }
}
