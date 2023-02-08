import Image from 'next/image'
import adoramosImg from 'public/img/about-us/adoramos.png'
import evangelizamosImg from 'public/img/about-us/evangelizamos.png'
import fraternizamosImg from 'public/img/about-us/fraternizamos.png'
import discipulamosImg from 'public/img/about-us/discipulamos.png'
import servimosImg from 'public/img/about-us/servimos.png'

export const OurFivePurposes = () => (
  <section className='w-full h-full py-16'>
    <div className='mx-auto text-center px-4 max-w-7xl'>
      <h5 className='text-5xl font-black text-primary-500'>Nuestros Cinco Propósitos</h5>
      <br />
      <br />

      <div className='grid gap-4 items-center justify-center justify-items-center mt-4' style={{ gridTemplateColumns: 'repeat(auto-fit, 180px)' }}>
        <div className='w-min'>
          <Image
            src={adoramosImg}
            alt="Adoramos"
            placeholder="blur"
            width={120}
            height={120}
          />
          <br />
          <p className='text-2xl text-secondary-500 font-bold'>Adoramos</p>
        </div>

        <div className='w-min'>
          <Image
            src={evangelizamosImg}
            alt="Evangelizamos"
            placeholder="blur"
            width={120}
            height={120}
          />
          <br />
          <p className='text-2xl text-secondary-500 font-bold'>Evangelizamos</p>
        </div>

        <div className='w-min'>
          <Image
            src={fraternizamosImg}
            alt="Fraternizamos"
            placeholder="blur"
            width={120}
            height={120}
          />
          <br />
          <p className='text-2xl text-secondary-500 font-bold'>Fraternizamos</p>
        </div>

        <div className='w-min'>
          <Image
            src={discipulamosImg}
            alt="Discipulamos"
            placeholder="blur"
            width={90}
            height={120}
          />
          <br />
          <p className='text-2xl text-secondary-500 font-bold'>Discipulamos</p>
        </div>

        <div className='w-min'>
          <Image
            src={servimosImg}
            alt="Servimos"
            placeholder="blur"
            width={120}
            height={120}
          />
          <br />
          <p className='text-2xl text-secondary-500 font-bold'>Servimos</p>
        </div>
      </div>

      <br />

      <p className='text-primary-500 font-bold'>
        En La Casa de mi Padre la adoración es para glorificar a Dios, la
        evangelización es un estilo de vida, la práctica del amor fraternal
        demuestra que somos parte de la familia de Dios, donde todos los
        alcanzados son debidamente discipulados para que sirvan al Señor y
        desarrollen una nueva manera de vivir <br className='max-md:hidden' /> que refleje el carácter Cristo.
      </p>
    </div>
  </section>
)
