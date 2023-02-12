# Brightspace_Pdf_Viewer

Team 6 Add-on Activity
Team Members:

- [Jinli Xiao](https://github.com/jinlixiao)
- [Seoeun Hong](https://github.com/seoeunHong)
- [Amando Xu](https://github.com/PrettyAX)

# Overview

The Brightspace PDF Viewer is a browser extension designed for use with the
Firefox browser and Brightspace. This extension is aimed at making the viewing
of PDFs on Brightspace a smoother and easier experience.

The extension works by monitoring all internet traffic and saving the links that
contain PDFs. When the user clicks on the browser extension icon, it triggers a
browser action that opens the most recently requested PDF URL in a new tab.

No more struggling with Brightspace's layout while trying to view PDFs. With the
Brightspace PDF Viewer, you can view PDFs with just one click of the extension
button. Say goodbye to frustration and hello to an effortless PDF viewing
experience.

# How to install?

1. Download the files from this repository
2. Make sure that the files are in the format below

```
Brightspace_Pdf_Viewer/
    icons/
        border-48.png
    background.js
    manifest.json
```

3. Load up about:debugging#/runtime/this-firefox
4. Click on Load Temporary Add-on
5. Select manifest.json from the Brightspace_Pdf_Viewer that you've downloaded
