/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, nodes in this group will be placed on separate compute hosts. Please note that anti-affinity policy is considered 'best effort' and enabling it does not fully guarantee that the nodes will end up on different hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#anti_affinity KubernetesNodeGroup#anti_affinity}
  */
  readonly antiAffinity?: boolean | cdktf.IResolvable;
  /**
  * UUID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#cluster KubernetesNodeGroup#cluster}
  */
  readonly cluster: string;
  /**
  * User defined key-value pairs to classify the node_group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#labels KubernetesNodeGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the node group. Needs to be unique within a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#name KubernetesNodeGroup#name}
  */
  readonly name: string;
  /**
  * Amount of nodes to provision in the node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#node_count KubernetesNodeGroup#node_count}
  */
  readonly nodeCount: number;
  /**
  * The server plan used for the node group. You can list available plans with `upctl server plans`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#plan KubernetesNodeGroup#plan}
  */
  readonly plan: string;
  /**
  * You can optionally select SSH keys to be added as authorized keys to the nodes in this node group. This allows you to connect to the nodes via SSH once they are running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#ssh_keys KubernetesNodeGroup#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * The storage encryption strategy to use for the nodes in this group. If not set, the cluster's storage encryption strategy will be used, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#storage_encryption KubernetesNodeGroup#storage_encryption}
  */
  readonly storageEncryption?: string;
  /**
  * If set to false, nodes in this group will not have access to utility network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#utility_network_access KubernetesNodeGroup#utility_network_access}
  */
  readonly utilityNetworkAccess?: boolean | cdktf.IResolvable;
  /**
  * custom_plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#custom_plan KubernetesNodeGroup#custom_plan}
  */
  readonly customPlan?: KubernetesNodeGroupCustomPlan[] | cdktf.IResolvable;
  /**
  * kubelet_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#kubelet_args KubernetesNodeGroup#kubelet_args}
  */
  readonly kubeletArgs?: KubernetesNodeGroupKubeletArgs[] | cdktf.IResolvable;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#taint KubernetesNodeGroup#taint}
  */
  readonly taint?: KubernetesNodeGroupTaint[] | cdktf.IResolvable;
}
export interface KubernetesNodeGroupCustomPlan {
  /**
  * The number of CPU cores dedicated to individual node group nodes when using custom plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#cores KubernetesNodeGroup#cores}
  */
  readonly cores: number;
  /**
  * The amount of memory in megabytes to assign to individual node group node when using custom plan. Value needs to be divisible by 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#memory KubernetesNodeGroup#memory}
  */
  readonly memory: number;
  /**
  * The size of the storage device in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}
  */
  readonly storageSize: number;
  /**
  * The storage tier to use. Defaults to maxiops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}
  */
  readonly storageTier?: string;
}

export function kubernetesNodeGroupCustomPlanToTerraform(struct?: KubernetesNodeGroupCustomPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores: cdktf.numberToTerraform(struct!.cores),
    memory: cdktf.numberToTerraform(struct!.memory),
    storage_size: cdktf.numberToTerraform(struct!.storageSize),
    storage_tier: cdktf.stringToTerraform(struct!.storageTier),
  }
}


