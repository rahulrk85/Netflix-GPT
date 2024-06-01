import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
  // const posters = movies.filter((v)=>(v?.poster?.url));
  // const {posters} = (movies.posters[0].url || movies.posters.url);
  // console.log(posters);

  return (
    <div className="px-4 py-3">
        <h1 className="md:text-3xl pb-4 text-white ">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex ">
                {movies?.map(movie=><MovieCard key={movie?.id} poster={movie?.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;