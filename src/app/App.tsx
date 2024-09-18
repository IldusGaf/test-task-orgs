import { Outlet } from "react-router-dom";
import { Navbar } from "../widgets/Navbar";
import "./styles/App.css";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Container
          sx={{
            py: 3,
            height: "100%",
          }}
        >
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default App;
