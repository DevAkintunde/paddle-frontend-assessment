import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div className="">Oops! We cannot find the page you are looking for.</div>
      <Link to="/" className="">
        Go to homepage
      </Link>
    </>
  );
};
export default Page404;
