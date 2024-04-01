import { useStore } from "../store/store";

export const SearchText = () => {
  const { vendorList, updateVendorList, fetchVendorList } = useStore();
  return (
    <div className="findBlock">
      <input
        type="text"
        className="find"
        style={{ width: "100%" }}
        // onMouseDown={(e) => e.preventDefault()}
        onChange={(e) => {
          fetchVendorList(e.target.value);
        }}
      />
    </div>
  );
};
