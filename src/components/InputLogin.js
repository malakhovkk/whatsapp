import { useStore } from "../store/store";

export const InputLogin = ({ type, name, place }) => {
  const { setFInfo, FInfo } = useStore();
  return (
    <input
      type={type}
      name={name}
      class="inp"
      placeholder={place}
      value={FInfo[name]}
      onChange={(e) => setFInfo({ ...FInfo, [e.target.name]: e.target.value })}
    />
  );
};
