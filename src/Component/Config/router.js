import { Route, Routes } from "react-router-dom";
import DetailScreen from "../../Screen/DetailScreen";
import Dashboard from "../../Dashboard";


export default function Router() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="DetailScreen/:adId" element={<DetailScreen/>}/>
            </Route>
        </Routes>
    )
}

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Dashboard/>,
//     },
//   ]);
