# schermaiolo.dev

GitHub Pages/Jekyll source for `schermaiolo.dev`.

## Local preview

```bash
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000`.

## Content model

- `_projects/` — things I build.
- `_posts/` — things I write.
- `_activity/` — selected things I do: commits, releases, PRs, public contributions and project milestones.

Activity is curated rather than an automatic mirror of every GitHub event, so the site stays useful instead of becoming a raw commit feed.

Visible dates use `19 Sep 2026`; front matter keeps ISO dates such as `2026-09-19`.