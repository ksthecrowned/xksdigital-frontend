import Slider from '@components/common/Slider'
import Image from 'next/image'

const images = [
	{
		title:"",
		image: "/assets/images/pexels-fauxels-3182743.jpg",
	},
	{
		title: "",
		image: "/assets/images/hero-image.png",
	},
	{
		title: "",
		image: "/assets/images/pexels-fauxels-3182743.jpg",
	},
	{
		title: "",
		image: "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	}
]

const Hero:React.FC = () => {

  return (
    <section className="w-full bg-gray-900 text-white h-[700px]">
		<Slider slides={images} autoPlayDelay={5000} />
    </section>
  )
}

export default Hero