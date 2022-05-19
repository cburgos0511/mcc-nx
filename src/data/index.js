import home from "./home";
import principles from "./principles";

export const homeData = {
  id: "5258d430-d729-44b1-96ad-484c00def05d",
  name: "home",
  uid: "/",
  data: home,
}
const pages = [
  homeData,
  {
    id: "5258d430-d729-44b1-96ad-484c005d",
    name: "beliefs",
    uid: "/beliefs",
    data: principles,
  },
  {
    id: "94596dd2-3e95-4587-bdfd-4f48af31b06d",
    name: "archive",
    uid: "http://messages.millardcommunitychurch.com/",
  },
  // {
  //   id: "2fa83d93-e460-4298-a07d-70d0b3642397",
  //   name: "contact",
  //   uid: "/contact",
  // },
  {
    id: "2836aafa-6733-4b25-a908-ffca75b3e84f",
    name: "articles",
    uid: "/articles",
  },
  {
    id: "0e820dc7-db01-49cd-880e-d0d0497db973",
    name: "resources",
    uid: "/resources",
  }
];

export default pages;
//http://messages.millardcommunitychurch.com/
