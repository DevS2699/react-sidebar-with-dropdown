import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HospitalProfilePage from "../pages/hospital/HospitalProfilePage";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PreauthorizationPage from "../pages/preauthorization/PreauthorizationPage";
import RecordDetailsPage from "../pages/home/recordDetails/RecordDetailsPage";
import LoginPage from "../components/login/LoginPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/",
    element: <HomePage />,
    state: "",
    sidebarProps: {
      displayText: "Home",
      icon: <HouseRoundedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      // {
      //   path: "/dashboard/default",
      //   element: <DefaultPage />,
      //   state: "dashboard.default",
      //   sidebarProps: {
      //     displayText: "Default"
      //   },
      // },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytic"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Saas"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Notifications",
      icon: <NotificationsIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Approved Claims"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Claims Under Process"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/hospital",
    element: <HospitalProfilePage />,
    state: "hospital",
    sidebarProps: {
      displayText: "Hospital Profile",
      icon: <AssignmentIndIcon />
    }
  },
  {
    path: "/preauth-form",
    element: <PreauthorizationPage />,
    state: "changelog",
  },
  {
    path: "/recordDetails",
    element: <RecordDetailsPage />,
    state: "recordDetails",
  },
];

export default appRoutes;