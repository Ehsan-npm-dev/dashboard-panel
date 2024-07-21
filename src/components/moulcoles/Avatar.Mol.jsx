import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import Image2 from "../../assets/img/man.png"

function AvatarMol() {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
     
      <Badge color="error" variant="dot" size="large">
      <NotificationsIcon color="primary" />
    </Badge>
    <img src={Image2} className="rounded-full" width={40} height={5}/>
    </div>
  )
}

export default  AvatarMol
