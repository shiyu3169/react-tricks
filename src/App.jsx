import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchParams from './components/SearchParams';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>React Tricks</h1>
      </div>
    ),
  },
  {
    path: '/search-params',
    element: <SearchParams />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
