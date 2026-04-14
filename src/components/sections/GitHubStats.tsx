import React, { useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { Users, BookOpen, ExternalLink, GitFork, GitPullRequest, AlertCircle, GitCommitHorizontal, Network } from "lucide-react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
}

interface ActivityStats {
  commits2026: number;
  commitsAllTime: number;
  totalPRs: number;
  totalIssues: number;
  contributedTo: number;
}

const USERNAME = "YahyaAl-Ademi";
const PINNED_REPO = "Job-Compass-Fullstack-App";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  "C#": "#178600",
  Java: "#b07219",
  Rust: "#dea584",
  Go: "#00ADD8",
  Vue: "#41b883",
  default: "#6e7681",
};

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [activity, setActivity] = useState<ActivityStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const year = new Date().getFullYear();
        const commitHeaders = { Accept: "application/vnd.github.cloak-preview" };
        const [userRes, reposRes, commitsYearRes, commitsAllRes, prsRes, issuesRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
          fetch(`https://api.github.com/search/commits?q=author:${USERNAME}+committer-date:${year}-01-01..${year}-12-31&per_page=1`, { headers: commitHeaders }),
          fetch(`https://api.github.com/search/commits?q=author:${USERNAME}&per_page=1`, { headers: commitHeaders }),
          fetch(`https://api.github.com/search/issues?q=type:pr+author:${USERNAME}&per_page=1`),
          fetch(`https://api.github.com/search/issues?q=type:issue+author:${USERNAME}&per_page=1`),
          fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=100`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("API error");

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();
        setUser(userData);
        setRepos(reposData);

        let commits2026 = 0;
        let commitsAllTime = 0;
        let totalPRs = 0;
        let totalIssues = 0;
        let contributedTo = 0;

        if (commitsYearRes.ok) {
          const d = await commitsYearRes.json();
          commits2026 = d.total_count ?? 0;
        }
        if (commitsAllRes.ok) {
          const d = await commitsAllRes.json();
          commitsAllTime = d.total_count ?? 0;
        }
        if (prsRes.ok) {
          const d = await prsRes.json();
          totalPRs = d.total_count ?? 0;
        }
        if (issuesRes.ok) {
          const d = await issuesRes.json();
          totalIssues = d.total_count ?? 0;
        }
        if (eventsRes.ok) {
          const events: Array<{ type: string; repo: { name: string } }> = await eventsRes.json();
          const externalRepos = new Set(
            events
              .filter((e) => e.type === "PushEvent" && !e.repo.name.startsWith(`${USERNAME}/`))
              .map((e) => e.repo.name)
          );
          contributedTo = externalRepos.size;
        }

        setActivity({ commits2026, commitsAllTime, totalPRs, totalIssues, contributedTo });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const ownRepos = repos.filter((r) => !r.fork);
  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);

  const langCount: Record<string, number> = {};
  ownRepos.filter((r) => r.language).forEach((r) => {
    langCount[r.language!] = (langCount[r.language!] || 0) + 1;
  });
  const topLangs = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const total = topLangs.reduce((s, [, c]) => s + c, 0);

  // Search ALL repos (including forks) for the pinned one
  const pinnedRepo = repos.find((r) => r.name === PINNED_REPO);
  const rest = ownRepos
    .filter((r) => r.name !== PINNED_REPO)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || b.forks_count - a.forks_count);
  const topRepos = pinnedRepo ? [pinnedRepo, ...rest].slice(0, 4) : rest.slice(0, 4);

  const currentYear = new Date().getFullYear();

  if (error) {
    return (
      <a
        href={`https://github.com/${USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <FaGithub className="w-4 h-4" />
        View GitHub Profile
        <ExternalLink className="w-3 h-3" />
      </a>
    );
  }

  if (loading) {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="h-28 rounded-xl bg-border/40" />
        <div className="h-24 rounded-xl bg-border/40" />
        <div className="h-20 rounded-xl bg-border/40" />
        <div className="h-40 rounded-xl bg-border/40" />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        {/* Overview */}
        <div className="rounded-xl bg-background/40 border border-border/50 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaGithub className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm text-foreground">{USERNAME}</span>
            </div>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              View Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: <BookOpen className="w-4 h-4 text-primary mb-0.5" />, value: user?.public_repos ?? 0, label: "Repos" },
              { icon: <FaStar className="w-4 h-4 text-primary mb-0.5" />, value: totalStars, label: "Stars" },
              { icon: <GitFork className="w-4 h-4 text-primary mb-0.5" />, value: totalForks, label: "Forks" },
              { icon: <Users className="w-4 h-4 text-primary mb-0.5" />, value: user?.followers ?? 0, label: "Followers" },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 bg-secondary/30 rounded-lg py-3">
                {icon}
                <span className="text-lg font-bold text-foreground">{value}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Stats */}
        {activity && (
          <div className="rounded-xl bg-background/40 border border-border/50 p-5 space-y-3">
            <span className="text-sm font-semibold text-foreground">Activity</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-row items-center gap-3 bg-secondary/20 rounded-lg px-4 py-3">
                <GitCommitHorizontal className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-foreground">{activity.commits2026}</div>
                  <div className="text-xs text-muted-foreground">Commits ({currentYear})</div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-secondary/20 rounded-lg px-4 py-3">
                <GitCommitHorizontal className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-foreground">{activity.commitsAllTime}</div>
                  <div className="text-xs text-muted-foreground">Commits (All Time)</div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-secondary/20 rounded-lg px-4 py-3">
                <GitPullRequest className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-foreground">{activity.totalPRs}</div>
                  <div className="text-xs text-muted-foreground">Total PRs</div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-secondary/20 rounded-lg px-4 py-3">
                <AlertCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-foreground">{activity.totalIssues}</div>
                  <div className="text-xs text-muted-foreground">Total Issues</div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 bg-secondary/20 rounded-lg px-4 py-3">
                <Network className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-foreground">{activity.contributedTo}</div>
                  <div className="text-xs text-muted-foreground">Contributed to (recent repos)</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {(topLangs.length > 0 || topRepos.length > 0) && (
        <div className="grid md:grid-cols-2 gap-3">
          {/* Top Languages */}
          {topLangs.length > 0 && (
            <div className={`rounded-xl bg-background/40 border border-border/50 p-5 space-y-3 ${topRepos.length === 0 ? "md:col-span-2" : ""}`}>
              <span className="text-sm font-semibold text-foreground">Most Used Languages</span>
              <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5">
                {topLangs.map(([lang, count]) => (
                  <div
                    key={lang}
                    style={{ width: `${(count / total) * 100}%`, backgroundColor: LANG_COLORS[lang] ?? LANG_COLORS.default }}
                    title={`${lang}: ${Math.round((count / total) * 100)}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {topLangs.map(([lang, count]) => (
                  <div key={lang} className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: LANG_COLORS[lang] ?? LANG_COLORS.default }} />
                    <span className="text-xs text-muted-foreground">
                      {lang} <span className="text-foreground font-medium">{Math.round((count / total) * 100)}%</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Top Repositories */}
          {topRepos.length > 0 && (
            <div className={`rounded-xl bg-background/40 border border-border/50 p-5 space-y-3 ${topLangs.length === 0 ? "md:col-span-2" : ""}`}>
              <span className="text-sm font-semibold text-foreground">Top Repositories</span>
              <div className="space-y-2">
                {topRepos.map((repo, idx) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 border border-border/30 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {idx === 0 && repo.name === PINNED_REPO ? (
                        <FaStar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      ) : (
                        <FaGithub className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {repo.name}
                      </span>
                      {repo.language && (
                        <span className="hidden sm:flex items-center gap-1 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: LANG_COLORS[repo.language] ?? LANG_COLORS.default }} />
                          <span className="text-xs text-muted-foreground">{repo.language}</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <FaStar className="w-3 h-3" /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <GitFork className="w-3 h-3" /> {repo.forks_count}
                        </span>
                      )}
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
