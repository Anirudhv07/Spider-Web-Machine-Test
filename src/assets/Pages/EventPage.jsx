import React from "react";
import { MyNavbar } from "../Components/Common/Navbar";
import { MySideBar } from "../Components/Common/Sidebar";
import { MyTable } from "../Components/Home/Table";
import { CardFooter, IconButton, Input } from "@material-tailwind/react";
import {
  ArrowDownIcon,

  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Button,

  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ArrowLeftStartOnRectangleIcon

} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const unselectedStyle = {
  borderRadius: 0,
  border: "none",
  boxShadow: "none",
};

const selectedStyle = {
  borderRadius: 10,
  border: "3px solid #9e5989",
  boxShadow: "0 0 10px #9e5989",
  
};

const EventPage = () => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const TABLE_ROWS = [
    {
      position: "Camera 1 (Video)",
      time: "9 am - 7 pm",
      info: "LP Default",
      quantity:"20"
    },
    {
      position: "Camera 1 (Video)",
      time: "9 am - 7 pm",
      info: "LP Default",
      quantity:"20"
    },
    {
      position: "Camera 1 (Video)",
      time: "9 am - 7 pm",
      info: "LP Default",
      quantity:"20"
    }, {
      position: "Camera 1 (Video)",
      time: "9 am - 7 pm",
      info: "LP Default",
      quantity:"20"
    }, {
      position: "Camera 1 (Video)",
      time: "9 am - 7 pm",
      info: "LP Default",
      quantity:"20"
    },
  ];

  
