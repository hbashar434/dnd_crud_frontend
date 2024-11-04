import UserForm from "@/components/UserForm";

const HomePage = () => {
  const apiURL = process.env.API_URL;
  console.log({ apiURL });

  return (
    <section>
      <UserForm></UserForm>
    </section>
  );
};

export default HomePage;
