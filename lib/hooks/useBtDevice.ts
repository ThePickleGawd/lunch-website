/* Loosely based off https://www.bekk.christmas/post/2021/12/web-bluetooth */

import * as React from "react";
import { BluetoothRemoteGATTCharacteristic } from "webbluetooth/dist/characteristic";
import { useSleep } from "./useSleep";

type Characteristic = BluetoothRemoteGATTCharacteristic | undefined;

export interface LunchTrakBluetoothDevice {
  supportsBluetooth: boolean;
  isConnected: boolean;
  studentID: string;
  schoolID: string;
  bleAddr: string;
  pairDevice: () => Promise<void>;
  refreshLunchData: () => Promise<void>;
  writeStudentID: (text: string) => Promise<boolean>;
  writeSchoolID: (text: string) => Promise<boolean>;
}

export const useBtDevice = (): LunchTrakBluetoothDevice => {
  // Device
  const [isConnected, setIsConnected] = React.useState(false);
  const [supportsBluetooth, setSupportsBluetooth] = React.useState(true);

  // Characteristics
  const [schoolIDChar, setSchoolIDChar] = React.useState<Characteristic>();
  const [studentIDChar, setStudentIDChar] = React.useState<Characteristic>();
  const [bleAddrChar, setBleAddrChar] = React.useState<Characteristic>();

  // Values
  const [studentID, setStudentID] = React.useState("");
  const [schoolID, setSchoolID] = React.useState("");
  const [bleAddr, setBleAddr] = React.useState("");

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
      // Lunch GATT Service UUID
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
  };

  const refreshLunchData = async () => {
    await sleep();
    setStudentID(await readStudentID());
    await sleep();
    setSchoolID(await readSchoolID());
    await sleep();
    setBleAddr(await readBleAddr());
  };

  const writeSchoolID = async (text: string) => {
    var enc = new TextEncoder();
    schoolIDChar?.writeValue(enc.encode(text)).catch((err) => {
      console.log(err);
    });

    await sleep();

    // Successful if the value we want to write is the same as the value we read
    return text === (await readSchoolID());
  };

  const writeStudentID = async (text: string) => {
    var enc = new TextEncoder();
    studentIDChar?.writeValue(enc.encode(text)).catch((err) => {
      console.log(err);
    });

    await sleep();

    // Successful if the value we want to write is the same as the value we read
    return text === (await readStudentID());
  };

  const readSchoolID = async () => {
    let hex = await schoolIDChar?.readValue();
    var enc = new TextDecoder();

    let schoolID = enc.decode(hex).replace(/\0/g, "");
    return schoolID;
  };

  const readStudentID = async () => {
    let hex = await studentIDChar?.readValue();
    var enc = new TextDecoder();

    let studentID = enc.decode(hex).replace(/\0/g, "");
    return studentID;
  };

  const readBleAddr = async () => {
    let hex = await bleAddrChar?.readValue();
    var data = new Uint8Array(hex!.buffer);
    let bleAddr = "";
    data
      .slice()
      .reverse()
      .forEach((byte) => (bleAddr += byte.toString(16).padStart(2, "0")));

    return bleAddr;
  };

  const connect = async (
    device: BluetoothDevice
  ): Promise<BluetoothRemoteGATTServer | null> => {
    try {
      const server = await exponentialBackoff(
        3,
        2,
        async (): Promise<BluetoothRemoteGATTServer | undefined> => {
          time(`Connecting to ${device.name}...`);
          if (isConnected) setIsConnected(false);

          let server = await device.gatt?.connect();

          if (!server) throw new Error("Could not connect to GATT Server");

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

          // BLE Address Characteristic UUID
          const charBleAddr = await service.getCharacteristic(
            "44c50732-05a3-4a4b-a9ca-2a13fec120c6"
          );

          setSchoolIDChar(charSchoolID as Characteristic);
          setStudentIDChar(charStudentID as Characteristic);
          setBleAddrChar(charBleAddr as Characteristic);
          setIsConnected(true);

          return server;
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
    studentID,
    schoolID,
    bleAddr,
    pairDevice,
    writeStudentID,
    writeSchoolID,
    refreshLunchData,
  };
};
