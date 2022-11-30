// https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster name. Needs to be unique within the account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Network ID for the cluster to run in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#network KubernetesCluster#network}
  */
  readonly network: string;
  /**
  * Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone: string;
  /**
  * node_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#node_group KubernetesCluster#node_group}
  */
  readonly nodeGroup: KubernetesClusterNodeGroup[] | cdktf.IResolvable;
}
export interface KubernetesClusterNodeGroupTaint {
  /**
  * Taint effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#effect KubernetesCluster#effect}
  */
  readonly effect: string;
  /**
  * Taint key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#key KubernetesCluster#key}
  */
  readonly key: string;
  /**
  * Taint value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#value KubernetesCluster#value}
  */
  readonly value: string;
}

export function kubernetesClusterNodeGroupTaintToTerraform(struct?: KubernetesClusterNodeGroupTaint | cdktf.IResolvable): any {
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

export class KubernetesClusterNodeGroupTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterNodeGroupTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterNodeGroupTaint | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterNodeGroupTaintList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterNodeGroupTaint[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterNodeGroupTaintOutputReference {
    return new KubernetesClusterNodeGroupTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterNodeGroup {
  /**
  * Amount of nodes to provision in the node group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#count KubernetesCluster#count}
  */
  readonly count?: number;
  /**
  * Additional arguments for kubelet for the nodes in this group. WARNING - those arguments will be passed directly to kubelet CLI on each worker node without any validation. Passing invalid arguments can break your whole cluster. Be extra careful when adding kubelet args.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#kubelet_args KubernetesCluster#kubelet_args}
  */
  readonly kubeletArgs?: { [key: string]: string };
  /**
  * Key-value pairs to classify the node group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the node group. Needs to be unique within a cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * The pricing plan used for the node group. Valid values available via `upcloud_kubernetes_plan` datasource field `description`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#plan KubernetesCluster#plan}
  */
  readonly plan?: string;
  /**
  * You can optionally select SSH keys to be added as authorized keys to the nodes in this node group. This allows you to connect to the nodes via SSH once they are running.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#ssh_keys KubernetesCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * taint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster#taint KubernetesCluster#taint}
  */
  readonly taint?: KubernetesClusterNodeGroupTaint[] | cdktf.IResolvable;
}

export function kubernetesClusterNodeGroupToTerraform(struct?: KubernetesClusterNodeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    kubelet_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeletArgs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    plan: cdktf.stringToTerraform(struct!.plan),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    taint: cdktf.listMapper(kubernetesClusterNodeGroupTaintToTerraform, true)(struct!.taint),
  }
}

export class KubernetesClusterNodeGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterNodeGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._kubeletArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletArgs = this._kubeletArgs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodeGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._kubeletArgs = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._plan = undefined;
      this._sshKeys = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._kubeletArgs = value.kubeletArgs;
      this._labels = value.labels;
      this._name = value.name;
      this._plan = value.plan;
      this._sshKeys = value.sshKeys;
      this._taint.internalValue = value.taint;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // kubelet_args - computed: false, optional: true, required: false
  private _kubeletArgs?: { [key: string]: string }; 
  public get kubeletArgs() {
    return this.getStringMapAttribute('kubelet_args');
  }
  public set kubeletArgs(value: { [key: string]: string }) {
    this._kubeletArgs = value;
  }
  public resetKubeletArgs() {
    this._kubeletArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletArgsInput() {
    return this._kubeletArgs;
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

  // ssh_keys - computed: false, optional: true, required: false
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

  // taint - computed: false, optional: true, required: false
  private _taint = new KubernetesClusterNodeGroupTaintList(this, "taint", true);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: KubernetesClusterNodeGroupTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }
}

export class KubernetesClusterNodeGroupList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterNodeGroup[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterNodeGroupOutputReference {
    return new KubernetesClusterNodeGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster upcloud_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_kubernetes_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/kubernetes_cluster upcloud_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.7.1',
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
    this._name = config.name;
    this._network = config.network;
    this._zone = config.zone;
    this._nodeGroup.internalValue = config.nodeGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_cidr - computed: true, optional: false, required: false
  public get networkCidr() {
    return this.getStringAttribute('network_cidr');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // node_group - computed: false, optional: false, required: true
  private _nodeGroup = new KubernetesClusterNodeGroupList(this, "node_group", true);
  public get nodeGroup() {
    return this._nodeGroup;
  }
  public putNodeGroup(value: KubernetesClusterNodeGroup[] | cdktf.IResolvable) {
    this._nodeGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      zone: cdktf.stringToTerraform(this._zone),
      node_group: cdktf.listMapper(kubernetesClusterNodeGroupToTerraform, true)(this._nodeGroup.internalValue),
    };
  }
}
