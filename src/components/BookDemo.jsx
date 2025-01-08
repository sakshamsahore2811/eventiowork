import { useState } from "react";
import pugcall from "../assets/puglaptoppng.png";
function BookDemo() {
    const [count,setCount] = useState(0);
    const [line, setLine] = useState("Unleash your event's paw-tential!");

    const handleClick=()=>{
        
        setCount(count+1);
        if(count==0){
            setLine("Fetch more ticket sales with ease!");
        }
        else if(count==1){
            setLine("Take a leash on ticket sales!");
        }
        else if(count==2){
            setLine("Sniff out success with Eventio!");
        }
        else if(count==3){
            setLine("Tails of success start here!");
        }
        else if(count==4){
            setLine(" Sit, stay, and watch your sales rise!");
        }
        else{
            setCount(0);
        }
       
       
        console.log(count);
    }

    return (
      <>
      <div className="text-4xl flex  justify-center text-center font-light items-center gap-2 font-serif pt-48 pb-14"><div>{line}</div> <button onClick={handleClick} className="p-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</button></div>
     
     <div className="flex items-center pb-24 justify-center gap-6 items-center text-center">
     <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0uTqSGtddgwXtA8L6XU9_our4eXcN6tsHKi9-mUu5bW6ANsBB_SDZ-xu8cYw1ev240QbXNvc7G" target="_blank">
        
     <div className="p-3 justify-center w-fit bg-purple-600 text-white rounded-xl">
        Book a Demo
         
       </div>
       </a>
       <div>
         <img src={pugcall} className="rounded-xl" height={200} width={270}/>
       </div>
       
      
     </div>
    
      </>
    )
  }
  
  export default BookDemo