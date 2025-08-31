import fetch from "node-fetch";

export async function fetchContributions(username, token) {
  const query = `
  query {
    user(login: "${username}") {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const data = await res.json();

  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  const days = weeks.flatMap(week => week.contributionDays);
  return days;
}
