/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseRedisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#maintenance_window_dow ManagedDatabaseRedis#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#maintenance_window_time ManagedDatabaseRedis#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#name ManagedDatabaseRedis#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#plan ManagedDatabaseRedis#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#powered ManagedDatabaseRedis#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#title ManagedDatabaseRedis#title}
  */
  readonly title?: string;
  /**
  * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#zone ManagedDatabaseRedis#zone}
  */
  readonly zone: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#properties ManagedDatabaseRedis#properties}
  */
  readonly properties?: ManagedDatabaseRedisProperties;
}
export interface ManagedDatabaseRedisComponents {
}

export function managedDatabaseRedisComponentsToTerraform(struct?: ManagedDatabaseRedisComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ManagedDatabaseRedisComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabaseRedisComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseRedisComponents | undefined) {
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

export class ManagedDatabaseRedisComponentsList extends cdktf.ComplexList {

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
  public get(index: number): ManagedDatabaseRedisComponentsOutputReference {
    return new ManagedDatabaseRedisComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseRedisNodeStates {
}

export function managedDatabaseRedisNodeStatesToTerraform(struct?: ManagedDatabaseRedisNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ManagedDatabaseRedisNodeStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedDatabaseRedisNodeStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseRedisNodeStates | undefined) {
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

export class ManagedDatabaseRedisNodeStatesList extends cdktf.ComplexList {

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
  public get(index: number): ManagedDatabaseRedisNodeStatesOutputReference {
    return new ManagedDatabaseRedisNodeStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabaseRedisPropertiesMigration {
  /**
  * Database name for bootstrapping the initial connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#dbname ManagedDatabaseRedis#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#host ManagedDatabaseRedis#host}
  */
  readonly host?: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#ignore_dbs ManagedDatabaseRedis#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Password for authentication with the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#password ManagedDatabaseRedis#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#port ManagedDatabaseRedis#port}
  */
  readonly port?: number;
  /**
  * The server where to migrate data from is secured with SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#ssl ManagedDatabaseRedis#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#username ManagedDatabaseRedis#username}
  */
  readonly username?: string;
}

export function managedDatabaseRedisPropertiesMigrationToTerraform(struct?: ManagedDatabaseRedisPropertiesMigrationOutputReference | ManagedDatabaseRedisPropertiesMigration): any {
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

export class ManagedDatabaseRedisPropertiesMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseRedisPropertiesMigration | undefined {
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

  public set internalValue(value: ManagedDatabaseRedisPropertiesMigration | undefined) {
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
export interface ManagedDatabaseRedisProperties {
  /**
  * Automatic utility network IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#automatic_utility_network_ip_filter ManagedDatabaseRedis#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * IP filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#ip_filter ManagedDatabaseRedis#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Public access allows connections to your Managed Database services via the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#public_access ManagedDatabaseRedis#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * Default ACL for pub/sub channels used when Redis user is created. Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_acl_channels_default ManagedDatabaseRedis#redis_acl_channels_default}
  */
  readonly redisAclChannelsDefault?: string;
  /**
  * Redis IO thread count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_io_threads ManagedDatabaseRedis#redis_io_threads}
  */
  readonly redisIoThreads?: number;
  /**
  * LFU maxmemory-policy counter decay time in minutes. Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_lfu_decay_time ManagedDatabaseRedis#redis_lfu_decay_time}
  */
  readonly redisLfuDecayTime?: number;
  /**
  * Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_lfu_log_factor ManagedDatabaseRedis#redis_lfu_log_factor}
  */
  readonly redisLfuLogFactor?: number;
  /**
  * Redis maxmemory-policy. Default is `noeviction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_maxmemory_policy ManagedDatabaseRedis#redis_maxmemory_policy}
  */
  readonly redisMaxmemoryPolicy?: string;
  /**
  * Set notify-keyspace-events option. Default is "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_notify_keyspace_events ManagedDatabaseRedis#redis_notify_keyspace_events}
  */
  readonly redisNotifyKeyspaceEvents?: string;
  /**
  * Number of redis databases. Set number of redis databases. Changing this will cause a restart of redis service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_number_of_databases ManagedDatabaseRedis#redis_number_of_databases}
  */
  readonly redisNumberOfDatabases?: number;
  /**
  * Redis persistence. When persistence is 'rdb', Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_persistence ManagedDatabaseRedis#redis_persistence}
  */
  readonly redisPersistence?: string;
  /**
  * Pub/sub client output buffer hard limit in MB. Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_pubsub_client_output_buffer_limit ManagedDatabaseRedis#redis_pubsub_client_output_buffer_limit}
  */
  readonly redisPubsubClientOutputBufferLimit?: number;
  /**
  * Require SSL to access Redis. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_ssl ManagedDatabaseRedis#redis_ssl}
  */
  readonly redisSsl?: boolean | cdktf.IResolvable;
  /**
  * Redis idle connection timeout in seconds. Default is 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#redis_timeout ManagedDatabaseRedis#redis_timeout}
  */
  readonly redisTimeout?: number;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis#migration ManagedDatabaseRedis#migration}
  */
  readonly migration?: ManagedDatabaseRedisPropertiesMigration;
}

export function managedDatabaseRedisPropertiesToTerraform(struct?: ManagedDatabaseRedisPropertiesOutputReference | ManagedDatabaseRedisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_utility_network_ip_filter: cdktf.booleanToTerraform(struct!.automaticUtilityNetworkIpFilter),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    redis_acl_channels_default: cdktf.stringToTerraform(struct!.redisAclChannelsDefault),
    redis_io_threads: cdktf.numberToTerraform(struct!.redisIoThreads),
    redis_lfu_decay_time: cdktf.numberToTerraform(struct!.redisLfuDecayTime),
    redis_lfu_log_factor: cdktf.numberToTerraform(struct!.redisLfuLogFactor),
    redis_maxmemory_policy: cdktf.stringToTerraform(struct!.redisMaxmemoryPolicy),
    redis_notify_keyspace_events: cdktf.stringToTerraform(struct!.redisNotifyKeyspaceEvents),
    redis_number_of_databases: cdktf.numberToTerraform(struct!.redisNumberOfDatabases),
    redis_persistence: cdktf.stringToTerraform(struct!.redisPersistence),
    redis_pubsub_client_output_buffer_limit: cdktf.numberToTerraform(struct!.redisPubsubClientOutputBufferLimit),
    redis_ssl: cdktf.booleanToTerraform(struct!.redisSsl),
    redis_timeout: cdktf.numberToTerraform(struct!.redisTimeout),
    migration: managedDatabaseRedisPropertiesMigrationToTerraform(struct!.migration),
  }
}

export class ManagedDatabaseRedisPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseRedisProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticUtilityNetworkIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUtilityNetworkIpFilter = this._automaticUtilityNetworkIpFilter;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._redisAclChannelsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisAclChannelsDefault = this._redisAclChannelsDefault;
    }
    if (this._redisIoThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisIoThreads = this._redisIoThreads;
    }
    if (this._redisLfuDecayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisLfuDecayTime = this._redisLfuDecayTime;
    }
    if (this._redisLfuLogFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisLfuLogFactor = this._redisLfuLogFactor;
    }
    if (this._redisMaxmemoryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisMaxmemoryPolicy = this._redisMaxmemoryPolicy;
    }
    if (this._redisNotifyKeyspaceEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisNotifyKeyspaceEvents = this._redisNotifyKeyspaceEvents;
    }
    if (this._redisNumberOfDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisNumberOfDatabases = this._redisNumberOfDatabases;
    }
    if (this._redisPersistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisPersistence = this._redisPersistence;
    }
    if (this._redisPubsubClientOutputBufferLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisPubsubClientOutputBufferLimit = this._redisPubsubClientOutputBufferLimit;
    }
    if (this._redisSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisSsl = this._redisSsl;
    }
    if (this._redisTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisTimeout = this._redisTimeout;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseRedisProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._ipFilter = undefined;
      this._publicAccess = undefined;
      this._redisAclChannelsDefault = undefined;
      this._redisIoThreads = undefined;
      this._redisLfuDecayTime = undefined;
      this._redisLfuLogFactor = undefined;
      this._redisMaxmemoryPolicy = undefined;
      this._redisNotifyKeyspaceEvents = undefined;
      this._redisNumberOfDatabases = undefined;
      this._redisPersistence = undefined;
      this._redisPubsubClientOutputBufferLimit = undefined;
      this._redisSsl = undefined;
      this._redisTimeout = undefined;
      this._migration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._ipFilter = value.ipFilter;
      this._publicAccess = value.publicAccess;
      this._redisAclChannelsDefault = value.redisAclChannelsDefault;
      this._redisIoThreads = value.redisIoThreads;
      this._redisLfuDecayTime = value.redisLfuDecayTime;
      this._redisLfuLogFactor = value.redisLfuLogFactor;
      this._redisMaxmemoryPolicy = value.redisMaxmemoryPolicy;
      this._redisNotifyKeyspaceEvents = value.redisNotifyKeyspaceEvents;
      this._redisNumberOfDatabases = value.redisNumberOfDatabases;
      this._redisPersistence = value.redisPersistence;
      this._redisPubsubClientOutputBufferLimit = value.redisPubsubClientOutputBufferLimit;
      this._redisSsl = value.redisSsl;
      this._redisTimeout = value.redisTimeout;
      this._migration.internalValue = value.migration;
    }
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

  // redis_acl_channels_default - computed: true, optional: true, required: false
  private _redisAclChannelsDefault?: string; 
  public get redisAclChannelsDefault() {
    return this.getStringAttribute('redis_acl_channels_default');
  }
  public set redisAclChannelsDefault(value: string) {
    this._redisAclChannelsDefault = value;
  }
  public resetRedisAclChannelsDefault() {
    this._redisAclChannelsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisAclChannelsDefaultInput() {
    return this._redisAclChannelsDefault;
  }

  // redis_io_threads - computed: true, optional: true, required: false
  private _redisIoThreads?: number; 
  public get redisIoThreads() {
    return this.getNumberAttribute('redis_io_threads');
  }
  public set redisIoThreads(value: number) {
    this._redisIoThreads = value;
  }
  public resetRedisIoThreads() {
    this._redisIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisIoThreadsInput() {
    return this._redisIoThreads;
  }

  // redis_lfu_decay_time - computed: true, optional: true, required: false
  private _redisLfuDecayTime?: number; 
  public get redisLfuDecayTime() {
    return this.getNumberAttribute('redis_lfu_decay_time');
  }
  public set redisLfuDecayTime(value: number) {
    this._redisLfuDecayTime = value;
  }
  public resetRedisLfuDecayTime() {
    this._redisLfuDecayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisLfuDecayTimeInput() {
    return this._redisLfuDecayTime;
  }

  // redis_lfu_log_factor - computed: true, optional: true, required: false
  private _redisLfuLogFactor?: number; 
  public get redisLfuLogFactor() {
    return this.getNumberAttribute('redis_lfu_log_factor');
  }
  public set redisLfuLogFactor(value: number) {
    this._redisLfuLogFactor = value;
  }
  public resetRedisLfuLogFactor() {
    this._redisLfuLogFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisLfuLogFactorInput() {
    return this._redisLfuLogFactor;
  }

  // redis_maxmemory_policy - computed: true, optional: true, required: false
  private _redisMaxmemoryPolicy?: string; 
  public get redisMaxmemoryPolicy() {
    return this.getStringAttribute('redis_maxmemory_policy');
  }
  public set redisMaxmemoryPolicy(value: string) {
    this._redisMaxmemoryPolicy = value;
  }
  public resetRedisMaxmemoryPolicy() {
    this._redisMaxmemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisMaxmemoryPolicyInput() {
    return this._redisMaxmemoryPolicy;
  }

  // redis_notify_keyspace_events - computed: false, optional: true, required: false
  private _redisNotifyKeyspaceEvents?: string; 
  public get redisNotifyKeyspaceEvents() {
    return this.getStringAttribute('redis_notify_keyspace_events');
  }
  public set redisNotifyKeyspaceEvents(value: string) {
    this._redisNotifyKeyspaceEvents = value;
  }
  public resetRedisNotifyKeyspaceEvents() {
    this._redisNotifyKeyspaceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisNotifyKeyspaceEventsInput() {
    return this._redisNotifyKeyspaceEvents;
  }

  // redis_number_of_databases - computed: true, optional: true, required: false
  private _redisNumberOfDatabases?: number; 
  public get redisNumberOfDatabases() {
    return this.getNumberAttribute('redis_number_of_databases');
  }
  public set redisNumberOfDatabases(value: number) {
    this._redisNumberOfDatabases = value;
  }
  public resetRedisNumberOfDatabases() {
    this._redisNumberOfDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisNumberOfDatabasesInput() {
    return this._redisNumberOfDatabases;
  }

  // redis_persistence - computed: true, optional: true, required: false
  private _redisPersistence?: string; 
  public get redisPersistence() {
    return this.getStringAttribute('redis_persistence');
  }
  public set redisPersistence(value: string) {
    this._redisPersistence = value;
  }
  public resetRedisPersistence() {
    this._redisPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisPersistenceInput() {
    return this._redisPersistence;
  }

  // redis_pubsub_client_output_buffer_limit - computed: true, optional: true, required: false
  private _redisPubsubClientOutputBufferLimit?: number; 
  public get redisPubsubClientOutputBufferLimit() {
    return this.getNumberAttribute('redis_pubsub_client_output_buffer_limit');
  }
  public set redisPubsubClientOutputBufferLimit(value: number) {
    this._redisPubsubClientOutputBufferLimit = value;
  }
  public resetRedisPubsubClientOutputBufferLimit() {
    this._redisPubsubClientOutputBufferLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisPubsubClientOutputBufferLimitInput() {
    return this._redisPubsubClientOutputBufferLimit;
  }

  // redis_ssl - computed: false, optional: true, required: false
  private _redisSsl?: boolean | cdktf.IResolvable; 
  public get redisSsl() {
    return this.getBooleanAttribute('redis_ssl');
  }
  public set redisSsl(value: boolean | cdktf.IResolvable) {
    this._redisSsl = value;
  }
  public resetRedisSsl() {
    this._redisSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisSslInput() {
    return this._redisSsl;
  }

  // redis_timeout - computed: true, optional: true, required: false
  private _redisTimeout?: number; 
  public get redisTimeout() {
    return this.getNumberAttribute('redis_timeout');
  }
  public set redisTimeout(value: number) {
    this._redisTimeout = value;
  }
  public resetRedisTimeout() {
    this._redisTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisTimeoutInput() {
    return this._redisTimeout;
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new ManagedDatabaseRedisPropertiesMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: ManagedDatabaseRedisPropertiesMigration) {
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
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis upcloud_managed_database_redis}
*/
export class ManagedDatabaseRedis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_redis";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs/resources/managed_database_redis upcloud_managed_database_redis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabaseRedisConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabaseRedisConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_redis',
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
  private _components = new ManagedDatabaseRedisComponentsList(this, "components", false);
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
  private _nodeStates = new ManagedDatabaseRedisNodeStatesList(this, "node_states", false);
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
  private _properties = new ManagedDatabaseRedisPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ManagedDatabaseRedisProperties) {
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
      properties: managedDatabaseRedisPropertiesToTerraform(this._properties.internalValue),
    };
  }
}
