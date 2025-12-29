import LocaleInfo from '../util/LocaleInfo'
import { GlobalLocalizedData } from './LocaleProvider'
import { SupportedLocale } from '../util/SupportedLocale'

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  {
    locale: SupportedLocale.EN_US,
    label: 'English',
    icon: '/static/icons/ic_flag_en.svg'
  }
]

export const EN_US: GlobalLocalizedData = {
  about: 'CV',
  contact: 'Contact',
  contactMe: 'Contact me',
  credits: 'Credits',
  home: 'Home',
  language: 'Language',
  more: 'More',
  websiteTitle: 'TODO',
  news: 'Latest News',
  readMore: 'Read more',
  signUp: 'Sign up'
}
