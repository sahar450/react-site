import Minindex from "./Minindex/Minindex";
import Catgoury from "./Catgoury/Catgoury";
import Coursinfo from "./Coursinfo/Coursinfo";
import Panel from "./Panel/Panel";
import Log from "./LogRI/Log";
import CoursinfoT from "./Coursinfotwo/CoursinfoTWO";
const routes = [
    { path: '/', element: <Minindex/> },
    {path:'/Catgoury/:href' , element:<Catgoury/> },
    {path:'/Coursinfo/:href',element:<Coursinfo/>},
    {path:'/CoursinfoT/:shortName',element:<CoursinfoT/>},
    {path:'/LogRI',element:<Log/>},
    {path:"/Panel",element:<Panel/>},
    
]

export default routes