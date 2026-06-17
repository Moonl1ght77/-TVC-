import type { VersionLogItem } from "@/data/versionLogs";

type VersionLogProps = {
  logs: VersionLogItem[];
};

export function VersionLog({ logs }: VersionLogProps) {
  return (
    <div className="space-y-5">
      {logs.map((log) => (
        <article key={log.version} className="grid gap-4 border-t border-line pt-5 sm:grid-cols-[140px_1fr]">
          <div>
            <p className="font-serif text-2xl text-ink">{log.version}</p>
            <p className="text-sm text-muted">{log.date}</p>
          </div>
          <ul className="space-y-2 text-muted">
            {log.changes.map((change) => (
              <li key={change}>- {change}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
