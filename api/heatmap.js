import { fetchContributions } from "../lib/github.js";
import { generateSVG } from "../lib/svg.js";

export default async function handler(req, res) {
  const username = req.query.user || "octocat";
  const color = req.query.color || "pink";
  const shape = req.query.shape || "rect";
  const border = req.query.border !== "false"; // Default to true

  if (!process.env.GITHUB_TOKEN) {
    res.status(500).send("Missing GITHUB_TOKEN");
    return;
  }

  try {
    const days = await fetchContributions(username, process.env.GITHUB_TOKEN);
    const svg = generateSVG(days, color, shape, border);

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.send(svg);
  } catch (error) {
    res.status(500).send("Error fetching contributions");
  }
}
