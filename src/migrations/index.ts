import * as migration_20250504_102612_migration from './20250504_102612_migration';

export const migrations = [
  {
    up: migration_20250504_102612_migration.up,
    down: migration_20250504_102612_migration.down,
    name: '20250504_102612_migration'
  },
];
