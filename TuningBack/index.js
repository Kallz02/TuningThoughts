const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");
const { promisify } = require("util");
const sleep = promisify(setTimeout);
const dotenv = require("dotenv");
const { DateTime } = require("luxon");
const exec = promisify(require("child_process").exec);

dotenv.config();

async function getChannel(CHANNEL) {
  const options = {
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(`https://www.youtube.com/@${CHANNEL}/community`);
  await sleep(1000);
  console.log(`Got ${CHANNEL} channel`);
  return { browser, page };
}

async function scrollToBottom(page) {
  let offset = 0;
  while (true) {
    const current = offset;
    await page.evaluate((scrollOffset) => {
      window.scrollTo(scrollOffset, scrollOffset + 1000);
    }, offset);
    await sleep(500);
    offset = await page.evaluate(() => window.pageYOffset);
    if (offset === current) {
      break;
    }
  }
  await sleep(1000);
  console.log("Scrolled to the bottom");
}

async function getPosts(page) {
  const postLinks = await page.evaluate(() => {
    const posts = Array.from(
      document.querySelectorAll(
        "#contents #content-attachment a[href*='post/']"
      )
    );
    return posts.map((post) => post.href);
  });
  console.log("Got the links of posts");
  return postLinks;
}

async function scraper(page, postLinks, FOLDER) {
  if (!fs.existsSync(FOLDER)) {
    fs.mkdirSync(FOLDER);
  }
  process.chdir(FOLDER);
  const data = [];
  let counter = 1;
  const file = fs.createWriteStream('urls.txt');
  for (const url of postLinks.reverse()) {
    console.log('Making ' + url);
    await page.goto(url);
    await sleep(1000);
    const image = await page.$('#image-container img');
    const link = await image.evaluate((e) => e.src);
    await exec(`curl ${link} > image${counter}.png`);
    const content = await page.evaluate(() => {
      const element = document.querySelector('#content-text');
      return element ? element.innerText : '';
    });
    console.log(content);
    await sleep(1000);
    data.push({ image: `image${counter}.png`, content });
    counter++;
    file.write(url + '\n');
  }
  file.end();
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

async function updater(page, postLinks, FOLDER) {
  console.log(DateTime.now().toString());
  await sleep(2000);
  process.chdir(FOLDER);
  const { stdout } = await exec('cat urls.txt | wc -l');
  let num = parseInt(stdout.trim());
  const lines = fs.readFileSync('urls.txt', 'utf-8').split('\n');
  console.log(num);
  const file = fs.createWriteStream('urls.txt', { flags: 'a' });
  const data = fs.existsSync('data.json')
    ? JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    : [];
  for (const url of postLinks.reverse()) {
    if (lines.includes(url)) {
      console.log(`Already got ${url}`);
    } else {
      await page.goto(url);
      await sleep(1000);
      const image = await page.$('#image-container img');
      const src = await image.evaluate((e) => e.src);
      console.log('Making ' + url);
      num++;
      await exec(`curl ${src} > image${num}.png`);
      await sleep(1000);
      console.log('Finished this one');
      file.write(url + '\n');
      const content = await page.evaluate(() => {
        const element = document.querySelector('#content-text');
        return element ? element.innerText : '';
      });
      data.push({ image: `image${num}.png`, content });
    }
  }
  file.end();
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}
const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  const { CHANNEL, FOLDER } = req.body;
  const { browser, page } = await getChannel(CHANNEL);
  await scrollToBottom(page);
  const postLinks = await getPosts(page);
  await scraper(page, postLinks, FOLDER);
  browser.close();
  res.send("Data creation complete");
});

app.post("/update", async (req, res) => {
  const { CHANNEL, FOLDER } = req.body;
  const { browser, page } = await getChannel(CHANNEL);
  await page.evaluate(() => {
    window.scrollTo(0, 2000);
  });
  await sleep(1000);
  const postLinks = await getPosts(page);
  await updater(page, postLinks, FOLDER);
  browser.close();
  res.send("Data update complete");
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
