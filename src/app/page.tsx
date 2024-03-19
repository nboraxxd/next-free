import Image from 'next/image'
// import suffer from '../../public/images/suffer.png'

export default function Home() {
  return (
    <div>
      <div className="size-[700px] bg-red-300">
        <Image
          src="/images/suffer.png"
          alt="Suffer"
          width={300}
          height={300}
          quality={90}
          priority
          className="size-[700px]"
        />
      </div>
      <div className="size-[600px] bg-blue-400">
        <Image
          src="https://images.pexels.com/photos/20556502/pexels-photo-20556502/free-photo-of-t-i-l-h-i-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Firework"
          width={100}
          height={100}
          quality={90}
          priority
          className="size-[600px]"
          title="Firework"
        />
      </div>
    </div>
  )
}
