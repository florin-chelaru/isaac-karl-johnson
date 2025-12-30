import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Fab,
  IconButton,
  ImageList,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Grid2 from '@mui/material/Unstable_Grid2'
import React, { useContext } from 'react'
import IntroCard from '../Components/IntroCard'
import { useUser } from '../store/UserProvider'
import YouTubeVideo from '../util/YouTubeVideo'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../util/window'
import { LocaleContext, LocaleHandler } from '../store/LocaleProvider'
import { withBaseURL } from '../util/string'
import VideosMasonry from '../Components/VideosMasonry'
import { SelectedVideoContext, SelectedVideoManager } from '../store/SelectedVideoProvider'

export interface HomeProps {}

export default function Home({}: HomeProps) {
  const { user } = useUser()
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const navigate = useNavigate()
  const strings = useContext<LocaleHandler>(LocaleContext).globalStringList
  const selectedVideoManager = useContext<SelectedVideoManager>(SelectedVideoContext)

  // TODO: We have the same logic in the Video Channel. This dialog and the Are you sure dialog should be a separate component
  const [openAddVideoDialog, setOpenAddVideoDialog] = React.useState<boolean>(false)
  const [openAreYouSureDialog, setOpenAreYouSureDialog] = React.useState<boolean>(false)
  const [selectedVideoId, setSelectedVideoId] = React.useState<string | null>(null)
  const videos: YouTubeVideo[] = [
    {
      snippet: {
        description: '',
        publishedAt: '',
        thumbnails: {
          default: {
            height: 90,
            url: 'https://i.ytimg.com/vi/8TlnSFMGLLw/default.jpg',
            width: 120
          },
          high: {
            height: 360,
            url: 'https://i.ytimg.com/vi/8TlnSFMGLLw/hqdefault.jpg',
            width: 480
          },
          medium: {
            height: 180,
            url: 'https://i.ytimg.com/vi/8TlnSFMGLLw/mqdefault.jpg',
            width: 320
          }
        },
        title: 'Subvenite/Saints of God (original composition)'
      },
      videoId: '8TlnSFMGLLw'
    },
    {
      snippet: {
        description: '',
        publishedAt: '',
        thumbnails: {
          default: {
            height: 90,
            url: 'https://i.ytimg.com/vi/UXXnKHwPkPo/default.jpg',
            width: 120
          },
          high: {
            height: 360,
            url: 'https://i.ytimg.com/vi/UXXnKHwPkPo/hqdefault.jpg',
            width: 480
          },
          medium: {
            height: 180,
            url: 'https://i.ytimg.com/vi/UXXnKHwPkPo/mqdefault.jpg',
            width: 320
          }
        },
        title: 'Charles-Marie Widor--"Andante Sostenuto" from Symphonie no. 9 "Gothique," op. 70'
      },
      videoId: 'UXXnKHwPkPo'
    },
    {
      snippet: {
        description: '',
        publishedAt: '',
        thumbnails: {
          default: {
            height: 90,
            url: 'https://i.ytimg.com/vi/inJfcLOp7hs/default.jpg',
            width: 120
          },
          high: {
            height: 360,
            url: 'https://i.ytimg.com/vi/inJfcLOp7hs/hqdefault.jpg',
            width: 480
          },
          medium: {
            height: 180,
            url: 'https://i.ytimg.com/vi/inJfcLOp7hs/mqdefault.jpg',
            width: 320
          }
        },
        title: 'Knoxville Chant Camp 2025'
      },
      videoId: 'inJfcLOp7hs'
    },
    {
      snippet: {
        description: '',
        publishedAt: '',
        thumbnails: {
          default: {
            height: 90,
            url: 'https://i.ytimg.com/vi/19bRdZXW_E0/default.jpg',
            width: 120
          },
          high: {
            height: 360,
            url: 'https://i.ytimg.com/vi/19bRdZXW_E0/hqdefault.jpg',
            width: 480
          },
          medium: {
            height: 180,
            url: 'https://i.ytimg.com/vi/19bRdZXW_E0/mqdefault.jpg',
            width: 320
          }
        },
        title: 'Ne Timeas, Maria--Tomas Luis de Victoria'
      },
      videoId: '19bRdZXW_E0'
    }
  ]
  return (
    <>
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Toolbar />
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <IntroCard />
          </Grid2>
          <Grid2
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <br />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
              }}>
              <Typography variant="h5" component="h2" sx={{ flexGrow: 1, textAlign: 'center' }}>
                MUSICAL WORK
              </Typography>
              {user?.role === 'teacher' && (
                <IconButton aria-label="add" onClick={() => setOpenAddVideoDialog(true)}>
                  <AddIcon />
                </IconButton>
              )}
            </Box>
          </Grid2>
          <Grid2 xs={12}>
            <Grid2 xs={12}>
              <ImageList cols={md ? 2 : 1} gap={16}>
                {videos.map((props: any, i) => (
                  <Card key={`recital-video-${i}`} sx={{ position: 'relative' }}>
                    <CardMedia
                      component="iframe"
                      height="400"
                      src={`https://www.youtube.com/embed/${props.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {user?.role === 'teacher' && (
                      <Fab
                        aria-label="delete"
                        size="small"
                        sx={{ position: 'absolute', bottom: 10, right: 10 }}
                        onClick={() => {
                          setSelectedVideoId(props.videoId)
                          setOpenAreYouSureDialog(true)
                        }}>
                        <DeleteIcon />
                      </Fab>
                    )}
                  </Card>
                ))}
              </ImageList>
            </Grid2>
          </Grid2>

          <Grid2
            xs={12}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Button
              size="medium"
              variant="contained"
              onClick={() => {
                navigate('/contact')
                scrollToTop()
              }}>
              {strings.contactMe}
            </Button>
          </Grid2>
          <Grid2 xs={12}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                m: 'auto'
              }}>
              <Avatar
                alt="Susanna Johnson-Chelaru"
                src={withBaseURL('/static/img/youtube-thumbs/avatar.jpg')}
                sx={{
                  width: 66,
                  height: 66
                }}
              />

              <Link
                underline="hover"
                color="inherit"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/videos')
                  scrollToTop()
                }}>
                <Typography variant="h5" gutterBottom component="h2">
                  {strings.youtubeChannel.toUpperCase()}
                </Typography>
              </Link>
            </Stack>
          </Grid2>
          <Grid2 xs={12}>
            <VideosMasonry
              maxVideos={8}
              onVideoSelected={(videoId) => {
                selectedVideoManager.setSelectedVideo(videoId)
                navigate('/videos')
                scrollToTop()
              }}
            />
          </Grid2>
          <Grid2
            xs={12}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Button
              size="medium"
              variant="outlined"
              onClick={() => {
                navigate('/videos')
                scrollToTop()
              }}
              sx={{ mr: 2 }}>
              {strings.more}
            </Button>
            <Button
              size="medium"
              variant="contained"
              onClick={() => {
                navigate('/contact')
                scrollToTop()
              }}>
              {strings.contactMe}
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}
