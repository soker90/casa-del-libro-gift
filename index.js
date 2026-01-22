import { chromium } from 'playwright-chromium'
import TelegramBot from 'node-telegram-bot-api'

const TOKEN_TELEGRAM = process.env.TOKEN_TELEGRAM
const bot = new TelegramBot(TOKEN_TELEGRAM)
const CHAT_ID = process.env.CHAT_ID

const URL = 'https://www.nicequest.com/es/incentive/Tarjeta-Amazon-100%E2%82%AC/815b7d849953d6d7'

const browser = await chromium.launch({ headless: true })

const page = await browser.newPage()
await page.goto(URL)

console.log('Comprobando...')

setTimeout(async() => {
  const content = await page.$$('#inc-but-redeem')
  
  if(content.length === 1){
    console.log('Botón activado')
    await bot.sendMessage(CHAT_ID, '[nicequest] La casa del libro está disponible para canjear')
  }
  
  process.exit(0)
}, 10000)



