import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import createevent from "../assets/createevent.png";
import createeventform from "../assets/createeventform.png";
import editeventform from "../assets/editeventform.png";
import rsvpdetails from "../assets/rsvpdetails.png";
import rsvplist from "../assets/rsvplist.png";
import reminderemail from "../assets/reminderemail.png";
import appblock1 from "../assets/appblock1.png";
import appblock2 from "../assets/appblock2.png";
import appblock3 from "../assets/appblock3.png";
import appblock4 from "../assets/appblock4.png";
import appblock5 from "../assets/appblock5.png";
import appblock6 from "../assets/appblock6.jpeg";
function Documentation() {
 const [events, setEvents] = useState(true);
 const [rsvp, setRsvp] = useState(false);
 const [appBlock, setAppBlock] = useState(false);
 const [settings, setSettings] = useState(false);

 const handleEvents= ()=>{
  setEvents(true);
  setRsvp(false);
  setAppBlock(false);
  setSettings(false);
 }
 const handleRsvp = () =>{
  setEvents(false);
  setRsvp(true);
  setAppBlock(false);
  setSettings(false);
 }
 const handleAppBlock = () =>{
  setEvents(false);
  setRsvp(false);
  setAppBlock(true);
  setSettings(false);
 }



    return (
      <>
     <div className=" bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <Navbar/>
        <div className="flex gap-10 text-left font-serif p-32">
            <div className="text-2xl">
      <ul>
        <li className={events?"text-white":"text-gray-400"}><button onClick={handleEvents}>Events</button></li>
        <li className={rsvp?"text-white":"text-gray-400"}><button onClick={handleRsvp}>RSVP</button></li>
        <li className={appBlock?"text-white":"text-gray-400"}><button onClick={handleAppBlock}>App Block</button></li>
      </ul>
      </div>
      <div>
        {events && 
        <>
        <h1 className="text-3xl">Events</h1>
        <br/>
        <div className="">Eventio lets you create, edit, display or delete events in your store.</div>
        <br/>
        <div className="">For starters, follow these steps to create your first event :</div>
        <br/>
        <ol>
          <li>
            - Go to Eventio &gt; Events
          </li>
          <br/>
          <li>
            - Click on "Create Event" on the top right corner
          </li>
          <br/>
          <li>
            <img src={createevent} width={700}/>
          </li>
          <br/>
          <hr/>
          <br/>
          <div className="">GUIDELINES TO FILLING CREATE EVENT FORM</div>
          <br/>
          <ol>
          <li>
            <img src={createeventform} width={700}/>
          </li>
          <br/>
          <li>
            <div className="flex">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
</span>
          Title,
Start Time/Date,
End Time/Date,
Banner Image are required fields
</div>
          </li>
          <br/>
          <li>
            - Check the box if you want to publish the event as soon as you save it. Unlike drafts, published events are shown in the widget in your store.
          </li>
          <br/>
            <li>- If you don't have event Link, Address or Ticket Link, the field can be left empty</li>
            <br/>
            <li>- In order to select the date and time for event start and end, click away after selecting the date and time in the small pop-up window</li>
            <br/>
            <li>- The image banner should have the heightXwidth around 1200 x 600 for best UI in the widget</li>
            <br/>
           
          </ol>
        </ol>
        <hr/>
        <br/>
      <div className="">GUIDELINES TO EDIT AN EVENT</div>
      <br/>
      <ul>
     
        <li>
          - Edit form layout is the same as create event form, but the values will be pre-filled. 
          </li>
          <br/>
          <li>
          <div className="flex">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
</span>
           The current values for "Start date/time" and "End date/time" are shown on the top of the input fields instead of inside them.
          </div>
            </li>
            <br/>
            <li>
            <div className="flex">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
</span>
           The banner image is pre-selected, the "no file chosen" text can be ignored here.
          </div>
        </li>
        <br/>
        <li>
            <img src={editeventform} width={700}/>
          </li>
          <br/>
      </ul>
        <div className="text-center text-sm">
              Need help ? contact : eventio.work@gmail.com

            </div>
        </>
        }
        {rsvp &&
        <>
        <div className="text-3xl">RSVP</div>
        <br/>
        <ul>
          <li>
            - Eventio lets people to RSVP to your event via the app block widget in your storefront. Learn more about adding the app block widget <button onClick={()=>{
              setRsvp(false);
              setAppBlock(true);
            }}><u>here</u></button>.
          </li>
          <br/>
          <li>
            - The RSVP information regarding each event can be accessed from Eventio &gt; RSVP
          </li>
          <br/>
          <li>
            <img src={rsvplist} width={700}/>
          </li>
          <br/>
          <li>
            - Click on the name of the event whose RSVP information you want to see.
          </li>
          <br/>
          <li>
            - The RSVP information shows Name, Email, isAttending and Number of Attendees to the event.
          </li>
          <br/>
          <li>
            <img src={rsvpdetails} width={700}/>
          </li>
          <br/>
        </ul>
        <hr/>
        <br/>
        <div className="">SEND REMINDER ACTION</div>
        <br/>
        <ul>
       
        <li>
          - When you click on Send Reminder or Send Bulk Reminders action in the RSVP details page, an automated email is sent to the people in the RSVP list with the relevant details about the event along with the days left for the event.
        </li>
        <br/>
        <li>
          - Here is a snapshot of the email which is sent.
        </li>
        <br/>
        <li>
            <img src={reminderemail} width={700}/>
          </li>
          <br/>
        <li>
          - We intend to make the email template customisable as per the Merchant's choice.
        </li>
        <br/>
           
        </ul>
        <div className="text-center text-sm">
              Need help ? contact : eventio.work@gmail.com

            </div>
        </>
        }
        {appBlock &&
        <>
        <div className="text-3xl">
          App Block Widget
          </div>
          <br/>
          <ul>
            <li>
            - When you have one or more active events in Eventio, you should add app block widget in your store.
            </li>
            <br/>
            <li>
           - You can add app block by going to Shopify admin &gt; Online Store &gt; Click on "customise" button in the theme of your choice.
            </li>
            <br/>
            <li>
            <img src={appblock1} width={700}/>
          </li>
          <br/>
          <li>
            <img src={appblock2} width={700}/>
          </li>
          <br/>
            
            <li>
              - Click on "Add section" in the left toolbar where you want to create a section for the app widget.
            </li>
            <br/>
            <li>
            <img src={appblock3} width={700}/>
          </li>
          <br/>
            <li>
              - Alternatively, you can choose to add the app block directly in another section.
            </li>
            <br/>
            <li>
            <img src={appblock4} width={700}/>
          </li>
          <br/>
            <li>
              - Click on Apps &gt; Eventio and click on Save to save the app widget on the store.
            </li>
            <br/>
            <li>
            <img src={appblock5} width={700}/>
          </li>
          <br/>
          <li>
            <img src={appblock6} width={700}/>
          </li>
          <br/>
          </ul>
          <div className="text-center text-sm">
              Need help ? contact : eventio.work@gmail.com

            </div>
        </>}
      </div>
      </div>
       </div>
       <Footer/>
      </>
    )
  }
  
  export default Documentation
  