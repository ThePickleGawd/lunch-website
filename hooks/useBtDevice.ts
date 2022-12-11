/* https://www.bekk.christmas/post/2021/12/web-bluetooth */

import * as React from "react";
import { BluetoothRemoteGATTCharacteristic } from "webbluetooth/dist/characteristic";
import { useSleep } from "./useSleep";

type Characteristic = BluetoothRemoteGATTCharacteristic | undefined;

export interface BtDevice {
  supportsBluetooth: boolean;
  isConnected: boolean;
  pairDevice: () => Promise<void>;
  writeStudentID: (text: string) => Promise<boolean>;
  writeSchoolID: (text: string) => Promise<boolean>;
  readSchoolID: () => Promise<string>;
  readStudentID: () => Promise<string>;
}

export const useBtDevice = (): BtDevice => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [schoolIDChar, setSchoolIDChar] = React.useState<Characteristic>();
  const [studentIDChar, setStudentIDChar] = React.useState<Characteristic>();
  const [supportsBluetooth, setSupportsBluetooth] = React.useState(true);

  const { sleep } = useSleep();

  // Check if device supports BLE
  React.useEffect(() => {
    if (navigator.bluetooth === undefined) {
      setSupportsBluetooth(false);
    } else {
      navigator.bluetooth.getAvailability().then((avaliable) => {
        setSupportsBluetooth(avaliable);
      });
    }
  }, []);

  const pairDevice = async () => {
    const options = {
      filters: [{ services: ["11435b92-3653-4ab9-8c50-399456922854"] }],
    };

    const device = await navigator.bluetooth.requestDevice(options);

    const onDisconnected = async (e: Event) => {
      const _device = e.target as BluetoothDevice;
      console.log("Disconnected from device: " + _device.name);
      await connect(_device);
    };

    device.addEventListener("gattserverdisconnected", onDisconnected);

    const server = await connect(device);

    if (!server) {
      console.error("Bruh could not connect to GATT Server");
      return;
    }

    // Lunch GATT service UUID
    const service = await server.getPrimaryService(
      "11435b92-3653-4ab9-8c50-399456922854"
    );

    // School Characteristic UUID
    const charSchoolID = await service.getCharacteristic(
      "228f4919-f4f8-4bb5-ba38-243a110b7a24"
    );

    // Student Characteristic UUID
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

    await sleep(500);

    // Successful if the value we want to write is the same as the value we read
    return text === (await readSchoolID());
  };

  const writeStudentID = async (text: string) => {
    var enc = new TextEncoder();
    studentIDChar?.writeValue(enc.encode(text)).catch((err) => {
      console.log(err);
    });

    await sleep(500);
    const val = await readStudentID();
    console.log(text + " " + val);
    return text === val;
  };

  const readSchoolID = async () => {
    let hex = await schoolIDChar?.readValue();
    var enc = new TextDecoder();

    let schoolID = enc.decode(hex).replace("/s+g", "");
    console.log("Read SchoolID: " + schoolID);
    return schoolID;
  };

  const readStudentID = async () => {
    let hex = await studentIDChar?.readValue();
    var enc = new TextDecoder();

    let studentID = enc.decode(hex).replace("/s+g", "");
    console.log("Read StudentID: " + studentID);
    return studentID;
  };

  const connect = async (
    device: BluetoothDevice
  ): Promise<BluetoothRemoteGATTServer | null> => {
    try {
      const server = await exponentialBackoff(
        4,
        2,
        async (): Promise<BluetoothRemoteGATTServer | undefined> => {
          time(`Connecting to ${device.name}...`);
          return await device.gatt?.connect();
        }
      );

      return server as BluetoothRemoteGATTServer;
    } catch (err) {
      time(`Failed to connect to ${device.name}...`);
      return null;
    }
  };

  const exponentialBackoff = async (
    max: number,
    delay: number,
    toTry: () => Promise<BluetoothRemoteGATTServer | undefined>
  ) => {
    return new Promise((resolve, reject) => {
      _exponentialBackoff(max, delay, toTry, resolve, reject);
    });
  };

  const _exponentialBackoff = async (
    max: number,
    delay: number,
    toTry: () => Promise<BluetoothRemoteGATTServer | undefined>,
    success: (value: unknown) => void,
    fail: (value: unknown) => void
  ) => {
    try {
      success(await toTry());
    } catch (error) {
      if (max === 0) return fail(error);
      time("Retrying in " + delay + "s... (" + max + " retries left");
      setTimeout(() => {
        _exponentialBackoff(--max, delay * 2, toTry, success, fail);
      }, delay * 1000);
    }
  };

  const time = (text: string) => {
    console.log(`[${new Date().toJSON().substring(11, 19)}]${text}`);
  };

  return {
    supportsBluetooth,
    isConnected,
    pairDevice,
    writeStudentID,
    writeSchoolID,
    readStudentID,
    readSchoolID,
  };
};
