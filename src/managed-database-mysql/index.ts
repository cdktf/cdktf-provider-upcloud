/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseMysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#maintenance_window_dow ManagedDatabaseMysql#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#maintenance_window_time ManagedDatabaseMysql#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#plan ManagedDatabaseMysql#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#powered ManagedDatabaseMysql#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#title ManagedDatabaseMysql#title}
  */
  readonly title?: string;
  /**
  * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#zone ManagedDatabaseMysql#zone}
  */
  readonly zone: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#properties ManagedDatabaseMysql#properties}
  */
  readonly properties?: ManagedDatabaseMysqlProperties;
}
export interface ManagedDatabaseMysqlComponents {
}

export function managedDatabaseMysqlComponentsToTerraform(struct?: ManagedDatabaseMysqlComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ManagedDatabaseMysqlComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDatabaseMysqlComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseMysqlComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class ManagedDatabaseMysqlComponentsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedDatabaseMysqlComponentsOutputReference {
    return new ManagedDatabaseMysqlComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseMysqlNodeStates {
}

export function managedDatabaseMysqlNodeStatesToTerraform(struct?: ManagedDatabaseMysqlNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ManagedDatabaseMysqlNodeStatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDatabaseMysqlNodeStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseMysqlNodeStates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ManagedDatabaseMysqlNodeStatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedDatabaseMysqlNodeStatesOutputReference {
    return new ManagedDatabaseMysqlNodeStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseMysqlPropertiesMigration {
  /**
  * Database name for bootstrapping the initial connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#dbname ManagedDatabaseMysql#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#host ManagedDatabaseMysql#host}
  */
  readonly host?: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#ignore_dbs ManagedDatabaseMysql#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Password for authentication with the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#password ManagedDatabaseMysql#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#port ManagedDatabaseMysql#port}
  */
  readonly port?: number;
  /**
  * The server where to migrate data from is secured with SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#ssl ManagedDatabaseMysql#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#username ManagedDatabaseMysql#username}
  */
  readonly username?: string;
}

export function managedDatabaseMysqlPropertiesMigrationToTerraform(struct?: ManagedDatabaseMysqlPropertiesMigrationOutputReference | ManagedDatabaseMysqlPropertiesMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    host: cdktf.stringToTerraform(struct!.host),
    ignore_dbs: cdktf.stringToTerraform(struct!.ignoreDbs),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ManagedDatabaseMysqlPropertiesMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseMysqlPropertiesMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ignoreDbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDbs = this._ignoreDbs;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseMysqlPropertiesMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbname = undefined;
      this._host = undefined;
      this._ignoreDbs = undefined;
      this._password = undefined;
      this._port = undefined;
      this._ssl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbname = value.dbname;
      this._host = value.host;
      this._ignoreDbs = value.ignoreDbs;
      this._password = value.password;
      this._port = value.port;
      this._ssl = value.ssl;
      this._username = value.username;
    }
  }

  // dbname - computed: true, optional: true, required: false
  private _dbname?: string; 
  public get dbname() {
    return this.getStringAttribute('dbname');
  }
  public set dbname(value: string) {
    this._dbname = value;
  }
  public resetDbname() {
    this._dbname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbnameInput() {
    return this._dbname;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ignore_dbs - computed: true, optional: true, required: false
  private _ignoreDbs?: string; 
  public get ignoreDbs() {
    return this.getStringAttribute('ignore_dbs');
  }
  public set ignoreDbs(value: string) {
    this._ignoreDbs = value;
  }
  public resetIgnoreDbs() {
    this._ignoreDbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDbsInput() {
    return this._ignoreDbs;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ManagedDatabaseMysqlProperties {
  /**
  * Custom password for admin user. Defaults to random string. This must be set only when a new service is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#admin_password ManagedDatabaseMysql#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Custom username for admin user. This must be set only when a new service is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#admin_username ManagedDatabaseMysql#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Automatic utility network IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#automatic_utility_network_ip_filter ManagedDatabaseMysql#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#backup_hour ManagedDatabaseMysql#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#backup_minute ManagedDatabaseMysql#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * The minimum amount of time in seconds to keep binlog entries before deletion. This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#binlog_retention_period ManagedDatabaseMysql#binlog_retention_period}
  */
  readonly binlogRetentionPeriod?: number;
  /**
  * The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#connect_timeout ManagedDatabaseMysql#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or `SYSTEM` to use the MySQL server default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#default_time_zone ManagedDatabaseMysql#default_time_zone}
  */
  readonly defaultTimeZone?: string;
  /**
  * The maximum permitted result length in bytes for the `GROUP_CONCAT()` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#group_concat_max_len ManagedDatabaseMysql#group_concat_max_len}
  */
  readonly groupConcatMaxLen?: number;
  /**
  * The time, in seconds, before cached statistics expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#information_schema_stats_expiry ManagedDatabaseMysql#information_schema_stats_expiry}
  */
  readonly informationSchemaStatsExpiry?: number;
  /**
  * Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_change_buffer_max_size ManagedDatabaseMysql#innodb_change_buffer_max_size}
  */
  readonly innodbChangeBufferMaxSize?: number;
  /**
  * Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed,  1 - flush contiguous dirty pages in the same extent,  2 - flush dirty pages in the same extent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_flush_neighbors ManagedDatabaseMysql#innodb_flush_neighbors}
  */
  readonly innodbFlushNeighbors?: number;
  /**
  * Minimum length of words that are stored in an InnoDB `FULLTEXT` index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_ft_min_token_size ManagedDatabaseMysql#innodb_ft_min_token_size}
  */
  readonly innodbFtMinTokenSize?: number;
  /**
  * This option is used to specify your own InnoDB `FULLTEXT` index stopword list for all InnoDB tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_ft_server_stopword_table ManagedDatabaseMysql#innodb_ft_server_stopword_table}
  */
  readonly innodbFtServerStopwordTable?: string;
  /**
  * The length of time in seconds an InnoDB transaction waits for a row lock before giving up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_lock_wait_timeout ManagedDatabaseMysql#innodb_lock_wait_timeout}
  */
  readonly innodbLockWaitTimeout?: number;
  /**
  * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_log_buffer_size ManagedDatabaseMysql#innodb_log_buffer_size}
  */
  readonly innodbLogBufferSize?: number;
  /**
  * The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_online_alter_log_max_size ManagedDatabaseMysql#innodb_online_alter_log_max_size}
  */
  readonly innodbOnlineAlterLogMaxSize?: number;
  /**
  * When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_print_all_deadlocks ManagedDatabaseMysql#innodb_print_all_deadlocks}
  */
  readonly innodbPrintAllDeadlocks?: boolean | cdktf.IResolvable;
  /**
  * The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_read_io_threads ManagedDatabaseMysql#innodb_read_io_threads}
  */
  readonly innodbReadIoThreads?: number;
  /**
  * When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_rollback_on_timeout ManagedDatabaseMysql#innodb_rollback_on_timeout}
  */
  readonly innodbRollbackOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_thread_concurrency ManagedDatabaseMysql#innodb_thread_concurrency}
  */
  readonly innodbThreadConcurrency?: number;
  /**
  * The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#innodb_write_io_threads ManagedDatabaseMysql#innodb_write_io_threads}
  */
  readonly innodbWriteIoThreads?: number;
  /**
  * The number of seconds the server waits for activity on an interactive connection before closing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#interactive_timeout ManagedDatabaseMysql#interactive_timeout}
  */
  readonly interactiveTimeout?: number;
  /**
  * The storage engine for in-memory internal temporary tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#internal_tmp_mem_storage_engine ManagedDatabaseMysql#internal_tmp_mem_storage_engine}
  */
  readonly internalTmpMemStorageEngine?: string;
  /**
  * IP filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#ip_filter ManagedDatabaseMysql#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * The `slow_query_logs` work as SQL statements that take more than `long_query_time` seconds to execute. Default is `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#long_query_time ManagedDatabaseMysql#long_query_time}
  */
  readonly longQueryTime?: number;
  /**
  * Size of the largest message in bytes that can be received by the server. Default is `67108864` (64M)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#max_allowed_packet ManagedDatabaseMysql#max_allowed_packet}
  */
  readonly maxAllowedPacket?: number;
  /**
  * Limits the size of internal in-memory tables. Also set `tmp_table_size`. Default is `16777216` (16M)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#max_heap_table_size ManagedDatabaseMysql#max_heap_table_size}
  */
  readonly maxHeapTableSize?: number;
  /**
  * Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#net_buffer_length ManagedDatabaseMysql#net_buffer_length}
  */
  readonly netBufferLength?: number;
  /**
  * The number of seconds to wait for more data from a connection before aborting the read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#net_read_timeout ManagedDatabaseMysql#net_read_timeout}
  */
  readonly netReadTimeout?: number;
  /**
  * The number of seconds to wait for a block to be written to a connection before aborting the write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#net_write_timeout ManagedDatabaseMysql#net_write_timeout}
  */
  readonly netWriteTimeout?: number;
  /**
  * Public access allows connections to your Managed Database services via the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#public_access ManagedDatabaseMysql#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * Slow query log enables capturing of slow queries. Setting `slow_query_log` to false also truncates the `mysql.slow_log` table. Default is off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#slow_query_log ManagedDatabaseMysql#slow_query_log}
  */
  readonly slowQueryLog?: boolean | cdktf.IResolvable;
  /**
  * Sort buffer size in bytes for `ORDER BY` optimization. Default is `262144` (256K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#sort_buffer_size ManagedDatabaseMysql#sort_buffer_size}
  */
  readonly sortBufferSize?: number;
  /**
  * Global SQL mode. Set to empty to use MySQL server defaults. 
			When creating a new service and not setting this field default SQL mode (strict, SQL standard compliant) will be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#sql_mode ManagedDatabaseMysql#sql_mode}
  */
  readonly sqlMode?: string;
  /**
  * Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. 
			It is recommended to always have primary keys because various functionality may break if any large table is missing them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#sql_require_primary_key ManagedDatabaseMysql#sql_require_primary_key}
  */
  readonly sqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Limits the size of internal in-memory tables. Also set `max_heap_table_size`. Default is `16777216` (16M)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#tmp_table_size ManagedDatabaseMysql#tmp_table_size}
  */
  readonly tmpTableSize?: number;
  /**
  * MySQL major version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#version ManagedDatabaseMysql#version}
  */
  readonly version?: string;
  /**
  * The number of seconds the server waits for activity on a noninteractive connection before closing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#wait_timeout ManagedDatabaseMysql#wait_timeout}
  */
  readonly waitTimeout?: number;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql#migration ManagedDatabaseMysql#migration}
  */
  readonly migration?: ManagedDatabaseMysqlPropertiesMigration;
}

export function managedDatabaseMysqlPropertiesToTerraform(struct?: ManagedDatabaseMysqlPropertiesOutputReference | ManagedDatabaseMysqlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    automatic_utility_network_ip_filter: cdktf.booleanToTerraform(struct!.automaticUtilityNetworkIpFilter),
    backup_hour: cdktf.numberToTerraform(struct!.backupHour),
    backup_minute: cdktf.numberToTerraform(struct!.backupMinute),
    binlog_retention_period: cdktf.numberToTerraform(struct!.binlogRetentionPeriod),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    default_time_zone: cdktf.stringToTerraform(struct!.defaultTimeZone),
    group_concat_max_len: cdktf.numberToTerraform(struct!.groupConcatMaxLen),
    information_schema_stats_expiry: cdktf.numberToTerraform(struct!.informationSchemaStatsExpiry),
    innodb_change_buffer_max_size: cdktf.numberToTerraform(struct!.innodbChangeBufferMaxSize),
    innodb_flush_neighbors: cdktf.numberToTerraform(struct!.innodbFlushNeighbors),
    innodb_ft_min_token_size: cdktf.numberToTerraform(struct!.innodbFtMinTokenSize),
    innodb_ft_server_stopword_table: cdktf.stringToTerraform(struct!.innodbFtServerStopwordTable),
    innodb_lock_wait_timeout: cdktf.numberToTerraform(struct!.innodbLockWaitTimeout),
    innodb_log_buffer_size: cdktf.numberToTerraform(struct!.innodbLogBufferSize),
    innodb_online_alter_log_max_size: cdktf.numberToTerraform(struct!.innodbOnlineAlterLogMaxSize),
    innodb_print_all_deadlocks: cdktf.booleanToTerraform(struct!.innodbPrintAllDeadlocks),
    innodb_read_io_threads: cdktf.numberToTerraform(struct!.innodbReadIoThreads),
    innodb_rollback_on_timeout: cdktf.booleanToTerraform(struct!.innodbRollbackOnTimeout),
    innodb_thread_concurrency: cdktf.numberToTerraform(struct!.innodbThreadConcurrency),
    innodb_write_io_threads: cdktf.numberToTerraform(struct!.innodbWriteIoThreads),
    interactive_timeout: cdktf.numberToTerraform(struct!.interactiveTimeout),
    internal_tmp_mem_storage_engine: cdktf.stringToTerraform(struct!.internalTmpMemStorageEngine),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    long_query_time: cdktf.numberToTerraform(struct!.longQueryTime),
    max_allowed_packet: cdktf.numberToTerraform(struct!.maxAllowedPacket),
    max_heap_table_size: cdktf.numberToTerraform(struct!.maxHeapTableSize),
    net_buffer_length: cdktf.numberToTerraform(struct!.netBufferLength),
    net_read_timeout: cdktf.numberToTerraform(struct!.netReadTimeout),
    net_write_timeout: cdktf.numberToTerraform(struct!.netWriteTimeout),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    slow_query_log: cdktf.booleanToTerraform(struct!.slowQueryLog),
    sort_buffer_size: cdktf.numberToTerraform(struct!.sortBufferSize),
    sql_mode: cdktf.stringToTerraform(struct!.sqlMode),
    sql_require_primary_key: cdktf.booleanToTerraform(struct!.sqlRequirePrimaryKey),
    tmp_table_size: cdktf.numberToTerraform(struct!.tmpTableSize),
    version: cdktf.stringToTerraform(struct!.version),
    wait_timeout: cdktf.numberToTerraform(struct!.waitTimeout),
    migration: managedDatabaseMysqlPropertiesMigrationToTerraform(struct!.migration),
  }
}

export class ManagedDatabaseMysqlPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseMysqlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._automaticUtilityNetworkIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUtilityNetworkIpFilter = this._automaticUtilityNetworkIpFilter;
    }
    if (this._backupHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupHour = this._backupHour;
    }
    if (this._backupMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinute = this._backupMinute;
    }
    if (this._binlogRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogRetentionPeriod = this._binlogRetentionPeriod;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._defaultTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTimeZone = this._defaultTimeZone;
    }
    if (this._groupConcatMaxLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConcatMaxLen = this._groupConcatMaxLen;
    }
    if (this._informationSchemaStatsExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.informationSchemaStatsExpiry = this._informationSchemaStatsExpiry;
    }
    if (this._innodbChangeBufferMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbChangeBufferMaxSize = this._innodbChangeBufferMaxSize;
    }
    if (this._innodbFlushNeighbors !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFlushNeighbors = this._innodbFlushNeighbors;
    }
    if (this._innodbFtMinTokenSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtMinTokenSize = this._innodbFtMinTokenSize;
    }
    if (this._innodbFtServerStopwordTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtServerStopwordTable = this._innodbFtServerStopwordTable;
    }
    if (this._innodbLockWaitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbLockWaitTimeout = this._innodbLockWaitTimeout;
    }
    if (this._innodbLogBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbLogBufferSize = this._innodbLogBufferSize;
    }
    if (this._innodbOnlineAlterLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbOnlineAlterLogMaxSize = this._innodbOnlineAlterLogMaxSize;
    }
    if (this._innodbPrintAllDeadlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbPrintAllDeadlocks = this._innodbPrintAllDeadlocks;
    }
    if (this._innodbReadIoThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbReadIoThreads = this._innodbReadIoThreads;
    }
    if (this._innodbRollbackOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbRollbackOnTimeout = this._innodbRollbackOnTimeout;
    }
    if (this._innodbThreadConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbThreadConcurrency = this._innodbThreadConcurrency;
    }
    if (this._innodbWriteIoThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbWriteIoThreads = this._innodbWriteIoThreads;
    }
    if (this._interactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactiveTimeout = this._interactiveTimeout;
    }
    if (this._internalTmpMemStorageEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalTmpMemStorageEngine = this._internalTmpMemStorageEngine;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._longQueryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.longQueryTime = this._longQueryTime;
    }
    if (this._maxAllowedPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedPacket = this._maxAllowedPacket;
    }
    if (this._maxHeapTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeapTableSize = this._maxHeapTableSize;
    }
    if (this._netBufferLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.netBufferLength = this._netBufferLength;
    }
    if (this._netReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netReadTimeout = this._netReadTimeout;
    }
    if (this._netWriteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netWriteTimeout = this._netWriteTimeout;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._slowQueryLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowQueryLog = this._slowQueryLog;
    }
    if (this._sortBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBufferSize = this._sortBufferSize;
    }
    if (this._sqlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMode = this._sqlMode;
    }
    if (this._sqlRequirePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlRequirePrimaryKey = this._sqlRequirePrimaryKey;
    }
    if (this._tmpTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpTableSize = this._tmpTableSize;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseMysqlProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._binlogRetentionPeriod = undefined;
      this._connectTimeout = undefined;
      this._defaultTimeZone = undefined;
      this._groupConcatMaxLen = undefined;
      this._informationSchemaStatsExpiry = undefined;
      this._innodbChangeBufferMaxSize = undefined;
      this._innodbFlushNeighbors = undefined;
      this._innodbFtMinTokenSize = undefined;
      this._innodbFtServerStopwordTable = undefined;
      this._innodbLockWaitTimeout = undefined;
      this._innodbLogBufferSize = undefined;
      this._innodbOnlineAlterLogMaxSize = undefined;
      this._innodbPrintAllDeadlocks = undefined;
      this._innodbReadIoThreads = undefined;
      this._innodbRollbackOnTimeout = undefined;
      this._innodbThreadConcurrency = undefined;
      this._innodbWriteIoThreads = undefined;
      this._interactiveTimeout = undefined;
      this._internalTmpMemStorageEngine = undefined;
      this._ipFilter = undefined;
      this._longQueryTime = undefined;
      this._maxAllowedPacket = undefined;
      this._maxHeapTableSize = undefined;
      this._netBufferLength = undefined;
      this._netReadTimeout = undefined;
      this._netWriteTimeout = undefined;
      this._publicAccess = undefined;
      this._slowQueryLog = undefined;
      this._sortBufferSize = undefined;
      this._sqlMode = undefined;
      this._sqlRequirePrimaryKey = undefined;
      this._tmpTableSize = undefined;
      this._version = undefined;
      this._waitTimeout = undefined;
      this._migration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._binlogRetentionPeriod = value.binlogRetentionPeriod;
      this._connectTimeout = value.connectTimeout;
      this._defaultTimeZone = value.defaultTimeZone;
      this._groupConcatMaxLen = value.groupConcatMaxLen;
      this._informationSchemaStatsExpiry = value.informationSchemaStatsExpiry;
      this._innodbChangeBufferMaxSize = value.innodbChangeBufferMaxSize;
      this._innodbFlushNeighbors = value.innodbFlushNeighbors;
      this._innodbFtMinTokenSize = value.innodbFtMinTokenSize;
      this._innodbFtServerStopwordTable = value.innodbFtServerStopwordTable;
      this._innodbLockWaitTimeout = value.innodbLockWaitTimeout;
      this._innodbLogBufferSize = value.innodbLogBufferSize;
      this._innodbOnlineAlterLogMaxSize = value.innodbOnlineAlterLogMaxSize;
      this._innodbPrintAllDeadlocks = value.innodbPrintAllDeadlocks;
      this._innodbReadIoThreads = value.innodbReadIoThreads;
      this._innodbRollbackOnTimeout = value.innodbRollbackOnTimeout;
      this._innodbThreadConcurrency = value.innodbThreadConcurrency;
      this._innodbWriteIoThreads = value.innodbWriteIoThreads;
      this._interactiveTimeout = value.interactiveTimeout;
      this._internalTmpMemStorageEngine = value.internalTmpMemStorageEngine;
      this._ipFilter = value.ipFilter;
      this._longQueryTime = value.longQueryTime;
      this._maxAllowedPacket = value.maxAllowedPacket;
      this._maxHeapTableSize = value.maxHeapTableSize;
      this._netBufferLength = value.netBufferLength;
      this._netReadTimeout = value.netReadTimeout;
      this._netWriteTimeout = value.netWriteTimeout;
      this._publicAccess = value.publicAccess;
      this._slowQueryLog = value.slowQueryLog;
      this._sortBufferSize = value.sortBufferSize;
      this._sqlMode = value.sqlMode;
      this._sqlRequirePrimaryKey = value.sqlRequirePrimaryKey;
      this._tmpTableSize = value.tmpTableSize;
      this._version = value.version;
      this._waitTimeout = value.waitTimeout;
      this._migration.internalValue = value.migration;
    }
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: true, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // automatic_utility_network_ip_filter - computed: false, optional: true, required: false
  private _automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable; 
  public get automaticUtilityNetworkIpFilter() {
    return this.getBooleanAttribute('automatic_utility_network_ip_filter');
  }
  public set automaticUtilityNetworkIpFilter(value: boolean | cdktf.IResolvable) {
    this._automaticUtilityNetworkIpFilter = value;
  }
  public resetAutomaticUtilityNetworkIpFilter() {
    this._automaticUtilityNetworkIpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUtilityNetworkIpFilterInput() {
    return this._automaticUtilityNetworkIpFilter;
  }

  // backup_hour - computed: true, optional: true, required: false
  private _backupHour?: number; 
  public get backupHour() {
    return this.getNumberAttribute('backup_hour');
  }
  public set backupHour(value: number) {
    this._backupHour = value;
  }
  public resetBackupHour() {
    this._backupHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHourInput() {
    return this._backupHour;
  }

  // backup_minute - computed: true, optional: true, required: false
  private _backupMinute?: number; 
  public get backupMinute() {
    return this.getNumberAttribute('backup_minute');
  }
  public set backupMinute(value: number) {
    this._backupMinute = value;
  }
  public resetBackupMinute() {
    this._backupMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinuteInput() {
    return this._backupMinute;
  }

  // binlog_retention_period - computed: true, optional: true, required: false
  private _binlogRetentionPeriod?: number; 
  public get binlogRetentionPeriod() {
    return this.getNumberAttribute('binlog_retention_period');
  }
  public set binlogRetentionPeriod(value: number) {
    this._binlogRetentionPeriod = value;
  }
  public resetBinlogRetentionPeriod() {
    this._binlogRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogRetentionPeriodInput() {
    return this._binlogRetentionPeriod;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // default_time_zone - computed: true, optional: true, required: false
  private _defaultTimeZone?: string; 
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }
  public set defaultTimeZone(value: string) {
    this._defaultTimeZone = value;
  }
  public resetDefaultTimeZone() {
    this._defaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeZoneInput() {
    return this._defaultTimeZone;
  }

  // group_concat_max_len - computed: true, optional: true, required: false
  private _groupConcatMaxLen?: number; 
  public get groupConcatMaxLen() {
    return this.getNumberAttribute('group_concat_max_len');
  }
  public set groupConcatMaxLen(value: number) {
    this._groupConcatMaxLen = value;
  }
  public resetGroupConcatMaxLen() {
    this._groupConcatMaxLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConcatMaxLenInput() {
    return this._groupConcatMaxLen;
  }

  // information_schema_stats_expiry - computed: true, optional: true, required: false
  private _informationSchemaStatsExpiry?: number; 
  public get informationSchemaStatsExpiry() {
    return this.getNumberAttribute('information_schema_stats_expiry');
  }
  public set informationSchemaStatsExpiry(value: number) {
    this._informationSchemaStatsExpiry = value;
  }
  public resetInformationSchemaStatsExpiry() {
    this._informationSchemaStatsExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationSchemaStatsExpiryInput() {
    return this._informationSchemaStatsExpiry;
  }

  // innodb_change_buffer_max_size - computed: true, optional: true, required: false
  private _innodbChangeBufferMaxSize?: number; 
  public get innodbChangeBufferMaxSize() {
    return this.getNumberAttribute('innodb_change_buffer_max_size');
  }
  public set innodbChangeBufferMaxSize(value: number) {
    this._innodbChangeBufferMaxSize = value;
  }
  public resetInnodbChangeBufferMaxSize() {
    this._innodbChangeBufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbChangeBufferMaxSizeInput() {
    return this._innodbChangeBufferMaxSize;
  }

  // innodb_flush_neighbors - computed: true, optional: true, required: false
  private _innodbFlushNeighbors?: number; 
  public get innodbFlushNeighbors() {
    return this.getNumberAttribute('innodb_flush_neighbors');
  }
  public set innodbFlushNeighbors(value: number) {
    this._innodbFlushNeighbors = value;
  }
  public resetInnodbFlushNeighbors() {
    this._innodbFlushNeighbors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFlushNeighborsInput() {
    return this._innodbFlushNeighbors;
  }

  // innodb_ft_min_token_size - computed: true, optional: true, required: false
  private _innodbFtMinTokenSize?: number; 
  public get innodbFtMinTokenSize() {
    return this.getNumberAttribute('innodb_ft_min_token_size');
  }
  public set innodbFtMinTokenSize(value: number) {
    this._innodbFtMinTokenSize = value;
  }
  public resetInnodbFtMinTokenSize() {
    this._innodbFtMinTokenSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtMinTokenSizeInput() {
    return this._innodbFtMinTokenSize;
  }

  // innodb_ft_server_stopword_table - computed: true, optional: true, required: false
  private _innodbFtServerStopwordTable?: string; 
  public get innodbFtServerStopwordTable() {
    return this.getStringAttribute('innodb_ft_server_stopword_table');
  }
  public set innodbFtServerStopwordTable(value: string) {
    this._innodbFtServerStopwordTable = value;
  }
  public resetInnodbFtServerStopwordTable() {
    this._innodbFtServerStopwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtServerStopwordTableInput() {
    return this._innodbFtServerStopwordTable;
  }

  // innodb_lock_wait_timeout - computed: true, optional: true, required: false
  private _innodbLockWaitTimeout?: number; 
  public get innodbLockWaitTimeout() {
    return this.getNumberAttribute('innodb_lock_wait_timeout');
  }
  public set innodbLockWaitTimeout(value: number) {
    this._innodbLockWaitTimeout = value;
  }
  public resetInnodbLockWaitTimeout() {
    this._innodbLockWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLockWaitTimeoutInput() {
    return this._innodbLockWaitTimeout;
  }

  // innodb_log_buffer_size - computed: true, optional: true, required: false
  private _innodbLogBufferSize?: number; 
  public get innodbLogBufferSize() {
    return this.getNumberAttribute('innodb_log_buffer_size');
  }
  public set innodbLogBufferSize(value: number) {
    this._innodbLogBufferSize = value;
  }
  public resetInnodbLogBufferSize() {
    this._innodbLogBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLogBufferSizeInput() {
    return this._innodbLogBufferSize;
  }

  // innodb_online_alter_log_max_size - computed: true, optional: true, required: false
  private _innodbOnlineAlterLogMaxSize?: number; 
  public get innodbOnlineAlterLogMaxSize() {
    return this.getNumberAttribute('innodb_online_alter_log_max_size');
  }
  public set innodbOnlineAlterLogMaxSize(value: number) {
    this._innodbOnlineAlterLogMaxSize = value;
  }
  public resetInnodbOnlineAlterLogMaxSize() {
    this._innodbOnlineAlterLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbOnlineAlterLogMaxSizeInput() {
    return this._innodbOnlineAlterLogMaxSize;
  }

  // innodb_print_all_deadlocks - computed: true, optional: true, required: false
  private _innodbPrintAllDeadlocks?: boolean | cdktf.IResolvable; 
  public get innodbPrintAllDeadlocks() {
    return this.getBooleanAttribute('innodb_print_all_deadlocks');
  }
  public set innodbPrintAllDeadlocks(value: boolean | cdktf.IResolvable) {
    this._innodbPrintAllDeadlocks = value;
  }
  public resetInnodbPrintAllDeadlocks() {
    this._innodbPrintAllDeadlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbPrintAllDeadlocksInput() {
    return this._innodbPrintAllDeadlocks;
  }

  // innodb_read_io_threads - computed: true, optional: true, required: false
  private _innodbReadIoThreads?: number; 
  public get innodbReadIoThreads() {
    return this.getNumberAttribute('innodb_read_io_threads');
  }
  public set innodbReadIoThreads(value: number) {
    this._innodbReadIoThreads = value;
  }
  public resetInnodbReadIoThreads() {
    this._innodbReadIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbReadIoThreadsInput() {
    return this._innodbReadIoThreads;
  }

  // innodb_rollback_on_timeout - computed: true, optional: true, required: false
  private _innodbRollbackOnTimeout?: boolean | cdktf.IResolvable; 
  public get innodbRollbackOnTimeout() {
    return this.getBooleanAttribute('innodb_rollback_on_timeout');
  }
  public set innodbRollbackOnTimeout(value: boolean | cdktf.IResolvable) {
    this._innodbRollbackOnTimeout = value;
  }
  public resetInnodbRollbackOnTimeout() {
    this._innodbRollbackOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbRollbackOnTimeoutInput() {
    return this._innodbRollbackOnTimeout;
  }

  // innodb_thread_concurrency - computed: true, optional: true, required: false
  private _innodbThreadConcurrency?: number; 
  public get innodbThreadConcurrency() {
    return this.getNumberAttribute('innodb_thread_concurrency');
  }
  public set innodbThreadConcurrency(value: number) {
    this._innodbThreadConcurrency = value;
  }
  public resetInnodbThreadConcurrency() {
    this._innodbThreadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbThreadConcurrencyInput() {
    return this._innodbThreadConcurrency;
  }

  // innodb_write_io_threads - computed: true, optional: true, required: false
  private _innodbWriteIoThreads?: number; 
  public get innodbWriteIoThreads() {
    return this.getNumberAttribute('innodb_write_io_threads');
  }
  public set innodbWriteIoThreads(value: number) {
    this._innodbWriteIoThreads = value;
  }
  public resetInnodbWriteIoThreads() {
    this._innodbWriteIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbWriteIoThreadsInput() {
    return this._innodbWriteIoThreads;
  }

  // interactive_timeout - computed: true, optional: true, required: false
  private _interactiveTimeout?: number; 
  public get interactiveTimeout() {
    return this.getNumberAttribute('interactive_timeout');
  }
  public set interactiveTimeout(value: number) {
    this._interactiveTimeout = value;
  }
  public resetInteractiveTimeout() {
    this._interactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveTimeoutInput() {
    return this._interactiveTimeout;
  }

  // internal_tmp_mem_storage_engine - computed: true, optional: true, required: false
  private _internalTmpMemStorageEngine?: string; 
  public get internalTmpMemStorageEngine() {
    return this.getStringAttribute('internal_tmp_mem_storage_engine');
  }
  public set internalTmpMemStorageEngine(value: string) {
    this._internalTmpMemStorageEngine = value;
  }
  public resetInternalTmpMemStorageEngine() {
    this._internalTmpMemStorageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTmpMemStorageEngineInput() {
    return this._internalTmpMemStorageEngine;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return this.getListAttribute('ip_filter');
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // long_query_time - computed: true, optional: true, required: false
  private _longQueryTime?: number; 
  public get longQueryTime() {
    return this.getNumberAttribute('long_query_time');
  }
  public set longQueryTime(value: number) {
    this._longQueryTime = value;
  }
  public resetLongQueryTime() {
    this._longQueryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longQueryTimeInput() {
    return this._longQueryTime;
  }

  // max_allowed_packet - computed: true, optional: true, required: false
  private _maxAllowedPacket?: number; 
  public get maxAllowedPacket() {
    return this.getNumberAttribute('max_allowed_packet');
  }
  public set maxAllowedPacket(value: number) {
    this._maxAllowedPacket = value;
  }
  public resetMaxAllowedPacket() {
    this._maxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedPacketInput() {
    return this._maxAllowedPacket;
  }

  // max_heap_table_size - computed: true, optional: true, required: false
  private _maxHeapTableSize?: number; 
  public get maxHeapTableSize() {
    return this.getNumberAttribute('max_heap_table_size');
  }
  public set maxHeapTableSize(value: number) {
    this._maxHeapTableSize = value;
  }
  public resetMaxHeapTableSize() {
    this._maxHeapTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeapTableSizeInput() {
    return this._maxHeapTableSize;
  }

  // net_buffer_length - computed: true, optional: true, required: false
  private _netBufferLength?: number; 
  public get netBufferLength() {
    return this.getNumberAttribute('net_buffer_length');
  }
  public set netBufferLength(value: number) {
    this._netBufferLength = value;
  }
  public resetNetBufferLength() {
    this._netBufferLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netBufferLengthInput() {
    return this._netBufferLength;
  }

  // net_read_timeout - computed: true, optional: true, required: false
  private _netReadTimeout?: number; 
  public get netReadTimeout() {
    return this.getNumberAttribute('net_read_timeout');
  }
  public set netReadTimeout(value: number) {
    this._netReadTimeout = value;
  }
  public resetNetReadTimeout() {
    this._netReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netReadTimeoutInput() {
    return this._netReadTimeout;
  }

  // net_write_timeout - computed: true, optional: true, required: false
  private _netWriteTimeout?: number; 
  public get netWriteTimeout() {
    return this.getNumberAttribute('net_write_timeout');
  }
  public set netWriteTimeout(value: number) {
    this._netWriteTimeout = value;
  }
  public resetNetWriteTimeout() {
    this._netWriteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netWriteTimeoutInput() {
    return this._netWriteTimeout;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess?: boolean | cdktf.IResolvable; 
  public get publicAccess() {
    return this.getBooleanAttribute('public_access');
  }
  public set publicAccess(value: boolean | cdktf.IResolvable) {
    this._publicAccess = value;
  }
  public resetPublicAccess() {
    this._publicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess;
  }

  // slow_query_log - computed: true, optional: true, required: false
  private _slowQueryLog?: boolean | cdktf.IResolvable; 
  public get slowQueryLog() {
    return this.getBooleanAttribute('slow_query_log');
  }
  public set slowQueryLog(value: boolean | cdktf.IResolvable) {
    this._slowQueryLog = value;
  }
  public resetSlowQueryLog() {
    this._slowQueryLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowQueryLogInput() {
    return this._slowQueryLog;
  }

  // sort_buffer_size - computed: true, optional: true, required: false
  private _sortBufferSize?: number; 
  public get sortBufferSize() {
    return this.getNumberAttribute('sort_buffer_size');
  }
  public set sortBufferSize(value: number) {
    this._sortBufferSize = value;
  }
  public resetSortBufferSize() {
    this._sortBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortBufferSizeInput() {
    return this._sortBufferSize;
  }

  // sql_mode - computed: true, optional: true, required: false
  private _sqlMode?: string; 
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }
  public set sqlMode(value: string) {
    this._sqlMode = value;
  }
  public resetSqlMode() {
    this._sqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlModeInput() {
    return this._sqlMode;
  }

  // sql_require_primary_key - computed: true, optional: true, required: false
  private _sqlRequirePrimaryKey?: boolean | cdktf.IResolvable; 
  public get sqlRequirePrimaryKey() {
    return this.getBooleanAttribute('sql_require_primary_key');
  }
  public set sqlRequirePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._sqlRequirePrimaryKey = value;
  }
  public resetSqlRequirePrimaryKey() {
    this._sqlRequirePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlRequirePrimaryKeyInput() {
    return this._sqlRequirePrimaryKey;
  }

  // tmp_table_size - computed: true, optional: true, required: false
  private _tmpTableSize?: number; 
  public get tmpTableSize() {
    return this.getNumberAttribute('tmp_table_size');
  }
  public set tmpTableSize(value: number) {
    this._tmpTableSize = value;
  }
  public resetTmpTableSize() {
    this._tmpTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTableSizeInput() {
    return this._tmpTableSize;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait_timeout - computed: true, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new ManagedDatabaseMysqlPropertiesMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: ManagedDatabaseMysqlPropertiesMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql upcloud_managed_database_mysql}
*/
export class ManagedDatabaseMysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_mysql";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_mysql upcloud_managed_database_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabaseMysqlConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabaseMysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_mysql',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.12.0',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._name = config.name;
    this._plan = config.plan;
    this._powered = config.powered;
    this._title = config.title;
    this._zone = config.zone;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: true, optional: false, required: false
  private _components = new ManagedDatabaseMysqlComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maintenance_window_dow - computed: true, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_time - computed: true, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_states - computed: true, optional: false, required: false
  private _nodeStates = new ManagedDatabaseMysqlNodeStatesList(this, "node_states", false);
  public get nodeStates() {
    return this._nodeStates;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // powered - computed: false, optional: true, required: false
  private _powered?: boolean | cdktf.IResolvable; 
  public get powered() {
    return this.getBooleanAttribute('powered');
  }
  public set powered(value: boolean | cdktf.IResolvable) {
    this._powered = value;
  }
  public resetPowered() {
    this._powered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poweredInput() {
    return this._powered;
  }

  // primary_database - computed: true, optional: false, required: false
  public get primaryDatabase() {
    return this.getStringAttribute('primary_database');
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new ManagedDatabaseMysqlPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ManagedDatabaseMysqlProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      powered: cdktf.booleanToTerraform(this._powered),
      title: cdktf.stringToTerraform(this._title),
      zone: cdktf.stringToTerraform(this._zone),
      properties: managedDatabaseMysqlPropertiesToTerraform(this._properties.internalValue),
    };
  }
}
