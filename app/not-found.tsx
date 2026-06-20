// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="
      min-h-screen flex items-center justify-center
      bg-bg-light dark:bg-bg-dark
    ">
      <div className="flex items-center gap-4">
        <div className="
          px-4 py-3 rounded-lg
          bg-accent-subtle
        ">
          <span className="text-accent text-2xl font-bold">404</span>
        </div>

        <div className="w-px h-8 bg-bg-border dark:bg-bg-dborder" />

        <p className="text-ink-secondary dark:text-ink-isec text-sm">
          This page could not be found.
        </p>
      </div>
    </div>
  )
}