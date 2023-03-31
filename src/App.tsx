import { Provider } from "react-redux";
import "./App.css";
import store from "@/redux/store";
import AppRouter from "@/routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
