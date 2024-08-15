// https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP addresses or IP ranges in CIDR format which are allowed to access the cluster control plane. To allow access from any source, use `["0.0.0.0/0"]`. To deny access from all sources, use `[]`. Values set here do not restrict access to node groups or exposed Kubernetes services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#control_plane_ip_filter KubernetesCluster#control_plane_ip_filter}
  */
  readonly controlPlaneIpFilter: string[];
  /**
  * Key-value pairs to classify the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cluster name. Needs to be unique within the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Network ID for the cluster to run in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#network KubernetesCluster#network}
  */
  readonly network: string;
  /**
  * The pricing plan used for the cluster. Default plan is `development`. You can list available plans with `upctl kubernetes plans`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#plan KubernetesCluster#plan}
  */
  readonly plan?: string;
  /**
  * Enable private node groups. Private node groups requires a network that is routed through NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#private_node_groups KubernetesCluster#private_node_groups}
  */
  readonly privateNodeGroups?: boolean | cdktf.IResolvable;
  /**
  * Set default storage encryption strategy for all nodes in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#storage_encryption KubernetesCluster#storage_encryption}
  */
  readonly storageEncryption?: string;
  /**
  * Kubernetes version ID, e.g. `1.28`. You can list available version IDs with `upctl kubernetes versions`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#version KubernetesCluster#version}
  */
  readonly version?: string;
  /**
  * Zone in which the Kubernetes cluster will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster upcloud_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/kubernetes_cluster upcloud_kubernetes_cluster} Resource
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
        providerVersion: '5.9.1',
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
    this._controlPlaneIpFilter = config.controlPlaneIpFilter;
    this._labels = config.labels;
    this._name = config.name;
    this._network = config.network;
    this._plan = config.plan;
    this._privateNodeGroups = config.privateNodeGroups;
    this._storageEncryption = config.storageEncryption;
    this._version = config.version;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_plane_ip_filter - computed: false, optional: false, required: true
  private _controlPlaneIpFilter?: string[]; 
  public get controlPlaneIpFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('control_plane_ip_filter'));
  }
  public set controlPlaneIpFilter(value: string[]) {
    this._controlPlaneIpFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIpFilterInput() {
    return this._controlPlaneIpFilter;
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

  // private_node_groups - computed: true, optional: true, required: false
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

  // storage_encryption - computed: false, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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
      control_plane_ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlPlaneIpFilter),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      plan: cdktf.stringToTerraform(this._plan),
      private_node_groups: cdktf.booleanToTerraform(this._privateNodeGroups),
      storage_encryption: cdktf.stringToTerraform(this._storageEncryption),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_plane_ip_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlPlaneIpFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      private_node_groups: {
        value: cdktf.booleanToHclTerraform(this._privateNodeGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_encryption: {
        value: cdktf.stringToHclTerraform(this._storageEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
