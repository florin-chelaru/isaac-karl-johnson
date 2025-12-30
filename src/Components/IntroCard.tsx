import React, { useContext, useMemo } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { Button, Card, CardActions, CardContent, CardMedia, Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import { LocaleContext, LocaleHandler, LocalizedData } from '../store/LocaleProvider'
import { SupportedLocale } from '../util/SupportedLocale'
import { useNavigate } from 'react-router-dom'
import { withBaseURL } from '../util/string'
import { scrollToTop } from '../util/window'
import Announcement from './Announcement'
import { AnnouncementContext, AnnouncementHandler } from '../store/AnnouncementProvider'

interface IntroTexts extends LocalizedData {
  title: string
  subtitle: string
  shortDescription: React.ReactNode
}

const EN_US: IntroTexts = {
  title: 'Music & Scholarship',
  subtitle:
    'Organist, choral conductor, composer, and educator with broad experience in performance and teaching.',
  shortDescription: (
    <>
      Isaac Johnson is a musicologist and church musician completing a Ph.D. in Musicology at the
      University of Colorado–Boulder. He performs and teaches across the full span of Western music
      history, works with musicians of all ages and levels, and publishes research in leading
      journals. He is an active organ recitalist, choral composer, and founder of educational
      initiatives, currently teaching and serving churches across northern Colorado.
    </>
  )
}

const TEXTS = new Map<SupportedLocale, LocalizedData>([[SupportedLocale.EN_US, EN_US]])

export default function IntroCard() {
  const announcementManager = useContext<AnnouncementHandler>(AnnouncementContext)
  const strings = useContext<LocaleHandler>(LocaleContext).globalStringList
  const localeManager = useContext<LocaleHandler>(LocaleContext)
  useMemo(() => localeManager.registerComponentStrings(IntroCard.name, TEXTS), [])
  const componentStrings = localeManager.componentStrings(IntroCard.name) as IntroTexts
  const navigate = useNavigate()

  return (
    <Card>
      {!announcementManager.hidden && <Announcement />}
      <Grid2 container>
        <Grid2 xs={12} sm={8} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignContent: 'center',
              height: '100%'
            }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h1">
                {componentStrings.title.toUpperCase()}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div">
                {componentStrings.subtitle}
              </Typography>
              <br />
              <Typography variant="body2" color="text.secondary">
                {componentStrings.shortDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  navigate('/lessons')
                  scrollToTop()
                }}>
                {strings.more}
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  navigate('/contact')
                  scrollToTop()
                }}>
                {strings.contactMe}
              </Button>
            </CardActions>
          </Box>
        </Grid2>
        <Grid2
          xs={12}
          sm={4}
          md={8}
          // For getting the image to stretch to the available space.
          // See https://stackoverflow.com/questions/14142378/how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
          sx={{
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
          <CardMedia
            component="img"
            // TODO: Use breakpoint images (smaller images for smaller screens)
            image={withBaseURL('/social-media.jpeg')}
            alt="Susanna Johnson-Chelaru"
            // For getting the image to stretch to the available space.
            // See https://stackoverflow.com/questions/14142378/how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
            sx={{
              flexShrink: 0,
              minWidth: '100%',
              minHeight: '100%'
            }}
          />
        </Grid2>
      </Grid2>
    </Card>
  )
}
