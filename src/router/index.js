import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "@/pages/Product";
import Service from "@/pages/Service";
import News from "@/pages/News";
import Recruit from "@/pages/Recruit";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";

// 页面路由
const router = createBrowserRouter([
  {
    path: '',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        index: true,
        element: <Error />
      },
      {
        path: 'firmintroduction',
        element: <Error />
      },
      {
        path: 'firmculture',
        element: <Error />
      },
      {
        path: 'firmhonor',
        element: <Error />
      },
      {
        path: 'firmhistory',
        element: <Error />
      },
      {
        path: 'firmpartner',
        element: <Error />
      }
    ]
  },
  {
    path: '/product',
    element: <Product />,
    children: [
      {
        path: '',
        element: <Error />
      },
      {
        path: '',
        element: <Error />
      },
      {
        path: '',
        element: <Error />
      },
      {
        path: '',
        element: <Error />
      },
      {
        path: '',
        element: <Error />
      }
    ]
  },
  {
    path: '/service',
    element: <Service />,
    children: [
      {
        index: true,
        element: <Error />
      },
      {
        path: 'aftersale',
        element: <Error />
      },
      {
        path: 'download',
        element: <Error />
      },
      {
        path: 'video',
        element: <Error />
      }
    ]
  },
  {
    path: '/news',
    element: <News />,
    children: [
      {
        path: '',
        element: <Error />
      },
      {
        path: '',
        element: <Error />
      },
      {
        path: '',
        element: <Error />
      }
    ]
  },
  {
    path: '/recruit',
    element: <Recruit />,
    children: [
      {
        index: true,
        element: <Error />
      },
      {
        path: 'requirement',
        element: <Error />
      },
      {
        path: 'position',
        element: <Error />
      }
    ]
  },
  {
    path: '/contact',
    element: <Contact />,
    children: [
      {
        path: '',
        element: <Error />
      },
      {
        path: '',
        element: <Error />
      }
    ]
  },
  // en
  {
    path: 'Error',
    element: <Error />
  }
])

export default router