// Composables
import DefaultLayout from "@/layouts/default/DefaultLayout.vue"
import TitleListView from "@/views/titles/TitleListView.vue"
import MyTitleListView from "@/views/titles/MyTitleListView.vue"

export default [
  {
    path: "/titles",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "titles-list",
        component: TitleListView,
      },
    ],
  },
  {
    path: "/mytitles",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "mytitles-list",
        component: MyTitleListView,
      },
    ],
  },
]
