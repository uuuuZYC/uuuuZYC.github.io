# Yongchang Zhang's homepage

Static personal homepage published at <https://uuuuzyc.github.io/> with GitHub Pages. No build step is required.

## Preview locally

Run `python3 -m http.server 8000` from this directory, then open <http://localhost:8000>.

## Publication images

Each `.pub` entry in `index.html` pairs a figure with the paper's details. Images appear to the right of the text on larger screens and above it on phones. Clicking a figure opens the full-size image.

`assets/images/see-it-say-it-sorted.png` is Figure 1 (reasoning pattern comparison) from *See It, Say It, Sorted*, copied unchanged from the [authors' repository](https://github.com/uuuuZYC/ECRD/blob/0bc209f599bfef0d28d19e9a34024464406a9295/assets/fig1_reasoning_pattern.png). Keep publication figures in `assets/images/` and set their actual `width`, `height`, and descriptive `alt` text in the HTML.

## Visit counter

The footer uses [Busuanzi](https://busuanzi.ibruce.info/) to display total page views (`Views`) and the service's visitor count (`Visitors`) for the site. Totals are stored by the service and shared across browsers; reloading the page adds a view. Visitor counts are estimates, not a count of identifiable people.

The script in `assets/js/visitor-counter.js` runs only on `uuuuzyc.github.io`, so local previews do not contribute. Update that hostname if moving to a custom domain. Statistics begin when the service is enabled; earlier traffic cannot be recovered. Values remain hidden when JavaScript is disabled or the service is blocked or unavailable.

The counter makes a request to the third-party Busuanzi service. No account, API key, or backend is needed.
