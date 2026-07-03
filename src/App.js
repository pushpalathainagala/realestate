import { createElement } from 'react'
import AppView from './AppView.jsx'
import Home from './pages/Home.jsx'
import Buyers from './pages/Buyers.jsx'
import Sellers from './pages/Sellers.jsx'
import Services from './pages/Services.jsx'
import Guwahati from './pages/Guwahati.jsx'
import NewsGuide from './pages/NewsGuide.jsx'
import DownloadApp from './pages/DownloadApp.jsx'
import PostProperty from './pages/PostProperty.jsx'
import Login from './pages/Login.jsx'

const routes = {
  '/': Home,
  '/buyers': Buyers,
  '/sellers': Sellers,
  '/services': Services,
  '/guwahati': Guwahati,
  '/news-guide': NewsGuide,
  '/download-app': DownloadApp,
  '/post-property': PostProperty,
  '/login': Login,
}

export default function App() {
  return createElement(AppView, { routes })
}
