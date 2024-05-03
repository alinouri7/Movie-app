import React from "react";
import ReactPlayer from "react-player/youtube";



const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };

    return (
        <div className={`flex justify-center items-center w-full h-full fixed  top-0 left-0 opacity-0   z-[9]  ${show ? "opacity-[1] visible" : "invisible"}`}>
            <div className={`absolute top-0 left-0 w-full h-full   opl opacity-0 ${show ? "opacity-[1] " : ""} `} onClick={hidePopup}></div>
            <div className="relative w-[800px] h-[400px]    transform scale-[(0.2)] duration-[250ms] bg-white">
                <span className="absolute top-[-20px] left-0 text-white cursor-pointer" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    // playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;