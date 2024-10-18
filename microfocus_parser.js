import puppeteer from "puppeteer";

// Task: Migrate product information from the Micro Focus page
// URL: https://www.microfocus.com/en-us/products?trial=true
// Fields to extract:
// - Product Name
// - Starting Letter (e.g., "Adoption Readiness Tool" -> "A")
// - Description
// - Free Trial / Demo Request URL
// - Support Link URL
// - Community Link URL

// Note: Initially attempted to use Cheerio for scraping,
// but it only works with server-rendered content. Disabling JavaScript
// showed that necessary data was absent. Using Puppeteer instead
// to handle dynamic content.

const url = "https://www.microfocus.com/en-us/products?trial=true";

const fetchData = async () => {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const products = await page.evaluate(() => {
      const items = [];
      const productContainer = document.querySelectorAll(".uk-card");

      productContainer.forEach((card) => {
        const productName = card
          .querySelector("a.block-header")
          ?.innerText.trim();
        const description = card
          .querySelector(".description p")
          ?.innerText.trim();
        const freeTrial = card.querySelector(".cta-buttons a")?.href || "";
        const supportUrl = card.querySelector('a[href*="support"]')?.href || "";
        const communityUrl =
          card.querySelector('a[href*="community"]')?.href || "";
        const startingLetter = productName
          ? productName.charAt(0).toUpperCase()
          : "";

        items.push({
          productName: productName,
          startingLetter: startingLetter,
          description: description,
          freeTrial: freeTrial,
          supportUrl: supportUrl,
          communityUrl: communityUrl,
        });
      });

      return items;
    });

    console.log(JSON.stringify(products, null, 4));
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

fetchData();
