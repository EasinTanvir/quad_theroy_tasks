import api from "../../api";

export const Get_All_Items = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_FETCHING" });
    const { data } = await api.get("/api/Item?page=1&pageSize=10");
    dispatch({ type: "FOOD_ITEMS", payload: data.Items });
    dispatch({ type: "SUCCESS" });
  } catch (err) {
    dispatch({ type: "IS_ERROR", payload: "Internal Server Error" });
  }
};
export const Add_New_Food_Items = (data) => (dispatch) => {
  dispatch({ type: "ADD_NEW_FOOD_ITEMS", payload: data });
};
