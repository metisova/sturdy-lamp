import { useForm, SubmitHandler } from "react-hook-form";

interface AddThreadFormFields {
  userId: string;
  title: string;
  body: string;
}

export default function AddThreadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddThreadFormFields>();
  const onSubmit: SubmitHandler<AddThreadFormFields> = (data) =>
    // eslint-disable-next-line
    console.log(data);

  // eslint-disable-next-line
  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={11} {...register("userId", { required: true })} />
      <input {...register("title", { required: true })} />
      <input {...register("body", { required: true })} />
      <input type="submit" />
    </form>
  );
}
