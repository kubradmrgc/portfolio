import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))
const out = join(root, '../src/data/github.json')

try {
  const response = await fetch(
    'https://api.github.com/users/kubradmrgc/repos?per_page=30&sort=updated',
    { headers: { Accept: 'application/vnd.github+json' } },
  )
  if (!response.ok) throw new Error(`GitHub ${response.status}`)
  const repos = await response.json()
  const slim = repos.map((repo) => ({
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    homepage: repo.homepage,
    updated_at: repo.updated_at,
    fork: repo.fork,
    private: repo.private,
  }))
  await writeFile(
    out,
    `${JSON.stringify({ fetchedAt: new Date().toISOString(), repos: slim }, null, 2)}\n`,
  )
  console.log(`Wrote ${slim.length} repos to src/data/github.json`)
} catch (error) {
  console.warn('GitHub snapshot skipped:', error.message)
}
