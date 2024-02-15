import { Head } from '@jaccomeijer/green-lib'
import { HeaderNavigation } from '@jaccomeijer/green-lib'
import { FooterNavigation } from '@jaccomeijer/green-lib'
import { LegalNavigation } from '@jaccomeijer/green-lib'
import { getMenuItems } from '@jaccomeijer/green-lib'
import { globals } from '../data/globals.js'
import { actionMenu } from "../data/action-menu.js"
import { socialMenu } from "../data/social-menu.js"
import favicon from '../assets/favicon/favicon.ico'

export const PageLayout = props => {
  const mainMenu = getMenuItems({
    pages: props.pages,
  })

  return (
    <html lang={globals.metadata.content.language}>
      <Head
        enableReload={process.env.MODE === 'serve'}
        favicon={favicon}
        globals={globals}
        page={props.page}
      />
      <body>
        <div class="border-bottom">
        <div class="container">
        <HeaderNavigation
          actionMenu={actionMenu}
          globals={globals}
          mainMenu={mainMenu}
          pageUrl={props.page.url}
          socialMenu={socialMenu}
        />
        </div>
        </div>
        <div class="container">
          {props.children}
        </div>
        <div class="border-top margin-top-6">
          <div class="container">
            <FooterNavigation 
              globals={globals}
              pageUrl={props.page.url}
              socialMenu={socialMenu}
            />
          </div>
        </div>
        <div class="border-top">
          <div class="container">
            <LegalNavigation
              globals={globals}
            />
          </div>
        </div>
      </body>
    </html>
  )
}
