
import logo from "../../src/assets/file/project-logo.png"
import pic from "../../src/assets/file/Frame 518.png"
import tic from "../../src/assets/file/Frame 11434.png"
import slack from "../../src/assets/file/Group.png"
import git from "../../src/assets/file/github.png"
import design from "../../src/assets/file/3ds-max.png"
import project from "../../src/assets/file/layers.png"
export const logos = [
    {
        icon : <img src={logo} className="rounded-md"/>,
        titr:"Dropbox Design System",
        parag:"Project description and details about...",
        url:"/",
        img:<img src={pic}/>,
        icon2:<img src={tic}/>
    },
    {
        icon : <img src={slack} className="border p-2 rounded-md"/>,
        titr:"Slack Figma Design UI",
        parag:"Project description and details about...",
        url:"/",
        img:<img src={pic}/>,
        icon2:<img src={tic}/>
    },
    {
        icon : <img src={git} className="border p-1  rounded-md"/>,
        titr:"Github Development",
        parag:"Project description and details about...",
        url:"/",
        img:<img src={pic}/>,
        icon2:<img src={tic}/>
    },

    {
        icon : <img src={design} className="border p-2  rounded-md"/>,
        titr:"Design 3d Character",
        parag:"Project description and details about...",
        url:"/",
        img:<img src={pic}/>,
        icon2:<img src={tic}/>
    },
    {
        icon : <img src={project} className="border p-1  rounded-md"/>,
        titr:"Project Management",
        parag:"Project description and details about...",
        url:"/",
        img:<img src={pic}/>,
        icon2:<img src={tic}/>
    },




]