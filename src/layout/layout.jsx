import { Head } from './head/head.jsx'
import { NavigationHeader } from '@jaccomeijer/green-lib'
import { NavigationFooter } from '@jaccomeijer/green-lib'
import { NavigationLegal } from '@jaccomeijer/green-lib'
import { getMenuActions } from '@jaccomeijer/green-lib'
import { globals } from '../config/globals.js'
import favicon from '../assets/favicon/favicon.ico'

export const Layout = props => {
  const mainActions = getMenuActions({
    pages: props.pages,
  })

  return (
    <html lang={globals.metadata.content.language}>
      <Head
        enableReload={true}
        favicon={favicon}
        globals={globals}
        page={props.page}
      />
      <body>
        <a class="skip-link" href="#main-content">Skip to content</a>
        <header role="banner" class="site-header s-wrapper">
          <div class="main-menu s-flex-row u-justify-space-between s-block-space u-block-space-2xs">
            <nav aria-label="primary">
              <NavigationHeader menu={mainMenu} class="s-flex-row" />
            </nav>
            <div class="site-branding">
              Green lib
            </div>
          </div>
          <nav class="sub-menu s-flex-row s-block-space u-block-space-3xs">
            <Menu menu={subMenu} class="s-flex-row" />
          </nav>
        </header>
        <main tabindex="-1" id="main-content">
          <div class="page s-wrapper s-block-space u-block-space-l">
            <article class="markdown s-flex-column u-gap-m">
              {props.children}
            </article>
          </div>
        </main>
        <footer class="s-wrapper u-font-size--1">
          This is the footer
        </footer>
      </body>
    </html>
  )


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
