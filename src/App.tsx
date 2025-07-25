import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Routes  } from "./routes/router"
import {CartProvider} from "@/context/CartContext";
import {FavoritesProvider} from "@/context/FavoritesContext";
import {AuthProvider} from "@/context/AuthContext";


function App() {
  const router = createBrowserRouter(Routes);
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;