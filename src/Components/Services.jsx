import home from '../../public/home.jpg'
import ac from '../../public/ac.jpg'
import dp from '../../public/dp.jpg'
import hc from '../../public/hc.jpg'
import vehicle from '../../public/vehicle.jpg'
import home2 from '../../public/home2.jpg'

const Services = () => {

    const cardItem = [
        {
            id:1,
            logo:home,
            name:"Home Services",
            // liveLink:"https://isbmuniversity.edu.in/",
        },
        {
            id:2,
            logo:ac,
            name:"AC & Appliance",
            // liveLink:"https://admissions.kalingauniversity.ac.in/?utm_source=collegedunia&utm_medium=text11&utm_campaign=online",
        },
        {
            id:3,
            logo:dp,
            name:"Pick & Drop",
            // liveLink:"https://matsuniversity.ac.in/",
        },
        
        {
            id:4,
            logo:home2,
            name:"Car Services",
            // liveLink:"https://www.bosse.ac.in/",
        },
    ]

  return (
    <div name="Services" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
       <div className='mb-5'>
       <h1 className='text-4xl font-bold text-center'>Our Services</h1>
        <hr className='h-1 bg-black rounded-lg w-[200px] mx-auto my-1'/>
       </div>
        <br />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-6 mx-auto'>
            {cardItem.map(({id,logo,name,liveLink})=>(
                <div className='w-[300px] h-[300px] rounded-lg border-[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <a href={liveLink} target='_blank'><img src={logo} className='w-full h-[190px] md:h-[180px] p-1 border-[2px]' alt="" /></a>
                  <div>
                    <div className='font-bold text-xl mb-2 px-2 text-center'>{name}</div>
                    <p className='px-2 text-gray-700'></p>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Services