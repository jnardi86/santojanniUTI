import React, {useState, useEffect} from 'react'
import  {useModulos} from "../../../hooks/useModulos"

const HelpView = () => {
    const URL_VIDEO = "https://www.youtube.com/embed/l8WFitZnogs"
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
      <div className="w-full py-10">
        <p className='text-lg px-10 text-Blue laptop1:text-Blue'>Para acceder a los módulos del curso solo necesitas registrarte en nuestra plataforma con tu correo electrónico.</p>
        <p className='text-lg px-10 text-Blue laptop1:text-Blue'>Una vez que inicies sesion con esa cuenta tendrás acceso al contenido de todos los módulos. Desde "Mi perfil" podrás también acceder a tus datos y las calificaciones de Quizz que rindas.</p>
        <p className='text-lg px-10 text-Blue laptop1:text-Blue'>Te invitamos a que veas este breve tutorial! </p>
      </div>

      <div className='
    w-full mb-20 p-5 
    h-[300px] 
    flex flex-col items-center justify-around
    laptop1:flex-row justity-around 
    tablet:h-[500px] px-5'>
        <iframe
          title={"UTI Santojanni"}
          width={videoWidth}
          height={videoHight}
          src={URL_VIDEO}
          style={{ border: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>

        {/* <div className="w-3/4 desktop:w-1/2">
        <p className='text-lg px-10 text-White laptop1:text-Blue'>El servicio de Terapia Intensiva del Hospital Santojanni lo invita a participar del primer ciclo de charlas 2024. El mismo consta de 8 módulos a cargo de diferente especialistas. Las charlas se subirán cada lunes a las 19:00hs. El ciclo tiene una carga horaria de 150 hora, no arancelado y se entrega un certificado avalado por el GCBA. Para acceder a los módulos solo te pedimos que te registres con un correo electrónico. En este video los organizadores te dan la bienvenida! </p>
      </div> */}
      </div>

    </div>
  )
}

export default HelpView
