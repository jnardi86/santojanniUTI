import React from 'react'
import Play from '../../../../components/svg/Play'

const VideoItem = ({ title, url, imgVideo }) => {
    return (
        <div className="videoContainer w-full h-auto mb-[70px] laptop1:px-20">
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
            <div className="videoContainer-body border-solid border-2 border-Blue">
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
                <div>
                    <img src={imgVideo} alt="Video not available" />
                </div>

            </div>
        </div>
    )
}

export default VideoItem