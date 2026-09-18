# dahyun-won.github.io

Personal research website for Dahyun Won. Static HTML/CSS/JS, no build step.

## Publish with GitHub Pages

1. On GitHub, create a new **public** repository named exactly `dahyun-won.github.io`.
2. Install [Git for Windows](https://git-scm.com/download/win) if you don't have it.
3. In this folder, run:
   ```
   git init
   git add -A
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/dahyun-won/dahyun-won.github.io.git
   git push -u origin main
   ```
4. In the repo's Settings → Pages, set the source to the `main` branch, root folder.
5. The site will be live at `https://dahyun-won.github.io/` within a few minutes.

## Local preview

Any static file server works, e.g.:
```
python -m http.server 8000
```
then open `http://localhost:8000`.
