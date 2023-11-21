/* global L */

import OpenStreetMapLocationEditForm from "./OpenStreetMapLocation.form";

const TextFieldComponent = Formio.Components.components.textfield;

export class OpenStreetMapLocation extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema(
      {
        type: "openstreetmaplocation",
        label: "Open Street Maps Location",
        key: "location",
        map: {
          key: "",
          lat: "",
          lon: "",
          gmapId: "",
          autocompleteOptions: {},
        },
      },
      ...extend,
    );
  }

  static get builderInfo() {
    return {
      title: "Open Street Maps Location",
      group: "custom",
      icon: "map",
      weight: 36,
      schema: OpenStreetMapLocation.schema(),
    };
  }

  init() {
    super.init();
    const leafletLibrary = [
      {
        type: "script",
        src: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
      },
      {
        type: "styles",
        src: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
      },
    ];
    Formio.requireLibrary("L", "L", leafletLibrary, true);
  }

  get defaultSchema() {
    return OpenStreetMapLocation.schema();
  }

  get emptyValue() {
    return "";
  }

  setValue(value) {
    super.setValue(value);
    // if (element.map.marker !== null) {
    //   element.map.marker.setLatLng(value);
    // }
  }

  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class += " leaflet-search";
    return info;
  }

  renderElement(value, index) {
    return (
      super.renderElement(value, index) +
      this.renderTemplate("leafletMap", {
        mapId: this.component.map.mapId,
      })
    );
  }

  attach(element) {
    const ret = super.attach(element);
    this.loadRefs(element, {
      leafletElement: "multiple",
    });
    return ret;
  }

  attachElement(element, index) {
    super.attachElement(element, index);
    Formio.libraryReady("L").then(() => {
      if (!this.refs.leafletElement[index]) {
        return;
      }

      const defaultLatlng = [this.component.map.lat, this.component.map.lon]; // brisbane
      console.log(defaultLatlng);
      // console.log(this.refs.leafletElement[index]);
      const mapElement = this.refs.leafletElement[index];
      const map = L.map(mapElement).setView(defaultLatlng, 18);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      }).addTo(map);
      // show the scale bar on the lower left corner
      L.control
        .scale({
          imperial: false,
          metric: true,
        })
        .addTo(map);

      element.map = map;
      this.addMarker(defaultLatlng, "pointer", element, this);

      // let autocompleteOptions = {};
      // if (this.component.map) {
      //   autocompleteOptions = this.component.map.autocompleteOptions || {};
      // }
      // const autocomplete = new google.maps.places.Autocomplete(
      //   element,
      //   autocompleteOptions
      // );
      // autocomplete.addListener("place_changed", () => {
      //   const place = autocomplete.getPlace();
      //   if (!place.geometry) {
      //     console.log("Autocomplete's returned place contains no geometry");
      //     return;
      //   }
      //
      //   // If the place has a geometry, then present it on a map.
      //   if (place.geometry.viewport) {
      //     element.map.fitBounds(place.geometry.viewport);
      //   } else {
      //     element.map.setCenter(place.geometry.location);
      //     element.map.setZoom(17); // Why 17? Because it looks good.
      //   }
      //   element.marker.setIcon(
      //     /** @type {google.maps.Icon} */ ({
      //       url: place.icon,
      //       size: new google.maps.Size(71, 71),
      //       origin: new google.maps.Point(0, 0),
      //       anchor: new google.maps.Point(17, 34),
      //       scaledSize: new google.maps.Size(35, 35),
      //     })
      //   );
      //   element.marker.setPosition(place.geometry.location);
      //   this.setValue(place.name);
      // });
    });
  }

  addMarker(latlngIn, title, element, func) {
    const marker = L.marker(latlngIn, {
      draggable: true,
      autoPan: true,
    });
    element.map.marker = marker;
    marker.addTo(element.map);
    // element.marker = marker;
    // this.addMarker(defaultLatlng, "Default Marker", element);
    marker.on("moveend", function (event) {
      // marker.addListener("moveend", (event) => {
      console.log(event);
      // const markerInternal = e.target;
      const position = marker.getLatLng();
      // geocode for plsplus
      // const geocoder = //new google.maps.Geocoder();
      // latlng = {
      //   lat: parseFloat(event.latLng.lat()),
      //   lng: parseFloat(event.latLng.lng()),
      // };
      // console.log(title + position.lat+ "," +position.lng, element)
      // marker.bindPopup(title + position.lat+ "," +position.lng);
      func.setValue(`${position.lat},${position.lng}`);

      element.map.panTo(new L.LatLng(position.lat, position.lng));
    });

    // let latlng = latlngIn;
    // element.marker = new google.maps.Marker({
    //   position: latlng,
    //   map: element.map,
    //   title,
    //   draggable: true,
    // });
    // element.marker.addListener("dragend", (event) => {
    //   const geocoder = new google.maps.Geocoder();
    //   latlng = {
    //     lat: parseFloat(event.latLng.lat()),
    //     lng: parseFloat(event.latLng.lng()),
    //   };
    //   geocoder.geocode({ location: latlng }, (results, status) => {
    //     if (status === google.maps.GeocoderStatus.OK) {
    //       if (results[1]) {
    //         this.setValue(results[0].formatted_address);
    //       } else {
    //         console.log("No results found");
    //       }
    //     } else {
    //       console.log(`Geocoder failed due to: ${status}`);
    //     }
    //   });
    // });
  }
}

OpenStreetMapLocation.editForm = OpenStreetMapLocationEditForm;

// Register the component to the Formio.Components registry.
// This is not required as we dynamicly load them based on lower
// Formio.Components.addComponent("location", GoogleLocation);
