/* https://www.bekk.christmas/post/2021/12/web-bluetooth */

import * as React from "react";
import { BluetoothRemoteGATTCharacteristic } from "webbluetooth/dist/characteristic";

type ReadCallbackType = (val: string) => void;

export interface BtDevice {
  connect: () => void;
  isConnected: boolean;
  writeStudentID: (text: string) => boolean;
  readStudentID: () => string;
}

export const useBtDevice = (): BtDevice => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [characteristic, setCharacteristic] =
    React.useState<BluetoothRemoteGATTCharacteristic>();

  const connect = async () => {
    const device = await navigator.bluetooth.requestDevice({
      filters: [
        {
          services: ["11435b92-3653-4ab9-8c50-399456922854"],
        },
      ],
    });
    const server = await device.gatt?.connect();

    if (server === undefined) {
      console.log("Could not connect to gatt???");
      return;
    }

    const service = await server.getPrimaryService(
      "11435b92-3653-4ab9-8c50-399456922854"
    );

    const char = await service.getCharacteristic(
      "33f68a3f-e981-4fd8-a13c-b6a0edd1928d"
    );

    char.readValue().then((val) => {
      var enc = new TextDecoder();
      console.log(enc.decode(val));
    });

    setCharacteristic(char as BluetoothRemoteGATTCharacteristic | undefined);
    setIsConnected(true);
  };

  const writeStudentID = (text: string) => {
    var enc = new TextEncoder();
    characteristic?.writeValue(enc.encode(text)).catch((err) => {
      console.log(err);
    });

    // Successful if the value we want to write is the same as the value we read
    return text === readStudentID();
  };

  const readStudentID = () => {
    let hex;
    characteristic?.readValue().then((val) => {
      hex = val;
    });

    var enc = new TextDecoder();
    return enc.decode(hex);
  };

  return { connect, writeStudentID, readStudentID, isConnected };
};
