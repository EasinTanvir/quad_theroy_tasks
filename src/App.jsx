import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import FoodItems from "./components/FoodItems/FoodItems";
import { useDispatch, useSelector } from "react-redux";
import { Get_All_Items } from "./store/action";
import Footer from "./components/Footer";
import { Grid } from "react-loader-spinner";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.foodlist);
  const { error, isLoading } = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(Get_All_Items());
  }, []);

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error} — <strong>check it out!</strong>
        </Alert>
      </div>
    );
  }

  return (
    <div className="bg-bodyColor">
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        {isLoading ? (
          <div className="mt-5 flex flex-col gap-3 items-center justify-center h-56">
            <Grid
              visible={true}
              height="80"
              width="80"
              color="#FD6011"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="grid-wrapper"
            />
            <span className="text-icon">Please Wait...</span>
          </div>
        ) : (
          <FoodItems items={items} />
        )}
      </main>

      <footer className="sm:mt-28 mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
