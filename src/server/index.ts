// https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The boot device order, `cdrom`|`disk`|`network` or comma separated combination of those values. Defaults to `disk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#boot_order Server#boot_order}
  */
  readonly bootOrder?: string;
  /**
  * The number of CPU for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#cpu Server#cpu}
  */
  readonly cpu?: number;
  /**
  * Are firewall rules active for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#firewall Server#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Use this to start the VM on a specific host. Refers to value from host -attribute. Only available for private cloud hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#host Server#host}
  */
  readonly host?: number;
  /**
  * A valid domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#hostname Server#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User defined key-value pairs to classify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#labels Server#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The size of memory for the server (in megabytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#mem Server#mem}
  */
  readonly mem?: number;
  /**
  * Is the metadata service active for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#metadata Server#metadata}
  */
  readonly metadata?: boolean | cdktf.IResolvable;
  /**
  * The model of the server's network interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#nic_model Server#nic_model}
  */
  readonly nicModel?: string;
  /**
  * The pricing plan used for the server. You can list available server plans with `upctl server plans`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#plan Server#plan}
  */
  readonly plan?: string;
  /**
  * The UUID of a server group to attach this server to. Note that the server can also be attached to a server group via the `members` property of `upcloud_server_group`. Only one of the these should be defined at a time. This value is only updated if it has been set to non-zero value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#server_group Server#server_group}
  */
  readonly serverGroup?: string;
  /**
  * The server related tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#tags Server#tags}
  */
  readonly tags?: string[];
  /**
  * A timezone identifier, e.g. `Europe/Helsinki`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#timezone Server#timezone}
  */
  readonly timezone?: string;
  /**
  * A short, informational description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#title Server#title}
  */
  readonly title?: string;
  /**
  * Defines URL for a server setup script, or the script body itself
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#user_data Server#user_data}
  */
  readonly userData?: string;
  /**
  * The model of the server's video interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#video_model Server#video_model}
  */
  readonly videoModel?: string;
  /**
  * The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#zone Server#zone}
  */
  readonly zone: string;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#login Server#login}
  */
  readonly login?: ServerLogin;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#network_interface Server#network_interface}
  */
  readonly networkInterface: ServerNetworkInterface[] | cdktf.IResolvable;
  /**
  * simple_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#simple_backup Server#simple_backup}
  */
  readonly simpleBackup?: ServerSimpleBackup;
  /**
  * storage_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#storage_devices Server#storage_devices}
  */
  readonly storageDevices?: ServerStorageDevices[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#template Server#template}
  */
  readonly template?: ServerTemplate;
}
export interface ServerLogin {
  /**
  * Indicates a password should be create to allow access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#create_password Server#create_password}
  */
  readonly createPassword?: boolean | cdktf.IResolvable;
  /**
  * A list of ssh keys to access the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#keys Server#keys}
  */
  readonly keys?: string[];
  /**
  * The delivery method for the server's root password (one of `none`, `email` or `sms`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#password_delivery Server#password_delivery}
  */
  readonly passwordDelivery?: string;
  /**
  * Username to be create to access the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#user Server#user}
  */
  readonly user?: string;
}

