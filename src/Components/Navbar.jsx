import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Task Board</h2>
        <div className="bg-slate-50 p-2 rounded-full">
        <FaUser size={28}/>
        </div>
    </div>
  )
}

export default Navbar