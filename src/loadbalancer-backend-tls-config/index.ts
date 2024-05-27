// https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerBackendTlsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the load balancer backend to which the TLS config is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config#backend LoadbalancerBackendTlsConfig#backend}
  */
  readonly backend: string;
  /**
  * Reference to certificate bundle ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config#certificate_bundle LoadbalancerBackendTlsConfig#certificate_bundle}
  */
  readonly certificateBundle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config#id LoadbalancerBackendTlsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the TLS config must be unique within service backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config#name LoadbalancerBackendTlsConfig#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config upcloud_loadbalancer_backend_tls_config}
*/
export class LoadbalancerBackendTlsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_backend_tls_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerBackendTlsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerBackendTlsConfig to import
  * @param importFromId The id of the existing LoadbalancerBackendTlsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerBackendTlsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer_backend_tls_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.4.0/docs/resources/loadbalancer_backend_tls_config upcloud_loadbalancer_backend_tls_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerBackendTlsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerBackendTlsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_backend_tls_config',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.4.0',
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
    this._backend = config.backend;
    this._certificateBundle = config.certificateBundle;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // certificate_bundle - computed: false, optional: false, required: true
  private _certificateBundle?: string; 
  public get certificateBundle() {
    return this.getStringAttribute('certificate_bundle');
  }
  public set certificateBundle(value: string) {
    this._certificateBundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBundleInput() {
    return this._certificateBundle;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      certificate_bundle: cdktf.stringToTerraform(this._certificateBundle),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_bundle: {
        value: cdktf.stringToHclTerraform(this._certificateBundle),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
