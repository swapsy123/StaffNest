import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-Surrey',
    predictionPlace: {
      address: 'Surrey, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.471561918, 0.058216313), new LatLng(51.071496543,-0.848928941)),
    },
  },
  {
    id: 'default-hampshire',
    predictionPlace: {
      address: 'Hampshire, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.383915268,-0.729343621), new LatLng(50.705744084,-1.957277127)),
    },
  },
  {
    id: 'default-greaterlondon',
    predictionPlace: {
      address: 'Greater London, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.691872665,0.334015509), new LatLng(51.286760132,-0.510375075)),
    },
  },
  {
    id: 'default-essex',
    predictionPlace: {
      address: 'Essex, United Kingdom',
      bounds: new LatLngBounds(new LatLng(52.092662525,1.296592218), new LatLng(51.500757006,-0.019769626)),
    },
  },
  {
    id: 'default-hertfordshire',
    predictionPlace: {
      address: 'Hertfordshire, United Kingdom',
      bounds: new LatLngBounds(new LatLng(52.080536344,0.195567045), new LatLng(51.599582775,-0.745789208)),
    },
  },
  {
    id: 'default-westsussex',
    predictionPlace: {
      address: 'West Sussex, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.16729752,0.044549853), new LatLng(50.722028569,-0.957597252)),
    },
  },
];
export default defaultLocations;
