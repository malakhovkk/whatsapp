import { useEffect, useState } from "react";
import "./Vendors.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/store";
import { VendorList } from "../../components/VendorList";
import { SearchText } from "../../components/SearchText";
///api/Vendor?have_pricelist=1
function Vendors() {
  //const [vendorList, setVendorList] = useState([]);
  const navigate = useNavigate();

  // const { vendorList, updateVendorList, fetchVendorList } = useStore();

  return (
    <div className="main">
      <img className="logo" src="logo.png" />
      <div
        class="back"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("../")}
      >
        Назад
      </div>
      <h2>Список поставщики</h2>

      <SearchText />
      <VendorList />
    </div>
  );
}

export default Vendors;
