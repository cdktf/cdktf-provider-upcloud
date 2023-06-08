// https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster name. Needs to be unique within the account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Network ID for the cluster to run in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster#network KubernetesCluster#network}
  */
  readonly network: string;
  /**
  * The pricing plan used for the cluster. Default plan is `development`. You can list available plans with `upctl kubernetes plans`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster#plan KubernetesCluster#plan}
  */
  readonly plan?: string;
  /**
  * Enable private node groups. Private node groups requires a network that is routed through NAT gateway.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster#private_node_groups KubernetesCluster#private_node_groups}
  */
  readonly privateNodeGroups?: boolean | cdktf.IResolvable;
  /**
  * Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster upcloud_kubernetes_cluster}
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
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.11.0/docs/resources/kubernetes_cluster upcloud_kubernetes_cluster} Resource
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
        providerVersion: '2.11.0',
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
    this._plan = config.plan;
    this._privateNodeGroups = config.privateNodeGroups;
    this._zone = config.zone;
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

  // node_groups - computed: true, optional: false, required: false
  public get nodeGroups() {
    return this.getListAttribute('node_groups');
  }

  // plan - computed: false, optional: true, required: false
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

  // private_node_groups - computed: false, optional: true, required: false
  private _privateNodeGroups?: boolean | cdktf.IResolvable; 
  public get privateNodeGroups() {
    return this.getBooleanAttribute('private_node_groups');
  }
  public set privateNodeGroups(value: boolean | cdktf.IResolvable) {
    this._privateNodeGroups = value;
  }
  public resetPrivateNodeGroups() {
    this._privateNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNodeGroupsInput() {
    return this._privateNodeGroups;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      plan: cdktf.stringToTerraform(this._plan),
      private_node_groups: cdktf.booleanToTerraform(this._privateNodeGroups),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
