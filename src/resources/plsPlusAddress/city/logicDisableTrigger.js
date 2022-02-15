const cantfindAddressKey = instance.parent.parent.components.find(comp => comp.component.properties.fieldName === "cantfindAddress")?.component.key;
const cantfindAddressData = data[cantfindAddressKey];
result=!cantfindAddressData;