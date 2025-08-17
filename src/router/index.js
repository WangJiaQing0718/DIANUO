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
import ProductDetail from "@/pages/Product/detail";
import ALL from "@/pages/Product/all";
import FXY from "@/pages/Product/fxy";
import SJ from "@/pages/Product/sj";
import HC from "@/pages/Product/hc";
import Other from "@/pages/Product/other";
import NewProduct from "@/pages/Product/newPro";
import AfterSale from "@/pages/Service/aftersale";
import Video from "@/pages/Service/video";
import Requirement from "@/pages/Recruit/requirement";
import Position from "@/pages/Recruit/position";

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
        element: <ALL />
      },
      {
        path: 'fxy',
        element: <FXY />
      },
      {
        path: 'sj',
        element: <SJ />
      },
      {
        path: 'hc',
        element: <HC />
      },
      {
        path: 'other',
        element: <Other />
      },
      {
        path: 'newproduct',
        element: <NewProduct />
      }
    ]
  },
  {
    path: '/product_detail/:id',
    element: <ProductDetail/>
  },
  {
    path: '/service',
    element: <Service />,
    children: [
      {
        index: true,
        element: <AfterSale />
      },
      {
        path: 'aftersale',
        element: <AfterSale />
      },
      {
        path: 'download',
        element: <Error />
      },
      {
        path: 'video',
        element: <Video />
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
        element: <Requirement />
      },
      {
        path: 'requirement',
        element: <Requirement />
      },
      {
        path: 'position',
        element: <Position />
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