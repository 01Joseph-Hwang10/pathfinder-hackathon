# Modules

이 폴더에는 src내 utilities, modules를 제외한 폴더에 포함 시킬 수 없는 코드로, utilities에 포함하기에는 그 코드의 길이가 길어 별도의 모듈로 관리가 필요한 코드들을 저장하는 곳입니다.

저장해야할 코드를 그와 관련된 이름으로 폴더를 만들어 저장합니다.

예시 : 블루투스 모듈 (현 프로젝트와 관계 없음)

폴더 구조
|- modules

|-- bluetooth

|--- index.ts

|--- device.ts

|--- manager.ts

```typescript
// src/modules/bluetooth/index.ts

import './manager';
import './device';
import {BleManager} from 'react-native-ble-plx';

export const bleManager = new BleManager();


// src/modules/bluetooth/device.ts

import {CustomSnackBars} from '@src/components/common/utilities/snackbars';
import {Nullable} from '@src/utils/types';
import {Device, Characteristic} from 'react-native-ble-plx';

declare module 'react-native-ble-plx' {
  // eslint-disable-next-line no-shadow
  interface Device {
    exploit(): Promise<Nullable<Device>>;
    allCharacteristics(): Promise<Characteristic[]>;
    use(characteristicUUID: string): Promise<Nullable<Characteristic>>;
  }
}

Device.prototype.exploit = async function () {
  try {
    await this.connect();
    await this.discoverAllServicesAndCharacteristics();
    return this;
  } catch (error) {
    CustomSnackBars.somethingWentWrong();
    return null;
  }
};

Device.prototype.allCharacteristics = async function () {
  const services = await this.services();
  const characteristics: Characteristic[] = [];
  for (const service of services) {
    characteristics.push(...(await service.characteristics()));
  }
  return characteristics;
};

Device.prototype.use = async function (characteristicUUID: string) {
  const characteristics = await this.allCharacteristics();
  return characteristics.find(
    characteristic => characteristic.uuid === characteristicUUID,
  );
};

// src/modules/bluetooth/manager.ts


import {Platform} from 'react-native';
import {BleManager, State} from 'react-native-ble-plx';
import {Location} from '../location';

declare module 'react-native-ble-plx' {
  // eslint-disable-next-line no-shadow
  interface BleManager {
    /**
     * @description Enables BLE if it is not enabled.
     */
    enableBLE(): Promise<void>;
    /**
     * @description Checks if Bluetooth and Location is enabled
     */
    enabled(): Promise<boolean>;
    /**
     * @description Checks if Bluetooth is enabled
     */
    bluetoothEnabled(): Promise<boolean>;
  }
}

BleManager.prototype.enableBLE = async function () {
  if (await this.enabled()) return;
  await Location.enable();
  if (await this.bluetoothEnabled()) return;
  if (Platform.OS === 'android') {
    await this.enable();
  }
};

BleManager.prototype.enabled = async function () {
  const bleEnabled =
    (await this.bluetoothEnabled()) && (await Location.enabled());
  if (bleEnabled) return true;
  return false;
};

BleManager.prototype.bluetoothEnabled = async function () {
  const state = await this.state();
  if (state === State.PoweredOn) return true;
  return false;
};
```
