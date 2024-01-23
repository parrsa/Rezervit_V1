import {Listnav} from "../../../../Type/index";

const navList: Listnav[] = [
    {
        title: "صفحه اصلی",
        path: '/',
        id: 1,
    },
    {
        title: "پنل مدیریت تخصص",
        path: '/mangementpanel',
        id: 2,

    },
    {
        title: "دسته بندی ها",
        path: '/category',
        id: 3,
    },
    {
        title: "جدیدترین نمونه کارها",
        path: '/latestworksamples',
        id: 4,

    }, {
        title: "درباره ما",
        path: '/aboute',
        id: 5,

    },


]
const ProfileList: Listnav[] = [
    {
        title: "پروفایل",
        path: '/profile',
        id: 1,
        // icon: <PersonOutlineIcon sx={{color:'kaarnas.main'}} fontSize="small" />,
    },
    {
        title: "تنظیمات",
        path: '/settings',
        id: 2,
        // icon: <Settings sx={{color:'kaarnas.main'}} fontSize="small" />,
    },

    {
        title: "شکایت ثبت شده",
        path: '/HistoryShekayet',
        id: 3,
        // icon: <HistoryIcon sx={{color:'kaarnas.main'}} fontSize="small"/>,
    },
    {
        title: "پشتیبانی",
        path: '/Support',
        id: 4,
        // icon: <HelpOutlineIcon sx={{color:'kaarnas.main'}} fontSize="small"/>,
    },
    // {
    //     title: "خروج",
    //     path: '/',
    //     id: 1,
    //     icon: <Logout />,
    // },

];
export {navList, ProfileList}
