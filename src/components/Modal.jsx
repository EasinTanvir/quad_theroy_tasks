import Modal from "@mui/material/Modal";
import Inputs from "./Forms/Inputs";
import { useForm } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { Add_New_Food_Items } from "../store/action";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Modals = ({ open, setOpen, title, IsPopular, IsRecommended }) => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues: { Name: "", Price: 0, ImageUrl: "" } });

  const onSubmit = (data) => {
    const sendData = {
      ...data,
      Id: Math.floor(Math.random() * 10000),
      IsPopular,
      IsRecommended,
    };

    dispatch(Add_New_Food_Items(sendData));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setOpen(false);
      toast.success("New Item Added Successful");
    }
  }, [isSubmitSuccessful]);

  const onCloseHandler = () => {
    setOpen(false);
    reset();
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="h-screen flex justify-center items-center">
        <div className="sm:w-modalWidth w-80 min-h-96 bg-yellow-50 sm:p-10 p-4  rounded-xl">
          <div className="flex justify-between items-center">
            <span></span>
            <h1 className=" sm:text-2xl text-md font-bold font-serif ">
              {title}
            </h1>
            <span
              className="cursor-pointer w-8 h-8 rounded-full bg-red-700 flex justify-center items-center"
              onClick={onCloseHandler}
            >
              <ClearIcon className="text-white hover:text-slate-200" />
            </span>
          </div>

          <form className="flex flex-col gap-1 mt-8" action="">
            <Inputs
              type="text"
              placeholder="Enter Name"
              message="Name is required*"
              label="Name"
              id="Name"
              register={register}
              errors={errors}
            />{" "}
            <Inputs
              type="number"
              placeholder="Enter Price"
              message="Price is required*"
              label="Price"
              id="Price"
              register={register}
              errors={errors}
              min={true}
            />{" "}
            <Inputs
              type="text"
              placeholder="Please Enter a Valid ImageUrl"
              message="Image Url is required"
              label="ImageUrl"
              id="ImageUrl"
              register={register}
              errors={errors}
            />{" "}
            <div className="mt-2">
              <button
                className="bg-teal-600 text-white px-5 py-2 rounded-md hover:text-slate-300"
                onClick={handleSubmit(onSubmit)}
              >
                {isSubmitting ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Modals;
