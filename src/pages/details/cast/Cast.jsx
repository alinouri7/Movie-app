import React from "react";
import { useSelector } from "react-redux";



import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import {Img} from "../../../components/lazyLoadinging/img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="relative mb-[50px]">
            <ContentWrapper>
                <div className="text-[24px] text-white mb-[25px] ">Top Cast</div>
                {!loading ? (
                    <div className="flex gap-[20px] overflow-y-hidden mx-[-20px] px-[20px]  overflow-auto scrollbar-hide cursor-pointer">
                        {data?.map((item) => {
                            let imgUrl = item.profile_path
                                ? url.profile + item.profile_path
                                : avatar;
                            return (
                                <div key={item.id} className="text-center text-white  ">
                                    <div className="w-[125px] h-[125px] rounded-[50%] overflow-hidden mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px]">
                                        <Img src={imgUrl} className="w-full h-full object-cover object-[center_top] block "/>
                                    </div>
                                    <div className="text-[14px] leading-[20px] font-[600] md:text-[18px] md:leading-[24px]">{item.name}</div>
                                    <div className="text-[14px] leading-[20px] opacity-[0.5] md:text-[16px] md:leading-[24px] ">
                                        {item.character}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;