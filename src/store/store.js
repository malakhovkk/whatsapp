import { create } from "zustand";
import axios from "axios";
export const useStore = create((set) => ({
  vendorList: [],
  updateVendorList: (vendorList) => set({ vendorList }),
  fetchVendorList: function (txt) {
    axios
      .get(
        `http://194.87.239.231:55555/api/vendor?have_pricelist=1` +
          (txt != null ? `&text=${txt}` : ""),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token1")}`,
            User: localStorage.getItem("login1"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.length > 0)
          set({
            vendorList: response.data.map((el) => ({
              id: el.id,
              name: el.name,
              code: el.code,
            })),
          });
        else set({ vendorList: null });
      })
      .catch((err) => alert(err));
  },
  FInfo: [],
  setFInfo: (FInfo) => set({ FInfo }),
}));
