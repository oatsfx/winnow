import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary/10 items-center text-center p-1 w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
      <Link
        to="https://donate.tiltify.com/692dd479-4c37-4bca-a394-9931cfba71ab/"
        target="_blank"
        className="text-accent shadow-sm underline hover:text-white"
      >
        Support the Bungie Foundation!
      </Link>
    </div>
  );
};

export default Banner;
