import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import pug from "../assets/pug.png";
import Footer from "../components/Footer";
import shopify from '../assets/shopifylogo.png';
import bubble1 from "../assets/bubble1-modified.png";
import bubble2 from "../assets/bubble2-modified.png";
import bubble3 from "../assets/bubble3-modified.png";
import bubble4 from "../assets/bubble4-modified.png";
import screenshot from "../assets/eventiosystem.png";
import BookDemo from "../components/BookDemo";

function Home() {
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <Navbar />
        <div className="pt-16 flex justify-center">
  <div className="w-fit">
    <div className="text-sm flex justify-center gap-2 p-3 rounded-3xl border border-gray-600">
      <div className="text-gray-300">
        Replace widget texts to your prefered locale !
      </div>
      <div className="text-sm text-white flex items-center gap-2 font-bold">
        <div>Get Started</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  </div>
</div>

        <div className="flex justify-center pt-16 items-center pt-16">
          <div className="text-6xl font-serif pl-18 slide-in-text text-left">
            experience is everything
            <br />
            create your experience today
            <div className="text-3xl font-sans pt-6 text-left">
              Host & Manage Events in your Store
            </div>
            <div className="pt-8 text-center">
              <button className="text-xl shadow-2xl font-sans bg-purple-800 p-3 rounded-lg ">
                Install the app
              </button>
            </div>
          </div>
          <div className="floating-element">
  <img src={bubble1} height={140} width={140} className="p-5 bubble-1" />
  <img src={bubble2} height={140} width={140} className="p-5 bubble-2" />
  <img src={bubble3} height={140} width={140} className="p-5 bubble-3" />
  <img src={bubble4} height={140} width={140} className="p-5 bubble-4" />
</div>

          <div className="img floating-element">
            <img src={pug} height={350} width={300} alt="Pug" />
            <div className="text-md text-white pl-6 pt-4 flex items-center gap-2">Designed for <span><img src={shopify} height={45} width={80}/></span> merchants</div>
          </div>
        </div>
        <div className="pt-14 p-2 text-center text-3xl font-serif">embedded app block widget</div>
        <div className="flex pl-16 pr-16 justify-center">

          <img className="rounded-2xl" src={screenshot}/>
        </div>
       

        <div className="pt-48 text-center">
          <div className="text-4xl pb-24 font-light font-serif">become a host so you're always invited to the party</div>
          <div className="flex gap-6 p-10 justify-center">
          <div className="p-10 bubble-1 rounded-3xl drop-shadow-2xl text-center flex flex-col items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-48"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    />
  </svg>
  <div>Showcase upcoming events on your storefront</div>
</div>
<div className="p-10 bubble-2 drop-shadow-xl rounded-3xl  text-center flex flex-col items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-48">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

  <div>Give event promo and boost tickets sales </div>
</div>
<div className="p-10 bubble-3 drop-shadow-2xl rounded-3xl text-center flex flex-col items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-48">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

  <div>Register people for the event by RSVP</div>
</div>


</div>


<BookDemo/>

          </div>
        </div>
   
      <Footer />
    </>
  );
}

export default Home;
