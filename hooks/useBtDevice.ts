/* https://www.bekk.christmas/post/2021/12/web-bluetooth */

import * as React from "react";
import { BluetoothRemoteGATTCharacteristic } from "webbluetooth/dist/characteristic";
import { useSleep } from "./useSleep";

type Characteristic = BluetoothRemoteGATTCharacteristic | undefined;

export interface BtDevice {
  connect: () => Promise<void>;
  isConnected: boolean;
  writeStudentID: (text: string) => Promise<boolean>;
  writeSchoolID: (text: string) => Promise<boolean>;
  readSchoolID: () => Promise<string>;
  readStudentID: () => Promise<string>;
}

export const useBtDevice = (): BtDevice => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [schoolIDChar, setSchoolIDChar] = React.useState<Characteristic>();
  const [studentIDChar, setStudentIDChar] = React.useState<Characteristic>();

  const { sleep } = useSleep();

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

    const charSchoolID = await service.getCharacteristic(
      "228f4919-f4f8-4bb5-ba38-243a110b7a24"
    );

    const charStudentID = await service.getCharacteristic(
      "33f68a3f-e981-4fd8-a13c-b6a0edd1928d"
    );

    setSchoolIDChar(charSchoolID as Characteristic);
    setStudentIDChar(charStudentID as Characteristic);
    setIsConnected(true);
  };

  const writeSchoolID = async (text: string) => {
    var enc = new TextEncoder();
    schoolIDChar?.writeValue(enc.encode(text)).catch((err) => {
      console.log(err);
    });

    // Successful if the value we want to write is the same as the value we read
    return text === (await readSchoolID());
  };

  const writeStudentID = async (text: string) => {
    var enc = new TextEncoder();
    studentIDChar?.writeValue(enc.encode(text)).catch((err) => {
      console.log(err);
    });

    sleep(150);

    return text === (await readStudentID());
  };

  const readSchoolID = async () => {
    let hex = await schoolIDChar?.readValue();
    var enc = new TextDecoder();

    console.log("Read SchoolID: " + enc.decode(hex));

    return enc.decode(hex);
  };

  const readStudentID = async () => {
    let hex = await studentIDChar?.readValue();
    var enc = new TextDecoder();

    console.log("Read StudentID: " + enc.decode(hex));
    return enc.decode(hex);
  };

  return {
    connect,
    writeStudentID,
    writeSchoolID,
    readStudentID,
    readSchoolID,
    isConnected,
  };
};
