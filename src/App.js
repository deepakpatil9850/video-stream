import "./App.css"
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchResult from "./components/SearchResult";
import ErrorPageNotFound from "./components/ErrorPageNotFound";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMini from "./components/ErrorMini";

function App() {

  // Enable light and dark theme
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // url routes created
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
        <ErrorBoundary fallback={<ErrorMini/>}>
            <div className="relative bg-white dark:bg-stone-900">
              <RouterProvider router={appRoute} />
            </div>
        </ErrorBoundary>
    </Provider>

  );
}
export default App;
