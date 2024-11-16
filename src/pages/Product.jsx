import { useState } from "react";
import Menu from "../components/Menu";
import useFetchProduct from "../hooks/useFetchProduct";

export default function Product() {
  const [show, setShow] = useState(false);
  const { isLoading, data } = useFetchProduct(3);

  const onLogout = () => {
    const check = confirm("Are you sure you want to logout?");
    if (check) {
      return alert("Logout was successful");
    }
  };

  console.log(data);

  return (
    <>
      <section className="w-full bg-red-500 h-[100vh] flex justify-center items-center">
        <div className="text-[12px] sm:text-[16px] w-[80%] md:w-[50%] lg:max-w-[500px] h-[300px] bg-white p-5">
          <h1 className="text-[30px]  font-bold">Product</h1>
          <p className="hidden lg:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            possimus obcaecati, quidem, aut ducimus beatae nihil ad, voluptates
            quaerat magni unde vitae? Id enim, eaque adipisci provident totam
            exercitationem libero?
          </p>
          <button
            onClick={() => setShow((prev) => (prev ? false : true))}
            className="block lg:hidden p-2 border bg-red-500 text-white rounded-lg shadow"
          >
            menu
          </button>
          <Menu show={show} manuActive="menu3" />
          {isLoading ? (
            <p>Loading ...</p>
          ) : Array.isArray(data) ? (
            data.map((v) => <p key={v.id}>{v.name}</p>)
          ) : (
            <p>Data Tidak Ditemukan</p>
          )}
        </div>
      </section>
    </>
  );
}
