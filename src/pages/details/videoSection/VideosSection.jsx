import React, { useState } from "react";



import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import {Img} from "../../../components/lazyLoadinging/img";
import { PlayIcon } from "../PlayIcon";

const playIcon = `cursor-pointer transition-all 
duration-[0.7s] ease-in-out hover:text-pink`

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="relative mb-[50px] ">
            <ContentWrapper>
                <div className="text-[24px] text-white mb-[25px]  ">Official Videos</div>
                {!loading ? (
                    <div className="flex gap-[10px] overflow-x-auto scrollbar-hide mx-[-20px] px-[20px] md:gap-[20px] md:m-0 md:p-0">
                        {data?.results?.map((video) => (
                            <div
                                key={video.id}
                                className="w-[150px] flex-shrink-0 md:w-[25%] cursor-pointer "
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="mb-[15px] relative ">
                                    <Img className='w-full block rounded-[12px] transition-all duration-[0.7s] ease-in-out'
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                    />
                                    <div className={`${playIcon} playbtn absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   `} 
                                   
                                    >
                                    <PlayIcon />
                                    </div>
                                </div>
                                <div className="videoTitle text-white">{video.name}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;