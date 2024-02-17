import { Head } from '@jaccomeijer/green-lib'
import { HeaderNavigation } from '@jaccomeijer/green-lib'
import { FooterNavigation } from '@jaccomeijer/green-lib'
import { LegalNavigation } from '@jaccomeijer/green-lib'
import { getMenuActions } from '@jaccomeijer/green-lib'
import { globals } from '../config/globals.js'
import favicon from '../assets/favicon/favicon.ico'
import globalCss from '@jaccomeijer/green-lib/css/global.bundle.css'
import settingsCss from '../assets/css/settings.bundle.css'

export const PageLayout = props => {
  const mainActions = getMenuActions({
    pages: props.pages,
  })

  return (
    <html lang={globals.metadata.content.language}>
      <Head
        enableReload={process.env.MODE === 'serve'}
        favicon={favicon}
        globals={globals}
        page={props.page}
        stylesheets={[settingsCss, globalCss]}
      />
      <body>
        <div class="border-bottom">
        <div class="container">
        <HeaderNavigation
          callActions={globals.actions.call}
          globals={globals}
          mainActions={mainActions}
          pageUrl={props.page.url}
          socialActions={globals.actions.social}
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
              socialActions={globals.actions.social}
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
