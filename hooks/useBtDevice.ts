/* https://www.bekk.christmas/post/2021/12/web-bluetooth */

import * as React from "react";
export interface BtDevice {
  connect: () => void;
  isConnected: boolean;
  writeText: (text: string) => void;
}

export const useBtDevice = (): BtDevice => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [characteristic, setCharacteristic] =
    React.useState<BluetoothRemoteGATTCharacteristic | null>(null);

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

    char.startNotifications().then(() => {
      char.addEventListener("characteristicvaluechanged", () => {
        console.log("something changed");
      });
    });

    setCharacteristic(char);
    setIsConnected(true);
  };

  const writeText = async (text: string) => {
    var enc = new TextEncoder();
    await characteristic?.writeValue(enc.encode(text));

    characteristic?.readValue().then((val) => {
      var enc = new TextDecoder();
      console.log(enc.decode(val));
    });
  };

  return { connect, writeText, isConnected };
};
