const getCroppedImageUrl = (url: string) => {
  if (!url) return '';
  const target = 'media/';
  const regex = new RegExp(`(${target})`);
  return url.replace(regex, `$1crop/600/400/`);
};

export default getCroppedImageUrl;
