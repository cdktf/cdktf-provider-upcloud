/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The service configured status indicates the service's current intended status. Managed by the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#configured_status Loadbalancer#configured_status}
  */
  readonly configuredStatus?: string;
  /**
  * Floating IP addresses connected to the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#ip_addresses Loadbalancer#ip_addresses}
  */
  readonly ipAddresses?: LoadbalancerIpAddresses[] | cdktf.IResolvable;
  /**
  * User defined key-value pairs to classify the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#labels Loadbalancer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The day of the week on which maintenance will be performed. If not provided, we will randomly select a weekend day. Valid values `monday|tuesday|wednesday|thursday|friday|saturday|sunday`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#maintenance_dow Loadbalancer#maintenance_dow}
  */
  readonly maintenanceDow?: string;
  /**
  * The time at which the maintenance will begin in UTC. A 2-hour timeframe has been allocated for maintenance. During this period, the multi-node production plans will not experience any downtime, while the one-node plans will have a downtime of 1-2 minutes. If not provided, we will randomly select an off-peak time. Needs to be a valid time format in UTC HH:MM:SSZ, for example `20:01:01Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#maintenance_time Loadbalancer#maintenance_time}
  */
  readonly maintenanceTime?: string;
  /**
  * The name of the service. Must be unique within customer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
  /**
  * Private network UUID where traffic will be routed. Must reside in load balancer zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#network Loadbalancer#network}
  */
  readonly network?: string;
  /**
  * Plan which the service will have. You can list available load balancer plans with `upctl loadbalancer plans`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#plan Loadbalancer#plan}
  */
  readonly plan: string;
  /**
  * Zone in which the service will be hosted, e.g. `fi-hel1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#zone Loadbalancer#zone}
  */
  readonly zone: string;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#networks Loadbalancer#networks}
  */
  readonly networks?: LoadbalancerNetworks[] | cdktf.IResolvable;
}
export interface LoadbalancerIpAddresses {
  /**
  * Floating IP address to attach to the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#address Loadbalancer#address}
  */
  readonly address: string;
  /**
  * Name of the network where to attach the IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#network_name Loadbalancer#network_name}
  */
  readonly networkName: string;
}

export function loadbalancerIpAddressesToTerraform(struct?: LoadbalancerIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    network_name: cdktf.stringToTerraform(struct!.networkName),
  }
}


export function loadbalancerIpAddressesToHclTerraform(struct?: LoadbalancerIpAddresses | cdktf.IResolvable): any {
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
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._networkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._networkName = value.networkName;
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

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }
}

