/* global google */

import LocationEditForm from "./GoogleLocation.form";

const TextFieldComponent = Formio.Components.components.textfield;

export class GoogleLocation extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema(
      {
        type: "googlelocation",
        label: "Google Location",
        key: "location",
        map: {
          key: "",
          region: "",
          gmapId: "",
          autocompleteOptions: {},
        },
      },
      ...extend,
    );
  }

  static get builderInfo() {
    return {
      title: "Google Location",
      group: "custom",
      icon: "map",
      weight: 36,
      schema: GoogleLocation.schema(),
    };
  }

  init() {
    super.init();
    let src =
      "https://maps.googleapis.com/maps/api/js?v=3&libraries=places&callback=googleMapsCallback";
    if (this.component.map && this.component.map.key) {
      src += `&key=${this.component.map.key}`;
    }
    if (this.component.map && this.component.map.region) {
      src += `&region=${this.component.map.region}`;
    }
    Formio.requireLibrary("googleMaps", "google.maps.places", src);
  }

  get defaultSchema() {
    return GoogleLocation.schema();
  }

  get emptyValue() {
    return "";
  }

  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class += " Gmap-search";
    return info;
  }

  renderElement(value, index) {
    return (
      super.renderElement(value, index) +
      this.renderTemplate("googleMap", {
        mapId: this.component.map.gmapId,
      })
    );
  }

  attach(element) {
    const ret = super.attach(element);
    this.loadRefs(element, {
      gmapElement: "multiple",
    });
    return ret;
  }

  attachElement(element, index) {
    super.attachElement(element, index);
    Formio.libraryReady("googleMaps").then(() => {
      const defaultLatlng = new google.maps.LatLng(-27.470125, 153.021072); // brisbane
      // const defaultLatlng = new google.maps.LatLng(45.5041482, -73.5574125);
      const options = {
        zoom: 10,
        center: defaultLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      };

      if (!this.refs.gmapElement[index]) {
        return;
      }
      element.map = new google.maps.Map(this.refs.gmapElement[index], options);
      this.addMarker(defaultLatlng, "Default Marker", element);

      let autocompleteOptions = {};
      if (this.component.map) {
        autocompleteOptions = this.component.map.autocompleteOptions || {};
      }
      const autocomplete = new google.maps.places.Autocomplete(
        element,
        autocompleteOptions,
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.log("Autocomplete's returned place contains no geometry");
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          element.map.fitBounds(place.geometry.viewport);
        } else {
          element.map.setCenter(place.geometry.location);
          element.map.setZoom(17); // Why 17? Because it looks good.
        }
        element.marker.setIcon(
          /** @type {google.maps.Icon} */ ({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35),
          }),
        );
        element.marker.setPosition(place.geometry.location);
        this.setValue(place.name);
      });
    });
  }

  addMarker(latlngIn, title, element) {
    let latlng = latlngIn;
    element.marker = new google.maps.Marker({
      position: latlng,
      map: element.map,
      title,
      draggable: true,
    });
    element.marker.addListener("dragend", (event) => {
      const geocoder = new google.maps.Geocoder();
      latlng = {
        lat: parseFloat(event.latLng.lat()),
        lng: parseFloat(event.latLng.lng()),
      };
      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            this.setValue(results[0].formatted_address);
          } else {
            console.log("No results found");
          }
        } else {
          console.log(`Geocoder failed due to: ${status}`);
        }
      });
    });
  }
}

GoogleLocation.editForm = LocationEditForm;

// Register the component to the Formio.Components registry.
// This is not required as we dynamicly load them based on lower
// Formio.Components.addComponent("location", GoogleLocation);
