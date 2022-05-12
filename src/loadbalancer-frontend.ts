// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerFrontendConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the default backend where traffic will be routed. Note, default backend can be overwritten in frontend rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}
  */
  readonly defaultBackendName: string;
  /**
  * ID of the load balancer to which the frontend is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}
  */
  readonly loadbalancer: string;
  /**
  * When load balancer operating in `tcp` mode it acts as a layer 4 proxy. In `http` mode it acts as a layer 7 proxy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#mode LoadbalancerFrontend#mode}
  */
  readonly mode: string;
  /**
  * The name of the frontend must be unique within the load balancer service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#name LoadbalancerFrontend#name}
  */
  readonly name: string;
  /**
  * Port to listen incoming requests
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend#port LoadbalancerFrontend#port}
  */
  readonly port: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend upcloud_loadbalancer_frontend}
*/
export class LoadbalancerFrontend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_frontend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer_frontend upcloud_loadbalancer_frontend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerFrontendConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerFrontendConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_frontend',
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
    this._defaultBackendName = config.defaultBackendName;
    this._loadbalancer = config.loadbalancer;
    this._mode = config.mode;
    this._name = config.name;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_backend_name - computed: false, optional: false, required: true
  private _defaultBackendName?: string; 
  public get defaultBackendName() {
    return this.getStringAttribute('default_backend_name');
  }
  public set defaultBackendName(value: string) {
    this._defaultBackendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendNameInput() {
    return this._defaultBackendName;
  }

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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getListAttribute('rules');
  }

  // tls_configs - computed: true, optional: false, required: false
  public get tlsConfigs() {
    return this.getListAttribute('tls_configs');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_backend_name: cdktf.stringToTerraform(this._defaultBackendName),
      loadbalancer: cdktf.stringToTerraform(this._loadbalancer),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
    };
  }
}
