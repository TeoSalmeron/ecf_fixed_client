// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import DashboardAdmin from "./pages/DashboardAdmin"
import DashboardEmployee from "./pages/DashboardEmployee"
import Logout from "./pages/Logout"
import Cars from "./pages/Cars"

// Components
import ProtectedRoute from "./components/ProtectedRoute"
import Nav from "./components/Nav"

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


// React auth kit
import createStore from 'react-auth-kit/createStore'
import AuthProvider from 'react-auth-kit'

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
})

function App() {
  return (
    <AuthProvider
      store={store}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cars" element={<Cars />}/>
          <Route path="/dashboard/admin" element={
            <ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>
          }/>
          <Route path="/dashboard/employee" element={
            <ProtectedRoute>
              <DashboardEmployee />
            </ProtectedRoute>
          }
            
          />
          <Route path="/logout" element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
