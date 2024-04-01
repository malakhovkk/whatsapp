import { useNavigate } from "react-router-dom";

export const VendorItem = ({ vendor }) => {
  const navigate = useNavigate();
  const goToContact = ({ id, name, code }) => {
    localStorage.setItem("vendorId", id);
    localStorage.setItem("name", name);
    localStorage.setItem("code", code);
    navigate("/vendor-contact");
  };
  return (
    <div
      className="vendor"
      key={vendor.id}
      onClick={() =>
        goToContact({
          id: vendor.id,
          name: vendor.name,
          code: vendor.code,
        })
      }
    >
      {vendor.name}
    </div>
  );
};
