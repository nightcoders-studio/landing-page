import * as migration_20250504_122904_migration from './20250504_122904_migration';

export const migrations = [
  {
    up: migration_20250504_122904_migration.up,
    down: migration_20250504_122904_migration.down,
    name: '20250504_122904_migration'
  },
];
