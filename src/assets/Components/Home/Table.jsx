import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { PencilIcon, UserPlusIcon,PlusIcon, 
    ArrowLeftIcon,ArrowRightIcon,ChevronUpIcon} from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";
   

   
  const TABLE_HEAD = ["Event Name","Event Start","Event End","Client Name","Contact Info","Venue", "City", "State", "Zip Code"];
 
const TABLE_ROWS = [
  {
    eventName: "Filled Name",
    eventStart: "Jan 14,2024",
    eventEnd: "Jan 16,2024",
    clientName: "Muhammad Asad",
    contactInfo: "+1234567890",
    venue: "Lorem Ipsum Dolor",
    city: "-",
    state: "-",
    zipCode: "-",


  },
  {
    eventName: "Filled Name",
    eventStart: "Jan 14,2024",
    eventEnd: "Jan 16,2024",
    clientName: "Muhammad Asad",
    contactInfo: "+1234567890",
    venue: "Lorem Ipsum Dolor",
    city: "-",
    state: "-",
    zipCode: "-",


  },
  {
    eventName: "Filled Name",
    eventStart: "Jan 14,2024",
    eventEnd: "Jan 16,2024",
    clientName: "Muhammad Asad",
    contactInfo: "+1234567890",
    venue: "Lorem Ipsum Dolor",
    city: "-",
    state: "-",
    zipCode: "-",


  },
  {
    eventName: "Filled Name",
    eventStart: "Jan 14,2024",
    eventEnd: "Jan 16,2024",
    clientName: "Muhammad Asad",
    contactInfo: "+1234567890",
    venue: "Lorem Ipsum Dolor",
    city: "-",
    state: "-",
    zipCode: "-",


  },
  {
    eventName: "Filled Name",
    eventStart: "Jan 14,2024",
    eventEnd: "Jan 16,2024",
    clientName: "Muhammad Asad",
    contactInfo: "+1234567890",
    venue: "Lorem Ipsum Dolor",
    city: "-",
    state: "-",
    zipCode: "-",


  },
  {
    eventName: "Filled Name",
    eventStart: "Jan 14,2024",
    eventEnd: "Jan 16,2024",
    clientName: "Muhammad Asad",
    contactInfo: "+1234567890",
    venue: "Lorem Ipsum Dolor",
    city: "-",
    state: "-",
    zipCode: "-",


  },{
    eventName: "Filled Name",
    eventStart: "Jan 14,2024",
    eventEnd: "Jan 16,2024",
    clientName: "Muhammad Asad",
    contactInfo: "+1234567890",
    venue: "Lorem Ipsum Dolor",
    city: "-",
    state: "-",
    zipCode: "-",


  },
];
   
  export function MyTable() {
    return (
      <Card className="h-full w-full text-white " style={{
        backgroundColor: "transparent",
        borderRadius: 10,
        border: "3px solid #9e5989",
        boxShadow: " 0 0 10px #9e5989", // Glowing pink border
    }}>
        <CardHeader floated={false} shadow={false} className="rounded-none"  style={{
        backgroundColor: "transparent",
    
        borderRadius: 0,
        border: 0,
        boxShadow: "none",
      }}>
          <div className="flex items-center justify-between">
            <div>
              <Typography variant="h4" color="white">
                Event Requests
              </Typography>

            </div>
            <div className="w-full md:w-72 flex gap-2 items-center">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
            
            <button className="h-8 w-8 flex justify-center items-center bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 " style={{borderRadius:"3px"}} ><PlusIcon className="h-5" color="white" /></button>
          </div>
          </div>
    
        </CardHeader>
        <CardBody className="overflow-hidden px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left" >
            <thead >
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100   p-4 transition-colors hover:bg-blue-gray-50"
                    style={{backgroundColor:"#d175b6"}}
                  >
                    <Typography
                      variant="small"
                      color="white"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70" style={{
                        backgroundColor: "transparent",
                    
                        borderRadius: 0,
                        border: 0,
                        boxShadow: "none",
                      }}
                      
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 }
                      <ChevronUpIcon strokeWidth={2} fill="white" className="h-4 w-4" />
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({eventName, eventStart,eventEnd, clientName, contactInfo, venue, city, state, zipCode }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
   
                  return (
                    <tr  >
                               <td className={`${classes}`}> {/* Added sticky and bg-white classes */}
              <Typography
                variant="small"
                color="white"
                className="font-normal"
              >
                {eventName}
              </Typography>
            </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal  text-center"
                      >
                        {eventStart}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal  text-center"
                      >
                        {eventEnd}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal  text-center"
                      >
                        {clientName}
                      </Typography>
                    </td><td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal  text-center"
                      >
                        {contactInfo}
                      </Typography>
                    </td><td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal  text-center"
                      >
                        {venue}
                      </Typography>
                    </td><td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal  text-center"
                      >
                        {city}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal text-center"
                      >
                        {state}
                      </Typography>
                    </td><td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal  text-center"
                      >
                        {zipCode}
                      </Typography>
                    </td>
                  </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4  " color="white" >
       
        <div className="flex items-center gap-2 " >
        <IconButton variant="text" size="sm" color="white">
            <ArrowLeftIcon  className="h-4"/>
          </IconButton>
          <IconButton variant="text" size="sm" color="white">
            1
          </IconButton>
          <IconButton variant="text" size="sm" color="white">
            2
          </IconButton>
          <IconButton variant="text" size="sm" color="white">
            3
          </IconButton>
          <IconButton variant="text" size="sm" style={{color:"#d175b6"}}>
            4
          </IconButton>
          <IconButton variant="text" size="sm" color="white">
          <ArrowRightIcon  className="h-4"/>

          </IconButton>
         
        </div>
       
      </CardFooter>
      </Card>
    )
  }