export interface ILaunchpads {
  name: string,
  full_name: string,
  locality: string,
  region: string,
  timezone: string,
  latitude: number,
  longitude: number,
  launch_attempts: number,
  launch_successes: number,
  rockets: string[],
  launches: [],
  details: string,
  status: string,
  id: string
}
