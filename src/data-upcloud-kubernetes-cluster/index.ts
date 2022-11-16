// https://www.terraform.io/docs/providers/upcloud/d/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/d/kubernetes_cluster#id DataUpcloudKubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/d/kubernetes_cluster upcloud_kubernetes_cluster}
*/
export class DataUpcloudKubernetesCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_kubernetes_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/d/kubernetes_cluster upcloud_kubernetes_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudKubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudKubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.7.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
