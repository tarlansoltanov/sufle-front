const getVideoId = (url: string) => {
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get('v');
};

export { getVideoId };

const getVideoThumbnail = (url: string) => {
  const videoId = getVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

export { getVideoThumbnail };
