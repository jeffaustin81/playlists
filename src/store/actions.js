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

export const renamePlaylist = (playlistId, title) => ({
  type: "RENAME_PLAYLIST",
  title,
  playlistId,
})

export const removeVideo = (playlistId, videoId) => ({
  type: "REMOVE_VIDEO",
  videoId,
  playlistId,
})

export const addVideo = (video, playlistId) => ({
  type: "ADD_VIDEO",
  video,
  playlistId,
})

export const openPlaylist = playlistId => ({
  type: "OPEN_PLAYLIST",
  playlistId,
})

