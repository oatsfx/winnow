import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary/10 items-center text-center p-1 w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
      <Link
        to="https://tilt.fyi/aLMXqD3aLy"
        target="_blank"
        className="text-accent shadow-sm underline hover:text-white"
      >
        Support the Bungie Foundation!
      </Link>
    </div>
  );
};

export default Banner;
