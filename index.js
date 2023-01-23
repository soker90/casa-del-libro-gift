import { chromium } from 'playwright-chromium'

const URL = 'https://www.nicequest.com/es/incentive/Tarjeta-Casa-del-Libro-25%E2%82%AC/fc12b821a458dc3c'

const browser = await chromium.launch({ headless: true })

const page = await browser.newPage()
await page.goto(URL)
setTimeout(async() => {
  const content = await page.$$('#inc-but-redeem')
  content.length === 1 && console.log('Botón activado') // TODO notificar
  process.exit(0)
}, 10000)



