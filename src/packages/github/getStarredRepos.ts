export async function getStarredRepos(username: string): Promise<any[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/starred`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
