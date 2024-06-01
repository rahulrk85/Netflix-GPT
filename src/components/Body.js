import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import MovieDetail from './MovieDetail';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>,
        },
        {
          path : "/movie/:id",
          element : <MovieDetail />
        }
    ]);
    

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body;