import React, { useState, useEffect } from 'react'
import Play from '../../../../components/svg/Play'
import { useModulos } from '../../../../hooks/useModulos';
import ContentsQuizz from '../quizz/ContentsQuizz'

const VideoItem = ({ title, url, imgVideo, availableTime, isLocked, quizzIsLocked, description, quizzText, quizzId }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [videoWidth, setVideoWidth] = useState("350px");
    const [videoHight, setVideoHight] = useState("197px");

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    useEffect(() => {
        if (windowWidth < 768) {
            setVideoWidth("350px")
            setVideoHight("197px")
        } else {
            setVideoWidth("800px")
            setVideoHight("450px")
        }

    }, [windowWidth]);

    return (
        <div className={`videoContainer w-full h-auto mb-[80px] laptop1:px-20 ${isLocked ? 'opacity-50' : ''} `}>
            <div className="videoContainer-title w-[200px] h-auto bg-Cyan border-solid border-2 border-Cyan rounded-r-full mb-5 py-2 px-4 shadow-lightShadow">
                <div className="flex content-center gap-2">
                    <Play
                        width='32'
                        height='32'
                        color='#011C40'
                    />
                    <p className="font-poppins text-lg font-semiBold">{title}</p>
                </div>
            </div>

            <div className='mb-5'>
                <p className="font-poppins text-lg font-semiBold text-center px-2 tablet:text-2xl desktop:text-4xl">{description}</p>
            </div>

            <div className="videoContainer-body">
                {
                    isLocked ? (
                        <>
                            <div className='max-w-[800px] max-h-[451px] mx-auto px-5 laptop1:max-w-[800px] max-h-[451px] flex justify-center'>
                                <img
                                    src={imgVideo}
                                    alt="Video not available"
                                    className=' w.full h-full rounded-xl shadow-darkShadow' />
                            </div>
                            <div className='w-full h-auto text-center mt-6'>
                                <p className='font-poppins text-Blue text-base font-semiBold'>{availableTime}</p>
                            </div>
                        </>
                    ) : (
                        <div>
                            <div className='max-w-[800px] max-h-[451px] mx-auto px-5 laptop1:max-w-[800px] max-h-[451px] flex justify-center mb-10'>
                                <iframe
                                    title={title}
                                    width={videoWidth}
                                    height={videoHight}
                                    src={url}
                                    style={{ border: "0" }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>
                            <ContentsQuizz quizzText={quizzText} quizzId={quizzId} quizzIsLocked={quizzIsLocked}/>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default VideoItem