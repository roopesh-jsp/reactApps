// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EventsPage from "./pages/Events.js";
import EditEventPage from "./pages/EditEventPage.jsx";
import EventDetail, {
  loader as eventDetailLoader,
} from "./pages/EventDetail.jsx";
import NewEventPage, {
  action as newEventAction,
} from "./pages/NewEventPage.jsx";
import Root from "./Root.jsx";
import EventsRoot from "./pages/EventsRoot.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/events",
        element: <EventsRoot />,
        children: [
          {
            path: "/events",
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");
              if (!response.ok) {
                //...
              }
              return response;
            },
          },
          {
            path: "/events/:eventId",
            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              {
                path: "/events/:eventId",
                element: <EventDetail />,
              },
              { path: "/events/:eventId/edit", element: <EditEventPage /> },
            ],
          },

          {
            path: "/events/new",
            element: <NewEventPage />,
            // action: newEventAction,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
