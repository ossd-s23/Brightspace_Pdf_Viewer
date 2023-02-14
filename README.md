# Brightspace_Pdf_Viewer

Team 6 Add-on Activity
Team Members:

- [Jinli Xiao](https://github.com/jinlixiao)
- [Seoeun Hong](https://github.com/seoeunHong)
- [Amando Xu](https://github.com/PrettyAX)

## Overview

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

## Installation

### On Firefox

1. Download the files from this repository.
2. Make sure that the files are in the structure below:

```
src_firefox/
    icons/
        border-48.png
    background.js
    manifest.json
```

3. Open Firefox and go to the Extension page: Enter
   "about:debugging#/runtime/this-firefox" in the address bar and enter.
4. Click on Load Temporary Add-on.
5. Select manifest.json from `src_firefox` that you've downloaded.
6. The extension should now appear in the extension bar. You can also pin it.

### On Chrome

1. Download the files from this repository
2. Open Google Chrome and go to the Extensions page: Enter "chrome://extensions"
   in the address bar and press Enter.
3. Enable Developer mode: In the upper-right corner of the Extensions page,
   click on the toggle switch for Developer mode.
4. Load unpacked extension: Click on the "Load unpacked" button and select the
   `src_chrome` folder.
5. The extension should now appear in the list of installed extensions on the
   Extensions page. You can use the toggle switch to enable or disable the
   extension.

## Contribution

See the [Contribution Page](https://github.com/ossd-s23/Brightspace_Pdf_Viewer/blob/main/CONTRIBUTING.md). Also see the [Code of Conduct document](https://github.com/ossd-s23/Brightspace_Pdf_Viewer/blob/main/CODE_OF_CONDUCT.md).

## License

See the [License Page](https://github.com/ossd-s23/Brightspace_Pdf_Viewer/blob/main/LICENSE).
