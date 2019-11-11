declare module '@guillaumearm/pi-camera' {
  export type CameraConfig = {
    mode: 'photo',
    output: string,
    width: number,
    height: number,
    nopreview?: boolean,
    timeout?: number,
    status?: boolean,
    brightness: string,
    vflip: true,
  };

  class PiCamera {
    constructor(config: CameraConfig);
    public snap(): Promise<void>;
  }

  export default PiCamera;
}
