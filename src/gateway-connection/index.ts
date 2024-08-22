/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the upcloud_gateway resource to which the connection belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#gateway GatewayConnection#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#id GatewayConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connection, should be unique within the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#name GatewayConnection#name}
  */
  readonly name: string;
  /**
  * The type of the connection; currently the only supported type is 'ipsec'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#type GatewayConnection#type}
  */
  readonly type?: string;
  /**
  * local_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#local_route GatewayConnection#local_route}
  */
  readonly localRoute?: GatewayConnectionLocalRoute[] | cdktf.IResolvable;
  /**
  * remote_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#remote_route GatewayConnection#remote_route}
  */
  readonly remoteRoute?: GatewayConnectionRemoteRoute[] | cdktf.IResolvable;
}
export interface GatewayConnectionLocalRoute {
  /**
  * Name of the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#name GatewayConnection#name}
  */
  readonly name: string;
  /**
  * Destination prefix of the route; needs to be a valid IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#static_network GatewayConnection#static_network}
  */
  readonly staticNetwork: string;
  /**
  * Type of route; currently the only supported type is 'static'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#type GatewayConnection#type}
  */
  readonly type?: string;
}

export function gatewayConnectionLocalRouteToTerraform(struct?: GatewayConnectionLocalRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    static_network: cdktf.stringToTerraform(struct!.staticNetwork),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayConnectionLocalRouteToHclTerraform(struct?: GatewayConnectionLocalRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_network: {
      value: cdktf.stringToHclTerraform(struct!.staticNetwork),
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

export class GatewayConnectionLocalRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayConnectionLocalRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._staticNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNetwork = this._staticNetwork;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayConnectionLocalRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._staticNetwork = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._staticNetwork = value.staticNetwork;
      this._type = value.type;
    }
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

  // static_network - computed: false, optional: false, required: true
  private _staticNetwork?: string; 
  public get staticNetwork() {
    return this.getStringAttribute('static_network');
  }
  public set staticNetwork(value: string) {
    this._staticNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNetworkInput() {
    return this._staticNetwork;
  }

  // type - computed: false, optional: true, required: false
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

export class GatewayConnectionLocalRouteList extends cdktf.ComplexList {
  public internalValue? : GatewayConnectionLocalRoute[] | cdktf.IResolvable

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
  public get(index: number): GatewayConnectionLocalRouteOutputReference {
    return new GatewayConnectionLocalRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayConnectionRemoteRoute {
  /**
  * Name of the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#name GatewayConnection#name}
  */
  readonly name: string;
  /**
  * Destination prefix of the route; needs to be a valid IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#static_network GatewayConnection#static_network}
  */
  readonly staticNetwork: string;
  /**
  * Type of route; currently the only supported type is 'static'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#type GatewayConnection#type}
  */
  readonly type?: string;
}

export function gatewayConnectionRemoteRouteToTerraform(struct?: GatewayConnectionRemoteRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    static_network: cdktf.stringToTerraform(struct!.staticNetwork),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayConnectionRemoteRouteToHclTerraform(struct?: GatewayConnectionRemoteRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_network: {
      value: cdktf.stringToHclTerraform(struct!.staticNetwork),
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

export class GatewayConnectionRemoteRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayConnectionRemoteRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._staticNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNetwork = this._staticNetwork;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayConnectionRemoteRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._staticNetwork = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._staticNetwork = value.staticNetwork;
      this._type = value.type;
    }
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

  // static_network - computed: false, optional: false, required: true
  private _staticNetwork?: string; 
  public get staticNetwork() {
    return this.getStringAttribute('static_network');
  }
  public set staticNetwork(value: string) {
    this._staticNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNetworkInput() {
    return this._staticNetwork;
  }

  // type - computed: false, optional: true, required: false
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

export class GatewayConnectionRemoteRouteList extends cdktf.ComplexList {
  public internalValue? : GatewayConnectionRemoteRoute[] | cdktf.IResolvable

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
  public get(index: number): GatewayConnectionRemoteRouteOutputReference {
    return new GatewayConnectionRemoteRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection upcloud_gateway_connection}
*/
export class GatewayConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_gateway_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayConnection to import
  * @param importFromId The id of the existing GatewayConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_gateway_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/gateway_connection upcloud_gateway_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_gateway_connection',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.10.1',
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
    this._gateway = config.gateway;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._localRoute.internalValue = config.localRoute;
    this._remoteRoute.internalValue = config.remoteRoute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // tunnels - computed: true, optional: false, required: false
  public get tunnels() {
    return this.getListAttribute('tunnels');
  }

  // type - computed: false, optional: true, required: false
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // local_route - computed: false, optional: true, required: false
  private _localRoute = new GatewayConnectionLocalRouteList(this, "local_route", true);
  public get localRoute() {
    return this._localRoute;
  }
  public putLocalRoute(value: GatewayConnectionLocalRoute[] | cdktf.IResolvable) {
    this._localRoute.internalValue = value;
  }
  public resetLocalRoute() {
    this._localRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRouteInput() {
    return this._localRoute.internalValue;
  }

  // remote_route - computed: false, optional: true, required: false
  private _remoteRoute = new GatewayConnectionRemoteRouteList(this, "remote_route", true);
  public get remoteRoute() {
    return this._remoteRoute;
  }
  public putRemoteRoute(value: GatewayConnectionRemoteRoute[] | cdktf.IResolvable) {
    this._remoteRoute.internalValue = value;
  }
  public resetRemoteRoute() {
    this._remoteRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRouteInput() {
    return this._remoteRoute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      local_route: cdktf.listMapper(gatewayConnectionLocalRouteToTerraform, true)(this._localRoute.internalValue),
      remote_route: cdktf.listMapper(gatewayConnectionRemoteRouteToTerraform, true)(this._remoteRoute.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_route: {
        value: cdktf.listMapperHcl(gatewayConnectionLocalRouteToHclTerraform, true)(this._localRoute.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayConnectionLocalRouteList",
      },
      remote_route: {
        value: cdktf.listMapperHcl(gatewayConnectionRemoteRouteToHclTerraform, true)(this._remoteRoute.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayConnectionRemoteRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
