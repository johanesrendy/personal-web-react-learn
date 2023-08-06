/* eslint-disable react/prop-types */
import Navbar from "../layouts/navbar/Navbar";

const Public = ({ children }) => {
  return (
    // Public ngoding disini
    <section>
      <Navbar />
      {children}
    </section>
  );
};

export default Public;
