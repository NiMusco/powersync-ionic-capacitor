import { PowerSyncContext } from '@powersync/react';
import { WASQLitePowerSyncDatabaseOpenFactory } from '@powersync/web';
import React, { Suspense } from 'react';
import { Capacitor } from '@capacitor/core';
import { AppSchema } from '@shared/powersync/AppSchema';
import { BackendConnector } from '@shared/powersync/connector';

const platform = Capacitor.getPlatform();
const isIOs = platform === 'ios';
// Web worker implementation does not work on iOS
const useWebWorker = !isIOs;

const powerSync = new WASQLitePowerSyncDatabaseOpenFactory({
  dbFilename: 'powersync2.db',
  schema: AppSchema,
  flags: {
    enableMultiTabs: false,
    useWebWorker,
  },
}).getInstance();

const connector = new BackendConnector();

powerSync.connect(connector);

export const SystemProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PowerSyncContext.Provider value={powerSync}>
      {children}
    </PowerSyncContext.Provider>
  );
};

export default SystemProvider;
