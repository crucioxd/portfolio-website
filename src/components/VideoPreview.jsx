import { useState, useRef } from "react";
import { Pause, Play, Maximize2, X } from "lucide-react";

export default function VideoPreview({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Thumbnail video */}
      <div
        className="relative h-48 overflow-hidden cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowModal(true)}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover bg-black"
          muted
          playsInline
        />

        {/* Play / Pause button */}
        <button
          onClick={togglePlay}
          className="absolute bottom-2 left-2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Enlarge button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
          className="absolute bottom-2 right-2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Fullscreen modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute -top-10 right-0 text-white"
              onClick={() => setShowModal(false)}
            >
              <X size={28} />
            </button>

            <video
              src={src}
              controls
              autoPlay
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
