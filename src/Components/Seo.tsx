import React, { useContext, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { LocaleContext, LocaleHandler, LocalizedData } from '../store/LocaleProvider'
import { SupportedLocale } from '../util/SupportedLocale'

interface SeoFields {
  title: string
  description: string
}

const EN_US: SeoFields = {
  title: 'TODO',
  description: 'TODO'
}

const SEO_TEXTS = new Map<SupportedLocale, LocalizedData>([[SupportedLocale.EN_US, EN_US]])

export default function Seo() {
  const localeManager = useContext<LocaleHandler>(LocaleContext)
  useMemo(() => localeManager.registerComponentStrings(Seo.name, SEO_TEXTS), [])
  const componentStrings = localeManager.componentStrings(Seo.name) as SeoFields

  return (
    <Helmet>
      <html lang={localeManager.locale.substring(0, 2)} />
      <meta charSet="utf-8" />
      <title>{componentStrings.title}</title>
      <link rel="canonical" href={`https://twinfog-outsourcing.io/?hl=${localeManager.locale}`} />
      <meta name="description" content={componentStrings.description} />
      <meta property="og:title" content={componentStrings.title} />
      <meta
        property="og:url"
        content={`https://twinfog-outsourcing.io/?hl=${localeManager.locale}`}
      />
      <meta property="og:description" content={componentStrings.description} />
      <meta name="twitter:title" content={componentStrings.title} />
      <meta name="twitter:description" content={componentStrings.description} />
    </Helmet>
  )
}
