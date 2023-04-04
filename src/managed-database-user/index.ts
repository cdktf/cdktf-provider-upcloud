// https://www.terraform.io/docs/providers/upcloud/r/managed_database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * MySQL only, authentication type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#authentication ManagedDatabaseUser#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#id ManagedDatabaseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for the database user. Defaults to a random value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#password ManagedDatabaseUser#password}
  */
  readonly password?: string;
  /**
  * Service's UUID for which this user belongs to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#service ManagedDatabaseUser#service}
  */
  readonly service: string;
  /**
  * Name of the database user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#username ManagedDatabaseUser#username}
  */
  readonly username: string;
  /**
  * pg_access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#pg_access_control ManagedDatabaseUser#pg_access_control}
  */
  readonly pgAccessControl?: ManagedDatabaseUserPgAccessControl;
  /**
  * redis_access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#redis_access_control ManagedDatabaseUser#redis_access_control}
  */
  readonly redisAccessControl?: ManagedDatabaseUserRedisAccessControl;
}
export interface ManagedDatabaseUserPgAccessControl {
  /**
  * Grant replication privilege
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#allow_replication ManagedDatabaseUser#allow_replication}
  */
  readonly allowReplication?: boolean | cdktf.IResolvable;
}

export function managedDatabaseUserPgAccessControlToTerraform(struct?: ManagedDatabaseUserPgAccessControlOutputReference | ManagedDatabaseUserPgAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_replication: cdktf.booleanToTerraform(struct!.allowReplication),
  }
}

export class ManagedDatabaseUserPgAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseUserPgAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReplication = this._allowReplication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseUserPgAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowReplication = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowReplication = value.allowReplication;
    }
  }

  // allow_replication - computed: false, optional: true, required: false
  private _allowReplication?: boolean | cdktf.IResolvable; 
  public get allowReplication() {
    return this.getBooleanAttribute('allow_replication');
  }
  public set allowReplication(value: boolean | cdktf.IResolvable) {
    this._allowReplication = value;
  }
  public resetAllowReplication() {
    this._allowReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplicationInput() {
    return this._allowReplication;
  }
}
export interface ManagedDatabaseUserRedisAccessControl {
  /**
  * Set access control to all commands in specified categories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#categories ManagedDatabaseUser#categories}
  */
  readonly categories?: string[];
  /**
  * Set access control to Pub/Sub channels.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#channels ManagedDatabaseUser#channels}
  */
  readonly channels?: string[];
  /**
  * Set access control to commands.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#commands ManagedDatabaseUser#commands}
  */
  readonly commands?: string[];
  /**
  * Set access control to keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user#keys ManagedDatabaseUser#keys}
  */
  readonly keys?: string[];
}

export function managedDatabaseUserRedisAccessControlToTerraform(struct?: ManagedDatabaseUserRedisAccessControlOutputReference | ManagedDatabaseUserRedisAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}

export class ManagedDatabaseUserRedisAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabaseUserRedisAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabaseUserRedisAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._channels = undefined;
      this._commands = undefined;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._channels = value.channels;
      this._commands = value.commands;
      this._keys = value.keys;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user upcloud_managed_database_user}
*/
export class ManagedDatabaseUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_user upcloud_managed_database_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_user',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.9.1',
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
    this._authentication = config.authentication;
    this._id = config.id;
    this._password = config.password;
    this._service = config.service;
    this._username = config.username;
    this._pgAccessControl.internalValue = config.pgAccessControl;
    this._redisAccessControl.internalValue = config.redisAccessControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // pg_access_control - computed: false, optional: true, required: false
  private _pgAccessControl = new ManagedDatabaseUserPgAccessControlOutputReference(this, "pg_access_control");
  public get pgAccessControl() {
    return this._pgAccessControl;
  }
  public putPgAccessControl(value: ManagedDatabaseUserPgAccessControl) {
    this._pgAccessControl.internalValue = value;
  }
  public resetPgAccessControl() {
    this._pgAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgAccessControlInput() {
    return this._pgAccessControl.internalValue;
  }

  // redis_access_control - computed: false, optional: true, required: false
  private _redisAccessControl = new ManagedDatabaseUserRedisAccessControlOutputReference(this, "redis_access_control");
  public get redisAccessControl() {
    return this._redisAccessControl;
  }
  public putRedisAccessControl(value: ManagedDatabaseUserRedisAccessControl) {
    this._redisAccessControl.internalValue = value;
  }
  public resetRedisAccessControl() {
    this._redisAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisAccessControlInput() {
    return this._redisAccessControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      service: cdktf.stringToTerraform(this._service),
      username: cdktf.stringToTerraform(this._username),
      pg_access_control: managedDatabaseUserPgAccessControlToTerraform(this._pgAccessControl.internalValue),
      redis_access_control: managedDatabaseUserRedisAccessControlToTerraform(this._redisAccessControl.internalValue),
    };
  }
}
