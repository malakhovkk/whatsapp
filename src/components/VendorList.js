import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { VendorItem } from "./VendorItem";
export const VendorList = () => {
  useEffect(() => {
    fetchVendorList(null);
  }, []);
  const navigate = useNavigate();
  const { vendorList, updateVendorList, fetchVendorList } = useStore();
  return (
    <div className="list">
      {vendorList &&
        !!vendorList.length &&
        vendorList.map((vendor) => <VendorItem vendor={vendor} />)}
      {/* {vendorList && !!!vendorList.length && "Ответа нет"} */}
    </div>
  );
};
