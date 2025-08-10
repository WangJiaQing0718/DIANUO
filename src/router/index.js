import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "@/pages/Product";
import Service from "@/pages/Service";
import News from "@/pages/News";
import Recruit from "@/pages/Recruit";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import FirmIntroduction from "@/pages/About/FirmIntroduction";
import FirmHoner from "@/pages/About/FirmHonor";
import FirmPartner from "@/pages/About/FirmPartner";
import FirmCulture from "@/pages/About/FirmCulture";

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
        element: <FirmIntroduction />
      },
      {
        path: 'firmintroduction',
        element: <FirmIntroduction />
      },
      {
        path: 'firmculture',
        element: <FirmCulture />
      },
      {
        path: 'firmhonor',
        element: <FirmHoner />
      },
      {
        path: 'firmhistory',
        element: <Error />
      },
      {
        path: 'firmpartner',
        element: <FirmPartner />
      }
    ]
  },
  {
    path: '/product',
    element: <Product />,
    children: [
      {
        index: true,
        element: <Error />
      },
      {
        path: 'fxy',
        element: <Error />
      },
      {
        path: 'sj',
        element: <Error />
      },
      {
        path: 'hc',
        element: <Error />
      },
      {
        path: 'other',
        element: <Error />
      },
      {
        path: 'newproduct',
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
        index: true,
        element: <Error />
      },
      {
        path: 'firmnews',
        element: <Error />
      },
      {
        path: 'industrynews',
        element: <Error />
      },
      {
        path: 'medianews',
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