import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "types/util";

const Home: React.FC = () => {
  const [alert, setAlert] = useState<Alert>({
    alertType: "alert",
    message: "",
  });

  useEffect(() => {}, []);

  return (
    <div className="flex w-full items-center flex-col gap-4">
      <div className="w-2/3">
        <p className="font-bold text-5xl font-display tracking-tighter text-accent">
          winnow
        </p>
        <p className="font-semibold">
          An open-source web utility for Destiny 2
        </p>
        <p className="font-light">
          Made by the founder and developer of{" "}
          <a className="underline" href="https://levante.dev" target="_blank">
            Levante
          </a>
        </p>
      </div>
      <p className="font-semibold text-1xl font-display tracking-tight text-primary">
        Check out our tools!
      </p>
      <Link to={"/emblem-try-on"}>
        <button className={"btn btn-primary"} onClick={() => {}}>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6"
          >
            <path
              d="m455.922 231.918 12.753 12.78v-20.308h-25.506v20.308zm0 25.339c3.022.003 9.128-4.406 9.01-4.524.118.118-9.01-9.143-9.01-9.143s-9.128 9.261-9.01 9.143c-.118.118 5.988 4.527 9.01 4.524zm0 1.744c4.635 0 13.906-7.117 13.906-9.313v-26.623h-27.812v26.623c0 2.196 9.271 9.313 13.906 9.313zm0 2.19c7.53 0 16.806-9.283 16.806-11.068v-26.861c0-2.45 1.923-3.204 1.923-3.204h-37.458s1.923.754 1.923 3.204v26.861c0 1.785 9.276 11.068 16.806 11.068zm0 2.826c-4.251 0-10.957-4.431-12.753-7.424 4.05 3.354 9.305 6.223 12.753 6.223s8.703-2.869 12.753-6.223c-1.796 2.993-8.502 7.424-12.753 7.424zm19.807-34.59c2.515.388 2.484 2.071 2.05 2.428-.116.095-.592.429-.822.079-.289-.441.547-.492.312-1.057-.222-.533-1.051-1.062-1.702-1.097-.13.328-.204.763-.204 1.334l-.082 12.086c-.023 1.136.327 1.757.966 1.979-.943.153-2.274-.385-2.274-1.339l.052-13.448c.068-1.47 1.746-2.627 3.353-2.465.995.1 2.611 1.263 2.9 2.843-.731-1.163-2.258-1.914-3-1.937-.575-.018-1.195.168-1.549.594zm-39.62 0c-2.515.388-2.485 2.071-2.051 2.428.116.095.593.429.822.079.289-.441-.547-.492-.312-1.057.222-.533 1.052-1.062 1.702-1.097.13.328.204.763.204 1.334l.082 12.086c.023 1.136-.327 1.757-.965 1.979.942.153 2.273-.385 2.273-1.339l-.052-13.448c-.067-1.47-1.745-2.627-3.352-2.465-.996.1-2.612 1.263-2.901 2.843.732-1.163 2.258-1.914 3-1.937.575-.018 1.195.168 1.55.594z"
              transform="matrix(21.0183 0 0 21.0183 -9070.63 -4575.22)"
            />
          </svg>
          Try on an Emblem!
        </button>
      </Link>
      <Link to={"/verity-calculator"}>
        <button className={"btn btn-primary"} onClick={() => {}}>
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6"
          >
            <path
              d="m455.922 231.918 12.753 12.78v-20.308h-25.506v20.308zm0 25.339c3.022.003 9.128-4.406 9.01-4.524.118.118-9.01-9.143-9.01-9.143s-9.128 9.261-9.01 9.143c-.118.118 5.988 4.527 9.01 4.524zm0 1.744c4.635 0 13.906-7.117 13.906-9.313v-26.623h-27.812v26.623c0 2.196 9.271 9.313 13.906 9.313zm0 2.19c7.53 0 16.806-9.283 16.806-11.068v-26.861c0-2.45 1.923-3.204 1.923-3.204h-37.458s1.923.754 1.923 3.204v26.861c0 1.785 9.276 11.068 16.806 11.068zm0 2.826c-4.251 0-10.957-4.431-12.753-7.424 4.05 3.354 9.305 6.223 12.753 6.223s8.703-2.869 12.753-6.223c-1.796 2.993-8.502 7.424-12.753 7.424zm19.807-34.59c2.515.388 2.484 2.071 2.05 2.428-.116.095-.592.429-.822.079-.289-.441.547-.492.312-1.057-.222-.533-1.051-1.062-1.702-1.097-.13.328-.204.763-.204 1.334l-.082 12.086c-.023 1.136.327 1.757.966 1.979-.943.153-2.274-.385-2.274-1.339l.052-13.448c.068-1.47 1.746-2.627 3.353-2.465.995.1 2.611 1.263 2.9 2.843-.731-1.163-2.258-1.914-3-1.937-.575-.018-1.195.168-1.549.594zm-39.62 0c-2.515.388-2.485 2.071-2.051 2.428.116.095.593.429.822.079.289-.441-.547-.492-.312-1.057.222-.533 1.052-1.062 1.702-1.097.13.328.204.763.204 1.334l.082 12.086c.023 1.136-.327 1.757-.965 1.979.942.153 2.273-.385 2.273-1.339l-.052-13.448c-.067-1.47-1.745-2.627-3.352-2.465-.996.1-2.612 1.263-2.901 2.843.732-1.163 2.258-1.914 3-1.937.575-.018 1.195.168 1.55.594z"
              transform="matrix(21.0183 0 0 21.0183 -9070.63 -4575.22)"
            />
          </svg>
          Need help Dissecting in Verity?
        </button>
      </Link>
      <div className="divider font-display" />
    </div>
  );
};

export default Home;
