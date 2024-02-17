// https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerDynamicBackendMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the load balancer backend to which the member is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#backend LoadbalancerDynamicBackendMember#backend}
  */
  readonly backend: string;
  /**
  * Indicates if the member is enabled. Disabled members are excluded from load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#enabled LoadbalancerDynamicBackendMember#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#id LoadbalancerDynamicBackendMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional fallback IP address in case of failure on DNS resolving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#ip LoadbalancerDynamicBackendMember#ip}
  */
  readonly ip?: string;
  /**
  * Maximum number of sessions before queueing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#max_sessions LoadbalancerDynamicBackendMember#max_sessions}
  */
  readonly maxSessions: number;
  /**
  * The name of the member must be unique within the load balancer backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#name LoadbalancerDynamicBackendMember#name}
  */
  readonly name: string;
  /**
  * Server port. Port is optional and can be specified in DNS SRV record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#port LoadbalancerDynamicBackendMember#port}
  */
  readonly port?: number;
  /**
  * Used to adjust the server's weight relative to other servers. 
  * 				All servers will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load. 
  * 				A value of 0 means the server will not participate in load balancing but will still accept persistent connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#weight LoadbalancerDynamicBackendMember#weight}
  */
  readonly weight: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member upcloud_loadbalancer_dynamic_backend_member}
*/
export class LoadbalancerDynamicBackendMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer_dynamic_backend_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerDynamicBackendMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerDynamicBackendMember to import
  * @param importFromId The id of the existing LoadbalancerDynamicBackendMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerDynamicBackendMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_loadbalancer_dynamic_backend_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_dynamic_backend_member upcloud_loadbalancer_dynamic_backend_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerDynamicBackendMemberConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerDynamicBackendMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer_dynamic_backend_member',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '4.1.0',
        providerVersionConstraint: '~> 4.0'
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._ip = config.ip;
    this._maxSessions = config.maxSessions;
    this._name = config.name;
    this._port = config.port;
    this._weight = config.weight;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // max_sessions - computed: false, optional: false, required: true
  private _maxSessions?: number; 
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }
  public set maxSessions(value: number) {
    this._maxSessions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      max_sessions: cdktf.numberToTerraform(this._maxSessions),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      weight: cdktf.numberToTerraform(this._weight),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_sessions: {
        value: cdktf.numberToHclTerraform(this._maxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
