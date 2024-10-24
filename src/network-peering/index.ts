/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configured status of the network peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#configured_status NetworkPeering#configured_status}
  */
  readonly configuredStatus?: string;
  /**
  * User defined key-value pairs to classify the network peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#labels NetworkPeering#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the network peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#name NetworkPeering#name}
  */
  readonly name: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#network NetworkPeering#network}
  */
  readonly network?: NetworkPeeringNetwork[] | cdktf.IResolvable;
  /**
  * peer_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#peer_network NetworkPeering#peer_network}
  */
  readonly peerNetwork?: NetworkPeeringPeerNetwork[] | cdktf.IResolvable;
}
export interface NetworkPeeringNetwork {
  /**
  * The UUID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#uuid NetworkPeering#uuid}
  */
  readonly uuid: string;
}

export function networkPeeringNetworkToTerraform(struct?: NetworkPeeringNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkPeeringNetworkToHclTerraform(struct?: NetworkPeeringNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPeeringNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPeeringNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPeeringNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkPeeringNetworkList extends cdktf.ComplexList {
  public internalValue? : NetworkPeeringNetwork[] | cdktf.IResolvable

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
  public get(index: number): NetworkPeeringNetworkOutputReference {
    return new NetworkPeeringNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPeeringPeerNetwork {
  /**
  * The UUID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#uuid NetworkPeering#uuid}
  */
  readonly uuid: string;
}

export function networkPeeringPeerNetworkToTerraform(struct?: NetworkPeeringPeerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkPeeringPeerNetworkToHclTerraform(struct?: NetworkPeeringPeerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPeeringPeerNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPeeringPeerNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPeeringPeerNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkPeeringPeerNetworkList extends cdktf.ComplexList {
  public internalValue? : NetworkPeeringPeerNetwork[] | cdktf.IResolvable

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
  public get(index: number): NetworkPeeringPeerNetworkOutputReference {
    return new NetworkPeeringPeerNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering upcloud_network_peering}
*/
export class NetworkPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_network_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPeering to import
  * @param importFromId The id of the existing NetworkPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_network_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/network_peering upcloud_network_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.13.0',
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
    this._labels = config.labels;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._peerNetwork.internalValue = config.peerNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network - computed: false, optional: true, required: false
  private _network = new NetworkPeeringNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: NetworkPeeringNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // peer_network - computed: false, optional: true, required: false
  private _peerNetwork = new NetworkPeeringPeerNetworkList(this, "peer_network", false);
  public get peerNetwork() {
    return this._peerNetwork;
  }
  public putPeerNetwork(value: NetworkPeeringPeerNetwork[] | cdktf.IResolvable) {
    this._peerNetwork.internalValue = value;
  }
  public resetPeerNetwork() {
    this._peerNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkInput() {
    return this._peerNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configured_status: cdktf.stringToTerraform(this._configuredStatus),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.listMapper(networkPeeringNetworkToTerraform, true)(this._network.internalValue),
      peer_network: cdktf.listMapper(networkPeeringPeerNetworkToTerraform, true)(this._peerNetwork.internalValue),
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
      network: {
        value: cdktf.listMapperHcl(networkPeeringNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPeeringNetworkList",
      },
      peer_network: {
        value: cdktf.listMapperHcl(networkPeeringPeerNetworkToHclTerraform, true)(this._peerNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPeeringPeerNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
