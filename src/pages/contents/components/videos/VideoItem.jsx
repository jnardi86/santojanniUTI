import React from 'react'
import Play from '../../../../components/svg/Play'

const VideoItem = ({ title, url, imgVideo, availableTime, isLocked }) => {
    return (
        <div className={`videoContainer w-full h-auto mb-[80px] laptop1:px-20 ${isLocked ? 'opacity-50' : '' } `}>
            <div className="videoContainer-title w-[166px] h-auto bg-Cyan border-solid border-2 border-Cyan rounded-r-full mb-10 py-2 px-4 shadow-lightShadow">
                <div className="flex content-center gap-2">
                    <Play
                        width='32'
                        height='32'
                        color='#011C40'
                    />
                    <p className="font-poppins text-lg font-semiBold">{title}</p>
                </div>
            </div>
            <div className="videoContainer-body">
                <div className='hidden'>
                    <iframe
                        title={title}
                        width="560"
                        height="315"
                        src={url}
                        style={{ border: "0" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </div>
                    <div className='max-w-[580px] max-h-[380px] mx-auto px-5 laptop1:[w-580] laptop1:[h-380px]'>
                        <img
                            src={imgVideo}
                            alt="Video not available"
                            className=' w.full h-full rounded-xl shadow-darkShadow' />
                    </div>
                    <div className='w-full h-auto text-center mt-6'>
                        <p className='font-poppins text-Blue text-base font-semiBold'>{availableTime}</p>
                    </div>

            </div>
        </div>
    )
}

export default VideoItem