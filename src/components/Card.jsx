import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;

  const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : Backup;
    

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md m-3 dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg"
          src={image}
          alt={original_title}
          onError={(e) => (e.target.src = Backup)}
        />
      </Link>

      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 text-gray-700 dark:text-gray-400 line-clamp-3">
          {overview}
        </p>
      </div>
    </div>
  );
};