const TABLE_HEAD = ["Position", "Time ", "Info", "Quantity"];
 
  const data = [
    {
      label: "Meeting Room 1",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Meeting Room 2",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Meeting Room 3",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Meeting Room 4",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Meeting Room 5",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div>
      <MyNavbar />
      <div className="flex flex-row w-full p-3">
        <MySideBar />
        <div className="w-full h-full px-5">
          <div
            className="w-full h-full p-3 text-white"
            style={{
              backgroundColor: "transparent",
              borderRadius: 10,
              border: "3px solid #9e5989",
              boxShadow: " 0 0 10px #9e5989", // Glowing pink border
            }}
          >
            <Typography variant="h4">
              Event Name <span>(Venue Details)</span>{" "}
            </Typography>
            <div className="flex flex-row w-full ">
              <div className="w-1/2 p-2 gap-1 flex flex-col">
                <div>
                  <Typography variant="h6">Assign Coordinator</Typography>
                </div>
                <div>
                  <div className="w-full">
                    <Input
                      label="Search"
                      icon={<ChevronDownIcon className="h-5 w-full" />}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-purple-400">Assign Coordinator</p>
                </div>
              </div>
              <div className="w-1/2 p-1 gap-1 flex flex-col ">
                <div>
                  <Typography variant="h6">Event Name(Venue Here)</Typography>
                </div>
                <div
                  className="flex w-full p-1.5"
                  style={{ borderRadius: 10, border: "3px solid #9e5989" }}
                >
                  <div className="w-1/2">
                    <p className="text-xs">
                      Start : <span className="text-sm">12-12-2023</span>
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs">
                      End : <span className="text-sm">15-12-2023</span>
                    </p>
                  </div>
                </div>
                <div className="flex w-full p-1.5" style={{ borderRadius: 10, border: "3px solid #9e5989" }}>
                  <p>
                    Venue Address : Some Location 12, Name Here, City, State.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <Typography variant="h6">Assign Contractor</Typography>
                <Card className="h-fit w-full p-4 text-white" style={{
    backgroundColor: "black",
    borderRadius: 10,
    border: "3px solid #9e5989",
    boxShadow: " 0 0 10px #9e5989", // Glowing pink border
}}>
    
      <List className="text-white">
        <Accordion
          open={open === 1}
         
        >
         <ListItem className="p-0 list-item-selected-transparent" selected={open === 1}>
  <AccordionHeader
    onClick={() => handleOpen(1)} 
    className={`border-b-0 hover:text-black hover:bg-blue-gray-100 p-3  text-white  ${open === 1 ? "selected" : ""}`} // Add "selected" class if open
    style={open === 1 ? { ...selectedStyle, borderRadius: '10px' } : unselectedStyle}
    onMouseOver={(event) => event.currentTarget.style.borderRadius = '10px'} 
    // Change border radius on hover
    onMouseOut={(event) => event.currentTarget.style.borderRadius = '10px'} 

  >

    <Typography  className="mr-auto font-normal ">
    <div className="flex  justify-between text-xl ">

<Typography>Meeting Room 1</Typography> <p className="text-sm flex items-center text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4">
    <path fill="#c152e0" d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
    </svg>12 Positions</p>
</div>
<div>
    <p className="text-xs text-gray-500">Starts from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
</div>
    </Typography>
  </AccordionHeader>
</ListItem>

        </Accordion>
        
        <Accordion
          open={open === 2}
         
        >
          <ListItem className="p-0 list-item-selected-transparent" selected={open === 2} >
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3  hover:text-black hover:bg-blue-gray-100 text-white"
            style={open === 2 ? { ...selectedStyle, borderRadius: '10px' } : unselectedStyle}
            onMouseOver={(event) => event.currentTarget.style.borderRadius = '10px'} 
    // Change border radius on hover
    onMouseOut={(event) => event.currentTarget.style.borderRadius = '10px'} >
             
              <Typography  className="mr-auto font-normal">
              <div className="flex  justify-between text-xl">

<Typography>Meeting Room 2</Typography> <p className="text-sm flex items-center text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4">
    <path fill="#c152e0" d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
    </svg>12 Positions</p>
</div>
<div>
    <p className="text-xs text-gray-500">Starts from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
</div>
              </Typography>
            </AccordionHeader>
          </ListItem>
       
        </Accordion> <Accordion
          open={open === 3}
         
        >
          <ListItem className="p-0 list-item-selected-transparent" selected={open === 3} >
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3  hover:text-black hover:bg-blue-gray-100 text-white"
            style={open === 3 ? { ...selectedStyle, borderRadius: '10px' } : unselectedStyle}
            onMouseOver={(event) => event.currentTarget.style.borderRadius = '10px'} 
    // Change border radius on hover
    onMouseOut={(event) => event.currentTarget.style.borderRadius = '10px'} >
          
              <Typography  className="mr-auto font-normal">
              <div className="flex  justify-between text-xl ">

<Typography>Meeting Room 3</Typography> <p className="text-sm flex items-center text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4">
    <path fill="#c152e0" d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
    </svg>12 Positions</p>
</div>
<div>
    <p className="text-xs text-gray-500">Starts from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
</div>
              </Typography>
            </AccordionHeader>
          </ListItem>
       
        </Accordion> <Accordion
          open={open === 4}
         
        >
          <ListItem className="p-0 list-item-selected-transparent" selected={open === 4} >
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3  hover:text-black hover:bg-blue-gray-100 text-white"
            style={open === 4 ? { ...selectedStyle, borderRadius: '10px' } : unselectedStyle}
            onMouseOver={(event) => event.currentTarget.style.borderRadius = '10px'} 
    // Change border radius on hover
    onMouseOut={(event) => event.currentTarget.style.borderRadius = '10px'} >
              
              <Typography  className="mr-auto font-normal">
              <div className="flex  justify-between text-xl ">

<Typography>Meeting Room 4</Typography> <p className="text-sm flex items-center text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4">
    <path fill="#c152e0" d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
    </svg>12 Positions</p>
</div>
<div>
    <p className="text-xs text-gray-500">Starts from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
</div>
              </Typography>
            </AccordionHeader>
          </ListItem>
       
        </Accordion> <Accordion
          open={open === 5}
         
        >
          <ListItem className="p-0 list-item-selected-transparent" selected={open === 5} >
            <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3  hover:text-black hover:bg-blue-gray-100 text-white"
            style={open === 5 ? { ...selectedStyle, borderRadius: '10px' } : unselectedStyle}
            onMouseOver={(event) => event.currentTarget.style.borderRadius = '10px'} 
    // Change border radius on hover
    onMouseOut={(event) => event.currentTarget.style.borderRadius = '10px'} >
          
              <Typography  className="mr-auto font-normal">
              <div className="flex  justify-between text-xl ">

<Typography>Meeting Room 5</Typography> <p className="text-sm flex items-center text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4">
    <path fill="#c152e0" d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
    </svg>12 Positions</p>
</div>
<div>
    <p className="text-xs text-gray-500">Starts from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
</div>
              </Typography>
            </AccordionHeader>
          </ListItem>
       
        </Accordion>

      
      </List>
    </Card>
              </div>


              <div className="w-2/3  h-full">
              <div className="flex flex-col gap-1">
              <Typography variant="h6">Assign Contractor</Typography>

              <Card className="h-full  overflow-hidden "  style={{
        backgroundColor: "black",
    
        borderRadius: 10,
        border: 0,
        boxShadow: "none",
      }}>
      <table className="w-full min-w-max table-auto text-left text-white" >
        <thead >
          <tr style={{
        backgroundColor: "transparent",
    
        borderRadius: 0,
        border: 0,
        boxShadow: "none",}}>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100  p-4"
              >
                <Typography
                  variant="small"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ position,time, info, quantity }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-3 border-b border-blue-gray-50";
 
            return (
              <tr >
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal"
                  >
                    {position}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal"
                  >
                    {time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal"
                  >
                    {info}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="font-medium"
                  >
                    {quantity}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="font-medium"
                  >
                    <div className="w-full">
                    <Input
                      label="Select Contractor"
                      icon={<ChevronDownIcon className="h-5 w-full" />}
                    />
                  </div>
                  </Typography>
                </td>

                
              </tr>
            );
          })}
        </tbody>
       
      </table>
      <div className="flex items-center justify-center ">
        <div className="flex items-center gap-2 " >
        <IconButton variant="text" size="sm" color="white">
            <ArrowLeftIcon  className="h-4"/>
          </IconButton>
          <IconButton variant="text" size="sm" color="white">
          o

          </IconButton>
          <IconButton variant="text" size="sm" color="purple">
          o
          </IconButton>
                    <IconButton variant="text" size="sm" color="white">
          <ArrowRightIcon  className="h-4"/>

          </IconButton>
         
        </div>
       
        </div>
    </Card>
    </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;




// <Tabs value="html" orientation="vertical" className="text-white focus:bg-transparent" style={{
//   backgroundColor: "transparent",
//   borderRadius: 10,
//   border: "3px solid #9e5989",
//   boxShadow: " 0 0 10px #9e5989", // Glowing pink border
// }}>
//             <TabsHeader className="text-white" style={{
//   backgroundColor: "transparent",
//   borderRadius: 10,
//   border: "3px solid #9e5989",
//   boxShadow: " 0 0 10px #9e5989", // Glowing pink border
// }}>
//               {data.map(({ label, value }) => (
//                 <Tab key={value} value={value} className="flex flex-col">
                //   <div className="flex justify-between text-xl text-white">

                //   {label} <p className="text-sm flex items-center text-purple-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4">
                //       <path fill="#c152e0" d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"/>
                //       </svg>12 Positions</p>
                //   </div>
                //   <div>
                //       <p className="text-xs text-gray-400">Starts from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                //   </div>
                // </Tab>
//               ))}
//             </TabsHeader>
//           </Tabs>