import React,{useRef} from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import emailjs from '@emailjs/browser';

const Contact = () => {


  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_33399pk', 'template_f6c7xx7', form.current, {
  //       publicKey: 'LrU6LubESW7kHD7Pc',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  //     e.target.reset();
  // };

    return (
      <>
       <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <h1 className='text-4xl font-bold text-center'>Contact Us</h1>
       <hr className='h-1 bg-black rounded-lg w-[200px] mx-auto my-1'/>
            <div className='mx-auto m-auto'>
  
                <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
                {/* form */}
                <div>
                    <form ref={form} className='bg-slate-200 px-8 py-6 rounded-lg'>
                    <h1 className='text-xl text-center font-semibold mb-4'>Send Your Message</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className='flex flex-col mb-4'>
                  <label className='block text-gray-700'>FullName </label>
                   <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="from_name" placeholder='Enter your FullName' required  />
                    </div>
                    <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address</label>
                <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="email" name="from_email" placeholder='Enter your Email' required  />
               </div>
               <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Phone Number </label>
                <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="phone" name="from_phone" placeholder='Enter your Phone Number' required />
            </div>
               
               <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>City </label>
                <select name="from_city" id="city" className="shadow border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none" required>
                    <option value="s">SELECT</option>
                    <option value="rourkela">ROURKELA</option>
                    <option value="sambalpur">SAMBALPUR</option>
                    <option value="jharsuguda">JHARSUGUDA</option>
                  </select>
            </div>
               <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Services Required </label>
                <select name="from_course" id="course" className="shadow border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none" required>
                <option value="s">SELECT</option>
                    
                  </select>
            </div>
        
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Type of Services </label>
                <select name="from_coursetype" id="coursetype" className="shadow border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none" required>
                <option value="s">SELECT</option>
                  </select>
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Address </label>
                <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="from_address" placeholder="Enter address here" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="message" placeholder='Enter Message Here' required />
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'>Submit</button>


                    </div>
                    </form>
                </div>

                 </div>
            </div>
        </div> 
       <hr />
      </>
    )
  }
  
  export default Contact