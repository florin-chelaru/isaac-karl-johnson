import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import React, { useContext, useMemo } from 'react'
import { LocaleContext, LocaleHandler, LocalizedData } from '../store/LocaleProvider'
import { SupportedLocale } from '../util/SupportedLocale'
import { withBaseURL } from '../util/string'

interface ContactTexts {
  title: string
  content: React.ReactNode
}

const EN_US: ContactTexts = {
  title: 'CONTACT ME',
  content: <>TODO</>
}

const CONTACT_TEXTS = new Map<SupportedLocale, LocalizedData>([[SupportedLocale.EN_US, EN_US]])

export default function ContactCard() {
  const localeManager = useContext<LocaleHandler>(LocaleContext)

  useMemo(() => localeManager.registerComponentStrings(ContactCard.name, CONTACT_TEXTS), [])

  const componentStrings = localeManager.componentStrings(ContactCard.name) as ContactTexts
  return (
    <Card>
      <Grid2 container>
        <Grid2 xs={12} sm={6}>
          <CardMedia
            component="img"
            // TODO: Breakpoints
            image={withBaseURL('/static/img/contact-large.jpeg')}
            alt="TODO"
            // For getting the image to stretch to the available space.
            // See https://stackoverflow.com/questions/14142378/how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
            sx={{
              flexShrink: 0,
              minHeight: '100%'
            }}
          />
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            direction: 'vertical',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <CardContent>
            <Typography variant="h5">{componentStrings.title}</Typography>

            <Typography variant="body1" paragraph>
              {componentStrings.content}
            </Typography>
          </CardContent>
        </Grid2>
      </Grid2>
    </Card>
  )
}
