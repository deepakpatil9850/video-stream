import "./App.css"
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchResult from "./components/SearchResult";
import ErrorPageNotFound from "./components/ErrorPageNotFound";

function App() {

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }


  const appRoute = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{
      path:'/',
      element:<MainContainer />,
      errorElement:<ErrorPageNotFound/>
    },
    {
      path:'/watch',
      element: <WatchPage />,
      errorElement:<ErrorPageNotFound/>
    },
    {
      path:'/search',
      element: <SearchResult />,
      errorElement:<ErrorPageNotFound/>
    }
  ],
  errorElement:<ErrorPageNotFound />,
  }],{
    basename:"/"
  })

  return (
    <Provider store={store}>
            <div className="relative bg-white dark:bg-stone-900">
              <RouterProvider router={appRoute} />
              
            </div>
    </Provider>

  );
}
export default App;
