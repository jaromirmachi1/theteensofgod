/** Replace youtubeId with a real lecture video ID from @theteensofgod when available. */
export const featuredLecture = {
  youtubeId: import.meta.env.VITE_FEATURED_LECTURE_YOUTUBE_ID ?? '',
  title: 'Ukázka přednášky v akci',
  subtitle:
    'Podívej se, jak Kristýna mluví s teenagery o digitálním světě — bez moralizování a bez školních frází.',
  topic: 'Digitální svět & emoce',
  durationLabel: 'Přednáška',
  channelUrl: 'https://www.youtube.com/@theteensofgod',
} as const

export function getFeaturedLectureWatchUrl() {
  if (featuredLecture.youtubeId) {
    return `https://www.youtube.com/watch?v=${featuredLecture.youtubeId}`
  }

  return featuredLecture.channelUrl
}

export function getFeaturedLectureThumbnail(width = 1280) {
  if (!featuredLecture.youtubeId) {
    return null
  }

  const size = width > 640 ? 'maxresdefault' : 'hqdefault'
  return `https://i.ytimg.com/vi/${featuredLecture.youtubeId}/${size}.jpg`
}
