// https://www.terraform.io/docs/providers/upcloud/r/loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The service configured status indicates the service's current intended status. Managed by the customer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#configured_status Loadbalancer#configured_status}
  */
  readonly configuredStatus?: string;
  /**
  * The name of the service must be unique within customer account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
  /**
  * Private network UUID where traffic will be routed. Must reside in load balancer zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#network Loadbalancer#network}
  */
  readonly network: string;
  /**
  * Plan which the service will have
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#plan Loadbalancer#plan}
  */
  readonly plan: string;
  /**
  * Zone in which the service will be hosted, e.g. `fi-hel1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#zone Loadbalancer#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer upcloud_loadbalancer}
*/
export class Loadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_loadbalancer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer upcloud_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_loadbalancer',
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
    this._configuredStatus = config.configuredStatus;
    this._name = config.name;
    this._network = config.network;
    this._plan = config.plan;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backends - computed: true, optional: false, required: false
  public get backends() {
    return this.getListAttribute('backends');
  }

  // configured_status - computed: false, optional: true, required: false
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

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // frontends - computed: true, optional: false, required: false
  public get frontends() {
    return this.getListAttribute('frontends');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // operational_state - computed: true, optional: false, required: false
  public get operationalState() {
    return this.getStringAttribute('operational_state');
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

  // resolvers - computed: true, optional: false, required: false
  public get resolvers() {
    return this.getListAttribute('resolvers');
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
      configured_status: cdktf.stringToTerraform(this._configuredStatus),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      plan: cdktf.stringToTerraform(this._plan),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
