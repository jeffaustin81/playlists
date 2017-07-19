export const sendResults = results => ({
  type: 'SEND_RESULTS',
  results,
});

export const createPlaylist = title => ({
  type: 'CREATE_PLAYLIST',
  title,
})