export class LoadbalancerIpAddressesList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerIpAddressesOutputReference {
    return new LoadbalancerIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerNodesNetworksIpAddresses {
}

export function loadbalancerNodesNetworksIpAddressesToTerraform(struct?: LoadbalancerNodesNetworksIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadbalancerNodesNetworksIpAddressesToHclTerraform(struct?: LoadbalancerNodesNetworksIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadbalancerNodesNetworksIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerNodesNetworksIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerNodesNetworksIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // listen - computed: true, optional: false, required: false
  public get listen() {
    return this.getBooleanAttribute('listen');
  }
}

export class LoadbalancerNodesNetworksIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): LoadbalancerNodesNetworksIpAddressesOutputReference {
    return new LoadbalancerNodesNetworksIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerNodesNetworks {
}

export function loadbalancerNodesNetworksToTerraform(struct?: LoadbalancerNodesNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadbalancerNodesNetworksToHclTerraform(struct?: LoadbalancerNodesNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadbalancerNodesNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerNodesNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerNodesNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addresses - computed: true, optional: false, required: false
  private _ipAddresses = new LoadbalancerNodesNetworksIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class LoadbalancerNodesNetworksList extends cdktf.ComplexList {

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
  public get(index: number): LoadbalancerNodesNetworksOutputReference {
    return new LoadbalancerNodesNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerNodes {
}

export function loadbalancerNodesToTerraform(struct?: LoadbalancerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadbalancerNodesToHclTerraform(struct?: LoadbalancerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadbalancerNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new LoadbalancerNodesNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // operational_state - computed: true, optional: false, required: false
  public get operationalState() {
    return this.getStringAttribute('operational_state');
  }
}

export class LoadbalancerNodesList extends cdktf.ComplexList {

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
  public get(index: number): LoadbalancerNodesOutputReference {
    return new LoadbalancerNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerNetworks {
  /**
  * Network family. Currently only `IPv4` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#family Loadbalancer#family}
  */
  readonly family: string;
  /**
  * The name of the network. Must be unique within the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
  /**
  * Private network UUID. Required for private networks and must reside in loadbalancer zone. For public network the field should be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#network Loadbalancer#network}
  */
  readonly network?: string;
  /**
  * The type of the network. Only one public network can be attached and at least one private network must be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#type Loadbalancer#type}
  */
  readonly type: string;
}

export function loadbalancerNetworksToTerraform(struct?: LoadbalancerNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function loadbalancerNetworksToHclTerraform(struct?: LoadbalancerNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class LoadbalancerNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._name = undefined;
      this._network = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._name = value.name;
      this._network = value.network;
      this._type = value.type;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network - computed: false, optional: true, required: false
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
}

export class LoadbalancerNetworksList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerNetworks[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerNetworksOutputReference {
    return new LoadbalancerNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer upcloud_loadbalancer}
*/
export class Loadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Loadbalancer to import
  * @param importFromId The id of the existing Loadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Loadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.25.0/docs/resources/loadbalancer upcloud_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.25.0',
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
    this._configuredStatus = config.configuredStatus;
    this._ipAddresses.internalValue = config.ipAddresses;
    this._labels = config.labels;
    this._maintenanceDow = config.maintenanceDow;
    this._maintenanceTime = config.maintenanceTime;
    this._name = config.name;
    this._network = config.network;
    this._plan = config.plan;
    this._zone = config.zone;
    this._networks.internalValue = config.networks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backends - computed: true, optional: false, required: false
  public get backends() {
    return this.getListAttribute('backends');
  }

  // configured_status - computed: true, optional: true, required: false
  private _configuredStatus?: string; 
  public get configuredStatus() {
    return this.getStringAttribute('configured_status');
  }
  public set configuredStatus(value: string) {
    this._configuredStatus = value;
  }
  public resetConfiguredStatus() {
    this._configuredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredStatusInput() {
    return this._configuredStatus;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // frontends - computed: true, optional: false, required: false
  public get frontends() {
    return this.getListAttribute('frontends');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses = new LoadbalancerIpAddressesList(this, "ip_addresses", true);
  public get ipAddresses() {
    return this._ipAddresses;
  }
  public putIpAddresses(value: LoadbalancerIpAddresses[] | cdktf.IResolvable) {
    this._ipAddresses.internalValue = value;
  }
  public resetIpAddresses() {
    this._ipAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses.internalValue;
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

  // maintenance_dow - computed: true, optional: true, required: false
  private _maintenanceDow?: string; 
  public get maintenanceDow() {
    return this.getStringAttribute('maintenance_dow');
  }
  public set maintenanceDow(value: string) {
    this._maintenanceDow = value;
  }
  public resetMaintenanceDow() {
    this._maintenanceDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDowInput() {
    return this._maintenanceDow;
  }

  // maintenance_time - computed: true, optional: true, required: false
  private _maintenanceTime?: string; 
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }
  public set maintenanceTime(value: string) {
    this._maintenanceTime = value;
  }
  public resetMaintenanceTime() {
    this._maintenanceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeInput() {
    return this._maintenanceTime;
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

  // nodes - computed: true, optional: false, required: false
  private _nodes = new LoadbalancerNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // operational_state - computed: true, optional: false, required: false
  public get operationalState() {
    return this.getStringAttribute('operational_state');
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

  // resolvers - computed: true, optional: false, required: false
  public get resolvers() {
    return this.getListAttribute('resolvers');
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

  // networks - computed: false, optional: true, required: false
  private _networks = new LoadbalancerNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: LoadbalancerNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configured_status: cdktf.stringToTerraform(this._configuredStatus),
      ip_addresses: cdktf.listMapper(loadbalancerIpAddressesToTerraform, false)(this._ipAddresses.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      maintenance_dow: cdktf.stringToTerraform(this._maintenanceDow),
      maintenance_time: cdktf.stringToTerraform(this._maintenanceTime),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      plan: cdktf.stringToTerraform(this._plan),
      zone: cdktf.stringToTerraform(this._zone),
      networks: cdktf.listMapper(loadbalancerNetworksToTerraform, true)(this._networks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configured_status: {
        value: cdktf.stringToHclTerraform(this._configuredStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(loadbalancerIpAddressesToHclTerraform, false)(this._ipAddresses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadbalancerIpAddressesList",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceTime),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(loadbalancerNetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerNetworksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
