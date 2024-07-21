import SideBarItemMol from "../moulcoles/SideBarItem.Mol"
import {routes} from "../config"
import TitleAtom from "../atoms/Title.Atom"

function SideBar() {
  return (
    <div className="w-[240px] border p-4  text-white bg-gray-800 shadow-current rounded-lg rounded-l-md flex flex-col gap-4">
      <TitleAtom/>
      {routes.map((i) => (
        <SideBarItemMol
          title={i.title}
          key={i.url}
          url={i.url}
          icon={i.icon}
          icon2={i.icon2}
          active={window.location.pathname === i.url}
        />
      ))}
      
      </div>
    
  )
}

export default SideBar
