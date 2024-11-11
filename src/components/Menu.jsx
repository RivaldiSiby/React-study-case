import clsx from "clsx";

export default function Menu({ show = false, manuActive = "menu1" }) {
  return (
    <section
      style={{ display: show ? "flex" : "none" }}
      className="w-[100px] flex-col p-2 gap-2"
    >
      <a
        href="/"
        className={clsx(
          "border text-center",
          manuActive === "menu1" && "bg-red-500 text-white"
        )}
      >
        Home
      </a>
      <a
        href="/about"
        className={clsx(
          "border text-center",
          manuActive === "menu2" && "bg-red-500 text-white"
        )}
      >
        About
      </a>
      <a
        href="/product"
        className={clsx(
          "border text-center",
          manuActive === "menu3" && "bg-red-500 text-white"
        )}
      >
        Product
      </a>
    </section>
  );
}
