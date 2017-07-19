export const sendResults = results => ({
  type: 'SEND_RESULTS',
  results,
});

export const createPlaylist = title => ({
  type: 'CREATE_PLAYLIST',
  title,
})

export const deletePlaylist = playlistId => ({
  type: "DELETE_PLAYLIST",
  playlistId,
})

export const removeVideo = (videoId, playlistId) => ({
  type: "REMOVE_VIDEO",
  videoId,
  playlistId,
})

export const addVideo = (video, playlistId) => ({
  type: "ADD_VIDEO",
  video,
  playlistId,
})
