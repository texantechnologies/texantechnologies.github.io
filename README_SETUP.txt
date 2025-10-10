
README - Texan Technologies (GitHub Pages + Freenom)

Files:
- index.html, about.html, meet-the-techs.html, services.html, projects.html, contact.html
- style.css, script.js
- img/ (logos, placeholders)
- CNAME (contains: texantechnologies.tk)
- README_SETUP.txt (this file)
- SETUP_GUIDE.pdf (same content in PDF)

Quick Publish Steps (GitHub Pages):
1. Create a GitHub account at https://github.com if you don't have one.
2. Create a new public repository named exactly: texantechnologies.github.io
3. Upload ALL files from this ZIP to the root of that repository (you can drag-and-drop).
4. Commit changes.
5. Go to the repository Settings -> Pages -> Set source to 'main' branch (root). Save.
6. Your site will appear at https://texantechnologies.github.io (temporary) within a few minutes.

Connect Freenom domain (texantechnologies.tk):
1. Create an account at https://www.freenom.com and register texantechnologies.tk (free TLDs: .tk .ml .ga .cf .gq).
2. Go to "My Domains" -> Manage Domain -> Manage Freenom DNS.
3. Add a CNAME record:
   - Name: www
   - Target: texantechnologies.github.io
4. Optional: set up URL forwarding from root (texantechnologies.tk) to https://www.texantechnologies.tk if Freenom requires.
5. In your GitHub repo, ensure the file 'CNAME' contains: texantechnologies.tk
6. Wait for DNS propagation (can be minutes to 24 hours).

Activate Live Chat (Tawk.to):
1. Go to https://www.tawk.to and create a free account.
2. Add a property and get the widget script (copy the JavaScript).
3. Open every HTML file and paste your Tawk.to script just before the closing </body> tag where the comment <!-- Live Chat placeholder: paste your Tawk.to script here --> appears.
4. Save and commit changes to your GitHub repo.

Activate Contact Form (when you have an email):
1. Use Formspree (https://formspree.io) or EmailJS.
2. Sign up, create a form endpoint, then replace the placeholder in contact.html with the provided form action.
3. Commit changes.

Editing content:
- To update text or images, edit the corresponding HTML/CSS files and push to GitHub.
- Replace logos in the img/ folder with your real files (same names) and commit.

Support:
If you want, I can deploy the site to your GitHub for you or walk you through the Freenom DNS steps live.