export function kubernetesNodeGroupCustomPlanToHclTerraform(struct?: KubernetesNodeGroupCustomPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_size: {
      value: cdktf.numberToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_tier: {
      value: cdktf.stringToHclTerraform(struct!.storageTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodeGroupCustomPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodeGroupCustomPlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    if (this._storageTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTier = this._storageTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupCustomPlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cores = undefined;
      this._memory = undefined;
      this._storageSize = undefined;
      this._storageTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cores = value.cores;
      this._memory = value.memory;
      this._storageSize = value.storageSize;
      this._storageTier = value.storageTier;
    }
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // storage_size - computed: false, optional: false, required: true
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // storage_tier - computed: true, optional: true, required: false
  private _storageTier?: string; 
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }
  public set storageTier(value: string) {
    this._storageTier = value;
  }
  public resetStorageTier() {
    this._storageTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTierInput() {
    return this._storageTier;
  }
}

export class KubernetesNodeGroupCustomPlanList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodeGroupCustomPlan[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodeGroupCustomPlanOutputReference {
    return new KubernetesNodeGroupCustomPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodeGroupKubeletArgs {
  /**
  * Kubelet argument key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}
  */
  readonly key: string;
  /**
  * Kubelet argument value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}
  */
  readonly value: string;
}

export function kubernetesNodeGroupKubeletArgsToTerraform(struct?: KubernetesNodeGroupKubeletArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNodeGroupKubeletArgsToHclTerraform(struct?: KubernetesNodeGroupKubeletArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodeGroupKubeletArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodeGroupKubeletArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupKubeletArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KubernetesNodeGroupKubeletArgsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodeGroupKubeletArgs[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodeGroupKubeletArgsOutputReference {
    return new KubernetesNodeGroupKubeletArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodeGroupTaint {
  /**
  * Taint effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#effect KubernetesNodeGroup#effect}
  */
  readonly effect: string;
  /**
  * Taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}
  */
  readonly key: string;
  /**
  * Taint value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}
  */
  readonly value: string;
}

export function kubernetesNodeGroupTaintToTerraform(struct?: KubernetesNodeGroupTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNodeGroupTaintToHclTerraform(struct?: KubernetesNodeGroupTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodeGroupTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodeGroupTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodeGroupTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KubernetesNodeGroupTaintList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodeGroupTaint[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodeGroupTaintOutputReference {
    return new KubernetesNodeGroupTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group upcloud_kubernetes_node_group}
*/
export class KubernetesNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_kubernetes_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNodeGroup to import
  * @param importFromId The id of the existing KubernetesNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_kubernetes_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/kubernetes_node_group upcloud_kubernetes_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_kubernetes_node_group',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.23.1',
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
    this._antiAffinity = config.antiAffinity;
    this._cluster = config.cluster;
    this._labels = config.labels;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._plan = config.plan;
    this._sshKeys = config.sshKeys;
    this._storageEncryption = config.storageEncryption;
    this._utilityNetworkAccess = config.utilityNetworkAccess;
    this._customPlan.internalValue = config.customPlan;
    this._kubeletArgs.internalValue = config.kubeletArgs;
    this._taint.internalValue = config.taint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_affinity - computed: true, optional: true, required: false
  private _antiAffinity?: boolean | cdktf.IResolvable; 
  public get antiAffinity() {
    return this.getBooleanAttribute('anti_affinity');
  }
  public set antiAffinity(value: boolean | cdktf.IResolvable) {
    this._antiAffinity = value;
  }
  public resetAntiAffinity() {
    this._antiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityInput() {
    return this._antiAffinity;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
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

  // ssh_keys - computed: true, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // storage_encryption - computed: true, optional: true, required: false
  private _storageEncryption?: string; 
  public get storageEncryption() {
    return this.getStringAttribute('storage_encryption');
  }
  public set storageEncryption(value: string) {
    this._storageEncryption = value;
  }
  public resetStorageEncryption() {
    this._storageEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptionInput() {
    return this._storageEncryption;
  }

  // utility_network_access - computed: true, optional: true, required: false
  private _utilityNetworkAccess?: boolean | cdktf.IResolvable; 
  public get utilityNetworkAccess() {
    return this.getBooleanAttribute('utility_network_access');
  }
  public set utilityNetworkAccess(value: boolean | cdktf.IResolvable) {
    this._utilityNetworkAccess = value;
  }
  public resetUtilityNetworkAccess() {
    this._utilityNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilityNetworkAccessInput() {
    return this._utilityNetworkAccess;
  }

  // custom_plan - computed: false, optional: true, required: false
  private _customPlan = new KubernetesNodeGroupCustomPlanList(this, "custom_plan", false);
  public get customPlan() {
    return this._customPlan;
  }
  public putCustomPlan(value: KubernetesNodeGroupCustomPlan[] | cdktf.IResolvable) {
    this._customPlan.internalValue = value;
  }
  public resetCustomPlan() {
    this._customPlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPlanInput() {
    return this._customPlan.internalValue;
  }

  // kubelet_args - computed: false, optional: true, required: false
  private _kubeletArgs = new KubernetesNodeGroupKubeletArgsList(this, "kubelet_args", true);
  public get kubeletArgs() {
    return this._kubeletArgs;
  }
  public putKubeletArgs(value: KubernetesNodeGroupKubeletArgs[] | cdktf.IResolvable) {
    this._kubeletArgs.internalValue = value;
  }
  public resetKubeletArgs() {
    this._kubeletArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletArgsInput() {
    return this._kubeletArgs.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new KubernetesNodeGroupTaintList(this, "taint", true);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: KubernetesNodeGroupTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_affinity: cdktf.booleanToTerraform(this._antiAffinity),
      cluster: cdktf.stringToTerraform(this._cluster),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      plan: cdktf.stringToTerraform(this._plan),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      storage_encryption: cdktf.stringToTerraform(this._storageEncryption),
      utility_network_access: cdktf.booleanToTerraform(this._utilityNetworkAccess),
      custom_plan: cdktf.listMapper(kubernetesNodeGroupCustomPlanToTerraform, true)(this._customPlan.internalValue),
      kubelet_args: cdktf.listMapper(kubernetesNodeGroupKubeletArgsToTerraform, true)(this._kubeletArgs.internalValue),
      taint: cdktf.listMapper(kubernetesNodeGroupTaintToTerraform, true)(this._taint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_affinity: {
        value: cdktf.booleanToHclTerraform(this._antiAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_encryption: {
        value: cdktf.stringToHclTerraform(this._storageEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utility_network_access: {
        value: cdktf.booleanToHclTerraform(this._utilityNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_plan: {
        value: cdktf.listMapperHcl(kubernetesNodeGroupCustomPlanToHclTerraform, true)(this._customPlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNodeGroupCustomPlanList",
      },
      kubelet_args: {
        value: cdktf.listMapperHcl(kubernetesNodeGroupKubeletArgsToHclTerraform, true)(this._kubeletArgs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesNodeGroupKubeletArgsList",
      },
      taint: {
        value: cdktf.listMapperHcl(kubernetesNodeGroupTaintToHclTerraform, true)(this._taint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesNodeGroupTaintList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
