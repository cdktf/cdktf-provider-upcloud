/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * User defined key-value pairs to classify the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#labels Network#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#name Network#name}
  */
  readonly name: string;
  /**
  * UUID of a router to attach to this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#router Network#router}
  */
  readonly router?: string;
  /**
  * The zone the network is in, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#zone Network#zone}
  */
  readonly zone: string;
  /**
  * ip_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#ip_network Network#ip_network}
  */
  readonly ipNetwork?: NetworkIpNetwork[] | cdktf.IResolvable;
}
export interface NetworkIpNetwork {
  /**
  * The CIDR range of the subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#address Network#address}
  */
  readonly address: string;
  /**
  * Is DHCP enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#dhcp Network#dhcp}
  */
  readonly dhcp: boolean | cdktf.IResolvable;
  /**
  * Is the gateway the DHCP default route?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#dhcp_default_route Network#dhcp_default_route}
  */
  readonly dhcpDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * The DNS servers given by DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#dhcp_dns Network#dhcp_dns}
  */
  readonly dhcpDns?: string[];
  /**
  * The additional DHCP classless static routes given by DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#dhcp_routes Network#dhcp_routes}
  */
  readonly dhcpRoutes?: string[];
  /**
  * IP address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#family Network#family}
  */
  readonly family: string;
  /**
  * Gateway address given by DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#gateway Network#gateway}
  */
  readonly gateway?: string;
}

export function networkIpNetworkToTerraform(struct?: NetworkIpNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    dhcp_default_route: cdktf.booleanToTerraform(struct!.dhcpDefaultRoute),
    dhcp_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpDns),
    dhcp_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpRoutes),
    family: cdktf.stringToTerraform(struct!.family),
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}


export function networkIpNetworkToHclTerraform(struct?: NetworkIpNetwork | cdktf.IResolvable): any {
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
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpDns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dhcp_routes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpRoutes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIpNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dhcpDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpDefaultRoute = this._dhcpDefaultRoute;
    }
    if (this._dhcpDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpDns = this._dhcpDns;
    }
    if (this._dhcpRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRoutes = this._dhcpRoutes;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dhcp = undefined;
      this._dhcpDefaultRoute = undefined;
      this._dhcpDns = undefined;
      this._dhcpRoutes = undefined;
      this._family = undefined;
      this._gateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dhcp = value.dhcp;
      this._dhcpDefaultRoute = value.dhcpDefaultRoute;
      this._dhcpDns = value.dhcpDns;
      this._dhcpRoutes = value.dhcpRoutes;
      this._family = value.family;
      this._gateway = value.gateway;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dhcp - computed: false, optional: false, required: true
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dhcp_default_route - computed: true, optional: true, required: false
  private _dhcpDefaultRoute?: boolean | cdktf.IResolvable; 
  public get dhcpDefaultRoute() {
    return this.getBooleanAttribute('dhcp_default_route');
  }
  public set dhcpDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._dhcpDefaultRoute = value;
  }
  public resetDhcpDefaultRoute() {
    this._dhcpDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDefaultRouteInput() {
    return this._dhcpDefaultRoute;
  }

  // dhcp_dns - computed: true, optional: true, required: false
  private _dhcpDns?: string[]; 
  public get dhcpDns() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_dns'));
  }
  public set dhcpDns(value: string[]) {
    this._dhcpDns = value;
  }
  public resetDhcpDns() {
    this._dhcpDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDnsInput() {
    return this._dhcpDns;
  }

  // dhcp_routes - computed: true, optional: true, required: false
  private _dhcpRoutes?: string[]; 
  public get dhcpRoutes() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_routes'));
  }
  public set dhcpRoutes(value: string[]) {
    this._dhcpRoutes = value;
  }
  public resetDhcpRoutes() {
    this._dhcpRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRoutesInput() {
    return this._dhcpRoutes;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}

export class NetworkIpNetworkList extends cdktf.ComplexList {
  public internalValue? : NetworkIpNetwork[] | cdktf.IResolvable

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
  public get(index: number): NetworkIpNetworkOutputReference {
    return new NetworkIpNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network upcloud_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.18.0/docs/resources/network upcloud_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_network',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.18.0',
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
    this._labels = config.labels;
    this._name = config.name;
    this._router = config.router;
    this._zone = config.zone;
    this._ipNetwork.internalValue = config.ipNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
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

  // router - computed: false, optional: true, required: false
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
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

  // ip_network - computed: false, optional: true, required: false
  private _ipNetwork = new NetworkIpNetworkList(this, "ip_network", false);
  public get ipNetwork() {
    return this._ipNetwork;
  }
  public putIpNetwork(value: NetworkIpNetwork[] | cdktf.IResolvable) {
    this._ipNetwork.internalValue = value;
  }
  public resetIpNetwork() {
    this._ipNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkInput() {
    return this._ipNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      router: cdktf.stringToTerraform(this._router),
      zone: cdktf.stringToTerraform(this._zone),
      ip_network: cdktf.listMapper(networkIpNetworkToTerraform, true)(this._ipNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router: {
        value: cdktf.stringToHclTerraform(this._router),
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
      ip_network: {
        value: cdktf.listMapperHcl(networkIpNetworkToHclTerraform, true)(this._ipNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkIpNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
