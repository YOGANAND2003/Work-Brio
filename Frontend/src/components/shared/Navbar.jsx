import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button.jsx";
import { LogOut, User2 } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store.js";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { setUser } from "@/redux/authSlice.js";
import { toast } from "sonner";

const NavBar = () => {
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler =async ()=>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      
    }
  }
  return (
    <div className="bg-white ">
      {" "}
      {/* Adding side margins */}
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Work<span className="text-[#f83002]">Brio</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/jobs"> Jobs</Link></li>
            <li><Link to="/browse"> Browse</Link></li>
          </ul>
          {
            !user ? (
              <div className="flex gap-2 items-center">
                <Link to="/login"><Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#8b1b96] hover:bg-[#521259]">Signup</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="w-10 h-10 cursor-pointer ">
                    <AvatarImage className="rounded-full"
                      src="https://github.com/shadcn.png" alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 mx-2 bg-white rounded shadow-lg">
                  <div className="flex gap-8 space-y-2  ">
                    <Avatar className=" w-10 h-10 cursor-pointer">
                      <AvatarImage className="m-4 rounded-full "
                        src="https://github.com/shadcn.png" alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Yoganand</h4>
                      <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsa!</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-600 mx-4">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">LogOut</Button>
                    </div>
                  </div>

                </PopoverContent>
              </Popover>
            )
          }


        </div>
      </div>
    </div>
  );
};

export default NavBar;
