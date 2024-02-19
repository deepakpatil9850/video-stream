import "./App.css"
import { Header } from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchResult from "./components/SearchResult";

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
      element:<MainContainer />
    },
    {
      path:'/watch',
      element: <WatchPage />
    },
    {
      path:'/search',
      element: <SearchResult />
    }
  ]
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
