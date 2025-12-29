import React from 'react'
import { Link, Typography } from '@mui/material'
import { SupportedLocale } from '../util/SupportedLocale'
import { LocalizedData } from '../store/LocaleProvider'

export interface Entry {
  dates: string
  content: React.ReactNode
}

export interface Section {
  title: string
  entries: Entry[]
}

export interface Resume {
  sections: Section[]
}

export const RESUME_EN_US: Resume = {
  sections: [
    {
      title: 'EDUCATION',
      entries: [
        {
          dates: '2011 — 2015',
          content: (
            <>
              <Typography variant="body2">
                <b>PhD</b> Computer Science
              </Typography>
              <Typography variant="overline">University of Maryland, College Park</Typography>
            </>
          )
        }
      ]
    },
    {
      title: 'EXPERIENCE',
      entries: [
        {
          dates: 'May 2022 — present',
          content: (
            <>
              <Typography variant="overline">
                <b>Twinfog Inc.</b> Iași, Romania
              </Typography>
              <Typography variant="body2">CTO</Typography>
            </>
          )
        }
      ]
    },
    {
      title: 'LANGUAGES',
      entries: [
        {
          dates: '',
          content: (
            <>
              <Typography variant="body2">
                English <i>Native</i>
                <br />
                Spanish <i>Conversational</i>
                <br />
                Romanian <i>Conversational</i>
              </Typography>
            </>
          )
        }
      ]
    },
    {
      title: 'REFERENCES',
      entries: [
        {
          dates: '',
          content: (
            <>
              <Typography variant="overline">
                <b>Todo Todo</b>
              </Typography>
              <Typography variant="body2">
                Professor, University of Maryland, College Park
                <br />
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:todo@test.com"
                  sx={{ textDecoration: 'none' }}>
                  todo@test.com
                </Link>
              </Typography>
            </>
          )
        }
      ]
    }
  ]
}

export interface AboutTexts {
  resume: Resume
  subtitle: string
  intro: string
}

const EN_US: AboutTexts = {
  resume: RESUME_EN_US,
  subtitle: 'TODO: subtitle',
  intro: 'TODO: intro'
}

export const ABOUT_TEXTS = new Map<SupportedLocale, LocalizedData>([[SupportedLocale.EN_US, EN_US]])
