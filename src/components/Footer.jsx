import { Link } from "react-router-dom"
function Footer() {


    return (
      <>
      <div className="bg-purple-600 text-white pb-24">
       <div className="flex justify-center gap-48  pt-12">
        <div className="text-xl">Eventio : Events & RSVP<br/>
        <div className="text-gray-300 text-sm">eventio.work@gmail.com</div>
        </div>
        <div className="text-lg">
            <div className="font-bold underline">Product</div>
            <div className="text-gray-300 font-light"><Link to="/">Documentation</Link></div>
            <div className="text-gray-300 font-light"><Link to="/">Youtube</Link></div>
            <div className="text-gray-300 font-light"><Link to="/">Shopify App Store</Link></div>
        </div>
        <div className="text-lg">
        <div className="font-bold underline">Contact</div>
            <div className="text-gray-300 font-light"><Link to="/">Support</Link></div>
            <div className="text-gray-300 font-light"><Link to="/">LinkedIn</Link></div>
            <div className="text-gray-300 font-light"><Link to="/">X</Link></div>
        </div>
       </div>
       </div>
      </>
    )
  }
  
  export default Footer