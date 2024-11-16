export default function BtnLogout({ handler }) {
  return (
    <button
      onClick={() => handler()}
      className="bg-red-500 w-[100px] h-[50px] text-white mt-5 rounded-lg"
    >
      Logout
    </button>
  );
}
