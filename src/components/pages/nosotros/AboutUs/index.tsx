import { ImagesGrid } from './ImagesGrid'
import { Paragraph } from './Paragraph'

import { useWindowWidth } from '@/lib/hooks/useWindowWidth'

import firstSectionImg1 from 'public/img/about-us/1.webp'
import firstSectionImg2 from 'public/img/about-us/2.webp'
import firstSectionImg3 from 'public/img/about-us/3.webp'
import secondSectionImg1 from 'public/img/about-us/4.webp'
import secondSectionImg2 from 'public/img/about-us/5.webp'
import secondSectionImg3 from 'public/img/about-us/6.webp'
import thirdSectionImg1 from 'public/img/about-us/7.webp'
import thirdSectionImg2 from 'public/img/about-us/8.webp'
import thirdSectionImg3 from 'public/img/about-us/9.webp'
import fourthSectionImg1 from 'public/img/about-us/10.webp'
import fourthSectionImg2 from 'public/img/about-us/11.webp'
import fourthSectionImg3 from 'public/img/about-us/12.webp'

export const AboutUs = () => {
  const windowWidth = useWindowWidth()

  return (
    <section className='my-16 px-4'>
      {windowWidth < 1024 && <h4 className='text-secondary-500 text-center pb-4 font-black text-5xl' style={{ letterSpacing: '-0.1rem' }}>Nuestros Inicios</h4>}
      <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start lg:pr-8 lg:pb-4 lg:pl-8'>
        <ImagesGrid
          src={[firstSectionImg1, firstSectionImg2, firstSectionImg3]}
        />

        <div className='text-lg pt-4 w-full lg:pt-0 lg:w-1/2 lg:my-auto' style={{ color: '#737373', lineHeight: '32px' }}>
          {windowWidth >= 1024 && <h4 className='text-secondary-500 text-center pb-4 font-black text-5xl'>Nuestros Inicios</h4>}

          <Paragraph classes='lg:ml-8 text-lg'>
            La Iglesia Cristiana La Casa de mi Padre, en Caracas Venezuela;
            nació “en el corazón Dios”. Luego la visión fue dada a nuestro
            Pastor Frankie Tovar un jueves 9 de diciembre de 2.004. Como él
            mismo lo dice: “Ese día supe, de manera evidente y firme, que Dios
            me estaba llamando a fundar una nueva Iglesia”. <br /> <br />
            El 29 de marzo de 2.005, en un vuelo Puerto Rico - Caracas, Dios le
            dio a nuestro Pastor el nombre de nuestra Iglesia: “La Casa de mi
            Padre”. Y nos alegra saber que, según Juan 2:16 Jesús llamaba al
            Templo de Jerusalén “La Casa de mi Padre”. Y según Juan 14:2 también
            llamaba al cielo La Casa de mi Padre. Esto, que aparentemente es una
            coincidencia, para nosotros tiene mucho significado y valor. <br />{' '}
            <br />
            El 22 de mayo de 2.005, celebramos nuestro primer servicio oficial,
            en un pequeño salón del Hotel Caracas Cumberland con la asistencia
            de unas veintinueve (29) personas. <br /> <br />
          </Paragraph>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start lg:pr-8 lg:pb-4 lg:pl-8'>
        {windowWidth < 1024 && (
          <ImagesGrid
            src={[secondSectionImg1, secondSectionImg2, secondSectionImg3]}
            classes='pt-4'
          />
        )}

        <div className='text-lg pt-4 pb-4  w-full lg:pt-0 lg:w-1/2 lg:my-auto' style={{ color: '#737373', lineHeight: '32px' }}>
          <Paragraph classes='text-lg mr-8'>
            Los días que prosiguieron fueron duros, como suele suceder en el
            proceso de fundar una iglesia, pero el pequeño grupo de hermanos que
            se sumó a la visión, y las personas que comenzaron a convertirse,
            nos dieron aliento para seguir adelante, siendo reafirmados cada día
            por el Señor, su Espíritu y su Palabra. <br /> <br />
            Durante unos seis (6) meses, Enlace Tv nos permitió celebrar
            nuestras reuniones dominicales en la quinta Enlace, de San
            Bernardino. Y en diciembre de 2.005 alquilamos el local donde
            funciona actualmente nuestra Iglesia, el cual tiene una capacidad
            para 320 personas aproximadamente. <br /> <br />
            Nuestra primera actividad en este nuevo local fue la cena de
            navidad. Tuvimos un hermoso tiempo lleno de alegría y gratitud al
            Señor. El entusiasmo y la fraternidad se desbordaban por todas
            partes. La verdad es que esa cena navideña fue un “Gloria a Dios en
            las alturas”. <br /> <br />
          </Paragraph>
        </div>

        <ImagesGrid
          src={
            windowWidth < 1024
              ? [thirdSectionImg1, thirdSectionImg2, thirdSectionImg3]
              : [secondSectionImg1, secondSectionImg2, secondSectionImg3]
          }
        />
      </div>

      <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start lg:pr-8 lg:pb-4 lg:pl-8'>
        {windowWidth >= 1024 && (
          <ImagesGrid
            src={[thirdSectionImg1, thirdSectionImg2, thirdSectionImg3]}
          />
        )}

        <div className='text-lg pt-4 pb-4  w-full lg:pt-0 lg:w-1/2 lg:my-auto' style={{ color: '#737373', lineHeight: '32px' }}>
          <Paragraph classes='lg:ml-8 text-lg'>
            Ya con una sede, la Iglesia tomó un impulso significativo. Sentimos
            la estabilidad y la firmeza para comenzar a echar las bases
            necesarias, que nos permitieran encaminarnos en el cumplimiento del
            propósito de Dios. <br /> <br />
            Hoy, ya somos una iglesia establecida, afirmada, madura y determina
            a servir a Dios y a nuestro prójimo. Estamos convencidos de que
            existimos para amar a Dios, proclamar su Palabra a todo ser humano,
            hacer de cada creyente un discípulo de Jesucristo, ayudándole y
            animándole a servir a Dios y a su prójimo, en el mejor ambiente de
            amor fraternal, no excluyente sino incluyente, como corresponde a la
            verdadera familia de Dios. <br /> <br />
            Usted necesita saber esto, le dará sentido de pertenencia y le
            ayudará a entender por qué somos una Iglesia cristiana, alegre,
            sencilla, con corazón de familia, donde todos tienen un lugar.
          </Paragraph>
        </div>

        {windowWidth < 1024 && (
          <ImagesGrid
            src={[fourthSectionImg1, fourthSectionImg2, fourthSectionImg3]}
            classes='pt-8'
          />
        )}
      </div>
    </section>
  )
}
