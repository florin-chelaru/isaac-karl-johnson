import YouTubeVideo from '../util/YouTubeVideo'

const YOUTUBE_VIDEO_IDS_AND_TITLES: Array<{ videoId: string; title: string }> = [
  {
    videoId: '_pU674c1LqQ',
    title: 'Charles Tournemire--Hodie mecum eris in Paradiso'
  },
  {
    videoId: 'ddxhbVuXB8E',
    title: 'Nicolas de Grigny--Ave Maris Stella'
  },
  {
    videoId: 'b7jzJst5lvo',
    title: 'J.S. Bach--Trio Sonata II in c minor, BWV 526'
  },
  {
    videoId: 'AiRpk1lsCVY',
    title: "Maurice Duruflé--Prélude sur l'Introït de l'Épiphanie, op. 13"
  },
  {
    videoId: 'aY8mYtsDyKg',
    title: 'Herbert Howells--Psalm-Prelude III (Ps. 23, v. 4), Op. 32, no. 3'
  },
  {
    videoId: 'jKmdFtI9h0E',
    title: 'Jean Langlais--Fête'
  },
  {
    videoId: 'OSr9M89AJs8',
    title:
      'Charles Tournemire--"II [Offertoire]" from Immaculate Conception suite of L\'orgue Mystique'
  },
  {
    videoId: 'zKrc6Wgmz2k',
    title: 'Louis Vierne--"Romance" from Symphonie no. 4, op. 32'
  },
  {
    videoId: 'UXXnKHwPkPo',
    title: 'Charles-Marie Widor--"Andante Sostenuto" from Symphonie no. 9 "Gothique," op. 70'
  },
  {
    videoId: 'b6gB8i2Tmi8',
    title: 'Christmas Fanfare and Toccata (original composition)'
  },
  {
    videoId: '5qxo1h3U3mw',
    title: 'Louis Vierne--"Romance" from Symphony no. 4'
  },
  {
    videoId: 'KYtznZ_xXwg',
    title: 'Olivier Messiaen--Prière du Christ montant vers son Père'
  },
  {
    videoId: 'YdddprJPQ94',
    title: 'Fernand de la Tombelle--Missa Magne Deus'
  },
  {
    videoId: 'vazSQV4gtvM',
    title: 'Fernand de la Tombelle-Missa Orbis Factor (SCSM Lecture-Recital)'
  },
  {
    videoId: 'izC3JOJte0Y',
    title: 'Franz Liszt--Missa pro Organo, S. 264 (SCSM Lecture-Recital)'
  },
  {
    videoId: 'l2y7cRBNx7M',
    title: "Olivier Messiaen--Prière du Christ montant vers son Père (L'ascension mvt. IV)"
  },
  {
    videoId: '5GjMJtLjwFk',
    title: 'Andante Sostenuto from Symphonie no. 9 "Gothique," op. 70--Charles-Marie Widor'
  },
  {
    videoId: 'R9WgjPHA1ps',
    title: 'Le Banquet Céleste--Olivier Messiaen'
  },
  {
    videoId: 'wum1ZIel0AM',
    title: 'Herzlich tut mich verlangen--J.S. Bach'
  },
  {
    videoId: '7CPWNb9m5UY',
    title: 'Christmas Fanfare and Toccata (original composition)'
  },
  {
    videoId: 'bczmfm0vbAc',
    title: 'Improvisation on Salve Regina'
  },
  {
    videoId: 'wKfiMej3GdE',
    title: 'Senior Recital--Samford University, April 2015'
  },
  {
    videoId: 'tVh-yqM2eUk',
    title: 'Olivier Messiaen-Dieu parmi nous'
  },
  {
    videoId: '5hQ5rLoE5Pc',
    title: 'Transports de Joie--Olivier Messiaen'
  },
  {
    videoId: '52Usr6glhEY',
    title: 'Olivier Messiaen--Le banquet céleste'
  },
  {
    videoId: 'yDMJ-GPhey4',
    title: 'Olivier Messiaen--Le verbe (La Nativité du Seigneur mvt. IV)'
  },
  {
    videoId: '-NFebGgLuO4',
    title: 'Olivier Messiaen--Jésus accepte la souffrance (La Nativité du Seigneur mvt. VII)'
  },
  {
    videoId: 'mgdEZkzj1yo',
    title: 'Olivier Messiaen--Les anges (La Nativité du Seigneur mvt. VI)'
  },
  {
    videoId: '01fLacjq-oo',
    title: 'Olivier Messiaen--Les enfants de Dieu (La Nativité du Seigneur mvt. V)'
  },
  {
    videoId: 'JHAFVfrm99Y',
    title: 'Olivier Messiaen--Dieu parmi nous (La Nativité du Seigneur mvt. IX)'
  },
  {
    videoId: '6WbpP0dHYPc',
    title: "Olivier Messiaen--La vierge et l'enfant (La Nativité du Seigneur mvt. I)"
  },
  {
    videoId: 'HQr0Ndu47rw',
    title: 'Olivier Messiaen--Les bergers (La Nativité du Seigneur mvt. II)'
  },
  {
    videoId: 'y5PZExskI6g',
    title: 'Olivier Messiaen--Les mages (La Nativité du Seigneur mvt. VIII)'
  },
  {
    videoId: '-eXV69XacgA',
    title: 'Prélude, Fugue, et Variation, op. 18--César Franck'
  },
  {
    videoId: '0b5Qyk1Uk6k',
    title: 'Olivier Messiaen--Desseins éternels (La Nativité du Seigneur mvt. III)'
  },
  {
    videoId: 'Sn2_TwSYTx8',
    title: "L'ascension-Oliver Messiaen"
  }
]

const YOUTUBE_VIDEOS: YouTubeVideo[] = YOUTUBE_VIDEO_IDS_AND_TITLES.map((info) => ({
  videoId: info.videoId,
  snippet: {
    publishedAt: '',
    title: info.title,
    description: '',
    thumbnails: {
      default: {
        url: `https://i.ytimg.com/vi/${info.videoId}/default.jpg`,
        width: 120,
        height: 90
      },
      medium: {
        url: `https://i.ytimg.com/vi/${info.videoId}/mqdefault.jpg`,
        width: 320,
        height: 180
      },
      high: {
        url: `https://i.ytimg.com/vi/${info.videoId}/hqdefault.jpg`,
        width: 480,
        height: 360
      }
    }
  }
}))

export default YOUTUBE_VIDEOS
