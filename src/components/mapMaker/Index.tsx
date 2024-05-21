import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./index.scss";

export default function Index() {
	return (
		<div className="canvas-div">
			<Canvas>
				<Experience />
			</Canvas>
		</div>
	);
}