export function serverLoginToTerraform(struct?: ServerLoginOutputReference | ServerLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_password: cdktf.booleanToTerraform(struct!.createPassword),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    password_delivery: cdktf.stringToTerraform(struct!.passwordDelivery),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serverLoginToHclTerraform(struct?: ServerLoginOutputReference | ServerLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_password: {
      value: cdktf.booleanToHclTerraform(struct!.createPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password_delivery: {
      value: cdktf.stringToHclTerraform(struct!.passwordDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPassword = this._createPassword;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._passwordDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordDelivery = this._passwordDelivery;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createPassword = undefined;
      this._keys = undefined;
      this._passwordDelivery = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createPassword = value.createPassword;
      this._keys = value.keys;
      this._passwordDelivery = value.passwordDelivery;
      this._user = value.user;
    }
  }

  // create_password - computed: false, optional: true, required: false
  private _createPassword?: boolean | cdktf.IResolvable; 
  public get createPassword() {
    return this.getBooleanAttribute('create_password');
  }
  public set createPassword(value: boolean | cdktf.IResolvable) {
    this._createPassword = value;
  }
  public resetCreatePassword() {
    this._createPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPasswordInput() {
    return this._createPassword;
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

  // password_delivery - computed: false, optional: true, required: false
  private _passwordDelivery?: string; 
  public get passwordDelivery() {
    return this.getStringAttribute('password_delivery');
  }
  public set passwordDelivery(value: string) {
    this._passwordDelivery = value;
  }
  public resetPasswordDelivery() {
    this._passwordDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordDeliveryInput() {
    return this._passwordDelivery;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ServerNetworkInterfaceAdditionalIpAddress {
  /**
  * The assigned additional IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#ip_address Server#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The type of this additional IP address of this interface (one of `IPv4` or `IPv6`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#ip_address_family Server#ip_address_family}
  */
  readonly ipAddressFamily?: string;
}

export function serverNetworkInterfaceAdditionalIpAddressToTerraform(struct?: ServerNetworkInterfaceAdditionalIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_family: cdktf.stringToTerraform(struct!.ipAddressFamily),
  }
}


export function serverNetworkInterfaceAdditionalIpAddressToHclTerraform(struct?: ServerNetworkInterfaceAdditionalIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_family: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkInterfaceAdditionalIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerNetworkInterfaceAdditionalIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressFamily = this._ipAddressFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkInterfaceAdditionalIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipAddressFamily = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipAddressFamily = value.ipAddressFamily;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_family - computed: false, optional: true, required: false
  private _ipAddressFamily?: string; 
  public get ipAddressFamily() {
    return this.getStringAttribute('ip_address_family');
  }
  public set ipAddressFamily(value: string) {
    this._ipAddressFamily = value;
  }
  public resetIpAddressFamily() {
    this._ipAddressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressFamilyInput() {
    return this._ipAddressFamily;
  }

  // ip_address_floating - computed: true, optional: false, required: false
  public get ipAddressFloating() {
    return this.getBooleanAttribute('ip_address_floating');
  }
}

export class ServerNetworkInterfaceAdditionalIpAddressList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkInterfaceAdditionalIpAddress[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkInterfaceAdditionalIpAddressOutputReference {
    return new ServerNetworkInterfaceAdditionalIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkInterface {
  /**
  * `true` if this interface should be used for network booting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#bootable Server#bootable}
  */
  readonly bootable?: boolean | cdktf.IResolvable;
  /**
  * The assigned primary IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#ip_address Server#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The type of the primary IP address of this interface (one of `IPv4` or `IPv6`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#ip_address_family Server#ip_address_family}
  */
  readonly ipAddressFamily?: string;
  /**
  * The unique ID of a network to attach this network to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#network Server#network}
  */
  readonly network?: string;
  /**
  * `true` if source IP should be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#source_ip_filtering Server#source_ip_filtering}
  */
  readonly sourceIpFiltering?: boolean | cdktf.IResolvable;
  /**
  * Network interface type. For private network interfaces, a network must be specified with an existing network id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#type Server#type}
  */
  readonly type: string;
  /**
  * additional_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#additional_ip_address Server#additional_ip_address}
  */
  readonly additionalIpAddress?: ServerNetworkInterfaceAdditionalIpAddress[] | cdktf.IResolvable;
}

export function serverNetworkInterfaceToTerraform(struct?: ServerNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootable: cdktf.booleanToTerraform(struct!.bootable),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_family: cdktf.stringToTerraform(struct!.ipAddressFamily),
    network: cdktf.stringToTerraform(struct!.network),
    source_ip_filtering: cdktf.booleanToTerraform(struct!.sourceIpFiltering),
    type: cdktf.stringToTerraform(struct!.type),
    additional_ip_address: cdktf.listMapper(serverNetworkInterfaceAdditionalIpAddressToTerraform, true)(struct!.additionalIpAddress),
  }
}


export function serverNetworkInterfaceToHclTerraform(struct?: ServerNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootable: {
      value: cdktf.booleanToHclTerraform(struct!.bootable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_family: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_filtering: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIpFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_ip_address: {
      value: cdktf.listMapperHcl(serverNetworkInterfaceAdditionalIpAddressToHclTerraform, true)(struct!.additionalIpAddress),
      isBlock: true,
      type: "set",
      storageClassType: "ServerNetworkInterfaceAdditionalIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootable = this._bootable;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressFamily = this._ipAddressFamily;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._sourceIpFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpFiltering = this._sourceIpFiltering;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._additionalIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalIpAddress = this._additionalIpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootable = undefined;
      this._ipAddress = undefined;
      this._ipAddressFamily = undefined;
      this._network = undefined;
      this._sourceIpFiltering = undefined;
      this._type = undefined;
      this._additionalIpAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootable = value.bootable;
      this._ipAddress = value.ipAddress;
      this._ipAddressFamily = value.ipAddressFamily;
      this._network = value.network;
      this._sourceIpFiltering = value.sourceIpFiltering;
      this._type = value.type;
      this._additionalIpAddress.internalValue = value.additionalIpAddress;
    }
  }

  // bootable - computed: false, optional: true, required: false
  private _bootable?: boolean | cdktf.IResolvable; 
  public get bootable() {
    return this.getBooleanAttribute('bootable');
  }
  public set bootable(value: boolean | cdktf.IResolvable) {
    this._bootable = value;
  }
  public resetBootable() {
    this._bootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootableInput() {
    return this._bootable;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_family - computed: false, optional: true, required: false
  private _ipAddressFamily?: string; 
  public get ipAddressFamily() {
    return this.getStringAttribute('ip_address_family');
  }
  public set ipAddressFamily(value: string) {
    this._ipAddressFamily = value;
  }
  public resetIpAddressFamily() {
    this._ipAddressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressFamilyInput() {
    return this._ipAddressFamily;
  }

  // ip_address_floating - computed: true, optional: false, required: false
  public get ipAddressFloating() {
    return this.getBooleanAttribute('ip_address_floating');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // source_ip_filtering - computed: false, optional: true, required: false
  private _sourceIpFiltering?: boolean | cdktf.IResolvable; 
  public get sourceIpFiltering() {
    return this.getBooleanAttribute('source_ip_filtering');
  }
  public set sourceIpFiltering(value: boolean | cdktf.IResolvable) {
    this._sourceIpFiltering = value;
  }
  public resetSourceIpFiltering() {
    this._sourceIpFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpFilteringInput() {
    return this._sourceIpFiltering;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // additional_ip_address - computed: false, optional: true, required: false
  private _additionalIpAddress = new ServerNetworkInterfaceAdditionalIpAddressList(this, "additional_ip_address", true);
  public get additionalIpAddress() {
    return this._additionalIpAddress;
  }
  public putAdditionalIpAddress(value: ServerNetworkInterfaceAdditionalIpAddress[] | cdktf.IResolvable) {
    this._additionalIpAddress.internalValue = value;
  }
  public resetAdditionalIpAddress() {
    this._additionalIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalIpAddressInput() {
    return this._additionalIpAddress.internalValue;
  }
}

export class ServerNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkInterfaceOutputReference {
    return new ServerNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerSimpleBackup {
  /**
  * Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#plan Server#plan}
  */
  readonly plan: string;
  /**
  * Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#time Server#time}
  */
  readonly time: string;
}

export function serverSimpleBackupToTerraform(struct?: ServerSimpleBackupOutputReference | ServerSimpleBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plan: cdktf.stringToTerraform(struct!.plan),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function serverSimpleBackupToHclTerraform(struct?: ServerSimpleBackupOutputReference | ServerSimpleBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSimpleBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerSimpleBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSimpleBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plan = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plan = value.plan;
      this._time = value.time;
    }
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

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface ServerStorageDevices {
  /**
  * The device address the storage will be attached to (`scsi`|`virtio`|`ide`). Leave `address_position` field empty to auto-select next available address from that bus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#address Server#address}
  */
  readonly address?: string;
  /**
  * The device position in the given bus (defined via field `address`). Valid values for address `virtio` are `0-15` (`0`, for example). Valid values for `scsi` or `ide` are `0-1:0-1` (`0:0`, for example). Leave empty to auto-select next available address in the given bus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#address_position Server#address_position}
  */
  readonly addressPosition?: string;
  /**
  * A valid storage UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#storage Server#storage}
  */
  readonly storage: string;
  /**
  * The device type the storage will be attached as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#type Server#type}
  */
  readonly type?: string;
}

export function serverStorageDevicesToTerraform(struct?: ServerStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_position: cdktf.stringToTerraform(struct!.addressPosition),
    storage: cdktf.stringToTerraform(struct!.storage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serverStorageDevicesToHclTerraform(struct?: ServerStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_position: {
      value: cdktf.stringToHclTerraform(struct!.addressPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerStorageDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerStorageDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPosition = this._addressPosition;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerStorageDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressPosition = undefined;
      this._storage = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressPosition = value.addressPosition;
      this._storage = value.storage;
      this._type = value.type;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_position - computed: true, optional: true, required: false
  private _addressPosition?: string; 
  public get addressPosition() {
    return this.getStringAttribute('address_position');
  }
  public set addressPosition(value: string) {
    this._addressPosition = value;
  }
  public resetAddressPosition() {
    this._addressPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPositionInput() {
    return this._addressPosition;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ServerStorageDevicesList extends cdktf.ComplexList {
  public internalValue? : ServerStorageDevices[] | cdktf.IResolvable

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
  public get(index: number): ServerStorageDevicesOutputReference {
    return new ServerStorageDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerTemplateBackupRule {
  /**
  * The weekday when the backup is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#interval Server#interval}
  */
  readonly interval: string;
  /**
  * The number of days before a backup is automatically deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#retention Server#retention}
  */
  readonly retention: number;
  /**
  * The time of day when the backup is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#time Server#time}
  */
  readonly time: string;
}

export function serverTemplateBackupRuleToTerraform(struct?: ServerTemplateBackupRuleOutputReference | ServerTemplateBackupRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retention: cdktf.numberToTerraform(struct!.retention),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function serverTemplateBackupRuleToHclTerraform(struct?: ServerTemplateBackupRuleOutputReference | ServerTemplateBackupRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerTemplateBackupRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerTemplateBackupRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTemplateBackupRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._retention = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._retention = value.retention;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface ServerTemplate {
  /**
  * The device address the storage will be attached to (`scsi`|`virtio`|`ide`). Leave `address_position` field empty to auto-select next available address from that bus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#address Server#address}
  */
  readonly address?: string;
  /**
  * The device position in the given bus (defined via field `address`). For example `0:0`, or `0`. Leave empty to auto-select next available address in the given bus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#address_position Server#address_position}
  */
  readonly addressPosition?: string;
  /**
  * If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#delete_autoresize_backup Server#delete_autoresize_backup}
  */
  readonly deleteAutoresizeBackup?: boolean | cdktf.IResolvable;
  /**
  * Sets if the storage is encrypted at rest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#encrypt Server#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes.
  * 							Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
  * 							to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
  * 							Taking and keeping backups incure costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#filesystem_autoresize Server#filesystem_autoresize}
  */
  readonly filesystemAutoresize?: boolean | cdktf.IResolvable;
  /**
  * The size of the storage in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#size Server#size}
  */
  readonly size?: number;
  /**
  * A valid storage UUID or template name. You can list available public templates with `upctl storage list --public --template` and available private templates with `upctl storage list --template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#storage Server#storage}
  */
  readonly storage: string;
  /**
  * A short, informative description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#title Server#title}
  */
  readonly title?: string;
  /**
  * backup_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#backup_rule Server#backup_rule}
  */
  readonly backupRule?: ServerTemplateBackupRule;
}

export function serverTemplateToTerraform(struct?: ServerTemplateOutputReference | ServerTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_position: cdktf.stringToTerraform(struct!.addressPosition),
    delete_autoresize_backup: cdktf.booleanToTerraform(struct!.deleteAutoresizeBackup),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    filesystem_autoresize: cdktf.booleanToTerraform(struct!.filesystemAutoresize),
    size: cdktf.numberToTerraform(struct!.size),
    storage: cdktf.stringToTerraform(struct!.storage),
    title: cdktf.stringToTerraform(struct!.title),
    backup_rule: serverTemplateBackupRuleToTerraform(struct!.backupRule),
  }
}


export function serverTemplateToHclTerraform(struct?: ServerTemplateOutputReference | ServerTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_position: {
      value: cdktf.stringToHclTerraform(struct!.addressPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_autoresize_backup: {
      value: cdktf.booleanToHclTerraform(struct!.deleteAutoresizeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filesystem_autoresize: {
      value: cdktf.booleanToHclTerraform(struct!.filesystemAutoresize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_rule: {
      value: serverTemplateBackupRuleToHclTerraform(struct!.backupRule),
      isBlock: true,
      type: "list",
      storageClassType: "ServerTemplateBackupRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPosition = this._addressPosition;
    }
    if (this._deleteAutoresizeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAutoresizeBackup = this._deleteAutoresizeBackup;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._filesystemAutoresize !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemAutoresize = this._filesystemAutoresize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._backupRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRule = this._backupRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._addressPosition = undefined;
      this._deleteAutoresizeBackup = undefined;
      this._encrypt = undefined;
      this._filesystemAutoresize = undefined;
      this._size = undefined;
      this._storage = undefined;
      this._title = undefined;
      this._backupRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._addressPosition = value.addressPosition;
      this._deleteAutoresizeBackup = value.deleteAutoresizeBackup;
      this._encrypt = value.encrypt;
      this._filesystemAutoresize = value.filesystemAutoresize;
      this._size = value.size;
      this._storage = value.storage;
      this._title = value.title;
      this._backupRule.internalValue = value.backupRule;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_position - computed: true, optional: true, required: false
  private _addressPosition?: string; 
  public get addressPosition() {
    return this.getStringAttribute('address_position');
  }
  public set addressPosition(value: string) {
    this._addressPosition = value;
  }
  public resetAddressPosition() {
    this._addressPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPositionInput() {
    return this._addressPosition;
  }

  // delete_autoresize_backup - computed: false, optional: true, required: false
  private _deleteAutoresizeBackup?: boolean | cdktf.IResolvable; 
  public get deleteAutoresizeBackup() {
    return this.getBooleanAttribute('delete_autoresize_backup');
  }
  public set deleteAutoresizeBackup(value: boolean | cdktf.IResolvable) {
    this._deleteAutoresizeBackup = value;
  }
  public resetDeleteAutoresizeBackup() {
    this._deleteAutoresizeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutoresizeBackupInput() {
    return this._deleteAutoresizeBackup;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // filesystem_autoresize - computed: false, optional: true, required: false
  private _filesystemAutoresize?: boolean | cdktf.IResolvable; 
  public get filesystemAutoresize() {
    return this.getBooleanAttribute('filesystem_autoresize');
  }
  public set filesystemAutoresize(value: boolean | cdktf.IResolvable) {
    this._filesystemAutoresize = value;
  }
  public resetFilesystemAutoresize() {
    this._filesystemAutoresize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemAutoresizeInput() {
    return this._filesystemAutoresize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // title - computed: true, optional: true, required: false
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

  // backup_rule - computed: false, optional: true, required: false
  private _backupRule = new ServerTemplateBackupRuleOutputReference(this, "backup_rule");
  public get backupRule() {
    return this._backupRule;
  }
  public putBackupRule(value: ServerTemplateBackupRule) {
    this._backupRule.internalValue = value;
  }
  public resetBackupRule() {
    this._backupRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRuleInput() {
    return this._backupRule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server upcloud_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.0/docs/resources/server upcloud_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_server',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.10.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootOrder = config.bootOrder;
    this._cpu = config.cpu;
    this._firewall = config.firewall;
    this._host = config.host;
    this._hostname = config.hostname;
    this._id = config.id;
    this._labels = config.labels;
    this._mem = config.mem;
    this._metadata = config.metadata;
    this._nicModel = config.nicModel;
    this._plan = config.plan;
    this._serverGroup = config.serverGroup;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._title = config.title;
    this._userData = config.userData;
    this._videoModel = config.videoModel;
    this._zone = config.zone;
    this._login.internalValue = config.login;
    this._networkInterface.internalValue = config.networkInterface;
    this._simpleBackup.internalValue = config.simpleBackup;
    this._storageDevices.internalValue = config.storageDevices;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: string; 
  public get bootOrder() {
    return this.getStringAttribute('boot_order');
  }
  public set bootOrder(value: string) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: boolean | cdktf.IResolvable; 
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }
  public set firewall(value: boolean | cdktf.IResolvable) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
  }

  // host - computed: false, optional: true, required: false
  private _host?: number; 
  public get host() {
    return this.getNumberAttribute('host');
  }
  public set host(value: number) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mem - computed: true, optional: true, required: false
  private _mem?: number; 
  public get mem() {
    return this.getNumberAttribute('mem');
  }
  public set mem(value: number) {
    this._mem = value;
  }
  public resetMem() {
    this._mem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memInput() {
    return this._mem;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: boolean | cdktf.IResolvable; 
  public get metadata() {
    return this.getBooleanAttribute('metadata');
  }
  public set metadata(value: boolean | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // nic_model - computed: true, optional: true, required: false
  private _nicModel?: string; 
  public get nicModel() {
    return this.getStringAttribute('nic_model');
  }
  public set nicModel(value: string) {
    this._nicModel = value;
  }
  public resetNicModel() {
    this._nicModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicModelInput() {
    return this._nicModel;
  }

  // plan - computed: true, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // server_group - computed: false, optional: true, required: false
  private _serverGroup?: string; 
  public get serverGroup() {
    return this.getStringAttribute('server_group');
  }
  public set serverGroup(value: string) {
    this._serverGroup = value;
  }
  public resetServerGroup() {
    this._serverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupInput() {
    return this._serverGroup;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // video_model - computed: true, optional: true, required: false
  private _videoModel?: string; 
  public get videoModel() {
    return this.getStringAttribute('video_model');
  }
  public set videoModel(value: string) {
    this._videoModel = value;
  }
  public resetVideoModel() {
    this._videoModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoModelInput() {
    return this._videoModel;
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

  // login - computed: false, optional: true, required: false
  private _login = new ServerLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: ServerLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new ServerNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ServerNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // simple_backup - computed: false, optional: true, required: false
  private _simpleBackup = new ServerSimpleBackupOutputReference(this, "simple_backup");
  public get simpleBackup() {
    return this._simpleBackup;
  }
  public putSimpleBackup(value: ServerSimpleBackup) {
    this._simpleBackup.internalValue = value;
  }
  public resetSimpleBackup() {
    this._simpleBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleBackupInput() {
    return this._simpleBackup.internalValue;
  }

  // storage_devices - computed: false, optional: true, required: false
  private _storageDevices = new ServerStorageDevicesList(this, "storage_devices", true);
  public get storageDevices() {
    return this._storageDevices;
  }
  public putStorageDevices(value: ServerStorageDevices[] | cdktf.IResolvable) {
    this._storageDevices.internalValue = value;
  }
  public resetStorageDevices() {
    this._storageDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDevicesInput() {
    return this._storageDevices.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ServerTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ServerTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_order: cdktf.stringToTerraform(this._bootOrder),
      cpu: cdktf.numberToTerraform(this._cpu),
      firewall: cdktf.booleanToTerraform(this._firewall),
      host: cdktf.numberToTerraform(this._host),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mem: cdktf.numberToTerraform(this._mem),
      metadata: cdktf.booleanToTerraform(this._metadata),
      nic_model: cdktf.stringToTerraform(this._nicModel),
      plan: cdktf.stringToTerraform(this._plan),
      server_group: cdktf.stringToTerraform(this._serverGroup),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      title: cdktf.stringToTerraform(this._title),
      user_data: cdktf.stringToTerraform(this._userData),
      video_model: cdktf.stringToTerraform(this._videoModel),
      zone: cdktf.stringToTerraform(this._zone),
      login: serverLoginToTerraform(this._login.internalValue),
      network_interface: cdktf.listMapper(serverNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      simple_backup: serverSimpleBackupToTerraform(this._simpleBackup.internalValue),
      storage_devices: cdktf.listMapper(serverStorageDevicesToTerraform, true)(this._storageDevices.internalValue),
      template: serverTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_order: {
        value: cdktf.stringToHclTerraform(this._bootOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firewall: {
        value: cdktf.booleanToHclTerraform(this._firewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.numberToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mem: {
        value: cdktf.numberToHclTerraform(this._mem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.booleanToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nic_model: {
        value: cdktf.stringToHclTerraform(this._nicModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group: {
        value: cdktf.stringToHclTerraform(this._serverGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_model: {
        value: cdktf.stringToHclTerraform(this._videoModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: serverLoginToHclTerraform(this._login.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerLoginList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(serverNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerNetworkInterfaceList",
      },
      simple_backup: {
        value: serverSimpleBackupToHclTerraform(this._simpleBackup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerSimpleBackupList",
      },
      storage_devices: {
        value: cdktf.listMapperHcl(serverStorageDevicesToHclTerraform, true)(this._storageDevices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerStorageDevicesList",
      },
      template: {
        value: serverTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
