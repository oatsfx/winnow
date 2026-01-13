import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary/10 items-center text-center p-1 w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
      <Link
        to="https://donate.tiltify.com/a5b1a739-e5e6-4cc7-ab86-c2d4bbbd0f2d/incentives"
        target="_blank"
        className="text-accent shadow-sm underline hover:text-white"
      >
        Support the Bungie Foundation!
      </Link>
    </div>
  );
};

export default Banner;
