import OpenStreetMapLocationEditMap from "./editForm/OpenStreetMapLocation.edit.map";

const baseEditForm = Formio.Components.components.base.editForm;

export default function openStreetMapFormWrapper(...extend) {
  return baseEditForm(
    [
      {
        label: "Map",
        key: "map",
        weight: 1,
        components: OpenStreetMapLocationEditMap,
      },
    ],
    ...extend
  );
}
