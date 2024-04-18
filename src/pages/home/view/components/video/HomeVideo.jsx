import React, { useState, useEffect } from 'react'
import videoImgDesktop from "/Images_figma/fondo_video_max.png"
import marcoVideo from "/Images_figma/marco_video_max.png"
import { useModulos } from '../../../../../hooks/useModulos'

const HomeVideo = () => {
  const URL_VIDEO = "https://www.youtube.com/embed/1QuU-eMzLrI"
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [videoWidth, setVideoWidth] = useState("350px");
  const [videoHight, setVideoHight] = useState("197px");
  const { desktopView } = useModulos()


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
      setVideoWidth("600px")
      setVideoHight("337px")
    }

  }, [windowWidth]);

  return (
    <div>
      <div className="w-full pb-10">
        <p className='text-lg px-10 text-Blue laptop1:text-Blue'>El servicio de Terapia Intensiva del Hospital Santojanni lo invita a participar del primer ciclo de charlas 2024.</p>
        <p className='text-lg px-10 text-Blue laptop1:text-Blue'>Consta de 8 módulos a cargo de diferente especialistas y tiene una carga horaria de 150 horas. Las charlas se subirán cada lunes a las 19:00hs. El curso es no arancelado y se entrega un certificado avalado por el GCBA. Para acceder a los módulos solo tenes que inscribirte con un correo electrónico, y desde tu perfil tendrás acceso al material.</p>
        <p className='text-lg px-10 text-Blue laptop1:text-Blue'>En este video los organizadores te dan la bienvenida! </p>
      </div>

      <div className='
    w-full mb-20 p-5 
    h-[300px] 
    flex flex-col items-center justify-around
    laptop1:flex-row justity-around 
    tablet:h-[500px] px-5'
        style={{
          backgroundImage: `url(${desktopView ? videoImgDesktop : videoImgDesktop})`
          , backgroundSize: 'cover'
          , backgroundPosition: 'left'
        }}>
        <iframe
          title={"UTI Santojanni"}
          width={videoWidth}
          height={videoHight}
          src={URL_VIDEO}
          style={{ border: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        >
        </iframe>

        {/* <div className="w-3/4 desktop:w-1/2">
        <p className='text-lg px-10 text-White laptop1:text-Blue'>El servicio de Terapia Intensiva del Hospital Santojanni lo invita a participar del primer ciclo de charlas 2024. El mismo consta de 8 módulos a cargo de diferente especialistas. Las charlas se subirán cada lunes a las 19:00hs. El ciclo tiene una carga horaria de 150 hora, no arancelado y se entrega un certificado avalado por el GCBA. Para acceder a los módulos solo te pedimos que te registres con un correo electrónico. En este video los organizadores te dan la bienvenida! </p>
      </div> */}
      </div>

    </div>

  )
}

export default HomeVideo
