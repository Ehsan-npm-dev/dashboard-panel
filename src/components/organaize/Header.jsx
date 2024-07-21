import AvatarMol from "../moulcoles/Avatar.Mol";
import SearchBoxMol from "../moulcoles/SearchBox.Mol"
import Logo from "../atoms/Logo"
import Box from "@mui/material/Box";

function Header() {
  return (
    <Box className = "flex flex-row  w-[1520px]  h-[95px] border justify-between  gap-10  items-center  p-4 px-8 ">
    <Logo/>
    <SearchBoxMol />
    <AvatarMol/>
    </Box>
  )
}

export default Header
