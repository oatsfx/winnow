import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary/10 items-center text-center p-1 w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
      <Link
        to="https://donate.tiltify.com/dac29dad-5433-4ac2-9417-b3b5f832fec2"
        target="_blank"
        className="text-accent underline hover:text-white"
      >
        Support the Bungie Foundation!
      </Link>
    </div>
  );
};

export default Banner;
