import firebase from 'firebase/compat/app'

export type TYoutubeLiveRes = {
  youtubeLive: {
    kind: string
    etag: string
    id: {
      kind: string
      videoId: string
    }
    snippet: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails: {
        default: {
          url: string
          width: number
          height: number
        }
        medium: {
          url: string
          width: number
          height: number
        }
        high: {
          url: string
          width: number
          height: number
        }
      }
      channelTitle: string
      liveBroadcastContent: string
      publishTime: string
    }
  }
}

export type TResPlaylistItem = {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
      standard: {
        url: string
        width: number
        height: number
      }
      maxres: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
  }
}

export type TResYoutubePlaylist = {
  kind: string
  etag: string
  nextPageToken: string
  items: TResPlaylistItem[]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export type TVideo = {
  id: string
  title: string
  description: string
  url: string
  thumbnails: {
    default: {
      url: string
      width: number
      height: number
    }
    medium: {
      url: string
      width: number
      height: number
    }
    high: {
      url: string
      width: number
      height: number
    }
    standard: {
      url: string
      width: number
      height: number
    }
    maxres: {
      url: string
      width: number
      height: number
    }
  }
  publishedAt: string
}

export type TPlaylist = TVideo[]

// Live Stream

export type videoLive = {
  channelId: string
  channelTitle: string
  description: string
  publishTime: string
  publishedAt: string
  thumbnails: {
    defaultUrl: string
    highUrl: string
    mediumUrl: string
  }
  title: string
  type: string
  url: string
  videoId: string
}

export type liveState = {
  isActive: boolean
  video: videoLive | null
}

export interface videoLiveFirebase extends firebase.firestore.DocumentData {
  channelId: string
  channelTitle: string
  description: string
  publishTime: string
  publishedAt: string
  thumbnails: {
    defaultUrl: string
    highUrl: string
    mediumUrl: string
  }
  title: string
  type: string
  url: string
  videoId: string
}
