import { Head } from '@jaccomeijer/green-lib'
import { HeaderNavigation } from '@jaccomeijer/green-lib'
import { FooterNavigation } from '@jaccomeijer/green-lib'
import { LegalNavigation } from '@jaccomeijer/green-lib'
import { getMenuItems } from '@jaccomeijer/green-lib'

import { actionMenu } from "../data/action-menu.js"
import { socialMenu } from "../data/social-menu.js"
import favicon from '../assets/favicon/favicon.ico'

export const PageLayout = props => {
  const mainMenu = getMenuItems({
    pages: props.pages,
  })

  return (
    <html lang={props.metadata.language}>
      <Head
        metadata={props.metadata}
        page={props.page}
        favicon={favicon}
      />
      <body>
        <div class="border-bottom">
        <div class="container">
        <HeaderNavigation
          actionMenu={actionMenu}
          mainMenu={mainMenu}
          metadata={props.metadata}
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
              mainMenu={mainMenu}
              pageUrl={props.page.url}
              socialMenu={socialMenu}
            />
          </div>
        </div>
        <div class="border-top">
          <div class="container">
            <LegalNavigation metadata={props.metadata} />
          </div>
        </div>
      </body>
    </html>
  )
}
