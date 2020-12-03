export interface Imission{
  fairings: {
    reused: boolean,
    recovery_attempt: boolean,
    recovered: boolean,
    ships: [],
  },
  links: {
    patch: {
      small: string,
      large: string,
    }
    reddit: {
      campaign: any,
      launch: any,
      media: any,
      recovery: any,
    }
    flickr: {
      small:[],
      original: [],
    }
    presskit: any,
    webcast: string,
    youtube_id: string,
    article: string,
    wikipedia: string
  },
  static_fire_date_utc: string,
  static_fire_date_unix: number,
  tbd: boolean,
  net: boolean,
  window: number,
  rocket: string,
  success: boolean,
  details: string,
  crew: [],
  ships: [],
  capsules: [],
  payloads: string[],
  launchpad: string
  auto_update: boolean,
  failures: {
    time: number
    altitude: number
    reason: string
  }[],
  flight_number: number,
  name: string,
  date_utc: string,
  date_unix: number,
  date_local: string,
  date_precision: string,
  upcoming: boolean,
  cores: {
    core: string,
    flight: number,
    gridfins: boolean,
    legs: boolean,
    reused: boolean,
    landing_attempt: boolean,
    landing_success: null,
    landing_type: null,
    landpad: null,
  }[],
  id: string
}
