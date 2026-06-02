# Raheal Akuta — Portfolio Website

A clean, professional portfolio site for Raheal Akuta, Virtual Assistant.

---

## How to edit the website

You don't need to know how to code. Everything is labelled clearly.  
Open the files in GitHub's online editor (click the pencil icon on any file) and look for the `<!-- EDIT: -->` comments — they tell you exactly what each piece of text does.

### The three files you'll ever need to touch:

| File | What it controls |
|------|-----------------|
| `index.html` | All the text on the page — name, bio, services, contact info, testimonials |
| `styles.css` | Colours and fonts (the `:root` section at the top has comments explaining each colour) |
| `app.js` | The tools/platforms grid — add or remove tools from the list |

### Changing your profile photo

Replace the file `assets/raheal.jpeg` with a new photo.  
**Keep the exact filename** `raheal.jpeg` — the site looks for that name automatically.

### Changing your email or phone number

In `index.html`, search for `rahealakuta@gmail.com` and `+233 55 101 9705` and replace them.  
There are two places each — one in the button and one in the contact card.

### Adding a real Upwork link

In `index.html`, find:
```html
<a href="#" class="btn btn-light">View my Upwork profile</a>
```
Replace the `#` with your full Upwork profile URL.

---

## File structure

```
raheal-portfolio/
├── index.html          ← main page
├── styles.css          ← all styles
├── app.js              ← interactivity + tools list
├── assets/
│   ├── raheal.jpeg     ← your profile photo
│   └── logos/          ← tool logo SVG files
└── README.md           ← this file
```

---

## Hosting on Vercel (one-time setup)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo
3. Click **Deploy** — no settings needed, Vercel detects it automatically
4. Every time you edit a file on GitHub, Vercel re-deploys the site automatically

---

## Custom domain (optional)

In Vercel → your project → **Settings → Domains** → add your domain.
