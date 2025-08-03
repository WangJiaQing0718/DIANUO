import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "@/pages/Product";
import Service from "@/pages/Service";
import News from "@/pages/News";
import Recruit from "@/pages/Recruit";
import Contact from "@/pages/Contact";
import English from "@/pages/English";

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
        element: <English />
      },
      {
        path: 'firmintroduction',
        element: <English />
      },
      {
        path: 'firmculture',
        element: <English />
      },
      {
        path: 'firmhonor',
        element: <English />,
      },
      {
        path: 'firmhistory',
        element: <English />
      },
      {
        path: 'firmpartner',
        element: <English />
      }
    ]
  },
  {
    path: '/product',
    element: <Product />,
    children: [
      {
        path: '',
        element: <English />
      },
      {
        path: '',
        element: <English />
      },
      {
        path: '',
        element: <English />
      },
      {
        path: '',
        element: <English />
      },
      {
        path: '',
        element: <English />
      }
    ]
  },
  {
    path: '/service',
    element: <Service />,
    children: [
      {
        index: true,
        element: <English />
      },
      {
        path: 'aftersale',
        element: <English />
      },
      {
        path: 'download',
        element: <English />
      },
      {
        path: 'video',
        element: <English />
      }
    ]
  },
  {
    path: '/news',
    element: <News />,
    children: [
      {
        path: '',
        element: <English />
      },
      {
        path: '',
        element: <English />
      },
      {
        path: '',
        element: <English />
      }
    ]
  },
  {
    path: '/recruit',
    element: <Recruit />,
    children: [
      {
        index: true,
        element: <English />
      },
      {
        path: 'requirement',
        element: <English />
      },
      {
        path: 'position',
        element: <English />
      }
    ]
  },
  {
    path: '/contact',
    element: <Contact />,
    children: [
      {
        path: '',
        element: <English />
      },
      {
        path: '',
        element: <English />
      }
    ]
  },
  // en
  {
    path: 'English',
    element: <English />
  }
])

export default router