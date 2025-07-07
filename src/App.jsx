import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return <h1 className="text-red-500">Welcome to the World of GTA and GSAP!</h1>;
};

export default App;
