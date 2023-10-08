interface YoutubeVideoProps {
  videoId: string;
  title: string;
}

const YoutubeVideo = ({ videoId, title }: YoutubeVideoProps) => {
  return (
    <iframe
      className="w-full h-[200px] tablet:h-[400px] my-auto rounded-lg desktop:h-[500px]"
      src={
        'https://www.youtube.com/embed/' + videoId + '?autoplay=1?enablejsapi=1'
      }
      title={`${title}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
export default YoutubeVideo;
