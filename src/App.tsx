import React, { useEffect } from 'react'
import './App.css'
import DrawerAppBar, { NavItemInfo } from './Components/DrawerAppBar'
import LocaleProvider from './store/LocaleProvider'
import Home from './pages/Home'
import Grid2 from '@mui/material/Unstable_Grid2'
import CustomThemeProvider from './theme/CustomThemeProvider'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import AttributionIcon from '@mui/icons-material/Attribution'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollTop from './Components/ScrollTop'
import Credits from './pages/Credits'
import Seo from './Components/Seo'
import LocalizedCookieConsent from './Components/LocalizedCookieConsent'
import { gaSendPageView } from './util/google-analytics'
import AnnouncementProvider from './store/AnnouncementProvider'

function App() {
  const navItems: NavItemInfo[] = [
    {
      key: 'home',
      label: (strings) => strings.home,
      icon: <HomeIcon />,
      path: '/'
    },
    {
      key: 'about',
      label: (strings) => strings.about,
      icon: <InfoIcon />,
      path: '/about'
    },
    {
      key: 'contact',
      label: (strings) => strings.contact,
      icon: <ContactMailIcon />,
      path: '/contact'
    },
    {
      key: 'credits',
      label: (strings) => strings.credits,
      icon: <AttributionIcon />,
      path: '/credits'
    }
  ]

  // Track route changes and send to Google Analytics
  const location = useLocation()
  useEffect(() => gaSendPageView(), [location])

  return (
    <CustomThemeProvider>
      <LocaleProvider>
        <AnnouncementProvider>
          <Seo />
          <LocalizedCookieConsent />
          <DrawerAppBar navItems={navItems} />
          <Grid2 container>
            <Grid2 xs={12}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/credits" element={<Credits />} />
              </Routes>
            </Grid2>
          </Grid2>
          <ScrollTop />
        </AnnouncementProvider>
      </LocaleProvider>
    </CustomThemeProvider>
  )
}

export default App
