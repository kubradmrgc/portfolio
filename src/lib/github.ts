import { GITHUB_IGNORE, PROFILE, PROJECTS } from '../data/content'
import fallback from '../data/github.json' with { type: 'json' }

export type GithubRepo = {
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  homepage: string | null
  updated_at: string
}

type GithubApiRepo = GithubRepo & { fork?: boolean; private?: boolean }

const featuredSlugs = new Set(PROJECTS.map((project) => project.slug))

function mapRepo(repo: GithubApiRepo): GithubRepo {
  return {
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    homepage: repo.homepage,
    updated_at: repo.updated_at,
  }
}

function usable(repo: GithubApiRepo) {
  return !repo.fork && !repo.private && !GITHUB_IGNORE.has(repo.name)
}

export function extraRepos(repos: GithubRepo[]) {
  return repos.filter((repo) => !featuredSlugs.has(repo.name)).slice(0, 4)
}

export function starsFor(repos: GithubRepo[], slug?: string) {
  if (!slug) return undefined
  return repos.find((repo) => repo.name === slug)?.stargazers_count
}

export async function loadGithubRepos(): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${PROFILE.githubUser}/repos?per_page=30&sort=updated`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
    if (!response.ok) throw new Error('GitHub yanıt vermedi')
    const rows = (await response.json()) as GithubApiRepo[]
    return rows.filter(usable).map(mapRepo)
  } catch {
    return (fallback.repos as GithubApiRepo[]).filter(usable).map(mapRepo)
  }
}
