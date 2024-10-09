# Coding Test

## Coding Test Solution
Here is my solution to the coding test. I am using libraries, so please run:

```bash
npm install
```

Results are in console.log() messages so it will show up in the terminal.

To run the triangle display script:
```bash
node display_triangle.js
```

To run the Micro Focus parser:
```bash
node microfocus_parser.js
```

## Notes for microfocus_parser.js
I originally used Cheerio, but I found that I cannot parse the page with Cheerio because it can only scrape content on sites that are rendered on the server side. I checked by disabling JavaScript on the site, and the data needed for the parser was missing. This is why I can't use Cheerio.

I'm using Puppeteer instead because it scrapes dynamic web pages.