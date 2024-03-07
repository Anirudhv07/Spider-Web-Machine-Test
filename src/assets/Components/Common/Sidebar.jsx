import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
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
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
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
 
export function MySideBar() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
  <Card className="h-fit w-full max-w-[20rem] p-4 text-white" style={{
      backgroundColor: "transparent",
      borderRadius: 10,
      border: "3px solid #9e5989",
      boxShadow: " 0 0 10px #9e5989", // Glowing pink border
  }}>
      
        <List className="text-white">
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} 
              />
            }
          >
          <ListItem className="p-0 list-item-selected-transparent" selected={open === 1}>
    <AccordionHeader
      onClick={() => handleOpen(1)} 
      className={`border-b-0 hover:text-black hover:bg-blue-gray-100  text-white  p-3 ${open === 1 ? "selected" : ""}`} // Add "selected" class if open
      style={open === 1 ? { ...selectedStyle, borderRadius: '10px' } : unselectedStyle}
      onMouseOver={(event) => event.currentTarget.style.borderRadius = '10px'} 
      // Change border radius on hover
      onMouseOut={(event) => event.currentTarget.style.borderRadius = '10px'} 

    >
      <ListItemPrefix>
      </ListItemPrefix>
      <Typography  className="mr-auto font-normal ">
        Events
      </Typography>
    </AccordionHeader>
  </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0" color="white">
              <Link to={'/event'}>

                <ListItem className="text-white">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  New Requests
                </ListItem>
                </Link>

                <ListItem className="text-white">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Estimate
                  <ListItemSuffix className="text-white">
              <Chip value="14" size="sm"  className="rounded-full bg-white "  style={{ color: '#9e5989' }}/>
            </ListItemSuffix>
                </ListItem>
                  <Link to={'/'}>
                <ListItem className="text-white">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>

                  Events
                </ListItem>
                  </Link>
                <ListItem className="text-white">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Partial Requests
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          
          {/* <hr className="my-2 border-blue-gray-50" /> */}
          <ListItem>
            <ListItemPrefix>
            </ListItemPrefix>
            Positions
          
          </ListItem>
          <ListItem>
            <ListItemPrefix>
            </ListItemPrefix>
            Contractors
          </ListItem>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}` } 
              />
            }
          >
            <ListItem className="p-0 list-item-selected-transparent" selected={open === 2} >
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3  hover:text-black hover:bg-blue-gray-100 text-white"
              style={open === 2 ? { ...selectedStyle, borderRadius: '10px' } : unselectedStyle}
              onMouseOver={(event) => event.currentTarget.style.borderRadius = '10px'} 
      // Change border radius on hover
      onMouseOut={(event) => event.currentTarget.style.borderRadius = '10px'} >
                <ListItemPrefix>
                </ListItemPrefix>
                <Typography  className="mr-auto font-normal">
                  Users
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="text-white">
                  <ListItemPrefix >
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " color="white" />
                  </ListItemPrefix>
                Admins
                </ListItem>
                <ListItem className="text-white">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Clients
                </ListItem>
                <ListItem className="text-white">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Co ordinators
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <ListItem>
            <ListItemPrefix>
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <Button className="flex bg-black w-full justify-center" >
            <ListItemPrefix>
              <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <p size='sm'>
            Log Out
            </p>
            </Button>
          </ListItem>
        </List>
      </Card>
  );
}