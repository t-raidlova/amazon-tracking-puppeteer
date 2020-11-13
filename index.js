const puppeteer = require('puppeteer')
const $ = require('cheerio')
const CronJob = require('cron').CronJob
const nodemailer = require('nodemailer')

const url= 'https://www.amazon.com/Sony-Noise-Cancelling-Headphones-WH1000XM3/dp/B07G4MNFS1/'

async function configureBrowser(){
    const browser = await puppeteer.launch();
    const page =  await browser.newPage();
    await page.goto(url);
    return page
}

async function checkPrice(page){
    await page.reload();
    let html = await page.evaluate(()=> document.body.innerHTML);
    console.log(html);
}

async function monitor(){
    let page = await configureBrowser();
    await checkPrice(page);
}

monitor()
