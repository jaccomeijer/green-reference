import { Head } from './head.jsx'
import { HeaderNavigation } from '../components/navigation/header-navigation/header-navigation.jsx'
import { FooterNavigation } from '../components/navigation/footer-navigation/footer-navigation.jsx'
import { LegalNavigation } from '../components/navigation/legal-navigation/legal-navigation.jsx'
import { getMenuItems } from '../../build-scripts/get-menu-items.js'
import { actionMenu } from "../data/action-menu.js"
import { socialMenu } from "../data/social-menu.js"

export const PageLayout = props => {
  const mainMenu = getMenuItems({
    pages: props.pages,
  })

  return (
    <html lang={props.metadata.language}>
      <Head
        metadata={props.metadata}
        page={props.page}
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
