// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the load balancer to which the backend is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * The name of the backend must be unique within the load balancer service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#name LoadbalancerBackend#name}
  */
  readonly name: string;
  /**
  * Domain Name Resolver used with dynamic type members.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}
  */
  readonly resolverName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend upcloud_loadbalancer_backend}
*/
export class LoadbalancerBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_backend upcloud_loadbalancer_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerBackendConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_backend',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.4.2',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadbalancer = config.loadbalancer;
    this._name = config.name;
    this._resolverName = config.resolverName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // loadbalancer - computed: false, optional: false, required: true
  private _loadbalancer?: string; 
  public get loadbalancer() {
    return this.getStringAttribute('loadbalancer');
  }
  public set loadbalancer(value: string) {
    this._loadbalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerInput() {
    return this._loadbalancer;
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
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

  // resolver_name - computed: false, optional: true, required: false
  private _resolverName?: string; 
  public get resolverName() {
    return this.getStringAttribute('resolver_name');
  }
  public set resolverName(value: string) {
    this._resolverName = value;
  }
  public resetResolverName() {
    this._resolverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverNameInput() {
    return this._resolverName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      loadbalancer: cdktf.stringToTerraform(this._loadbalancer),
      name: cdktf.stringToTerraform(this._name),
      resolver_name: cdktf.stringToTerraform(this._resolverName),
    };
  }
}
